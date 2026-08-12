/* ============================================================
   RESIDENT.JS — All resident-facing page renderers (clean build)
   E-Barangay San Miguel Portal
   ============================================================ */

const ResidentPages = (() => {

  /* ══════════════════════════════════════════════════════════
     LOGIN
  ══════════════════════════════════════════════════════════ */
  const login = {
    render() {
      return `
      <div class="login-page">
        <svg class="login-bg-shapes" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10%" cy="20%" r="180"/>
          <circle cx="80%" cy="70%" r="220"/>
          <circle cx="50%" cy="90%" r="140"/>
          <circle cx="90%" cy="10%" r="100"/>
        </svg>
        <div class="login-left">
          <img src="assets/seal.png" alt="Barangay Seal" class="login-seal">
          <div class="login-brgy-name">Barangay San Miguel</div>
          <div class="login-brgy-loc">Quezon City · Official E-Portal</div>
          <div class="login-features">
            <div class="login-feature">
              <div class="login-feature-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
              <div class="login-feature-text"><div class="login-feature-title">Request Documents Online</div><div>Clearances, certificates — no queuing needed.</div></div>
            </div>
            <div class="login-feature">
              <div class="login-feature-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
              <div class="login-feature-text"><div class="login-feature-title">Track Request Status</div><div>Get notified the moment your document is ready.</div></div>
            </div>
            <div class="login-feature">
              <div class="login-feature-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg></div>
              <div class="login-feature-text"><div class="login-feature-title">Report Incidents</div><div>Flag road damage, flooding, and other concerns.</div></div>
            </div>
          </div>
        </div>
        <div class="login-right">
          <div class="login-card">
            <div class="login-mobile-brand">
              <img src="assets/seal.png" alt="Seal" class="login-mobile-seal">
              <div style="font-family:var(--f-heading);font-weight:700;color:var(--c-primary);">Barangay San Miguel</div>
              <div style="font-size:.8rem;color:var(--c-text-muted);">Quezon City Official Portal</div>
            </div>
            <div id="login-step-phone">
              <h1 class="login-title">Sign In</h1>
              <p class="login-subtitle">Enter your mobile number to receive a one-time code.</p>
              <div class="form-group">
                <label class="form-label" for="login-phone">Mobile Number <span class="required">*</span></label>
                <div class="phone-input-wrap">
                  <span class="phone-prefix">🇵🇭 +63</span>
                  <input type="tel" id="login-phone" class="form-input" placeholder="9XX XXX XXXX" maxlength="10" inputmode="numeric" autocomplete="tel-local">
                </div>
                <span class="form-hint">We'll send a 6-digit code to verify your identity.</span>
                <div class="form-error hidden" id="phone-error"></div>
              </div>
              <button id="btn-send-otp" class="btn btn-primary btn-block btn-lg" style="margin-bottom:var(--s-4);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Send OTP
              </button>
              <div class="login-divider">or</div>
              <button id="btn-guest" class="btn btn-ghost btn-block">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                Browse as Guest (Announcements only)
              </button>
              <div class="trust-badges">
                <div class="trust-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> HTTPS Secured</div>
                <div class="trust-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Data Privacy Act</div>
                <div class="trust-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Official Portal</div>
              </div>
            </div>
            <div id="login-step-otp" class="hidden">
              <button id="btn-back-phone" class="btn btn-ghost btn-sm" style="margin-bottom:var(--s-4);padding-left:0;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Back
              </button>
              <h1 class="login-title">Enter OTP</h1>
              <p class="login-subtitle">Check your messages for your verification code.</p>
              <div class="otp-sent-info">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary)" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <div>
                  <strong>Code sent to +63 <span id="otp-phone-display"></span></strong>
                  <div style="font-size:.78rem;color:var(--c-text-muted);margin-top:2px;">(Demo: enter any 6-digit code)</div>
                </div>
              </div>
              <div class="otp-inputs">
                <input type="tel" class="otp-input" maxlength="1" inputmode="numeric" data-idx="0">
                <input type="tel" class="otp-input" maxlength="1" inputmode="numeric" data-idx="1">
                <input type="tel" class="otp-input" maxlength="1" inputmode="numeric" data-idx="2">
                <input type="tel" class="otp-input" maxlength="1" inputmode="numeric" data-idx="3">
                <input type="tel" class="otp-input" maxlength="1" inputmode="numeric" data-idx="4">
                <input type="tel" class="otp-input" maxlength="1" inputmode="numeric" data-idx="5">
              </div>
              <div class="form-error hidden" id="otp-error" style="justify-content:center;margin-top:var(--s-3);"></div>
              <button id="btn-verify-otp" class="btn btn-primary btn-block btn-lg" style="margin-top:var(--s-5);">Verify &amp; Sign In</button>
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

      document.getElementById('btn-send-otp').addEventListener('click', () => {
        const raw = phoneInput.value.replace(/\D/g, '');
        const errEl = document.getElementById('phone-error');
        errEl.classList.add('hidden');
        phoneInput.classList.remove('error');
        if (raw.length !== 10 || !raw.startsWith('9')) {
          errEl.textContent = 'Please enter a valid 10-digit Philippine number starting with 9.';
          errEl.classList.remove('hidden');
          phoneInput.classList.add('error');
          return;
        }
        _phone = raw;
        Utils.sendOTP(raw);
        document.getElementById('otp-phone-display').textContent = raw;
        stepPhone.classList.add('hidden');
        stepOtp.classList.remove('hidden');
        setTimeout(() => document.querySelector('.otp-input').focus(), 100);
        Utils.showToast('OTP code sent! (Demo: any 6 digits work)', 'success', 'Code Sent');
      });

      document.getElementById('btn-back-phone').addEventListener('click', () => {
        stepPhone.classList.remove('hidden');
        stepOtp.classList.add('hidden');
      });

      document.getElementById('btn-guest').addEventListener('click', () => {
        App.navigate('/announcements');
      });

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
          otpInputs.forEach((inp2, j) => { inp2.value = pasted[j] || ''; inp2.classList.toggle('filled', !!pasted[j]); });
          e.preventDefault();
        });
      });

      document.getElementById('btn-verify-otp').addEventListener('click', () => {
        const code = Array.from(otpInputs).map(i => i.value).join('');
        const errEl = document.getElementById('otp-error');
        errEl.classList.add('hidden');
        if (code.length !== 6) { errEl.textContent = 'Please enter all 6 digits.'; errEl.classList.remove('hidden'); return; }
        if (!Utils.verifyOTP(_phone, code)) { errEl.textContent = 'Incorrect code. Please try again.'; errEl.classList.remove('hidden'); return; }

        let user = DB.getUserByPhone(_phone);
        if (!user) {
          const newUser = { id: Utils.generateId(), phone: _phone, name: '', role: 'resident', address: '', purok: '', civil_status: '', birthdate: '', gender: '', occupation: '', email: '', household: [], profile_complete: false, created_at: new Date().toISOString() };
          const users = DB.getUsers();
          users.push(newUser);
          localStorage.setItem('brgy_users', JSON.stringify(users));
          user = newUser;
          Utils.showToast('Welcome! Please complete your profile.', 'info', 'New Account');
        } else {
          Utils.showToast('Welcome back, ' + (user.name || 'resident') + '!', 'success', 'Signed in');
        }
        App.login(user);
      });

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
      const allReqs    = DB.getRequests({ resident_id: user.id });
      const activeReqs = allReqs.filter(r => !['released','rejected'].includes(r.status));
      const anns       = DB.getAnnouncements().slice(0, 3);
      const greeting   = Utils.getDayGreeting();
      return `
      <div class="dashboard-hero page-enter">
        <div class="hero-greeting">${greeting} 👋</div>
        <div class="hero-name">${Utils.escapeHtml(user.name || 'Resident')}</div>
        <div class="hero-cta-row">
          <button onclick="App.navigate('/request')" class="btn btn-accent btn-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            Request a Document
          </button>
          ${!user.profile_complete ? '<button onclick="App.navigate(\'/profile\')" class="hero-profile-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Complete your profile</button>' : ''}
        </div>
      </div>
      <div class="dashboard-content">
        <div class="stats-row">
          <div class="stat-card" style="--stat-accent:var(--c-primary);--stat-icon-bg:var(--c-primary-xlight);">
            <div class="stat-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg></div>
            <div class="stat-card-value">${activeReqs.length}</div>
            <div class="stat-card-label">Active Requests</div>
          </div>
          <div class="stat-card" style="--stat-accent:var(--c-success);--stat-icon-bg:var(--c-success-light);">
            <div class="stat-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg></div>
            <div class="stat-card-value">${allReqs.filter(r => r.status === 'released').length}</div>
            <div class="stat-card-label">Completed</div>
          </div>
          <div class="stat-card" style="--stat-accent:var(--c-accent);--stat-icon-bg:var(--c-accent-light);">
            <div class="stat-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/></svg></div>
            <div class="stat-card-value">${DB.getAnnouncements().filter(a => a.important).length}</div>
            <div class="stat-card-label">Urgent Alerts</div>
          </div>
        </div>
        <div class="section-title">Quick Actions</div>
        <div class="quick-actions-grid">
          <a href="#/request" class="quick-action"><div class="qa-icon" style="background:var(--c-primary-xlight);color:var(--c-primary);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><span class="qa-label">Request Document</span></a>
          <a href="#/my-requests" class="quick-action"><div class="qa-icon" style="background:var(--c-info-light);color:var(--c-info);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div><span class="qa-label">Track Status</span></a>
          <a href="#/incidents/new" class="quick-action"><div class="qa-icon" style="background:var(--c-warning-light);color:var(--c-warning);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg></div><span class="qa-label">Report Incident</span></a>
          <a href="#/announcements" class="quick-action"><div class="qa-icon" style="background:var(--c-success-light);color:var(--c-success);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></div><span class="qa-label">Announcements</span></a>
        </div>
        ${activeReqs.length > 0 ? `
        <div class="section-title" style="margin-top:var(--s-6);">Active Requests <a href="#/my-requests" class="section-link">View all &rarr;</a></div>
        <div>${activeReqs.map(r => `
          <a class="request-card" href="#/status/${r.id}">
            <div class="request-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg></div>
            <div class="request-card-info"><div class="request-card-type">${Utils.escapeHtml(r.type)}</div><div class="request-card-meta">${Utils.escapeHtml(r.purpose)} &middot; ${Utils.formatDateShort(r.submitted_at)}</div></div>
            <div class="request-card-right"><span class="${Utils.statusBadgeClass(r.status)}">${Utils.statusLabel(r.status)}</span><span class="text-xs text-muted">${r.ref}</span></div>
          </a>`).join('')}</div>` : `
        <div class="empty-state" style="margin-top:var(--s-6);padding:var(--s-8);">
          <div class="empty-state-icon">📄</div>
          <div class="empty-state-title">No active requests</div>
          <div class="empty-state-desc">Your document requests will appear here.</div>
          <button onclick="App.navigate('/request')" class="btn btn-primary" style="margin-top:var(--s-4);">Request a Document</button>
        </div>`}
        <div class="section-title" style="margin-top:var(--s-8);">Latest Announcements <a href="#/announcements" class="section-link">View all &rarr;</a></div>
        ${anns.map(a => `
        <div class="ann-card${a.important ? ' important' : ''}" style="margin-bottom:var(--s-3);">
          <div class="ann-card-header">
            <div><div class="ann-card-title">${Utils.escapeHtml(a.title)}</div><div class="ann-card-meta"><span>${Utils.formatDateShort(a.published_at)}</span><span>${Utils.escapeHtml(a.author)}</span></div></div>
            <span class="badge badge-${a.category.toLowerCase()}">${a.category}</span>
          </div>
          <div class="ann-card-body" style="padding-top:0;">${Utils.escapeHtml(a.content.substring(0,160))}${a.content.length > 160 ? '&hellip;' : ''}</div>
        </div>`).join('')}
        <div style="text-align:center;padding:var(--s-8) var(--s-4) var(--s-4);border-top:1px solid var(--c-border);margin-top:var(--s-8);">
          <div style="font-size:.78rem;color:var(--c-text-light);">Need help? Visit us in person.</div>
          <div style="font-size:.875rem;color:var(--c-text-muted);font-weight:600;margin-top:4px;">Barangay Hall &middot; (02) 8123-4567 &middot; Mon&ndash;Fri 8AM&ndash;5PM</div>
        </div>
      </div>`;
    },
    init() {}
  };

  /* ══════════════════════════════════════════════════════════
     REQUEST DOCUMENT — 4-step stepper (flat state object)
  ══════════════════════════════════════════════════════════ */
  const request = {
    _step: 1,
    _data: {},
    _docTypes: [
      { id: 'clearance', name: 'Barangay Clearance',          fee: 75,  icon: '📄', ids: ['Government ID','Proof of Residence'] },
      { id: 'residency', name: 'Certificate of Residency',    fee: 50,  icon: '🏠', ids: ['Government ID','Proof of Residence'] },
      { id: 'indigency', name: 'Certificate of Indigency',    fee: 0,   icon: '🤝', ids: ['Government ID','Proof of Residence','Proof of Income / no-income certification'] },
      { id: 'business',  name: 'Business Permit Endorsement', fee: 200, icon: '🏪', ids: ['Government ID','DTI/SEC/CDA Registration','Proof of Business Location'] },
    ],
    _purposes: ['Employment','Travel','School enrollment','Government assistance','Hospital/Medical','Business permit','Bank requirements','Other'],

    render() {
      this._step = 1;
      this._data = {};
      const user = App.user;
      if (user) { this._data.name = user.name || ''; this._data.address = user.address || ''; this._data.civil_status = user.civil_status || 'Single'; }
      return `
      <div class="request-page page-enter">
        <div style="padding:0 0 var(--s-5);">
          <button onclick="App.navigate('/dashboard')" class="btn btn-ghost btn-sm"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        </div>
        <h1 class="page-title" style="margin-bottom:var(--s-6);">Request a Document</h1>
        <div class="request-form-card">
          <div id="req-stepper">${this._renderStepper()}</div>
          <div class="request-step-content" id="req-step-content">${this._renderStep()}</div>
          <div class="request-step-nav" id="req-step-nav">${this._renderNav()}</div>
        </div>
      </div>`;
    },

    _renderStepper() {
      const steps = ['Choose Type','Fill Details','Upload & Pay','Review'];
      return `<div class="stepper">${steps.map((s, i) => `
        <div class="stepper-item ${i+1 < this._step ? 'completed' : i+1 === this._step ? 'active' : ''}">
          <div class="stepper-dot">${i+1 < this._step ? '&#10003;' : i+1}</div>
          <div class="stepper-label">${s}</div>
        </div>`).join('')}</div>`;
    },

    _renderNav() {
      return `
        <button id="req-back" class="btn btn-ghost ${this._step === 1 ? 'hidden' : ''}">&#8592; Back</button>
        <div style="flex:1"></div>
        ${this._step < 4
          ? '<button id="req-next" class="btn btn-primary">Next &#8594;</button>'
          : '<button id="req-submit" class="btn btn-primary btn-lg"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg> Submit Request</button>'}`;
    },

    _renderStep() {
      if (this._step === 1) return this._step1();
      if (this._step === 2) return this._step2();
      if (this._step === 3) return this._step3();
      return this._step4();
    },

    _step1() {
      const doc = this._docTypes.find(d => d.id === this._data.typeId);
      return `
      <div>
        <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:var(--s-2);">Choose Document Type</h2>
        <p style="font-size:.875rem;color:var(--c-text-muted);margin-bottom:var(--s-5);">Select the certificate or clearance you need.</p>
        <div class="doc-type-grid" id="doc-type-grid">
          ${this._docTypes.map(d => `
          <div class="doc-type-card ${this._data.typeId === d.id ? 'selected' : ''}" data-type="${d.id}">
            <div style="font-size:1.75rem;">${d.icon}</div>
            <div class="doc-type-name">${d.name}</div>
            <div class="doc-type-fee">${d.fee === 0 ? 'Free' : '&#8369;'+d.fee}</div>
          </div>`).join('')}
        </div>
        ${doc ? `<div class="req-id-list" style="margin-top:var(--s-5);">
          <div class="req-id-title"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Required Documents</div>
          <ul>${doc.ids.map(id => '<li>'+id+'</li>').join('')}</ul>
        </div>` : ''}
      </div>`;
    },

    _step2() {
      const d = this._data;
      const purposes = this._purposes;
      return `
      <div>
        <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:var(--s-2);">Fill in Details</h2>
        <p style="font-size:.875rem;color:var(--c-text-muted);margin-bottom:var(--s-5);">Review and complete your personal details.</p>
        <div class="form-group">
          <label class="form-label">Full Name <span class="required">*</span></label>
          <input type="text" class="form-input" id="req-name" value="${Utils.escapeHtml(d.name || '')}" placeholder="Juan Dela Cruz">
        </div>
        <div class="form-group">
          <label class="form-label">Complete Address <span class="required">*</span></label>
          <input type="text" class="form-input" id="req-address" value="${Utils.escapeHtml(d.address || '')}" placeholder="Blk X Lot Y, Purok Z">
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--s-4);">
          <div class="form-group">
            <label class="form-label">Civil Status</label>
            <select class="form-select" id="req-civil">
              ${['Single','Married','Widowed','Separated','Divorced'].map(s => `<option value="${s}" ${(d.civil_status||'Single')===s?'selected':''}>${s}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Years in Barangay</label>
            <input type="number" class="form-input" id="req-years" value="${d.years_in_brgy||''}" min="0" max="99" placeholder="5">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Purpose of Request <span class="required">*</span></label>
          <select class="form-select" id="req-purpose">
            <option value="">&#8212; Select purpose &#8212;</option>
            ${purposes.map(p => `<option value="${p}" ${d.purpose===p?'selected':''}>${p}</option>`).join('')}
          </select>
        </div>
        <div class="form-error hidden" id="step2-err"></div>
      </div>`;
    },

    _step3() {
      const doc = this._docTypes.find(d => d.id === this._data.typeId);
      const fee = doc ? doc.fee : 0;
      return `
      <div>
        <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:var(--s-2);">Upload ID &amp; Payment</h2>
        <p style="font-size:.875rem;color:var(--c-text-muted);margin-bottom:var(--s-5);">Upload a clear photo of your valid government ID.</p>
        <div class="form-group">
          <label class="form-label">Valid Government ID <span class="required">*</span></label>
          <div class="file-drop" id="id-drop-zone">
            <div class="file-drop-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg></div>
            <div class="file-drop-text">Drag &amp; drop or <span class="file-drop-link">browse</span></div>
            <div style="font-size:.75rem;margin-top:4px;color:var(--c-text-muted);">JPG, PNG, PDF &middot; Max 5MB</div>
          </div>
          <div id="id-file-preview" class="${this._data.idFile ? '' : 'hidden'}">
            <div class="file-preview">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
              <span class="file-preview-name" id="file-name-display">${this._data.idFile || ''}</span>
              <span class="file-preview-remove" id="remove-id-file">&times;</span>
            </div>
          </div>
          <input type="file" id="id-file-input" class="hidden" accept="image/*,.pdf">
          <div class="form-error hidden" id="step3-err"></div>
        </div>
        ${fee > 0 ? `
        <h3 style="font-size:.9rem;font-weight:700;margin-bottom:var(--s-3);">Payment (&#8369;${fee})</h3>
        <div class="payment-options">
          <label class="payment-option ${this._data.paymentMethod==='online'?'selected':''}" data-pay="online">
            <div class="payment-option-icon">💳</div>
            <div class="payment-option-info"><div class="payment-option-name">Pay Online</div><div class="payment-option-desc">GCash, Maya, or bank transfer</div></div>
            <input type="radio" name="pay" value="online" ${this._data.paymentMethod==='online'?'checked':''} style="accent-color:var(--c-primary);">
          </label>
          <label class="payment-option ${this._data.paymentMethod==='hall'?'selected':''}" data-pay="hall">
            <div class="payment-option-icon">🏛️</div>
            <div class="payment-option-info"><div class="payment-option-name">Pay at Barangay Hall</div><div class="payment-option-desc">Upon pickup of your document</div></div>
            <input type="radio" name="pay" value="hall" ${this._data.paymentMethod==='hall'?'checked':''} style="accent-color:var(--c-primary);">
          </label>
        </div>
        <div class="fee-summary">
          <div class="fee-row"><span>Document fee</span><span>&#8369;${fee}.00</span></div>
          <div class="fee-row"><span>Processing</span><span>Free</span></div>
          <div class="fee-row total"><span>Total</span><span>&#8369;${fee}.00</span></div>
        </div>` : `
        <div class="alert alert-success"><svg class="alert-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg><div><div class="alert-title">No payment required!</div>This certificate is issued free of charge.</div></div>`}
      </div>`;
    },

    _step4() {
      const doc = this._docTypes.find(d => d.id === this._data.typeId);
      const d = this._data;
      return `
      <div>
        <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:var(--s-2);">Review &amp; Submit</h2>
        <p style="font-size:.875rem;color:var(--c-text-muted);margin-bottom:var(--s-5);">Please review your information before submitting.</p>
        <div class="review-section">
          <div class="review-label">Document</div>
          <div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:var(--r-md);padding:var(--s-4) var(--s-5);display:flex;align-items:center;gap:var(--s-3);">
            <span style="font-size:2rem;">${doc ? doc.icon : ''}</span>
            <div><div style="font-weight:700;">${doc ? doc.name : ''}</div><div style="font-size:.825rem;color:var(--c-text-muted);">Fee: ${doc && doc.fee === 0 ? 'Free' : '&#8369;'+(doc?doc.fee:'')}</div></div>
          </div>
        </div>
        <div class="review-section">
          <div class="review-label">Personal Details</div>
          <div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:var(--r-md);padding:var(--s-4) var(--s-5);">
            <div class="review-grid">
              <div><div class="review-item-label">Full Name</div><div class="review-item-value">${Utils.escapeHtml(d.name||'')}</div></div>
              <div><div class="review-item-label">Civil Status</div><div class="review-item-value">${d.civil_status||''}</div></div>
              <div><div class="review-item-label">Address</div><div class="review-item-value">${Utils.escapeHtml(d.address||'')}</div></div>
              <div><div class="review-item-label">Purpose</div><div class="review-item-value">${d.purpose||''}</div></div>
              <div><div class="review-item-label">Payment</div><div class="review-item-value">${!doc||doc.fee===0?'Free':d.paymentMethod==='online'?'Online payment':'Pay at hall'}</div></div>
              <div><div class="review-item-label">ID Uploaded</div><div class="review-item-value">${d.idFile||'Not uploaded'}</div></div>
            </div>
          </div>
        </div>
        <div class="alert alert-info" style="margin-top:var(--s-4);">
          <svg class="alert-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <div>By submitting, you confirm all information is accurate and truthful.</div>
        </div>
      </div>`;
    },

    _refresh() {
      document.getElementById('req-stepper').innerHTML = this._renderStepper();
      document.getElementById('req-step-content').innerHTML = this._renderStep();
      document.getElementById('req-step-nav').innerHTML = this._renderNav();
      this._attachNav();
      if (this._step === 1) this._attachStep1();
      if (this._step === 3) this._attachStep3();
    },

    _attachNav() {
      document.getElementById('req-back')?.addEventListener('click', () => {
        this._step--;
        this._refresh();
      });
      document.getElementById('req-next')?.addEventListener('click', () => {
        if (!this._validate()) return;
        this._collect();
        this._step++;
        this._refresh();
      });
      document.getElementById('req-submit')?.addEventListener('click', () => {
        const user = App.user;
        const doc  = this._docTypes.find(d => d.id === this._data.typeId);
        const newReq = DB.createRequest({
          resident_id: user.id, resident_name: this._data.name, resident_phone: user.phone,
          type: doc.name, purpose: this._data.purpose, amount: doc.fee,
          address: this._data.address, civil_status: this._data.civil_status, years_in_brgy: this._data.years_in_brgy || '',
          payment_status: doc.fee === 0 ? 'free' : this._data.paymentMethod === 'online' ? 'paid' : 'pending',
        });
        Utils.showToast('Request submitted! Ref: ' + newReq.ref, 'success', 'Submitted');
        App.navigate('/status/' + newReq.id);
      });
    },

    _attachStep1() {
      document.getElementById('doc-type-grid')?.addEventListener('click', (e) => {
        const card = e.target.closest('.doc-type-card');
        if (!card) return;
        this._data.typeId = card.dataset.type;
        const doc = this._docTypes.find(d => d.id === this._data.typeId);
        this._data.fee  = doc ? doc.fee : 0;
        this._data.type = doc ? doc.name : '';
        document.querySelectorAll('.doc-type-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        // Re-render only the step content for the IDs list
        document.getElementById('req-step-content').innerHTML = this._step1();
        this._attachStep1();
      });
    },

    _attachStep3() {
      const dropZone  = document.getElementById('id-drop-zone');
      const fileInput = document.getElementById('id-file-input');
      if (!dropZone) return;
      dropZone.addEventListener('click', () => fileInput.click());
      dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('dragover'); });
      dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
      dropZone.addEventListener('drop', e => {
        e.preventDefault(); dropZone.classList.remove('dragover');
        if (e.dataTransfer.files[0]) this._handleFile(e.dataTransfer.files[0]);
      });
      fileInput.addEventListener('change', () => { if (fileInput.files[0]) this._handleFile(fileInput.files[0]); });
      document.getElementById('remove-id-file')?.addEventListener('click', () => {
        this._data.idFile = null;
        document.getElementById('id-file-preview').classList.add('hidden');
      });
      document.querySelectorAll('.payment-option').forEach(opt => {
        opt.addEventListener('click', () => {
          this._data.paymentMethod = opt.dataset.pay;
          document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
          opt.classList.add('selected');
        });
      });
    },

    _handleFile(file) {
      if (file.size > 5*1024*1024) { Utils.showToast('File too large. Max 5MB.', 'error'); return; }
      this._data.idFile = file.name;
      const preview = document.getElementById('id-file-preview');
      if (preview) { preview.classList.remove('hidden'); document.getElementById('file-name-display').textContent = file.name; }
    },

    _validate() {
      if (this._step === 1 && !this._data.typeId) { Utils.showToast('Please select a document type.', 'warning'); return false; }
      if (this._step === 2) {
        const name    = document.getElementById('req-name')?.value.trim();
        const address = document.getElementById('req-address')?.value.trim();
        const purpose = document.getElementById('req-purpose')?.value;
        const errEl   = document.getElementById('step2-err');
        if (!name || !address || !purpose) { errEl.textContent = 'Please fill in all required fields.'; errEl.classList.remove('hidden'); return false; }
        errEl.classList.add('hidden');
      }
      if (this._step === 3) {
        const errEl = document.getElementById('step3-err');
        const doc = this._docTypes.find(d => d.id === this._data.typeId);
        if (!this._data.idFile) { errEl.textContent = 'Please upload a valid ID.'; errEl.classList.remove('hidden'); return false; }
        if (doc && doc.fee > 0 && !this._data.paymentMethod) { errEl.textContent = 'Please select a payment method.'; errEl.classList.remove('hidden'); return false; }
        errEl.classList.add('hidden');
      }
      return true;
    },

    _collect() {
      if (this._step === 2) {
        this._data.name         = document.getElementById('req-name')?.value.trim();
        this._data.address      = document.getElementById('req-address')?.value.trim();
        this._data.civil_status = document.getElementById('req-civil')?.value;
        this._data.years_in_brgy = document.getElementById('req-years')?.value;
        this._data.purpose      = document.getElementById('req-purpose')?.value;
      }
    },

    init() {
      this._attachNav();
      this._attachStep1();
    }
  };

  /* ══════════════════════════════════════════════════════════
     MY REQUESTS
  ══════════════════════════════════════════════════════════ */
  const myRequests = {
    render() {
      const reqs = DB.getRequests({ resident_id: App.user.id });
      return `
      <div class="my-requests-page page-enter">
        <div class="page-header-row">
          <div><h1 class="page-title">My Requests</h1><p class="page-subtitle">Track all your document requests.</p></div>
          <button onclick="App.navigate('/request')" class="btn btn-primary btn-sm"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> New</button>
        </div>
        ${reqs.length === 0
          ? '<div class="empty-state" style="margin-top:var(--s-8);"><div class="empty-state-icon">📭</div><div class="empty-state-title">No requests yet</div><div class="empty-state-desc">Submit your first document request to get started.</div><button onclick="App.navigate(\'/request\')" class="btn btn-primary" style="margin-top:var(--s-4);">Request a Document</button></div>'
          : '<div style="margin-top:var(--s-5);">' + reqs.map(r => `
          <a class="request-card" href="#/status/${r.id}" style="margin-bottom:var(--s-2);">
            <div class="request-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg></div>
            <div class="request-card-info"><div class="request-card-type">${Utils.escapeHtml(r.type)}</div><div class="request-card-meta">${Utils.formatDateShort(r.submitted_at)} &middot; ${Utils.escapeHtml(r.purpose)} ${r.amount > 0 ? '&middot; &#8369;'+r.amount : '&middot; Free'}</div></div>
            <div class="request-card-right"><span class="${Utils.statusBadgeClass(r.status)}">${Utils.statusLabel(r.status)}</span><span class="text-xs text-muted">${r.ref}</span></div>
          </a>`).join('') + '</div>'}
      </div>`;
    },
    init() {}
  };

  /* ══════════════════════════════════════════════════════════
     STATUS TRACKER
  ══════════════════════════════════════════════════════════ */
  const status = {
    render(params) {
      const req = DB.getRequestById(params.id);
      if (!req) return `<div class="status-page page-enter"><div class="empty-state" style="margin-top:var(--s-12);"><div class="empty-state-icon">❓</div><div class="empty-state-title">Request not found</div><button onclick="App.navigate('/my-requests')" class="btn btn-primary" style="margin-top:var(--s-4);">My Requests</button></div></div>`;

      const steps = [
        { key: 'submitted',    label: 'Submitted',        desc: 'Your request has been received by the barangay.' },
        { key: 'under_review', label: 'Under Review',     desc: 'Staff is reviewing your application and documents.' },
        { key: 'approved',     label: 'Approved',         desc: 'Your request has been approved and is being prepared.' },
        { key: 'released',     label: 'Ready for Pickup', desc: 'Your document is ready! Visit the barangay hall to claim it.' },
      ];
      const order = ['submitted','under_review','approved','released','rejected'];
      const curIdx = order.indexOf(req.status);
      const sla = Utils.getSLAStatus(req.submitted_at, req.status);

      return `
      <div class="status-page page-enter">
        <button onclick="App.navigate('/my-requests')" class="btn btn-ghost btn-sm" style="margin-bottom:var(--s-4);"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> All Requests</button>
        <div class="status-ref-card">
          <div class="ref-type">${Utils.escapeHtml(req.type)}</div>
          <div class="ref-label">Reference Number</div>
          <div class="ref-number">${req.ref}</div>
          <div class="ref-actions">
            <button class="ref-btn" onclick="Utils.copyToClipboard('${req.ref}')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy Ref</button>
            ${req.status === 'released' ? '<button class="ref-btn" onclick="Utils.downloadTextFile(\''+req.ref+'.txt\',\'Barangay San Miguel\\nRef: '+req.ref+'\\nType: '+req.type+'\\nStatus: Ready for Pickup\')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download</button>' : ''}
          </div>
        </div>
        ${!['released','rejected'].includes(req.status) ? `<div class="estimated-time"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><div><strong>Estimated completion:</strong> 2&ndash;3 working days ${sla ? '&nbsp;&middot;&nbsp;<span class="sla-badge '+sla.cls+'">'+sla.label+'</span>' : ''}</div></div>` : ''}
        ${req.status === 'rejected' ? `<div class="alert alert-danger" style="margin-bottom:var(--s-5);"><svg class="alert-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><div><div class="alert-title">Request Rejected</div>${Utils.escapeHtml(req.reject_reason)}</div></div>` : ''}
        ${req.notes && req.status !== 'rejected' ? `<div class="alert alert-info" style="margin-bottom:var(--s-5);"><svg class="alert-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><div><div class="alert-title">Staff Note</div>${Utils.escapeHtml(req.notes)}</div></div>` : ''}
        <div class="card" style="margin-bottom:var(--s-5);">
          <div class="card-header"><strong>Status Timeline</strong></div>
          <div class="card-body">
            <div class="timeline">
              ${req.status === 'rejected'
                ? steps.slice(0,2).map((s,i) => `<div class="timeline-item done"><div class="timeline-dot">&#10003;</div><div class="timeline-title">${s.label}</div></div>`).join('') + `<div class="timeline-item current"><div class="timeline-dot">&times;</div><div class="timeline-title">Rejected</div><div class="timeline-meta">${Utils.formatDate(req.updated_at)}</div><div class="timeline-detail">${Utils.escapeHtml(req.reject_reason)}</div></div>`
                : steps.map((s,i) => {
                    const idx = order.indexOf(s.key);
                    const state = idx < curIdx ? 'done' : s.key === req.status ? 'current' : 'pending';
                    return `<div class="timeline-item ${state}"><div class="timeline-dot">${state==='done'?'&#10003;':i+1}</div><div class="timeline-title">${s.label}</div>${state!=='pending'?`<div class="timeline-meta">${Utils.formatDate(req.updated_at)}</div>`:''} ${state==='current'?`<div class="timeline-detail">${s.desc}</div>`:''}</div>`;
                  }).join('')}
            </div>
          </div>
        </div>
        <div class="card" style="margin-bottom:var(--s-8);">
          <div class="card-header"><strong>Request Details</strong></div>
          <div class="card-body">
            <div class="review-grid">
              <div><div class="review-item-label">Purpose</div><div class="review-item-value">${Utils.escapeHtml(req.purpose)}</div></div>
              <div><div class="review-item-label">Submitted</div><div class="review-item-value">${Utils.formatDate(req.submitted_at)}</div></div>
              <div><div class="review-item-label">Last Updated</div><div class="review-item-value">${Utils.formatDate(req.updated_at)}</div></div>
              <div><div class="review-item-label">Payment</div><div class="review-item-value"><span class="${Utils.statusBadgeClass(req.payment_status)}">${req.payment_status==='free'?'Free':req.payment_status==='paid'?'Paid':'Pending'}</span></div></div>
            </div>
          </div>
          <div class="card-footer"><div style="font-size:.78rem;color:var(--c-text-muted);">Inquiries: Barangay Hall (02) 8123-4567 &middot; Mon&ndash;Fri 8AM&ndash;5PM</div></div>
        </div>
      </div>`;
    },
    init() {}
  };

  /* ══════════════════════════════════════════════════════════
     INCIDENT REPORT
  ══════════════════════════════════════════════════════════ */
  const incidentNew = {
    _category: '',
    _lat: 14.676, _lng: 121.044,
    _anon: false,

    render() {
      const cats = [
        { id: 'Road Damage', emoji: '🚧' }, { id: 'Flooding', emoji: '🌊' },
        { id: 'Illegal Dumping', emoji: '🗑️' }, { id: 'Street Light Out', emoji: '💡' },
        { id: 'Public Safety', emoji: '🚨' }, { id: 'Others', emoji: '📋' },
      ];
      return `
      <div class="incident-page page-enter">
        <div class="page-header-row" style="margin-bottom:var(--s-5);">
          <div><h1 class="page-title">Report an Incident</h1><p class="page-subtitle">Help keep Barangay San Miguel safe and clean.</p></div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="form-group">
              <label class="form-label">Category <span class="required">*</span></label>
              <div class="category-grid" id="cat-grid">
                ${cats.map(c => `<button class="category-btn ${this._category===c.id?'selected':''}" data-cat="${c.id}"><span>${c.emoji}</span><span>${c.id}</span></button>`).join('')}
              </div>
              <div class="form-error hidden" id="cat-err"></div>
            </div>
            <div class="form-group">
              <label class="form-label">Description <span class="required">*</span></label>
              <textarea class="form-textarea" id="inc-desc" rows="4" placeholder="Describe the incident in detail..."></textarea>
              <div class="form-error hidden" id="desc-err"></div>
            </div>
            <div class="form-group">
              <label class="form-label">Location (tap map to pin)</label>
              <div class="incident-map-wrap"><div id="incident-map"></div><div class="map-overlay-hint" id="map-hint">Tap the map to pin location</div></div>
              <div class="form-hint" id="map-label">📍 Barangay San Miguel, Quezon City (default)</div>
            </div>
            <div class="form-group">
              <label class="form-label">Photo (optional)</label>
              <div class="file-drop" id="photo-drop">
                <div class="file-drop-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>
                <div class="file-drop-text">Upload photo or <span class="file-drop-link">browse</span></div>
              </div>
              <div id="photo-preview" class="hidden"><img id="photo-img" style="max-height:120px;border-radius:var(--r-md);border:1px solid var(--c-border);margin-top:var(--s-2);" alt=""></div>
              <input type="file" id="photo-input" accept="image/*" class="hidden">
            </div>
            <div class="form-group">
              <label class="toggle-wrap">
                <div class="toggle" id="anon-toggle"></div>
                <div><div style="font-weight:600;font-size:.875rem;">Submit Anonymously</div><div style="font-size:.78rem;color:var(--c-text-muted);">Your name won't appear on this report.</div></div>
              </label>
            </div>
            <div class="form-error hidden" id="inc-err"></div>
            <button id="btn-submit-inc" class="btn btn-primary btn-block btn-lg" style="margin-top:var(--s-2);">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Submit Report
            </button>
          </div>
        </div>
      </div>`;
    },

    init() {
      this._category = ''; this._anon = false;
      setTimeout(() => {
        if (typeof L === 'undefined') return;
        const mapEl = document.getElementById('incident-map');
        if (!mapEl) return;
        const map = L.map('incident-map').setView([14.676, 121.044], 16);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap', maxZoom: 19 }).addTo(map);
        let marker = null;
        map.on('click', (e) => {
          this._lat = e.latlng.lat; this._lng = e.latlng.lng;
          if (marker) map.removeLayer(marker);
          marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
          document.getElementById('map-hint').style.display = 'none';
          document.getElementById('map-label').textContent = '📍 ' + e.latlng.lat.toFixed(5) + ', ' + e.latlng.lng.toFixed(5);
        });
      }, 200);

      document.getElementById('cat-grid').addEventListener('click', (e) => {
        const btn = e.target.closest('.category-btn');
        if (!btn) return;
        this._category = btn.dataset.cat;
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        document.getElementById('cat-err').classList.add('hidden');
      });

      document.getElementById('photo-drop').addEventListener('click', () => document.getElementById('photo-input').click());
      document.getElementById('photo-input').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => { document.getElementById('photo-preview').classList.remove('hidden'); document.getElementById('photo-img').src = ev.target.result; };
        reader.readAsDataURL(file);
      });

      const toggle = document.getElementById('anon-toggle');
      toggle.addEventListener('click', () => { this._anon = !this._anon; toggle.classList.toggle('on', this._anon); });

      document.getElementById('btn-submit-inc').addEventListener('click', () => {
        const desc = document.getElementById('inc-desc').value.trim();
        const errEl = document.getElementById('inc-err');
        errEl.classList.add('hidden');
        if (!this._category) { document.getElementById('cat-err').textContent = 'Please select a category.'; document.getElementById('cat-err').classList.remove('hidden'); return; }
        if (!desc) { errEl.textContent = 'Please enter a description.'; errEl.classList.remove('hidden'); return; }
        const user = App.user;
        const newInc = DB.createIncident({
          reporter_id: user.id, reporter_name: this._anon ? 'Anonymous' : (user.name || 'Resident'),
          reporter_phone: this._anon ? '' : user.phone, anonymous: this._anon,
          category: this._category, description: desc,
          location: { lat: this._lat, lng: this._lng, address: this._lat.toFixed(5) + ', ' + this._lng.toFixed(5) },
          photo: null,
        });
        Utils.showToast('Incident reported! Ref: ' + newInc.ref, 'success', 'Report Submitted');
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
      const cats = ['All','Health','Disaster','Events','General'];
      const all = DB.getAnnouncements();
      const list = this._filter === 'All' ? all : all.filter(a => a.category === this._filter);
      return `
      <div class="announcements-page page-enter">
        <div class="page-header-row" style="margin-bottom:var(--s-5);">
          <div><h1 class="page-title">Announcements</h1><p class="page-subtitle">Latest news from Barangay San Miguel.</p></div>
        </div>
        <div class="filter-chips ann-filters" id="ann-chips">
          ${cats.map(c => `<div class="chip ${this._filter===c?'active':''}" data-cat="${c}">${c}</div>`).join('')}
        </div>
        <div id="ann-list">${this._renderList(list)}</div>
        <div style="text-align:center;padding:var(--s-8) var(--s-4);border-top:1px solid var(--c-border);margin-top:var(--s-6);">
          <div style="font-size:.78rem;color:var(--c-text-light);">Barangay Hall &middot; (02) 8123-4567 &middot; Mon&ndash;Fri 8AM&ndash;5PM</div>
        </div>
      </div>`;
    },
    _renderList(list) {
      if (!list.length) return '<div class="empty-state" style="margin-top:var(--s-8);"><div class="empty-state-icon">📭</div><div class="empty-state-title">No announcements</div></div>';
      return list.map(a => `
      <div class="ann-card ${a.important?'important':''}">
        <div class="ann-card-header">
          <div style="flex:1;min-width:0;"><div class="ann-card-title">${Utils.escapeHtml(a.title)}</div><div class="ann-card-meta"><span>${Utils.formatDateShort(a.published_at)}</span><span>${Utils.escapeHtml(a.author)}</span></div></div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0;"><span class="badge badge-${a.category.toLowerCase()}">${a.category}</span>${a.important?'<span class="badge badge-danger">&#9888; Important</span>':''}</div>
        </div>
        <div class="ann-card-body">${Utils.escapeHtml(a.content).replace(/\n/g,'<br>')}</div>
        <div class="ann-card-footer"><span>${Utils.formatRelativeTime(a.published_at)}</span></div>
      </div>`).join('');
    },
    init() {
      document.getElementById('ann-chips')?.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip');
        if (!chip) return;
        this._filter = chip.dataset.cat;
        document.querySelectorAll('#ann-chips .chip').forEach(c => c.classList.toggle('active', c.dataset.cat === this._filter));
        const all = DB.getAnnouncements();
        const list = this._filter === 'All' ? all : all.filter(a => a.category === this._filter);
        document.getElementById('ann-list').innerHTML = this._renderList(list);
      });
    }
  };

  /* ══════════════════════════════════════════════════════════
     PROFILE
  ══════════════════════════════════════════════════════════ */
  const profile = {
    render() {
      const user = App.user;
      return `
      <div class="profile-page page-enter">
        <div class="profile-header">
          <div class="profile-avatar">${Utils.initials(user.name)||'?'}</div>
          <div>
            <div class="profile-name">${Utils.escapeHtml(user.name||'Unnamed Resident')}</div>
            <div class="profile-phone">+63 ${user.phone}</div>
            <div class="profile-complete" ${user.profile_complete?'':'style="background:rgba(245,158,11,.25);border-color:rgba(245,158,11,.4);"'}>${user.profile_complete?'&#10003; Profile Complete':'&#9888; Incomplete profile'}</div>
          </div>
        </div>
        <div class="card" style="margin-bottom:var(--s-5);">
          <div class="card-header"><strong>Personal Information</strong></div>
          <div class="card-body">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--s-4);">
              <div class="form-group"><label class="form-label">Full Name <span class="required">*</span></label><input type="text" class="form-input" id="prof-name" value="${Utils.escapeHtml(user.name||'')}"></div>
              <div class="form-group"><label class="form-label">Mobile</label><input type="text" class="form-input" value="+63 ${user.phone}" disabled></div>
              <div class="form-group"><label class="form-label">Email</label><input type="email" class="form-input" id="prof-email" value="${Utils.escapeHtml(user.email||'')}"></div>
              <div class="form-group"><label class="form-label">Gender</label><select class="form-select" id="prof-gender">${['','Male','Female','Prefer not to say'].map(g => `<option value="${g}" ${user.gender===g?'selected':''}>${g||'&mdash; Select &mdash;'}</option>`).join('')}</select></div>
              <div class="form-group"><label class="form-label">Civil Status</label><select class="form-select" id="prof-civil">${['Single','Married','Widowed','Separated','Divorced'].map(s => `<option value="${s}" ${user.civil_status===s?'selected':''}>${s}</option>`).join('')}</select></div>
              <div class="form-group"><label class="form-label">Date of Birth</label><input type="date" class="form-input" id="prof-bday" value="${user.birthdate||''}"></div>
              <div class="form-group"><label class="form-label">Occupation</label><input type="text" class="form-input" id="prof-occ" value="${Utils.escapeHtml(user.occupation||'')}"></div>
            </div>
            <div class="form-group"><label class="form-label">Complete Address <span class="required">*</span></label><input type="text" class="form-input" id="prof-address" value="${Utils.escapeHtml(user.address||'')}"></div>
            <div class="form-group"><label class="form-label">Purok</label><input type="text" class="form-input" id="prof-purok" value="${Utils.escapeHtml(user.purok||'')}"></div>
          </div>
        </div>
        <div class="card" style="margin-bottom:var(--s-5);">
          <div class="card-header"><strong>Household Members</strong><button id="btn-add-hm" class="btn btn-outline btn-sm">+ Add Member</button></div>
          <div class="card-body" id="household-list">
            ${(user.household||[]).length === 0
              ? '<div style="text-align:center;color:var(--c-text-muted);font-size:.875rem;padding:var(--s-5) 0;">No household members added yet.</div>'
              : (user.household||[]).map(m => `<div class="household-member" data-hm-id="${m.id}"><div class="avatar">${Utils.initials(m.name)}</div><div style="flex:1;"><div style="font-weight:600;font-size:.875rem;">${Utils.escapeHtml(m.name)}</div><div style="font-size:.78rem;color:var(--c-text-muted);">${m.relation} &middot; Age ${m.age}</div></div><button class="hm-remove" data-hm-id="${m.id}">&times;</button></div>`).join('')}
          </div>
        </div>
        <button id="btn-save-profile" class="btn btn-primary btn-block btn-lg" style="margin-bottom:var(--s-8);">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/></svg>
          Save Profile
        </button>
        <div style="text-align:center;padding:var(--s-4);border-top:1px solid var(--c-border);"><div style="font-size:.78rem;color:var(--c-text-light);">Your data is protected under RA 10173 (Data Privacy Act of 2012).</div></div>
      </div>`;
    },
    init() {
      document.getElementById('btn-save-profile').addEventListener('click', () => {
        const name = document.getElementById('prof-name').value.trim();
        const addr = document.getElementById('prof-address').value.trim();
        if (!name || !addr) { Utils.showToast('Name and address are required.', 'warning'); return; }
        const updates = { name, email: document.getElementById('prof-email').value.trim(), gender: document.getElementById('prof-gender').value, civil_status: document.getElementById('prof-civil').value, birthdate: document.getElementById('prof-bday').value, occupation: document.getElementById('prof-occ').value.trim(), address: addr, purok: document.getElementById('prof-purok').value.trim(), profile_complete: true };
        const updated = DB.updateUser(App.user.id, updates);
        if (updated) { App.user = updated; DB.setSession(updated); document.getElementById('topbar-username').textContent = updated.name.split(' ')[0]; document.getElementById('topbar-avatar').textContent = Utils.initials(updated.name); Utils.showToast('Profile saved!', 'success', 'Saved'); }
      });

      document.getElementById('btn-add-hm').addEventListener('click', () => {
        Utils.showModal(`
          <div class="modal-header"><h2 class="modal-title" id="modal-title">Add Household Member</h2></div>
          <div class="modal-body">
            <div class="form-group"><label class="form-label">Full Name <span class="required">*</span></label><input type="text" class="form-input" id="hm-name" placeholder="Juan Dela Cruz"></div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--s-4);">
              <div class="form-group"><label class="form-label">Relation</label><select class="form-select" id="hm-rel"><option>Spouse</option><option>Child</option><option>Parent</option><option>Sibling</option><option>Grandparent</option><option>Other</option></select></div>
              <div class="form-group"><label class="form-label">Age</label><input type="number" class="form-input" id="hm-age" min="0" max="120" placeholder="30"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" onclick="Utils.closeModal()">Cancel</button>
            <button class="btn btn-primary" id="btn-hm-confirm">Add Member</button>
          </div>`);
        document.getElementById('btn-hm-confirm').addEventListener('click', () => {
          const name = document.getElementById('hm-name').value.trim();
          if (!name) { Utils.showToast('Name is required.', 'warning'); return; }
          const member = { id: Utils.generateId(), name, relation: document.getElementById('hm-rel').value, age: parseInt(document.getElementById('hm-age').value)||0 };
          const household = [...(App.user.household||[]), member];
          const updated = DB.updateUser(App.user.id, { household });
          if (updated) { App.user = updated; DB.setSession(updated); }
          Utils.closeModal(); Utils.showToast('Member added!', 'success');
          App.navigate('/profile');
        });
      });

      document.getElementById('household-list').addEventListener('click', (e) => {
        const btn = e.target.closest('.hm-remove');
        if (!btn) return;
        const household = (App.user.household||[]).filter(m => m.id !== btn.dataset.hmId);
        const updated = DB.updateUser(App.user.id, { household });
        if (updated) { App.user = updated; DB.setSession(updated); }
        btn.closest('.household-member').remove();
        Utils.showToast('Member removed.', 'info');
      });
    }
  };

  return { login, dashboard, request, myRequests, status, incidentNew, announcements, profile };
})();
