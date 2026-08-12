/* ============================================================
   UTILS.JS — Helpers: toast, modal, i18n, formatting, OTP
   E-Barangay San Miguel Portal
   ============================================================ */

const Utils = (() => {

  /* ── Language / i18n ── */
  let _lang = localStorage.getItem('brgy_lang') || 'en';

  const translations = {
    en: {
      nav_home: 'Home', nav_dashboard: 'Dashboard', nav_request: 'Request Document',
      nav_request_short: 'Request', nav_my_requests: 'My Requests',
      nav_announcements: 'Announcements', nav_alerts: 'Alerts',
      nav_report: 'Report Incident', nav_profile: 'Profile',
      status_submitted: 'Submitted', status_under_review: 'Under Review',
      status_approved: 'Approved', status_released: 'Ready for Pickup',
      status_rejected: 'Rejected',
      btn_submit: 'Submit Request', btn_next: 'Next', btn_back: 'Back',
      btn_request: 'Request a Document', btn_cancel: 'Cancel',
      greeting_morning: 'Good morning', greeting_afternoon: 'Good afternoon',
      greeting_evening: 'Good evening',
      request_type_clearance: 'Barangay Clearance',
      request_type_residency: 'Certificate of Residency',
      request_type_indigency: 'Certificate of Indigency',
      request_type_business: 'Business Permit Endorsement',
    },
    fil: {
      nav_home: 'Home', nav_dashboard: 'Dashboard', nav_request: 'Humiling ng Dokumento',
      nav_request_short: 'Hiling', nav_my_requests: 'Aking mga Hiling',
      nav_announcements: 'Mga Anunsyo', nav_alerts: 'Abiso',
      nav_report: 'Mag-ulat ng Insidente', nav_profile: 'Profil',
      status_submitted: 'Naisumite', status_under_review: 'Sinusuri',
      status_approved: 'Aprubado', status_released: 'Handa na para Kunin',
      status_rejected: 'Tinanggihan',
      btn_submit: 'Isumite ang Kahilingan', btn_next: 'Susunod', btn_back: 'Bumalik',
      btn_request: 'Humiling ng Dokumento', btn_cancel: 'Kanselahin',
      greeting_morning: 'Magandang umaga', greeting_afternoon: 'Magandang hapon',
      greeting_evening: 'Magandang gabi',
      request_type_clearance: 'Barangay Clearance',
      request_type_residency: 'Certificate of Residency',
      request_type_indigency: 'Certificate of Indigency',
      request_type_business: 'Business Permit Endorsement',
    }
  };

  function t(key) {
    return (translations[_lang] && translations[_lang][key]) || (translations['en'][key]) || key;
  }

  function getLang() { return _lang; }

  function setLang(lang) {
    _lang = lang;
    localStorage.setItem('brgy_lang', lang);
    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    // Update lang label
    const ll = document.getElementById('lang-label');
    if (ll) ll.textContent = lang === 'en' ? 'FIL' : 'EN';
  }

  function toggleLang() {
    setLang(_lang === 'en' ? 'fil' : 'en');
  }

  /* ── Toast ── */
  const toastDurations = { info: 4000, success: 3500, error: 5000, warning: 4500 };

  function showToast(message, type = 'info', title = '') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const icons = {
      info: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
      success: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
      error: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
      warning: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    };
    const defaultTitles = { info: 'Info', success: 'Success', error: 'Error', warning: 'Warning' };
    const dur = toastDurations[type] || 4000;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.style.setProperty('--dur', dur + 'ms');
    toast.innerHTML = `
      <div class="toast-icon">${icons[type] || icons.info}</div>
      <div class="toast-body">
        <div class="toast-title">${title || defaultTitles[type]}</div>
        <div class="toast-msg">${message}</div>
      </div>
      <button class="toast-close" aria-label="Dismiss">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    `;
    toast.querySelector('.toast-close').addEventListener('click', () => removeToast(toast));
    toast.querySelector('.toast::after')
    // Apply progress animation duration
    toast.style.setProperty('--toast-dur', dur + 'ms');

    container.appendChild(toast);

    // Style the ::after pseudo for progress bar
    const style = document.createElement('style');
    style.textContent = `.toast:last-child::after { animation-duration: ${dur}ms; }`;
    toast.appendChild(style);

    setTimeout(() => removeToast(toast), dur);
  }

  function removeToast(el) {
    if (!el || !el.parentNode) return;
    el.classList.add('toast-exit');
    setTimeout(() => el.remove(), 300);
  }

  /* ── Modal ── */
  function showModal(html, options = {}) {
    const overlay = document.getElementById('modal-overlay');
    const box     = document.getElementById('modal-box');
    const content = document.getElementById('modal-content');
    if (!overlay || !box || !content) return;

    box.className = 'modal-box ' + (options.size === 'lg' ? 'modal-lg' : options.size === 'sm' ? 'modal-sm' : '');
    content.innerHTML = html;
    overlay.classList.remove('hidden');

    // Focus trap
    setTimeout(() => {
      const first = box.querySelector('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (first) first.focus();
    }, 100);

    if (options.onOpen) options.onOpen(box);
  }

  function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.classList.add('hidden');
  }

  /* ── Date / Time ── */
  function formatDate(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  function formatDateShort(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function formatRelativeTime(dateStr) {
    if (!dateStr) return '';
    const now = new Date();
    const past = new Date(dateStr);
    const diffMs = now - past;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return formatDateShort(dateStr);
  }

  function getDayGreeting() {
    const h = new Date().getHours();
    if (h < 12) return t('greeting_morning');
    if (h < 17) return t('greeting_afternoon');
    return t('greeting_evening');
  }

  function getSLAStatus(submittedAt, status) {
    if (['released', 'rejected'].includes(status)) return null;
    const submitted = new Date(submittedAt);
    const now = new Date();
    const hoursDiff = (now - submitted) / 3_600_000;
    const slaHours = 72; // 3 working days
    const remaining = slaHours - hoursDiff;

    if (remaining < 0)  return { label: `Overdue ${Math.abs(Math.round(remaining))}h`, cls: 'sla-overdue' };
    if (remaining < 24) return { label: `${Math.round(remaining)}h left`, cls: 'sla-warning' };
    return { label: `${Math.round(remaining)}h left`, cls: 'sla-ok' };
  }

  /* ── ID generation ── */
  function generateId() {
    return 'id_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  function generateRef(prefix = 'REF') {
    const now = new Date();
    const date = now.toISOString().slice(0,10).replace(/-/g,'');
    const rand = String(Math.floor(Math.random() * 900) + 100);
    return `${prefix}-${date}-${rand}`;
  }

  /* ── OTP Simulation ── */
  const _otpStore = {};

  function sendOTP(phone) {
    // In real app: call SMS API. Here we simulate.
    const code = String(Math.floor(100000 + Math.random() * 900000));
    _otpStore[phone] = { code, expires: Date.now() + 5 * 60 * 1000 };
    console.log(`[OTP SIM] Code for ${phone}: ${code}`); // dev only
    return true;
  }

  function verifyOTP(phone, inputCode) {
    // Accept any 6-digit code for demo, OR the actual stored code
    if (!/^\d{6}$/.test(inputCode)) return false;
    const stored = _otpStore[phone];
    if (!stored) return true; // demo mode: accept any 6-digit
    if (Date.now() > stored.expires) return false;
    return inputCode === stored.code;
  }

  /* ── Misc helpers ── */
  function initials(name = '') {
    return name.trim().split(' ')
      .slice(0,2).map(w => w[0]?.toUpperCase() || '').join('');
  }

  function statusLabel(status) {
    const map = {
      submitted:    t('status_submitted'),
      under_review: t('status_under_review'),
      approved:     t('status_approved'),
      released:     t('status_released'),
      rejected:     t('status_rejected'),
      received:     'Received',
      investigating:'Investigating',
      resolved:     'Resolved',
    };
    return map[status] || status;
  }

  function statusBadgeClass(status) {
    return `badge badge-${status}`;
  }

  function formatCurrency(amount) {
    if (!amount || amount === 0) return 'Free';
    return '₱' + Number(amount).toLocaleString('en-PH', { minimumFractionDigits: 2 });
  }

  function escapeHtml(str) {
    const map = { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;' };
    return String(str || '').replace(/[&<>"']/g, m => map[m]);
  }

  function copyToClipboard(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => showToast('Copied to clipboard!', 'success'));
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      showToast('Copied!', 'success');
    }
  }

  function downloadTextFile(filename, content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
  }

  /* ── Expose ── */
  return {
    t, getLang, setLang, toggleLang,
    showToast, showModal, closeModal,
    formatDate, formatDateShort, formatRelativeTime, getDayGreeting, getSLAStatus,
    generateId, generateRef,
    sendOTP, verifyOTP,
    initials, statusLabel, statusBadgeClass, formatCurrency, escapeHtml,
    copyToClipboard, downloadTextFile,
  };
})();
