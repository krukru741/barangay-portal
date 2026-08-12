/* ============================================================
   RESIDENT.JS — All resident-facing page renderers
   E-Barangay San Miguel Portal
   ============================================================ */

const ResidentPages = (() => {

  /* ══════════════════════════════════════════════════════════
     LOGIN PAGE
     ══════════════════════════════════════════════════════════ */
  const login = {
    render() {
      return `
      <div class="login-page">
        <!-- Decorative SVG background -->
        <svg class="login-bg-shapes" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10%" cy="20%" r="180"/>
          <circle cx="80%" cy="70%" r="220"/>
          <circle cx="50%" cy="90%" r="140"/>
          <circle cx="90%" cy="10%" r="100"/>
        </svg>

        <!-- Left panel (desktop) -->
        <div class="login-left">
          <img src="assets/seal.png" alt="Barangay Seal" class="login-seal">
          <div class="login-brgy-name">Barangay San Miguel</div>
          <div class="login-brgy-loc">Quezon City · Official E-Portal</div>
          <div class="login-features stagger">
            <div class="login-feature">
              <div class="login-feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <div class="login-feature-text">
                <div class="login-feature-title">Request Documents Online</div>
                <div>Clearances, certificates, and more — no queuing needed.</div>
              </div>
            </div>
            <div class="login-feature">
              <div class="login-feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              </div>
              <div class="login-feature-text">
                <div class="login-feature-title">Track Request Status</div>
                <div>Get notified the moment your document is ready.</div>
              </div>
            </div>
            <div class="login-feature">
              <div class="login-feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
              </div>
              <div class="login-feature-text">
                <div class="login-feature-title">Report Incidents</div>
                <div>Flag road damage, flooding, and other concerns directly.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right panel — login form -->
        <div class="login-right">
          <div class="login-card anim-scale">

            <!-- Mobile branding -->
            <div class="login-mobile-brand">
              <img src="assets/seal.png" alt="Seal" class="login-mobile-seal">
              <div style="font-family:var(--f-heading);font-weight:700;color:var(--c-primary);">Barangay San Miguel</div>
              <div style="font-size:.8rem;color:var(--c-text-muted);">Quezon City Official Portal</div>
            </div>

            <!-- Step 1: Phone number -->
            <div id="login-step-phone">
              <h1 class="login-title">Sign In</h1>
              <p class="login-subtitle">Enter your mobile number to receive a one-time code.</p>
              <div class="form-group">
                <label class="form-label" for="login-phone">Mobile Number <span class="required">*</span></label>
                <div class="phone-input-wrap">
                  <span class="phone-prefix">🇵🇭 +63</span>
                  <input type="tel" id="login-phone" class="form-input" placeholder="9XX XXX XXXX"
                    maxlength="10" inputmode="numeric" autocomplete="tel-local">
                </div>
                <span class="form-hint">We'll send a 6-digit code to verify your identity.</span>
                <div class="form-error hidden" id="phone-error"></div>
              </div>
              <button id="btn-send-otp" class="btn btn-primary btn-block btn-lg" style="margin-bottom:var(--s-4);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Send OTP
              </button>
              <div class="login-divider">or</div>
              <button id="btn-guest" class="btn btn-ghost btn-block">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                Browse as Guest (Announcements only)
              </button>
              <div class="trust-badges">
                <div class="trust-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> HTTPS Secured
                </div>
                <div class="trust-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Data Privacy Act
                </div>
                <div class="trust-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Official Portal
                </div>
              </div>
            </div>

            <!-- Step 2: OTP -->
            <div id="login-step-otp" class="hidden">
              <button id="btn-back-phone" class="btn btn-ghost btn-sm" style="margin-bottom:var(--s-4);padding-left:0;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Back
              </button>
              <h1 class="login-title">Enter OTP</h1>
              <p class="login-subtitle">Check your messages for your verification code.</p>
              <div class="otp-sent-info">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary)" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <div>
                  <strong>Code sent to +63 <span id="otp-phone-display"></span></strong>
                  <div style="font-size:.78rem;color:var(--c-text-muted);margin-top:2px;">(Demo: enter any 6-digit code)</div>
                </div>
              </div>
              <div class="otp-inputs" id="otp-inputs-wrap">
                <input type="tel" class="otp-input" maxlength="1" inputmode="numeric" data-idx="0">
                <input type="tel" class="otp-input" maxlength="1" inputmode="numeric" data-idx="1">
                <input type="tel" class="otp-input" maxlength="1" inputmode="numeric" data-idx="2">
                <input type="tel" class="otp-input" maxlength="1" inputmode="numeric" data-idx="3">
                <input type="tel" class="otp-input" maxlength="1" inputmode="numeric" data-idx="4">
                <input type="tel" class="otp-input" maxlength="1" inputmode="numeric" data-idx="5">
              </div>
              <div class="form-error hidden" id="otp-error" style="justify-content:center;margin-top:var(--s-3);"></div>
              <button id="btn-verify-otp" class="btn btn-primary btn-block btn-lg" style="margin-top:var(--s-5);">Verify & Sign In</button>
              <div class="otp-timer">Didn't receive it? <span class="otp-resend" id="otp-resend">Resend code</span></div>
            </div>

          </div>
        </div>
      </div>`;
    },
    init() {
      let _phone = '';

      const phoneInput = document.getElementById('login-phone');
      const stepPhone  = document.getElementById('login-step-phone');
      const stepOtp    = document.getElementById('login-step-otp');

      // Send OTP
      document.getElementById('btn-send-otp').addEventListener('click', () => {
        const raw = phoneInput.value.replace(/\D/g, '');
        const errEl = document.getElementById('phone-error');
        errEl.classList.add('hidden');

        if (raw.length !== 10 || !raw.startsWith('9')) {
          errEl.textContent = 'Please enter a valid 10-digit Philippine mobile number starting with 9.';
          errEl.classList.remove('hidden');
          phoneInput.classList.add('error');
          return;
        }
        _phone = raw;
        Utils.sendOTP(raw);
        document.getElementById('otp-phone-display').textContent = raw;
        stepPhone.classList.add('hidden');
        stepOtp.classList.remove('hidden');
        // Focus first OTP input
        setTimeout(() => document.querySelector('.otp-input')?.focus(), 100);
        Utils.showToast('OTP code sent! (Demo: any 6 digits work)', 'success', 'Code Sent');
      });

      // Back button
      document.getElementById('btn-back-phone').addEventListener('click', () => {
        stepPhone.classList.remove('hidden');
        stepOtp.classList.add('hidden');
      });

      // Guest mode
      document.getElementById('btn-guest').addEventListener('click', () => {
        App.navigate('/announcements?guest=1');
      });

      // OTP input logic (auto-advance, backspace)
      const otpInputs = document.querySelectorAll('.otp-input');
      otpInputs.forEach((inp, i) => {
        inp.addEventListener('input', (e) => {
          const val = e.target.value.replace(/\D/g, '');
          e.target.value = val.slice(-1);
          if (val && i < otpInputs.length - 1) otpInputs[i + 1].focus();
          e.target.classList.toggle('filled', !!val);
        });
        inp.addEventListener('keydown', (e) => {
          if (e.key === 'Backspace' && !inp.value && i > 0) {
            otpInputs[i - 1].value = '';
            otpInputs[i - 1].classList.remove('filled');
            otpInputs[i - 1].focus();
          }
        });
        inp.addEventListener('paste', (e) => {
          const pasted = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g,'').slice(0,6);
          otpInputs.forEach((inp2, j) => {
            inp2.value = pasted[j] || '';
            inp2.classList.toggle('filled', !!pasted[j]);
          });
          e.preventDefault();
        });
      });

      // Verify
      document.getElementById('btn-verify-otp').addEventListener('click', () => {
        const code = Array.from(otpInputs).map(i => i.value).join('');
        const errEl = document.getElementById('otp-error');
        errEl.classList.add('hidden');

        if (code.length !== 6) {
          errEl.textContent = 'Please enter all 6 digits.';
          errEl.classList.remove('hidden');
          return;
        }

        if (!Utils.verifyOTP(_phone, code)) {
          errEl.textContent = 'Incorrect code. Please try again.';
          errEl.classList.remove('hidden');
          return;
        }

        // Check if user exists; if not, create new resident account
        let user = DB.getUserByPhone(_phone);
        if (!user) {
          // New user
          const newUser = {
            id: Utils.generateId(), phone: _phone, name: '', role: 'resident',
            address: '', purok: '', civil_status: '', birthdate: '', gender: '',
            occupation: '', email: '', household: [], profile_complete: false,
            created_at: new Date().toISOString(),
          };
          DB.updateUser(newUser.id, newUser);
          user = newUser;
          Utils.showToast('Welcome! Please complete your profile.', 'info', 'New Account');
        } else {
          Utils.showToast(`Welcome back, ${user.name || 'resident'}!`, 'success', 'Signed in');
        }

        App.login(user);
      });

      // Resend
      document.getElementById('otp-resend').addEventListener('click', () => {
        Utils.sendOTP(_phone);
        Utils.showToast('New code sent!', 'success');
        otpInputs.forEach(i => { i.value = ''; i.classList.remove('filled'); });
        otpInputs[0].focus();
      });
    }
  };

  /* ══════════════════════════════════════════════════════════
     DASHBOARD
     ══════════════════════════════════════════════════════════ */
  const dashboard = {
    render() {
      const user = App.user;
      const activeReqs = DB.getRequests({ resident_id: user.id })
        .filter(r => !['released','rejected'].includes(r.status));
      const allReqs   = DB.getRequests({ resident_id: user.id });
      const anns      = DB.getAnnouncements().slice(0, 3);
      const greeting  = Utils.getDayGreeting();

      const recentReqs = allReqs.slice(0, 3);

      return `
      <div class="dashboard-hero page-enter">
        <div class="hero-greeting">${greeting} 👋</div>
        <div class="hero-name">${Utils.escapeHtml(user.name || 'Resident')}</div>
        <div class="hero-cta-row">
          <button onclick="App.navigate('/request')" class="btn btn-accent btn-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            Request a Document
          </button>
          ${!user.profile_complete ? `<a href="#/profile" class="hero-profile-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Complete your profile
          </a>` : ''}
        </div>
      </div>

      <div class="dashboard-content">
        <!-- Stats -->
        <div class="stats-row stagger">
          <div class="stat-card" style="--stat-accent:var(--c-primary);--stat-icon-bg:var(--c-primary-xlight);">
            <div class="stat-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
            </div>
            <div class="stat-card-value">${activeReqs.length}</div>
            <div class="stat-card-label">Active Requests</div>
          </div>
          <div class="stat-card" style="--stat-accent:var(--c-success);--stat-icon-bg:var(--c-success-light);">
            <div class="stat-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            </div>
            <div class="stat-card-value">${allReqs.filter(r => r.status === 'released').length}</div>
            <div class="stat-card-label">Completed</div>
          </div>
          <div class="stat-card" style="--stat-accent:var(--c-accent);--stat-icon-bg:var(--c-accent-light);">
            <div class="stat-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/></svg>
            </div>
            <div class="stat-card-value">${DB.getAnnouncements().filter(a => a.important).length}</div>
            <div class="stat-card-label">Urgent Alerts</div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="section-title">Quick Actions</div>
        <div class="quick-actions-grid stagger">
          <a href="#/request" class="quick-action">
            <div class="qa-icon" style="background:var(--c-primary-xlight);color:var(--c-primary);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <span class="qa-label">Request Document</span>
          </a>
          <a href="#/my-requests" class="quick-action">
            <div class="qa-icon" style="background:var(--c-info-light);color:var(--c-info);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            </div>
            <span class="qa-label">Track Status</span>
          </a>
          <a href="#/incidents/new" class="quick-action">
            <div class="qa-icon" style="background:var(--c-warning-light);color:var(--c-warning);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
            </div>
            <span class="qa-label">Report Incident</span>
          </a>
          <a href="#/announcements" class="quick-action">
            <div class="qa-icon" style="background:var(--c-success-light);color:var(--c-success);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </div>
            <span class="qa-label">Announcements</span>
          </a>
        </div>

        <!-- Active Requests -->
        ${activeReqs.length ? `
        <div class="section-title" style="margin-top:var(--s-6);">
          Active Requests
          <a href="#/my-requests" class="section-link">View all →</a>
        </div>
        <div class="stagger">
          ${activeReqs.map(r => `
          <a class="request-card" href="#/status/${r.id}">
            <div class="request-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <div class="request-card-info">
              <div class="request-card-type">${Utils.escapeHtml(r.type)}</div>
              <div class="request-card-meta">For: ${Utils.escapeHtml(r.purpose)} · ${Utils.formatDateShort(r.submitted_at)}</div>
            </div>
            <div class="request-card-right">
              <span class="${Utils.statusBadgeClass(r.status)}">${Utils.statusLabel(r.status)}</span>
              <span class="text-xs text-muted">${r.ref}</span>
            </div>
          </a>`).join('')}
        </div>` : `
        <div class="section-title" style="margin-top:var(--s-6);">Recent Requests</div>
        <div class="empty-state">
          <div class="empty-state-icon">📄</div>
          <div class="empty-state-title">No active requests</div>
          <div class="empty-state-desc">Your document requests will appear here.</div>
          <button onclick="App.navigate('/request')" class="btn btn-primary" style="margin-top:var(--s-4);">Request a Document</button>
        </div>`}

        <!-- Announcements snippet -->
        <div class="section-title" style="margin-top:var(--s-8);">
          Latest Announcements
          <a href="#/announcements" class="section-link">View all →</a>
        </div>
        <div class="stagger">
          ${anns.map(a => `
          <div class="ann-card${a.important ? ' important' : ''}" style="margin-bottom:var(--s-3);">
            <div class="ann-card-header">
              <div>
                <div class="ann-card-title">${Utils.escapeHtml(a.title)}</div>
                <div class="ann-card-meta">
                  <span>${Utils.formatDateShort(a.published_at)}</span>
                  <span>By ${Utils.escapeHtml(a.author)}</span>
                </div>
              </div>
              <span class="badge badge-${a.category.toLowerCase()}">${a.category}</span>
            </div>
            <div class="ann-card-body" style="padding-top:0;">
              ${Utils.escapeHtml(a.content.substring(0,160))}${a.content.length > 160 ? '…' : ''}
            </div>
          </div>`).join('')}
        </div>

        <!-- Offline fallback -->
        <div style="text-align:center;padding:var(--s-8) var(--s-4) var(--s-4);border-top:1px solid var(--c-border);margin-top:var(--s-8);">
          <div style="font-size:.78rem;color:var(--c-text-light);">Need help? Visit us in person.</div>
          <div style="font-size:.875rem;color:var(--c-text-muted);font-weight:600;margin-top:4px;">Barangay Hall · (02) 8123-4567 · Mon–Fri 8AM–5PM</div>
        </div>
      </div>`;
    },
    init() {}
  };

  /* ══════════════════════════════════════════════════════════
     REQUEST DOCUMENT — 4-step stepper
     ══════════════════════════════════════════════════════════ */
  const request = (() => {
    let step = 1;
    let formData = {};

    const docTypes = [
      { id: 'clearance',  name: 'Barangay Clearance',          fee: 75,  icon: '📄', desc: 'Required for employment, travel, and business.', ids: ['Government ID', 'Proof of Residence'] },
      { id: 'residency',  name: 'Certificate of Residency',    fee: 50,  icon: '🏠', desc: 'Proof that you reside in Barangay San Miguel.', ids: ['Government ID', 'Proof of Residence'] },
      { id: 'indigency',  name: 'Certificate of Indigency',    fee: 0,   icon: '🤝', desc: 'For government assistance and hospital needs.', ids: ['Government ID', 'Proof of Residence', 'Proof of Income (or certification of no income)'] },
      { id: 'business',   name: 'Business Permit Endorsement', fee: 200, icon: '🏪', desc: 'Required to process your business permit with the city.', ids: ['Government ID', 'DTI/SEC/CDA Registration', 'Proof of Business Location'] },
    ];

    const purposes = ['Employment', 'Travel', 'School enrollment', 'Government assistance', 'Hospital/Medical', 'Business permit', 'Bank requirements', 'Other'];

    function renderStep(s) {
      if (s === 1) return renderStep1();
      if (s === 2) return renderStep2();
      if (s === 3) return renderStep3();
      if (s === 4) return renderStep4();
    }

    function renderStep1() {
      return `
      <div class="anim-scale">
        <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:var(--s-2);">Choose Document Type</h2>
        <p style="font-size:.875rem;color:var(--c-text-muted);margin-bottom:var(--s-5);">Select the certificate or clearance you need.</p>
        <div class="doc-type-grid" id="doc-type-grid">
          ${docTypes.map(d => `
          <div class="doc-type-card ${formData.typeId === d.id ? 'selected' : ''}" data-type="${d.id}">
            <div class="doc-type-icon" style="font-size:1.75rem;">${d.icon}</div>
            <div class="doc-type-name">${d.name}</div>
            <div class="doc-type-fee">${d.fee === 0 ? 'Free' : '₱'+d.fee}</div>
          </div>`).join('')}
        </div>
        ${formData.typeId ? `
        <div class="req-id-list" style="margin-top:var(--s-5);">
          <div class="req-id-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Required IDs / Documents
          </div>
          <ul>
            ${docTypes.find(d => d.id === formData.typeId)?.ids.map(id => `<li>${id}</li>`).join('') || ''}
          </ul>
        </div>` : ''}
      </div>`;
    }

    function renderStep2() {
      const user = App.user;
      return `
      <div class="anim-scale">
        <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:var(--s-2);">Fill in Details</h2>
        <p style="font-size:.875rem;color:var(--c-text-muted);margin-bottom:var(--s-5);">
          ${user.profile_complete ? '✅ Auto-filled from your profile. Review and adjust if needed.' : 'Please fill in your personal details.'}
        </p>
        <div class="form-group">
          <label class="form-label">Full Name <span class="required">*</span></label>
          <input type="text" class="form-input" id="req-name" value="${Utils.escapeHtml(formData.name || user.name || '')}" placeholder="Juan Dela Cruz">
        </div>
        <div class="form-group">
          <label class="form-label">Complete Address <span class="required">*</span></label>
          <input type="text" class="form-input" id="req-address" value="${Utils.escapeHtml(formData.address || user.address || '')}" placeholder="Blk X Lot Y, Purok Z">
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--s-4);">
          <div class="form-group">
            <label class="form-label">Civil Status</label>
            <select class="form-select" id="req-civil-status">
              ${['Single','Married','Widowed','Separated','Divorced'].map(s =>
                `<option value="${s}" ${(formData.civil_status || user.civil_status) === s ? 'selected' : ''}>${s}</option>`
              ).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Years in Barangay</label>
            <input type="number" class="form-input" id="req-years" value="${formData.years_in_brgy || ''}" min="0" max="99" placeholder="5">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Purpose of Request <span class="required">*</span></label>
          <select class="form-select" id="req-purpose">
            <option value="">— Select purpose —</option>
            ${purposes.map(p => `<option value="${p}" ${formData.purpose === p ? 'selected' : ''}>${p}</option>`).join('')}
          </select>
        </div>
        <div class="form-error hidden" id="step2-error"></div>
      </div>`;
    }

    function renderStep3() {
      const docType = docTypes.find(d => d.id === formData.typeId);
      const fee = docType?.fee || 0;
      return `
      <div class="anim-scale">
        <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:var(--s-2);">Upload ID & Payment</h2>
        <p style="font-size:.875rem;color:var(--c-text-muted);margin-bottom:var(--s-5);">Upload a clear photo of your valid ID.</p>

        <div class="form-group">
          <label class="form-label">Valid Government ID <span class="required">*</span></label>
          <div class="file-drop" id="id-drop-zone">
            <div class="file-drop-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            </div>
            <div class="file-drop-text">Drag & drop your ID here or <span class="file-drop-link">browse</span></div>
            <div class="file-drop-text" style="font-size:.75rem;margin-top:4px;">JPG, PNG, or PDF · Max 5MB</div>
          </div>
          <div id="id-file-preview" class="${formData.idFile ? '' : 'hidden'}">
            <div class="file-preview">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              <span class="file-preview-name">${formData.idFile || 'ID.jpg'}</span>
              <span class="file-preview-remove" id="remove-id-file">✕</span>
            </div>
          </div>
          <input type="file" id="id-file-input" class="hidden" accept="image/*,.pdf">
        </div>

        ${fee > 0 ? `
        <h3 style="font-size:.9rem;font-weight:700;margin-bottom:var(--s-3);">Payment (₱${fee})</h3>
        <div class="payment-options">
          <label class="payment-option ${formData.paymentMethod === 'online' ? 'selected' : ''}" data-pay="online">
            <div class="payment-option-icon">💳</div>
            <div class="payment-option-info">
              <div class="payment-option-name">Pay Online</div>
              <div class="payment-option-desc">GCash, Maya, or bank transfer (simulated)</div>
            </div>
            <input type="radio" name="payment" value="online" ${formData.paymentMethod === 'online' ? 'checked' : ''} style="accent-color:var(--c-primary);">
          </label>
          <label class="payment-option ${formData.paymentMethod === 'hall' ? 'selected' : ''}" data-pay="hall">
            <div class="payment-option-icon">🏛️</div>
            <div class="payment-option-info">
              <div class="payment-option-name">Pay at Barangay Hall</div>
              <div class="payment-option-desc">Upon pickup of your document</div>
            </div>
            <input type="radio" name="payment" value="hall" ${formData.paymentMethod === 'hall' ? 'checked' : ''} style="accent-color:var(--c-primary);">
          </label>
        </div>
        <div class="fee-summary">
          <div class="fee-row"><span>Document fee</span><span>₱${fee}.00</span></div>
          <div class="fee-row"><span>Processing</span><span>Free</span></div>
          <div class="fee-row total"><span>Total</span><span>₱${fee}.00</span></div>
        </div>` : `
        <div class="alert alert-success">
          <svg class="alert-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg>
          <div><div class="alert-title">No payment required!</div>This certificate is issued free of charge.</div>
        </div>`}
        <div class="form-error hidden" id="step3-error" style="margin-top:var(--s-3);"></div>
      </div>`;
    }

    function renderStep4() {
      const docType = docTypes.find(d => d.id === formData.typeId);
      return `
      <div class="anim-scale">
        <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:var(--s-2);">Review & Submit</h2>
        <p style="font-size:.875rem;color:var(--c-text-muted);margin-bottom:var(--s-5);">Please review your request before submitting.</p>

        <div class="review-section">
          <div class="review-label">Document</div>
          <div class="card-body" style="padding:var(--s-4) var(--s-5);">
            <div class="flex items-center gap-3">
              <div style="font-size:2rem;">${docType?.icon}</div>
              <div>
                <div style="font-weight:700;font-size:1rem;">${docType?.name}</div>
                <div style="font-size:.825rem;color:var(--c-text-muted);">Fee: ${docType?.fee === 0 ? 'Free' : '₱'+docType?.fee}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="review-section">
          <div class="review-label">Personal Details</div>
          <div class="card-body" style="padding:var(--s-4) var(--s-5);">
            <div class="review-grid">
              <div><div class="review-item-label">Full Name</div><div class="review-item-value">${Utils.escapeHtml(formData.name)}</div></div>
              <div><div class="review-item-label">Civil Status</div><div class="review-item-value">${formData.civil_status}</div></div>
              <div><div class="review-item-label">Address</div><div class="review-item-value">${Utils.escapeHtml(formData.address)}</div></div>
              <div><div class="review-item-label">Years in Barangay</div><div class="review-item-value">${formData.years_in_brgy || 'Not specified'}</div></div>
            </div>
          </div>
        </div>

        <div class="review-section">
          <div class="review-label">Request Details</div>
          <div class="card-body" style="padding:var(--s-4) var(--s-5);">
            <div class="review-grid">
              <div><div class="review-item-label">Purpose</div><div class="review-item-value">${formData.purpose}</div></div>
              <div><div class="review-item-label">Payment</div><div class="review-item-value">${docType?.fee === 0 ? 'Free' : formData.paymentMethod === 'online' ? 'Online payment' : 'Pay at hall'}</div></div>
              <div><div class="review-item-label">Valid ID</div><div class="review-item-value">${formData.idFile || 'Not uploaded'}</div></div>
            </div>
          </div>
        </div>

        <div class="alert alert-info" style="margin-top:var(--s-4);">
          <svg class="alert-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <div>By submitting, you confirm that all information is accurate. False information is subject to penalties under Philippine law.</div>
        </div>
      </div>`;
    }

    function renderStepper(current) {
      const steps = ['Choose Type','Fill Details','Upload & Pay','Review'];
      return `
      <div class="stepper">
        ${steps.map((s, i) => `
        <div class="stepper-item ${i+1 < current ? 'completed' : i+1 === current ? 'active' : ''}">
          <div class="stepper-dot">${i+1 < current ? '✓' : i+1}</div>
          <div class="stepper-label">${s}</div>
        </div>`).join('')}
      </div>`;
    }

    return {
      render() {
        step = 1;
        formData = {};
        // Pre-fill from profile
        const user = App.user;
        if (user) {
          formData.name        = user.name;
          formData.address     = user.address;
          formData.civil_status = user.civil_status || 'Single';
        }
        return `
        <div class="request-page page-enter">
          <div class="page-header" style="padding:0 0 var(--s-5);">
            <button onclick="App.navigate('/dashboard')" class="btn btn-ghost btn-sm">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Back
            </button>
          </div>
          <h1 class="page-title" style="margin-bottom:var(--s-6);">Request a Document</h1>
          <div class="request-form-card">
            <div id="stepper-container">${renderStepper(step)}</div>
            <div class="request-step-content" id="step-content">${renderStep(step)}</div>
            <div class="request-step-nav">
              <button id="req-btn-back" class="btn btn-ghost ${step === 1 ? 'hidden' : ''}">← Back</button>
              <div style="flex:1;"></div>
              ${step < 4 ? `<button id="req-btn-next" class="btn btn-primary">Next →</button>`
                         : `<button id="req-btn-submit" class="btn btn-primary btn-lg">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg>
                              Submit Request
                            </button>`}
            </div>
          </div>
        </div>`;
      },
      init() {
        this._attachHandlers();
      },
      _attachHandlers() {
        // Doc type selection
        document.getElementById('doc-type-grid')?.addEventListener('click', (e) => {
          const card = e.target.closest('.doc-type-card');
          if (!card) return;
          const typeId = card.dataset.type;
          formData.typeId = typeId;
          formData.fee = docTypes.find(d => d.id === typeId)?.fee || 0;
          formData.type = docTypes.find(d => d.id === typeId)?.name;
          document.querySelectorAll('.doc-type-card').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          // Re-render IDs list
          const sc = document.getElementById('step-content');
          sc.innerHTML = renderStep(1);
          this._attachHandlers();
        });

        // File upload
        const dropZone  = document.getElementById('id-drop-zone');
        const fileInput = document.getElementById('id-file-input');
        if (dropZone) {
          dropZone.addEventListener('click', () => fileInput.click());
          dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('dragover'); });
          dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
          dropZone.addEventListener('drop', e => {
            e.preventDefault(); dropZone.classList.remove('dragover');
            const file = e.dataTransfer.files[0];
            if (file) handleFile(file);
          });
          fileInput.addEventListener('change', () => {
            if (fileInput.files[0]) handleFile(fileInput.files[0]);
          });
          document.getElementById('remove-id-file')?.addEventListener('click', () => {
            formData.idFile = null;
            document.getElementById('id-file-preview').classList.add('hidden');
          });
        }

        function handleFile(file) {
          if (file.size > 5 * 1024 * 1024) { Utils.showToast('File too large. Max 5MB.', 'error'); return; }
          formData.idFile = file.name;
          const preview = document.getElementById('id-file-preview');
          if (preview) {
            preview.classList.remove('hidden');
            preview.querySelector('.file-preview-name').textContent = file.name;
          }
        }

        // Payment options
        document.querySelectorAll('.payment-option').forEach(opt => {
          opt.addEventListener('click', () => {
            formData.paymentMethod = opt.dataset.pay;
            document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
          });
        });

        // Next button
        const btnNext = document.getElementById('req-btn-next');
        btnNext?.addEventListener('click', () => {
          if (validate()) {
            collectStepData();
            step++;
            updateStep();
          }
        });

        // Back button
        document.getElementById('req-btn-back')?.addEventListener('click', () => {
          step--;
          updateStep();
        });

        // Submit
        document.getElementById('req-btn-submit')?.addEventListener('click', () => {
          const user = App.user;
          const newReq = DB.createRequest({
            resident_id: user.id,
            resident_name: formData.name,
            resident_phone: user.phone,
            type: formData.type,
            purpose: formData.purpose,
            amount: formData.fee || 0,
            address: formData.address,
            civil_status: formData.civil_status,
            years_in_brgy: formData.years_in_brgy || '',
            payment_status: formData.fee === 0 ? 'free' : formData.paymentMethod === 'online' ? 'paid' : 'pending',
          });
          Utils.showToast(`Request submitted! Your reference: ${newReq.ref}`, 'success', 'Request Submitted');
          App.navigate(`/status/${newReq.id}`);
        });
      },
      _self: null,
    };

    function updateStep() {
      document.getElementById('stepper-container').innerHTML = renderStepper(step);
      const sc = document.getElementById('step-content');
      sc.innerHTML = renderStep(step);
      const navBack = document.getElementById('req-btn-back');
      const navContainer = document.querySelector('.request-step-nav');
      navContainer.innerHTML = `
        <button id="req-btn-back" class="btn btn-ghost ${step === 1 ? 'hidden' : ''}">← Back</button>
        <div style="flex:1;"></div>
        ${step < 4 ? `<button id="req-btn-next" class="btn btn-primary">Next →</button>`
                   : `<button id="req-btn-submit" class="btn btn-primary btn-lg">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg>
                        Submit Request
                      </button>`}`;
      // Re-attach (needed for dynamic nav)
      request._attachHandlers();
    }

    function validate() {
      if (step === 1) {
        if (!formData.typeId) { Utils.showToast('Please select a document type.', 'warning'); return false; }
      }
      if (step === 2) {
        const name    = document.getElementById('req-name')?.value.trim();
        const address = document.getElementById('req-address')?.value.trim();
        const purpose = document.getElementById('req-purpose')?.value;
        const errEl   = document.getElementById('step2-error');
        if (!name || !address || !purpose) {
          errEl.textContent = 'Please fill in all required fields.';
          errEl.classList.remove('hidden');
          return false;
        }
        errEl.classList.add('hidden');
      }
      if (step === 3) {
        const docType = docTypes.find(d => d.id === formData.typeId);
        const errEl = document.getElementById('step3-error');
        if (!formData.idFile) {
          errEl.textContent = 'Please upload a valid ID.';
          errEl.classList.remove('hidden');
          return false;
        }
        if (docType?.fee > 0 && !formData.paymentMethod) {
          errEl.textContent = 'Please select a payment method.';
          errEl.classList.remove('hidden');
          return false;
        }
        errEl.classList.add('hidden');
      }
      return true;
    }

    function collectStepData() {
      if (step === 2) {
        formData.name         = document.getElementById('req-name')?.value.trim();
        formData.address      = document.getElementById('req-address')?.value.trim();
        formData.civil_status = document.getElementById('req-civil-status')?.value;
        formData.years_in_brgy = document.getElementById('req-years')?.value;
        formData.purpose      = document.getElementById('req-purpose')?.value;
      }
    }
  })();

  /* ══════════════════════════════════════════════════════════
     MY REQUESTS (Status list)
     ══════════════════════════════════════════════════════════ */
  const myRequests = {
    render() {
      const reqs = DB.getRequests({ resident_id: App.user.id });
      return `
      <div class="my-requests-page page-enter">
        <div class="page-header-row">
          <div>
            <h1 class="page-title">My Requests</h1>
            <p class="page-subtitle">Track all your document requests.</p>
          </div>
          <button onclick="App.navigate('/request')" class="btn btn-primary btn-sm">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            New Request
          </button>
        </div>
        ${reqs.length === 0 ? `
        <div class="empty-state" style="margin-top:var(--s-8);">
          <div class="empty-state-icon">📭</div>
          <div class="empty-state-title">No requests yet</div>
          <div class="empty-state-desc">Submit your first document request to get started.</div>
          <button onclick="App.navigate('/request')" class="btn btn-primary" style="margin-top:var(--s-4);">Request a Document</button>
        </div>` : `
        <div class="stagger" style="margin-top:var(--s-5);">
          ${reqs.map(r => `
          <a class="request-card" href="#/status/${r.id}" style="margin-bottom:var(--s-2);">
            <div class="request-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <div class="request-card-info">
              <div class="request-card-type">${Utils.escapeHtml(r.type)}</div>
              <div class="request-card-meta">
                ${Utils.formatDateShort(r.submitted_at)} · ${Utils.escapeHtml(r.purpose)}
                ${r.amount > 0 ? ` · ₱${r.amount}` : ' · Free'}
              </div>
            </div>
            <div class="request-card-right">
              <span class="${Utils.statusBadgeClass(r.status)}">${Utils.statusLabel(r.status)}</span>
              <span class="text-xs text-muted">${r.ref}</span>
            </div>
          </a>`).join('')}
        </div>`}
      </div>`;
    },
    init() {}
  };

  /* ══════════════════════════════════════════════════════════
     STATUS TRACKER
     ══════════════════════════════════════════════════════════ */
  const status = {
    render(params) {
      const reqId = params.id;
      const req   = DB.getRequestById(reqId);
      if (!req) return `<div class="status-page page-enter"><div class="empty-state" style="margin-top:var(--s-12);"><div class="empty-state-icon">❓</div><div class="empty-state-title">Request not found</div><div class="empty-state-desc">Check your reference number or go back to your requests.</div><button onclick="App.navigate('/my-requests')" class="btn btn-primary" style="margin-top:var(--s-4);">My Requests</button></div></div>`;

      const steps = [
        { key: 'submitted',    label: 'Submitted',        desc: 'Your request has been received by the barangay.' },
        { key: 'under_review', label: 'Under Review',     desc: 'Staff is reviewing your application and documents.' },
        { key: 'approved',     label: 'Approved',         desc: 'Your request has been approved and is being prepared.' },
        { key: 'released',     label: 'Ready for Pickup', desc: 'Your document is ready! Visit the barangay hall to claim it or download below.' },
      ];

      const statusOrder = ['submitted','under_review','approved','released','rejected'];
      const currentIdx  = statusOrder.indexOf(req.status);

      const sla = Utils.getSLAStatus(req.submitted_at, req.status);

      return `
      <div class="status-page page-enter">
        <button onclick="App.navigate('/my-requests')" class="btn btn-ghost btn-sm" style="margin-bottom:var(--s-4);">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> All Requests
        </button>

        <!-- Reference card -->
        <div class="status-ref-card">
          <div class="ref-type">${Utils.escapeHtml(req.type)}</div>
          <div class="ref-label">Reference Number</div>
          <div class="ref-number">${req.ref}</div>
          <div class="ref-actions">
            <button class="ref-btn" onclick="Utils.copyToClipboard('${req.ref}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              Copy Ref
            </button>
            ${req.status === 'released' ? `<button class="ref-btn" onclick="Utils.downloadTextFile('${req.ref}.txt', 'Barangay San Miguel\\nDocument Reference: ${req.ref}\\nType: ${req.type}\\nStatus: Ready for Pickup\\nDate: ${Utils.formatDate(req.updated_at)}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download
            </button>` : ''}
          </div>
        </div>

        <!-- Estimated time -->
        ${!['released','rejected'].includes(req.status) ? `
        <div class="estimated-time">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <div>
            <strong>Estimated completion:</strong> 2–3 working days
            ${sla ? `&nbsp;·&nbsp;<span class="sla-badge ${sla.cls}">${sla.label}</span>` : ''}
          </div>
        </div>` : ''}

        <!-- Rejected reason -->
        ${req.status === 'rejected' ? `
        <div class="alert alert-danger" style="margin-bottom:var(--s-5);">
          <svg class="alert-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          <div><div class="alert-title">Request Rejected</div>${Utils.escapeHtml(req.reject_reason)}</div>
        </div>` : ''}

        <!-- Status notes from staff -->
        ${req.notes && req.status !== 'rejected' ? `
        <div class="alert alert-info" style="margin-bottom:var(--s-5);">
          <svg class="alert-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <div><div class="alert-title">Staff Note</div>${Utils.escapeHtml(req.notes)}</div>
        </div>` : ''}

        <!-- Timeline -->
        <div class="card" style="margin-bottom:var(--s-5);">
          <div class="card-header"><strong>Status Timeline</strong></div>
          <div class="card-body">
            <div class="timeline">
              ${req.status === 'rejected' ? `
                ${steps.slice(0,2).map((s, i) => `
                <div class="timeline-item done">
                  <div class="timeline-dot">✓</div>
                  <div class="timeline-title">${s.label}</div>
                  <div class="timeline-meta">${i === 0 ? Utils.formatDate(req.submitted_at) : Utils.formatDate(req.updated_at)}</div>
                </div>`).join('')}
                <div class="timeline-item current">
                  <div class="timeline-dot">✕</div>
                  <div class="timeline-title">Rejected</div>
                  <div class="timeline-meta">${Utils.formatDate(req.updated_at)}</div>
                  <div class="timeline-detail">${Utils.escapeHtml(req.reject_reason)}</div>
                </div>
              ` : steps.map((s, i) => {
                let state = 'pending';
                if (statusOrder.indexOf(s.key) < currentIdx) state = 'done';
                else if (s.key === req.status) state = 'current';
                return `
                <div class="timeline-item ${state}">
                  <div class="timeline-dot">${state === 'done' ? '✓' : i + 1}</div>
                  <div class="timeline-title">${s.label}</div>
                  ${state !== 'pending' ? `<div class="timeline-meta">${Utils.formatDate(state === 'done' || state === 'current' ? req.updated_at : '')}</div>` : ''}
                  ${state === 'current' ? `<div class="timeline-detail">${s.desc}</div>` : ''}
                </div>`;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- Request details card -->
        <div class="card" style="margin-bottom:var(--s-8);">
          <div class="card-header"><strong>Request Details</strong></div>
          <div class="card-body">
            <div class="review-grid">
              <div><div class="review-item-label">Purpose</div><div class="review-item-value">${Utils.escapeHtml(req.purpose)}</div></div>
              <div><div class="review-item-label">Submitted</div><div class="review-item-value">${Utils.formatDate(req.submitted_at)}</div></div>
              <div><div class="review-item-label">Last Updated</div><div class="review-item-value">${Utils.formatDate(req.updated_at)}</div></div>
              <div><div class="review-item-label">Payment</div><div class="review-item-value"><span class="${Utils.statusBadgeClass(req.payment_status)}">${req.payment_status === 'free' ? 'Free' : req.payment_status === 'paid' ? 'Paid' : 'Pending'}</span></div></div>
              <div><div class="review-item-label">Address</div><div class="review-item-value">${Utils.escapeHtml(req.address)}</div></div>
            </div>
          </div>
          <div class="card-footer">
            <div style="font-size:.78rem;color:var(--c-text-muted);">For inquiries: Barangay Hall (02) 8123-4567 · Mon–Fri 8AM–5PM</div>
          </div>
        </div>
      </div>`;
    },
    init() {}
  };

  /* ══════════════════════════════════════════════════════════
     REPORT INCIDENT
     ══════════════════════════════════════════════════════════ */
  const incidentNew = {
    _map: null,
    _marker: null,
    _selectedCategory: '',
    _selectedLat: 14.676,
    _selectedLng: 121.044,
    _photoData: null,

    render() {
      const cats = [
        { id: 'Road Damage',     emoji: '🚧' },
        { id: 'Flooding',        emoji: '🌊' },
        { id: 'Illegal Dumping', emoji: '🗑️' },
        { id: 'Street Light Out',emoji: '💡' },
        { id: 'Public Safety',   emoji: '🚨' },
        { id: 'Others',          emoji: '📋' },
      ];
      return `
      <div class="incident-page page-enter">
        <div class="page-header-row" style="margin-bottom:var(--s-5);">
          <div>
            <h1 class="page-title">Report an Incident</h1>
            <p class="page-subtitle">Help keep Barangay San Miguel safe and clean.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <!-- Category -->
            <div class="form-group">
              <label class="form-label">Incident Category <span class="required">*</span></label>
              <div class="category-grid" id="cat-grid">
                ${cats.map(c => `
                <button class="category-btn" data-cat="${c.id}">
                  <span>${c.emoji}</span>
                  <span>${c.id}</span>
                </button>`).join('')}
              </div>
              <div class="form-error hidden" id="cat-error"></div>
            </div>

            <!-- Description -->
            <div class="form-group">
              <label class="form-label">Description <span class="required">*</span></label>
              <textarea class="form-textarea" id="inc-desc" placeholder="Describe the incident in detail. Include what, when, and any safety concerns..." rows="4"></textarea>
              <div class="form-error hidden" id="desc-error"></div>
            </div>

            <!-- Map -->
            <div class="form-group">
              <label class="form-label">Location (tap on map to pin) <span class="required">*</span></label>
              <div class="incident-map-wrap">
                <div id="incident-map"></div>
                <div class="map-overlay-hint" id="map-hint">Tap the map to pin the exact location</div>
              </div>
              <div class="form-hint" id="map-address-label">📍 Barangay San Miguel, Quezon City (default)</div>
            </div>

            <!-- Photo upload -->
            <div class="form-group">
              <label class="form-label">Photo (optional)</label>
              <div class="file-drop" id="photo-drop">
                <div class="file-drop-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                </div>
                <div class="file-drop-text">Upload photo evidence or <span class="file-drop-link">browse</span></div>
              </div>
              <div id="photo-preview" class="hidden" style="margin-top:var(--s-2);">
                <img id="photo-img" style="max-height:120px;border-radius:var(--r-md);border:1px solid var(--c-border);" alt="Photo preview">
              </div>
              <input type="file" id="photo-input" accept="image/*" class="hidden">
            </div>

            <!-- Anonymous toggle -->
            <div class="form-group">
              <label class="toggle-wrap">
                <div class="toggle" id="anon-toggle"></div>
                <div>
                  <div style="font-weight:600;font-size:.875rem;">Submit Anonymously</div>
                  <div style="font-size:.78rem;color:var(--c-text-muted);">Your name will not appear on this report.</div>
                </div>
              </label>
            </div>

            <div class="form-error hidden" id="inc-submit-error"></div>
            <button id="btn-submit-incident" class="btn btn-primary btn-block btn-lg" style="margin-top:var(--s-2);">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Submit Report
            </button>
          </div>
        </div>
      </div>`;
    },

    init() {
      this._selectedCategory = '';
      this._anonMode = false;

      // Map
      setTimeout(() => {
        if (typeof L === 'undefined') return;
        const mapEl = document.getElementById('incident-map');
        if (!mapEl) return;
        const map = L.map('incident-map').setView([14.676, 121.044], 16);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors', maxZoom: 19,
        }).addTo(map);

        let marker = null;
        map.on('click', (e) => {
          this._selectedLat = e.latlng.lat;
          this._selectedLng = e.latlng.lng;
          if (marker) map.removeLayer(marker);
          marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
          document.getElementById('map-hint').style.display = 'none';
          document.getElementById('map-address-label').textContent = `📍 ${e.latlng.lat.toFixed(5)}, ${e.latlng.lng.toFixed(5)}`;
        });
        this._map = map;
      }, 200);

      // Category selection
      document.getElementById('cat-grid').addEventListener('click', (e) => {
        const btn = e.target.closest('.category-btn');
        if (!btn) return;
        this._selectedCategory = btn.dataset.cat;
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        document.getElementById('cat-error').classList.add('hidden');
      });

      // Photo
      document.getElementById('photo-drop').addEventListener('click', () => document.getElementById('photo-input').click());
      document.getElementById('photo-input').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          document.getElementById('photo-preview').classList.remove('hidden');
          document.getElementById('photo-img').src = ev.target.result;
          this._photoData = ev.target.result;
        };
        reader.readAsDataURL(file);
      });

      // Anonymous toggle
      const toggle = document.getElementById('anon-toggle');
      toggle.addEventListener('click', () => {
        this._anonMode = !this._anonMode;
        toggle.classList.toggle('on', this._anonMode);
      });

      // Submit
      document.getElementById('btn-submit-incident').addEventListener('click', () => {
        const desc = document.getElementById('inc-desc').value.trim();
        const errEl = document.getElementById('inc-submit-error');
        errEl.classList.add('hidden');

        if (!this._selectedCategory) {
          document.getElementById('cat-error').textContent = 'Please select a category.';
          document.getElementById('cat-error').classList.remove('hidden');
          return;
        }
        if (!desc) {
          errEl.textContent = 'Please enter a description.';
          errEl.classList.remove('hidden');
          return;
        }

        const user = App.user;
        const newInc = DB.createIncident({
          reporter_id: user.id,
          reporter_name: this._anonMode ? 'Anonymous' : (user.name || 'Resident'),
          reporter_phone: this._anonMode ? '' : user.phone,
          anonymous: this._anonMode,
          category: this._selectedCategory,
          description: desc,
          location: { lat: this._selectedLat, lng: this._selectedLng, address: `${this._selectedLat.toFixed(5)}, ${this._selectedLng.toFixed(5)}` },
          photo: this._photoData,
        });

        Utils.showToast(`Incident report submitted! Ref: ${newInc.ref}`, 'success', 'Report Submitted');
        App.navigate('/dashboard');
      });
    }
  };

  /* ══════════════════════════════════════════════════════════
     ANNOUNCEMENTS
     ══════════════════════════════════════════════════════════ */
  const announcements = {
    _filter: 'All',
    render() {
      const cats = ['All', 'Health', 'Disaster', 'Events', 'General'];
      const anns = DB.getAnnouncements();
      const filtered = this._filter === 'All' ? anns : anns.filter(a => a.category === this._filter);

      return `
      <div class="announcements-page page-enter">
        <div class="page-header-row" style="margin-bottom:var(--s-5);">
          <div>
            <h1 class="page-title">Announcements</h1>
            <p class="page-subtitle">Stay informed with the latest news from Barangay San Miguel.</p>
          </div>
        </div>
        <div class="filter-chips ann-filters" id="ann-filter-chips">
          ${cats.map(c => `<div class="chip ${this._filter === c ? 'active' : ''}" data-cat="${c}">${c}</div>`).join('')}
        </div>
        <div id="ann-list">
          ${filtered.length === 0 ? `
          <div class="empty-state" style="margin-top:var(--s-8);">
            <div class="empty-state-icon">📭</div>
            <div class="empty-state-title">No announcements</div>
          </div>` : filtered.map(a => `
          <div class="ann-card ${a.important ? 'important' : ''}" data-ann-id="${a.id}">
            <div class="ann-card-header">
              <div style="flex:1;min-width:0;">
                <div class="ann-card-title">${Utils.escapeHtml(a.title)}</div>
                <div class="ann-card-meta">
                  <span>${Utils.formatDateShort(a.published_at)}</span>
                  <span>·</span>
                  <span>${Utils.escapeHtml(a.author)}</span>
                </div>
              </div>
              <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0;">
                <span class="badge badge-${a.category.toLowerCase()}">${a.category}</span>
                ${a.important ? '<span class="badge badge-danger">⚠ Important</span>' : ''}
              </div>
            </div>
            <div class="ann-card-body">${Utils.escapeHtml(a.content).replace(/\n/g, '<br>')}</div>
            <div class="ann-card-footer">
              <span>${Utils.formatRelativeTime(a.published_at)}</span>
            </div>
          </div>`).join('')}
        </div>
        <div style="text-align:center;padding:var(--s-8) var(--s-4);border-top:1px solid var(--c-border);margin-top:var(--s-6);">
          <div style="font-size:.78rem;color:var(--c-text-light);">Barangay Hall · (02) 8123-4567 · Mon–Fri 8AM–5PM</div>
        </div>
      </div>`;
    },
    init() {
      document.getElementById('ann-filter-chips')?.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip');
        if (!chip) return;
        this._filter = chip.dataset.cat;
        // Re-render just the list
        document.getElementById('ann-filter-chips').querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.cat === this._filter));
        const anns = DB.getAnnouncements();
        const filtered = this._filter === 'All' ? anns : anns.filter(a => a.category === this._filter);
        const list = document.getElementById('ann-list');
        if (filtered.length === 0) {
          list.innerHTML = `<div class="empty-state" style="margin-top:var(--s-8);"><div class="empty-state-icon">📭</div><div class="empty-state-title">No announcements in this category</div></div>`;
        } else {
          list.innerHTML = filtered.map(a => `
          <div class="ann-card ${a.important ? 'important' : ''}">
            <div class="ann-card-header">
              <div style="flex:1;min-width:0;">
                <div class="ann-card-title">${Utils.escapeHtml(a.title)}</div>
                <div class="ann-card-meta"><span>${Utils.formatDateShort(a.published_at)}</span> · <span>${Utils.escapeHtml(a.author)}</span></div>
              </div>
              <span class="badge badge-${a.category.toLowerCase()}">${a.category}</span>
            </div>
            <div class="ann-card-body">${Utils.escapeHtml(a.content).replace(/\n/g,'<br>')}</div>
            <div class="ann-card-footer"><span>${Utils.formatRelativeTime(a.published_at)}</span></div>
          </div>`).join('');
        }
      });
    }
  };

  /* ══════════════════════════════════════════════════════════
     PROFILE & HOUSEHOLD
     ══════════════════════════════════════════════════════════ */
  const profile = {
    render() {
      const user = App.user;
      return `
      <div class="profile-page page-enter">
        <div class="profile-header">
          <div class="profile-avatar">${Utils.initials(user.name) || '?'}</div>
          <div>
            <div class="profile-name">${Utils.escapeHtml(user.name || 'Unnamed Resident')}</div>
            <div class="profile-phone">+63 ${user.phone}</div>
            ${user.profile_complete ? `<div class="profile-complete">✅ Profile Complete</div>` : `<div class="profile-complete" style="background:rgba(245,158,11,.25);border-color:rgba(245,158,11,.4);">⚠ Incomplete profile</div>`}
          </div>
        </div>

        <!-- Personal Info -->
        <div class="card" style="margin-bottom:var(--s-5);">
          <div class="card-header">
            <strong>Personal Information</strong>
          </div>
          <div class="card-body">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--s-4);">
              <div class="form-group">
                <label class="form-label">Full Name <span class="required">*</span></label>
                <input type="text" class="form-input" id="prof-name" value="${Utils.escapeHtml(user.name || '')}">
              </div>
              <div class="form-group">
                <label class="form-label">Mobile Number</label>
                <input type="text" class="form-input" value="+63 ${user.phone}" disabled>
              </div>
              <div class="form-group">
                <label class="form-label">Email (optional)</label>
                <input type="email" class="form-input" id="prof-email" value="${Utils.escapeHtml(user.email || '')}" placeholder="email@example.com">
              </div>
              <div class="form-group">
                <label class="form-label">Gender</label>
                <select class="form-select" id="prof-gender">
                  <option value="">— Select —</option>
                  ${['Male','Female','Prefer not to say'].map(g => `<option value="${g}" ${user.gender === g ? 'selected':''}>${g}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Civil Status</label>
                <select class="form-select" id="prof-civil">
                  ${['Single','Married','Widowed','Separated','Divorced'].map(s => `<option value="${s}" ${user.civil_status === s ? 'selected':''}>${s}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Date of Birth</label>
                <input type="date" class="form-input" id="prof-bday" value="${user.birthdate || ''}">
              </div>
              <div class="form-group">
                <label class="form-label">Occupation</label>
                <input type="text" class="form-input" id="prof-occupation" value="${Utils.escapeHtml(user.occupation || '')}" placeholder="Teacher, Student, etc.">
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Complete Address <span class="required">*</span></label>
              <input type="text" class="form-input" id="prof-address" value="${Utils.escapeHtml(user.address || '')}" placeholder="Blk X Lot Y, Purok Z, Barangay San Miguel">
            </div>
            <div class="form-group">
              <label class="form-label">Purok</label>
              <input type="text" class="form-input" id="prof-purok" value="${Utils.escapeHtml(user.purok || '')}" placeholder="e.g. Purok Sampaguita">
            </div>
          </div>
        </div>

        <!-- Household Members -->
        <div class="card" style="margin-bottom:var(--s-5);">
          <div class="card-header">
            <strong>Household Members</strong>
            <button id="btn-add-member" class="btn btn-outline btn-sm">+ Add Member</button>
          </div>
          <div class="card-body">
            <div id="household-list">
              ${(user.household || []).map(m => `
              <div class="household-member" data-hm-id="${m.id}">
                <div class="avatar">${Utils.initials(m.name)}</div>
                <div style="flex:1;min-width:0;">
                  <div style="font-weight:600;font-size:.875rem;">${Utils.escapeHtml(m.name)}</div>
                  <div style="font-size:.78rem;color:var(--c-text-muted);">${m.relation} · Age ${m.age}</div>
                </div>
                <button class="hm-remove" data-hm-id="${m.id}">✕</button>
              </div>`).join('')}
              ${(user.household || []).length === 0 ? `<div style="text-align:center;color:var(--c-text-muted);font-size:.875rem;padding:var(--s-5) 0;">No household members added yet.</div>` : ''}
            </div>
          </div>
        </div>

        <!-- Save button -->
        <button id="btn-save-profile" class="btn btn-primary btn-block btn-lg" style="margin-bottom:var(--s-8);">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
          Save Profile
        </button>

        <div style="text-align:center;padding:var(--s-4);border-top:1px solid var(--c-border);">
          <div style="font-size:.78rem;color:var(--c-text-light);">Your data is protected under the Data Privacy Act of 2012 (RA 10173).</div>
        </div>
      </div>`;
    },

    init() {
      // Save profile
      document.getElementById('btn-save-profile').addEventListener('click', () => {
        const name    = document.getElementById('prof-name').value.trim();
        const address = document.getElementById('prof-address').value.trim();
        if (!name || !address) { Utils.showToast('Name and address are required.', 'warning'); return; }

        const updates = {
          name,
          email:        document.getElementById('prof-email').value.trim(),
          gender:       document.getElementById('prof-gender').value,
          civil_status: document.getElementById('prof-civil').value,
          birthdate:    document.getElementById('prof-bday').value,
          occupation:   document.getElementById('prof-occupation').value.trim(),
          address,
          purok:        document.getElementById('prof-purok').value.trim(),
          profile_complete: !!(name && address),
        };

        const updated = DB.updateUser(App.user.id, updates);
        if (updated) {
          App.user = updated;
          DB.setSession(updated);
          // Update topbar
          document.getElementById('topbar-username').textContent = updated.name.split(' ')[0];
          document.getElementById('topbar-avatar').textContent = Utils.initials(updated.name);
          Utils.showToast('Profile saved successfully!', 'success', 'Saved');
        }
      });

      // Add household member
      document.getElementById('btn-add-member').addEventListener('click', () => {
        Utils.showModal(`
          <div class="modal-header"><h2 class="modal-title">Add Household Member</h2></div>
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label">Full Name <span class="required">*</span></label>
              <input type="text" class="form-input" id="hm-name" placeholder="Juan Dela Cruz">
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--s-4);">
              <div class="form-group">
                <label class="form-label">Relation</label>
                <select class="form-select" id="hm-relation">
                  <option>Spouse</option><option>Child</option><option>Parent</option>
                  <option>Sibling</option><option>Grandparent</option><option>Other</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Age</label>
                <input type="number" class="form-input" id="hm-age" min="0" max="120" placeholder="30">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" onclick="Utils.closeModal()">Cancel</button>
            <button class="btn btn-primary" id="btn-confirm-add-member">Add Member</button>
          </div>`);

        document.getElementById('btn-confirm-add-member').addEventListener('click', () => {
          const name = document.getElementById('hm-name').value.trim();
          if (!name) { Utils.showToast('Name is required.', 'warning'); return; }
          const member = {
            id: Utils.generateId(), name,
            relation: document.getElementById('hm-relation').value,
            age: parseInt(document.getElementById('hm-age').value) || 0,
          };
          const household = [...(App.user.household || []), member];
          const updated = DB.updateUser(App.user.id, { household });
          if (updated) { App.user = updated; DB.setSession(updated); }
          Utils.closeModal();
          Utils.showToast('Household member added!', 'success');
          App.navigate('/profile'); // Re-render
        });
      });

      // Remove household member
      document.getElementById('household-list').addEventListener('click', (e) => {
        const btn = e.target.closest('.hm-remove');
        if (!btn) return;
        const hmId = btn.dataset.hmId;
        const household = (App.user.household || []).filter(m => m.id !== hmId);
        const updated = DB.updateUser(App.user.id, { household });
        if (updated) { App.user = updated; DB.setSession(updated); }
        btn.closest('.household-member').remove();
        Utils.showToast('Member removed.', 'info');
      });
    }
  };

  /* ── Expose ── */
  return { login, dashboard, request, myRequests, status, incidentNew, announcements, profile };
})();
