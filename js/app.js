/* ============================================================
   APP.JS — Router · Auth · Navigation · Global handlers
   E-Barangay San Miguel Portal
   ============================================================ */

const App = (() => {
  let _user  = null;
  let _currentRoute = '';

  /* ── Route definitions ── */
  const routes = {
    '/login':             { page: ResidentPages.login,       public: true,   layout: 'guest'    },
    '/dashboard':         { page: ResidentPages.dashboard,    roles: ['resident'], layout: 'resident' },
    '/request':           { page: ResidentPages.request,      roles: ['resident'], layout: 'resident' },
    '/my-requests':       { page: ResidentPages.myRequests,   roles: ['resident'], layout: 'resident' },
    '/status':            { page: ResidentPages.status,       roles: ['resident'], layout: 'resident' },
    '/incidents/new':     { page: ResidentPages.incidentNew,  roles: ['resident'], layout: 'resident' },
    '/announcements':     { page: ResidentPages.announcements,public: true,   layout: 'resident-or-guest' },
    '/profile':           { page: ResidentPages.profile,      roles: ['resident'], layout: 'resident' },
    '/staff/queue':       { page: StaffPages.queue,           roles: ['staff','admin'], layout: 'staff' },
    '/staff/residents':   { page: StaffPages.residents,       roles: ['staff','admin'], layout: 'staff' },
    '/staff/incidents':   { page: StaffPages.incidents,       roles: ['staff','admin'], layout: 'staff' },
    '/staff/announcements': { page: StaffPages.announcements, roles: ['staff','admin'], layout: 'staff' },
    '/staff/reports':     { page: StaffPages.reports,         roles: ['staff','admin'], layout: 'staff' },
  };

  /* ── Public API ── */
  const pub = {
    get user() { return _user; },
    set user(v) { _user = v; },

    init() {
      DB.init();
      _user = DB.getSession();
      _setupGlobalHandlers();
      _setupOfflineDetection();
      window.addEventListener('hashchange', () => _doRoute());
      _doRoute();
    },

    navigate(path) {
      if (window.location.hash === '#' + path) {
        _doRoute(); // Force re-render even if same path
      } else {
        window.location.hash = path;
      }
    },

    login(user) {
      _user = user;
      DB.setSession(user);
      const dest = user.role === 'resident' ? '/dashboard' : '/staff/queue';
      this.navigate(dest);
    },

    logout() {
      _user = null;
      DB.clearSession();
      this.navigate('/login');
    },
  };

  /* ── Core router ── */
  function _doRoute() {
    const hash = window.location.hash.replace('#', '') || '/login';
    // Parse path and optional params
    const [pathRaw, queryStr] = hash.split('?');
    const params = {};
    if (queryStr) {
      queryStr.split('&').forEach(pair => {
        const [k, v] = pair.split('=');
        params[k] = decodeURIComponent(v || '');
      });
    }

    // Dynamic segment matching (e.g. /status/req1)
    let matchedKey = null;
    let routeDef   = null;
    for (const key of Object.keys(routes)) {
      if (pathRaw === key) { matchedKey = key; routeDef = routes[key]; break; }
      // Pattern match: /status/:id
      const keyParts  = key.split('/');
      const pathParts = pathRaw.split('/');
      if (keyParts.length === pathParts.length) {
        let match = true;
        keyParts.forEach((kp, i) => {
          if (kp.startsWith(':')) { params[kp.slice(1)] = pathParts[i]; }
          else if (kp !== pathParts[i]) { match = false; }
        });
        if (match) { matchedKey = key; routeDef = routes[key]; break; }
      }
    }

    // Fallback
    if (!routeDef) {
      _renderNotFound();
      return;
    }

    // Auth guard
    if (!routeDef.public && !_user) {
      pub.navigate('/login');
      return;
    }
    if (routeDef.roles && _user && !routeDef.roles.includes(_user.role)) {
      const fallback = _user.role === 'resident' ? '/dashboard' : '/staff/queue';
      pub.navigate(fallback);
      return;
    }

    // Render
    _applyLayout(routeDef.layout);
    _currentRoute = matchedKey;
    _render(routeDef.page, params, matchedKey);
    _updateActiveNav(matchedKey);
  }

  function _render(page, params, routeKey) {
    const root = document.getElementById('page-root');
    if (!root) return;

    // Slight delay for smoother transition
    root.style.opacity = '0';
    root.style.transform = 'translateY(8px)';

    setTimeout(() => {
      root.innerHTML = page.render(params);
      root.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      root.style.opacity = '1';
      root.style.transform = 'translateY(0)';

      if (page.init) page.init(params);

      // Scroll to top
      root.scrollTop = 0;
      window.scrollTo(0, 0);
    }, 60);
  }

  /* ── Layout switcher ── */
  function _applyLayout(layout) {
    const topbar        = document.getElementById('topbar');
    const resSidebar    = document.getElementById('resident-sidebar');
    const stfSidebar    = document.getElementById('staff-sidebar');
    const bottomNav     = document.getElementById('bottom-nav');
    const layoutEl      = document.getElementById('layout');

    // Reset all
    topbar?.classList.add('hidden');
    resSidebar?.classList.add('hidden');
    stfSidebar?.classList.add('hidden');
    bottomNav?.classList.add('hidden');
    layoutEl?.classList.remove('has-sidebar','has-bottom-nav');
    document.body.classList.remove('has-sidebar','has-bottom-nav','login-active');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';

    if (layout === 'guest') {
      // No chrome — login page; lock scroll
      document.body.classList.add('login-active');
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      return;
    }

    // Topbar always shown when logged in
    topbar?.classList.remove('hidden');
    _updateTopbar();

    if (layout === 'resident' || layout === 'resident-or-guest') {
      if (_user?.role === 'resident' || !_user) {
        // Desktop: sidebar; Mobile: bottom nav
        const isDesktop = window.innerWidth >= 1024;
        if (isDesktop) {
          if (_user) {
            resSidebar?.classList.remove('hidden');
            layoutEl?.classList.add('has-sidebar');
          }
        } else {
          if (_user) bottomNav?.classList.remove('hidden');
        }
      }
    }

    if (layout === 'staff') {
      const isDesktop = window.innerWidth >= 1024;
      if (isDesktop) {
        stfSidebar?.classList.remove('hidden');
        layoutEl?.classList.add('has-sidebar');
      }
      // Staff role badge
      const badge = document.getElementById('staff-role-badge');
      if (badge) badge.textContent = _user?.role === 'admin' ? 'Admin Portal' : 'Staff Portal';
    }

    // Bottom nav pad
    if (!bottomNav?.classList.contains('hidden')) {
      document.body.classList.add('has-bottom-nav');
    }
  }

  function _updateTopbar() {
    if (!_user) return;
    const nameEl   = document.getElementById('topbar-username');
    const avatarEl = document.getElementById('topbar-avatar');
    const userInfo = document.getElementById('topbar-user-info');

    if (nameEl)   nameEl.textContent   = (_user.name || 'User').split(' ')[0];
    if (avatarEl) avatarEl.textContent = Utils.initials(_user.name) || '?';
  }

  function _updateActiveNav(routeKey) {
    // Sidebar links
    document.querySelectorAll('.nav-link[data-route]').forEach(link => {
      const r = link.dataset.route;
      link.classList.toggle('active', routeKey === r || routeKey?.startsWith(r + '/'));
    });
    // Bottom nav
    document.querySelectorAll('.bn-item[data-route]').forEach(item => {
      const r = item.dataset.route;
      item.classList.toggle('active', routeKey === r);
    });
  }

  /* ── Global handlers ── */
  function _setupGlobalHandlers() {
    // Modal close
    document.getElementById('modal-overlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'modal-overlay') Utils.closeModal();
    });
    document.getElementById('modal-close-btn')?.addEventListener('click', Utils.closeModal.bind(Utils));

    // Lang toggle
    document.getElementById('lang-toggle')?.addEventListener('click', () => {
      Utils.toggleLang();
      Utils.showToast('Language changed!', 'info', 'Language');
    });

    // Topbar logout
    document.getElementById('topbar-logout')?.addEventListener('click', () => {
      pub.logout();
      Utils.showToast('Signed out successfully.', 'info', 'Goodbye!');
    });

    // Staff sidebar logout
    document.addEventListener('click', (e) => {
      if (e.target.closest('#staff-logout-btn')) {
        pub.logout();
        Utils.showToast('Signed out.', 'info');
      }
    });

    // Responsive sidebar/bottom-nav on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const hash = window.location.hash.replace('#', '') || '/login';
        const [pathRaw] = hash.split('?');
        let routeDef = routes[pathRaw];
        if (!routeDef) {
          // Try pattern match
          for (const key of Object.keys(routes)) {
            const kp = key.split('/'), pp = pathRaw.split('/');
            if (kp.length === pp.length && kp.every((k,i) => k.startsWith(':') || k === pp[i])) {
              routeDef = routes[key]; break;
            }
          }
        }
        if (routeDef) { _applyLayout(routeDef.layout); }
      }, 200);
    });

    // Keyboard: Escape closes modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') Utils.closeModal();
    });

    // Initialize i18n labels
    Utils.setLang(Utils.getLang());
  }

  /* ── Offline detection ── */
  function _setupOfflineDetection() {
    const banner = document.getElementById('offline-banner');
    function update() {
      if (banner) banner.classList.toggle('hidden', navigator.onLine);
    }
    window.addEventListener('online',  update);
    window.addEventListener('offline', update);
    update();
  }

  /* ── 404 ── */
  function _renderNotFound() {
    const root = document.getElementById('page-root');
    if (root) root.innerHTML = `
      <div class="empty-state" style="min-height:60vh;">
        <div class="empty-state-icon" style="font-size:3rem;">🗺️</div>
        <div class="empty-state-title">Page Not Found</div>
        <div class="empty-state-desc">The page you're looking for doesn't exist.</div>
        <button onclick="App.navigate(_user?.role === 'resident' ? '/dashboard' : _user ? '/staff/queue' : '/login')" class="btn btn-primary" style="margin-top:var(--s-4);">Go Home</button>
      </div>`;
  }

  /* ── Boot ── */
  window.addEventListener('DOMContentLoaded', () => pub.init());

  return pub;
})();
