/* ============================================================
   STAFF.JS — All staff/admin page renderers
   E-Barangay San Miguel Portal
   ============================================================ */

const StaffPages = (() => {

  /* ══════════════════════════════════════════════════════════
     REQUEST QUEUE (Kanban + Table)
     ══════════════════════════════════════════════════════════ */
  const queue = {
    _view: 'kanban', // 'kanban' | 'table'
    _search: '',
    _filterType: 'all',

    render() {
      const allReqs = DB.getRequests();
      const filtered = this._filterReqs(allReqs);

      const cols = [
        { key: 'submitted',    label: 'New',        color: '#3b82f6' },
        { key: 'under_review', label: 'In Review',  color: '#f59e0b' },
        { key: 'approved',     label: 'Approved',   color: '#10b981' },
        { key: 'released',     label: 'Released',   color: '#0d6e6e' },
      ];

      const typeOptions = ['all', 'Barangay Clearance', 'Certificate of Residency', 'Certificate of Indigency', 'Business Permit Endorsement'];

      const newCount = allReqs.filter(r => r.status === 'submitted').length;
      // Update nav badge
      setTimeout(() => {
        const badge = document.getElementById('queue-badge');
        if (badge) badge.textContent = newCount > 0 ? newCount : '';
      }, 100);

      return `
      <div class="staff-page page-enter">
        <div class="page-header-row" style="margin-bottom:var(--s-5);">
          <div>
            <h1 class="page-title">Request Queue</h1>
            <p class="page-subtitle">${allReqs.filter(r => !['released','rejected'].includes(r.status)).length} active · ${newCount} new</p>
          </div>
          <div class="flex gap-2">
            <div class="tabs">
              <div class="tab-item ${this._view === 'kanban' ? 'active' : ''}" id="view-kanban">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                Kanban
              </div>
              <div class="tab-item ${this._view === 'table' ? 'active' : ''}" id="view-table">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                Table
              </div>
            </div>
          </div>
        </div>

        <!-- Controls -->
        <div class="queue-controls">
          <div class="search-input-wrap">
            <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" class="search-input" id="queue-search" placeholder="Search by name or reference…" value="${this._search}">
          </div>
          <select class="form-select" id="queue-type-filter" style="width:auto;min-width:200px;border-radius:var(--r-full);">
            ${typeOptions.map(t => `<option value="${t}" ${this._filterType === t ? 'selected' : ''}>${t === 'all' ? 'All Types' : t}</option>`).join('')}
          </select>
        </div>

        <!-- Kanban View -->
        <div id="kanban-view" class="${this._view !== 'kanban' ? 'hidden' : ''}">
          <div class="kanban">
            ${cols.map(col => {
              const colReqs = filtered.filter(r => r.status === col.key);
              return `
              <div class="kanban-col">
                <div class="kanban-col-header">
                  <div class="kanban-col-title" style="color:${col.color};">${col.label}</div>
                  <div class="kanban-count">${colReqs.length}</div>
                </div>
                ${colReqs.length === 0 ? `<div style="text-align:center;padding:var(--s-8) var(--s-4);color:var(--c-text-light);font-size:.78rem;">No requests</div>` :
                  colReqs.map(r => {
                    const sla = Utils.getSLAStatus(r.submitted_at, r.status);
                    return `
                    <div class="kanban-card" data-req-id="${r.id}" onclick="StaffPages.queue._openModal('${r.id}')">
                      <div class="kanban-card-type">${Utils.escapeHtml(r.type)}</div>
                      <div class="kanban-card-name">${Utils.escapeHtml(r.resident_name)}</div>
                      <div style="font-size:.7rem;color:var(--c-text-light);margin-top:2px;">${r.ref}</div>
                      <div class="kanban-card-meta">
                        <span class="kanban-card-date">${Utils.formatDateShort(r.submitted_at)}</span>
                        ${sla ? `<span class="sla-badge ${sla.cls}">${sla.label}</span>` : `<span class="badge badge-released" style="font-size:.65rem;padding:2px 7px;">Done</span>`}
                      </div>
                    </div>`;
                  }).join('')}
              </div>`;
            }).join('')}
          </div>
        </div>

        <!-- Table View -->
        <div id="table-view" class="${this._view !== 'table' ? 'hidden' : ''}">
          <div class="table-wrap">
            <table class="table">
              <thead>
                <tr>
                  <th>Reference</th>
                  <th>Resident</th>
                  <th>Document Type</th>
                  <th>Submitted</th>
                  <th>Status</th>
                  <th>SLA</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${filtered.length === 0 ? `<tr><td colspan="7" style="text-align:center;padding:var(--s-10);color:var(--c-text-muted);">No requests found</td></tr>` :
                  filtered.map(r => {
                    const sla = Utils.getSLAStatus(r.submitted_at, r.status);
                    return `
                    <tr onclick="StaffPages.queue._openModal('${r.id}')" style="cursor:pointer;">
                      <td><span style="font-family:monospace;font-size:.8rem;">${r.ref}</span></td>
                      <td>
                        <div style="font-weight:600;">${Utils.escapeHtml(r.resident_name)}</div>
                        <div style="font-size:.75rem;color:var(--c-text-muted);">${r.resident_phone}</div>
                      </td>
                      <td>${Utils.escapeHtml(r.type)}</td>
                      <td style="white-space:nowrap;">${Utils.formatDateShort(r.submitted_at)}</td>
                      <td><span class="${Utils.statusBadgeClass(r.status)}">${Utils.statusLabel(r.status)}</span></td>
                      <td>${sla ? `<span class="sla-badge ${sla.cls}">${sla.label}</span>` : '—'}</td>
                      <td onclick="event.stopPropagation()">
                        <button class="btn btn-ghost btn-sm" onclick="StaffPages.queue._openModal('${r.id}')">View</button>
                      </td>
                    </tr>`;
                  }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;
    },

    _filterReqs(reqs) {
      let f = reqs;
      if (this._search) {
        const s = this._search.toLowerCase();
        f = f.filter(r => r.resident_name.toLowerCase().includes(s) || r.ref.toLowerCase().includes(s) || r.type.toLowerCase().includes(s));
      }
      if (this._filterType !== 'all') f = f.filter(r => r.type === this._filterType);
      return f;
    },

    _openModal(reqId) {
      const req = DB.getRequestById(reqId);
      if (!req) return;
      const resident = DB.getUserById(req.resident_id);

      Utils.showModal(`
        <div class="req-modal-header">
          <div class="req-modal-type">${Utils.escapeHtml(req.type)}</div>
          <div class="req-modal-ref">${req.ref}</div>
        </div>
        <div class="modal-body">
          <div style="display:flex;align-items:center;gap:var(--s-3);margin-bottom:var(--s-5);">
            <div class="avatar lg">${Utils.initials(req.resident_name)}</div>
            <div>
              <div style="font-weight:700;font-size:1.0625rem;">${Utils.escapeHtml(req.resident_name)}</div>
              <div style="font-size:.875rem;color:var(--c-text-muted);">📱 ${req.resident_phone}</div>
            </div>
            <div style="margin-left:auto;">
              <span class="${Utils.statusBadgeClass(req.status)}">${Utils.statusLabel(req.status)}</span>
            </div>
          </div>

          <div class="req-detail-grid">
            <div class="req-detail-item"><div class="req-detail-label">Purpose</div><div>${Utils.escapeHtml(req.purpose)}</div></div>
            <div class="req-detail-item"><div class="req-detail-label">Submitted</div><div>${Utils.formatDate(req.submitted_at)}</div></div>
            <div class="req-detail-item"><div class="req-detail-label">Address</div><div>${Utils.escapeHtml(req.address || '—')}</div></div>
            <div class="req-detail-item"><div class="req-detail-label">Fee</div><div>${Utils.formatCurrency(req.amount)}</div></div>
            <div class="req-detail-item"><div class="req-detail-label">Payment</div><div><span class="${Utils.statusBadgeClass(req.payment_status)}">${req.payment_status}</span></div></div>
            <div class="req-detail-item"><div class="req-detail-label">Last Updated</div><div>${Utils.formatDate(req.updated_at)}</div></div>
          </div>

          ${req.notes ? `<div class="alert alert-info" style="margin-bottom:var(--s-4);"><div><div class="alert-title">Staff Notes</div>${Utils.escapeHtml(req.notes)}</div></div>` : ''}
          ${req.reject_reason ? `<div class="alert alert-danger" style="margin-bottom:var(--s-4);"><div><div class="alert-title">Rejection Reason</div>${Utils.escapeHtml(req.reject_reason)}</div></div>` : ''}

          <!-- Action area -->
          ${!['released','rejected'].includes(req.status) ? `
          <div style="border-top:1px solid var(--c-border);padding-top:var(--s-4);margin-top:var(--s-2);">
            <div style="font-size:.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--c-text-muted);margin-bottom:var(--s-3);">Actions</div>
            <div class="req-actions">
              ${req.status === 'submitted' ? `<button class="btn btn-outline btn-sm" onclick="StaffPages.queue._updateStatus('${req.id}','under_review')">🔍 Mark In Review</button>` : ''}
              ${req.status === 'under_review' ? `<button class="btn btn-success btn-sm" onclick="StaffPages.queue._updateStatus('${req.id}','approved')">✓ Approve</button>` : ''}
              ${req.status === 'approved' ? `<button class="btn btn-primary btn-sm" onclick="StaffPages.queue._updateStatus('${req.id}','released')">📤 Mark Released</button>` : ''}
              <button class="btn btn-ghost btn-sm" onclick="StaffPages.queue._requestMoreInfo('${req.id}')">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                Add Note
              </button>
              <button class="btn btn-danger btn-sm" onclick="StaffPages.queue._reject('${req.id}')">✕ Reject</button>
            </div>
          </div>` : ''}
        </div>
      `, { size: 'lg' });
    },

    _updateStatus(reqId, newStatus) {
      DB.updateRequest(reqId, { status: newStatus });
      Utils.closeModal();
      const labels = { under_review: 'Moved to In Review', approved: 'Request Approved!', released: 'Marked as Released' };
      Utils.showToast(labels[newStatus] || 'Status updated', 'success', 'Updated');
      App.navigate('/staff/queue'); // Refresh
    },

    _requestMoreInfo(reqId) {
      Utils.showModal(`
        <div class="modal-header"><h2 class="modal-title">Add Staff Note</h2></div>
        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">Note / Instructions for Resident</label>
            <textarea class="form-textarea" id="staff-note-input" rows="4" placeholder="e.g. Please bring additional supporting documents…"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="Utils.closeModal()">Cancel</button>
          <button class="btn btn-primary" id="btn-save-note">Save Note</button>
        </div>`);

      document.getElementById('btn-save-note').addEventListener('click', () => {
        const note = document.getElementById('staff-note-input').value.trim();
        if (!note) { Utils.showToast('Please enter a note.', 'warning'); return; }
        DB.updateRequest(reqId, { notes: note });
        Utils.closeModal();
        Utils.showToast('Note saved and resident notified.', 'success');
        App.navigate('/staff/queue');
      });
    },

    _reject(reqId) {
      Utils.showModal(`
        <div class="modal-header"><h2 class="modal-title">Reject Request</h2></div>
        <div class="modal-body">
          <div class="alert alert-warning" style="margin-bottom:var(--s-4);">
            <svg class="alert-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
            <div>The rejection reason will be shown to the resident.</div>
          </div>
          <div class="form-group">
            <label class="form-label">Reason for Rejection <span class="required">*</span></label>
            <textarea class="form-textarea" id="reject-reason-input" rows="3" placeholder="Explain why this request cannot be approved…"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="Utils.closeModal()">Cancel</button>
          <button class="btn btn-danger" id="btn-confirm-reject">Reject Request</button>
        </div>`, { size: 'sm' });

      document.getElementById('btn-confirm-reject').addEventListener('click', () => {
        const reason = document.getElementById('reject-reason-input').value.trim();
        if (!reason) { Utils.showToast('Rejection reason is required.', 'warning'); return; }
        DB.updateRequest(reqId, { status: 'rejected', reject_reason: reason });
        Utils.closeModal();
        Utils.showToast('Request rejected. Resident has been notified.', 'info');
        App.navigate('/staff/queue');
      });
    },

    init() {
      // View toggle
      document.getElementById('view-kanban')?.addEventListener('click', () => {
        this._view = 'kanban';
        document.getElementById('kanban-view')?.classList.remove('hidden');
        document.getElementById('table-view')?.classList.add('hidden');
        document.getElementById('view-kanban')?.classList.add('active');
        document.getElementById('view-table')?.classList.remove('active');
      });
      document.getElementById('view-table')?.addEventListener('click', () => {
        this._view = 'table';
        document.getElementById('table-view')?.classList.remove('hidden');
        document.getElementById('kanban-view')?.classList.add('hidden');
        document.getElementById('view-table')?.classList.add('active');
        document.getElementById('view-kanban')?.classList.remove('active');
      });

      // Search
      let searchTimeout;
      document.getElementById('queue-search')?.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          this._search = e.target.value;
          App.navigate('/staff/queue');
        }, 300);
      });

      // Type filter
      document.getElementById('queue-type-filter')?.addEventListener('change', (e) => {
        this._filterType = e.target.value;
        App.navigate('/staff/queue');
      });
    }
  };

  /* ══════════════════════════════════════════════════════════
     RESIDENT RECORDS
     ══════════════════════════════════════════════════════════ */
  const residents = {
    _search: '',
    render() {
      const all = DB.getResidents();
      const filtered = this._search
        ? all.filter(u => u.name.toLowerCase().includes(this._search.toLowerCase()) || u.phone.includes(this._search) || u.purok.toLowerCase().includes(this._search.toLowerCase()))
        : all;

      return `
      <div class="staff-page page-enter">
        <div class="page-header-row" style="margin-bottom:var(--s-5);">
          <div>
            <h1 class="page-title">Resident Records</h1>
            <p class="page-subtitle">${all.length} registered residents</p>
          </div>
        </div>

        <div class="queue-controls" style="margin-bottom:var(--s-5);">
          <div class="search-input-wrap">
            <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" class="search-input" id="res-search" placeholder="Search by name, phone, or purok…" value="${this._search}">
          </div>
        </div>

        <div class="table-wrap">
          <table class="table">
            <thead>
              <tr>
                <th>Resident</th>
                <th>Phone</th>
                <th>Purok</th>
                <th>Status</th>
                <th>Requests</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.length === 0 ? `<tr><td colspan="6" style="text-align:center;padding:var(--s-10);color:var(--c-text-muted);">No residents found</td></tr>` :
                filtered.map(u => {
                  const reqs = DB.getRequests({ resident_id: u.id });
                  return `
                  <tr>
                    <td>
                      <div style="display:flex;align-items:center;gap:var(--s-3);">
                        <div class="avatar">${Utils.initials(u.name) || '?'}</div>
                        <div>
                          <div style="font-weight:600;">${Utils.escapeHtml(u.name || 'Unnamed')}</div>
                          <div style="font-size:.75rem;color:var(--c-text-muted);">${u.profile_complete ? 'Profile complete' : '⚠ Incomplete'}</div>
                        </div>
                      </div>
                    </td>
                    <td style="font-family:monospace;font-size:.875rem;">+63 ${u.phone}</td>
                    <td>${Utils.escapeHtml(u.purok) || '—'}</td>
                    <td><span class="badge ${u.profile_complete ? 'badge-approved' : 'badge-under_review'}">${u.profile_complete ? 'Complete' : 'Incomplete'}</span></td>
                    <td style="text-align:center;font-weight:600;">${reqs.length}</td>
                    <td>
                      <button class="btn btn-outline btn-sm" onclick="StaffPages.residents._viewResident('${u.id}')">View</button>
                    </td>
                  </tr>`;
                }).join('')}
            </tbody>
          </table>
        </div>
      </div>`;
    },

    _viewResident(userId) {
      const user = DB.getUserById(userId);
      if (!user) return;
      const reqs = DB.getRequests({ resident_id: userId });

      Utils.showModal(`
        <div style="background:linear-gradient(135deg,var(--c-primary),var(--c-primary-mid));padding:var(--s-6);border-radius:var(--r-xl) var(--r-xl) 0 0;color:#fff;">
          <div style="display:flex;align-items:center;gap:var(--s-4);">
            <div class="avatar xl">${Utils.initials(user.name) || '?'}</div>
            <div>
              <div style="font-family:var(--f-heading);font-size:1.375rem;font-weight:700;">${Utils.escapeHtml(user.name || 'Unnamed')}</div>
              <div style="opacity:.85;font-size:.875rem;">+63 ${user.phone}</div>
              ${user.purok ? `<div style="opacity:.75;font-size:.8rem;">${Utils.escapeHtml(user.purok)}</div>` : ''}
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="review-grid" style="margin-bottom:var(--s-5);">
            <div><div class="req-detail-label">Address</div><div>${Utils.escapeHtml(user.address || '—')}</div></div>
            <div><div class="req-detail-label">Civil Status</div><div>${user.civil_status || '—'}</div></div>
            <div><div class="req-detail-label">Birthday</div><div>${user.birthdate ? Utils.formatDate(user.birthdate) : '—'}</div></div>
            <div><div class="req-detail-label">Occupation</div><div>${user.occupation || '—'}</div></div>
            <div><div class="req-detail-label">Gender</div><div>${user.gender || '—'}</div></div>
            <div><div class="req-detail-label">Email</div><div>${user.email || '—'}</div></div>
          </div>

          ${(user.household || []).length > 0 ? `
          <div style="font-weight:700;font-size:.875rem;margin-bottom:var(--s-3);">Household Members (${user.household.length})</div>
          ${user.household.map(m => `
          <div style="display:flex;align-items:center;gap:var(--s-3);padding:var(--s-2) 0;border-bottom:1px solid var(--c-border);">
            <div class="avatar" style="width:32px;height:32px;font-size:.75rem;">${Utils.initials(m.name)}</div>
            <div style="flex:1;">
              <span style="font-weight:600;">${Utils.escapeHtml(m.name)}</span>
              <span style="color:var(--c-text-muted);font-size:.8rem;"> · ${m.relation} · Age ${m.age}</span>
            </div>
          </div>`).join('')}
          <div style="margin-bottom:var(--s-5);"></div>` : ''}

          <div style="font-weight:700;font-size:.875rem;margin-bottom:var(--s-3);">Request History (${reqs.length})</div>
          ${reqs.length === 0 ? `<div style="color:var(--c-text-muted);font-size:.875rem;">No requests yet.</div>` :
            reqs.slice(0,5).map(r => `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:var(--s-2) 0;border-bottom:1px solid var(--c-border);">
              <div>
                <div style="font-size:.875rem;font-weight:500;">${Utils.escapeHtml(r.type)}</div>
                <div style="font-size:.75rem;color:var(--c-text-muted);">${r.ref} · ${Utils.formatDateShort(r.submitted_at)}</div>
              </div>
              <span class="${Utils.statusBadgeClass(r.status)}">${Utils.statusLabel(r.status)}</span>
            </div>`).join('')}
        </div>
      `, { size: 'lg' });
    },

    init() {
      let searchTimeout;
      document.getElementById('res-search')?.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          this._search = e.target.value;
          // Re-render just the table
          App.navigate('/staff/residents');
        }, 350);
      });
    }
  };

  /* ══════════════════════════════════════════════════════════
     INCIDENT MANAGEMENT
     ══════════════════════════════════════════════════════════ */
  const incidents = {
    render() {
      const incs = DB.getIncidents();
      const newCount = incs.filter(i => i.status === 'received').length;

      setTimeout(() => {
        const badge = document.getElementById('incident-badge');
        if (badge) badge.textContent = newCount > 0 ? newCount : '';
      }, 100);

      return `
      <div class="staff-page page-enter">
        <div class="page-header-row" style="margin-bottom:var(--s-5);">
          <div>
            <h1 class="page-title">Incident Reports</h1>
            <p class="page-subtitle">${incs.length} total · ${newCount} new</p>
          </div>
        </div>

        <div class="table-wrap">
          <table class="table">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Category</th>
                <th>Reporter</th>
                <th>Location</th>
                <th>Submitted</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${incs.length === 0 ? `<tr><td colspan="7" style="text-align:center;padding:var(--s-10);color:var(--c-text-muted);">No incident reports</td></tr>` :
                incs.map(inc => `
                <tr>
                  <td><span style="font-family:monospace;font-size:.8rem;">${inc.ref}</span></td>
                  <td><span class="badge badge-general">${inc.category}</span></td>
                  <td>${inc.anonymous ? '<em style="color:var(--c-text-light);">Anonymous</em>' : Utils.escapeHtml(inc.reporter_name)}</td>
                  <td style="font-size:.8rem;color:var(--c-text-muted);max-width:150px;" class="truncate">${Utils.escapeHtml(inc.location?.address || '—')}</td>
                  <td style="white-space:nowrap;">${Utils.formatDateShort(inc.submitted_at)}</td>
                  <td><span class="${Utils.statusBadgeClass(inc.status)}">${Utils.statusLabel(inc.status)}</span></td>
                  <td>
                    <button class="btn btn-outline btn-sm" onclick="StaffPages.incidents._openModal('${inc.id}')">Manage</button>
                  </td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>`;
    },

    _openModal(incId) {
      const inc = DB.getIncidentById(incId);
      if (!inc) return;

      Utils.showModal(`
        <div class="modal-header" style="padding-top:var(--s-6);">
          <h2 class="modal-title" id="modal-title">${inc.category} Report</h2>
          <div style="margin-top:4px;"><span class="${Utils.statusBadgeClass(inc.status)}">${Utils.statusLabel(inc.status)}</span></div>
        </div>
        <div class="modal-body">
          <div class="review-grid" style="margin-bottom:var(--s-4);">
            <div><div class="req-detail-label">Reference</div><div style="font-family:monospace;">${inc.ref}</div></div>
            <div><div class="req-detail-label">Submitted</div><div>${Utils.formatDate(inc.submitted_at)}</div></div>
            <div><div class="req-detail-label">Reporter</div><div>${inc.anonymous ? '<em>Anonymous</em>' : Utils.escapeHtml(inc.reporter_name)}</div></div>
            ${!inc.anonymous ? `<div><div class="req-detail-label">Phone</div><div>${inc.reporter_phone || '—'}</div></div>` : '<div></div>'}
          </div>
          <div style="margin-bottom:var(--s-4);">
            <div class="req-detail-label">Location</div>
            <div style="font-weight:500;">${Utils.escapeHtml(inc.location?.address || '—')}</div>
            <div style="font-size:.78rem;color:var(--c-text-muted);">${inc.location?.lat?.toFixed(5)}, ${inc.location?.lng?.toFixed(5)}</div>
          </div>
          <div style="margin-bottom:var(--s-5);">
            <div class="req-detail-label">Description</div>
            <div style="background:var(--c-surface);border-radius:var(--r-md);padding:var(--s-4);font-size:.875rem;line-height:1.7;">${Utils.escapeHtml(inc.description)}</div>
          </div>
          ${inc.staff_notes ? `<div class="alert alert-info" style="margin-bottom:var(--s-4);"><div><div class="alert-title">Staff Notes</div>${Utils.escapeHtml(inc.staff_notes)}</div></div>` : ''}

          <div style="border-top:1px solid var(--c-border);padding-top:var(--s-4);">
            <div class="req-detail-label" style="margin-bottom:var(--s-3);">Update Status</div>
            <div class="flex gap-2 flex-wrap" style="margin-bottom:var(--s-4);">
              <button class="btn btn-outline btn-sm ${inc.status==='received' ? 'btn-primary' : ''}" onclick="StaffPages.incidents._setStatus('${inc.id}','received')">Received</button>
              <button class="btn btn-outline btn-sm ${inc.status==='investigating' ? 'btn-primary' : ''}" onclick="StaffPages.incidents._setStatus('${inc.id}','investigating')">Investigating</button>
              <button class="btn btn-success btn-sm ${inc.status==='resolved' ? '' : ''}" onclick="StaffPages.incidents._setStatus('${inc.id}','resolved')">✓ Resolved</button>
            </div>
            <div class="form-group">
              <label class="form-label">Internal Notes</label>
              <textarea class="form-textarea" id="inc-staff-note" rows="3" placeholder="Add investigation notes…">${inc.staff_notes || ''}</textarea>
            </div>
            <button class="btn btn-primary btn-sm" id="btn-save-inc-note">Save Note</button>
          </div>
        </div>
      `, { size: 'lg' });

      document.getElementById('btn-save-inc-note')?.addEventListener('click', () => {
        const note = document.getElementById('inc-staff-note').value.trim();
        DB.updateIncident(incId, { staff_notes: note });
        Utils.showToast('Notes saved.', 'success');
      });
    },

    _setStatus(incId, status) {
      DB.updateIncident(incId, { status });
      Utils.closeModal();
      Utils.showToast(`Incident marked as "${Utils.statusLabel(status)}"`, 'success');
      App.navigate('/staff/incidents');
    },

    init() {}
  };

  /* ══════════════════════════════════════════════════════════
     POST ANNOUNCEMENT
     ══════════════════════════════════════════════════════════ */
  const announcements = {
    render() {
      const existing = DB.getAnnouncements().slice(0, 5);
      return `
      <div class="compose-page page-enter">
        <div class="page-header-row" style="margin-bottom:var(--s-6);">
          <div>
            <h1 class="page-title">Post Announcement</h1>
            <p class="page-subtitle">Publish official notices to all residents.</p>
          </div>
        </div>

        <div class="card" style="margin-bottom:var(--s-6);">
          <div class="card-header"><strong>Compose Announcement</strong></div>
          <div class="card-body">
            <div class="form-group">
              <label class="form-label">Title <span class="required">*</span></label>
              <input type="text" class="form-input" id="ann-title" placeholder="e.g. Free Medical Mission — August 15">
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--s-4);">
              <div class="form-group">
                <label class="form-label">Category <span class="required">*</span></label>
                <select class="form-select" id="ann-category">
                  <option value="">— Select category —</option>
                  <option value="Health">Health</option>
                  <option value="Disaster">Disaster</option>
                  <option value="Events">Events</option>
                  <option value="General">General</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Priority</label>
                <label class="toggle-wrap" style="margin-top:8px;">
                  <div class="toggle" id="ann-important-toggle"></div>
                  <div style="font-size:.875rem;">Mark as Important</div>
                </label>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Content <span class="required">*</span></label>
              <textarea class="form-textarea" id="ann-content" rows="8" placeholder="Write your announcement here. Be clear and concise. Include dates, times, and contact information where relevant."></textarea>
              <div class="form-hint">Tip: Use line breaks to separate sections for readability.</div>
            </div>
            <div class="form-group">
              <label class="form-label">Author Name</label>
              <input type="text" class="form-input" id="ann-author" value="${Utils.escapeHtml(App.user?.name || '')}">
            </div>
          </div>

          <!-- Live preview -->
          <div style="padding:0 var(--s-6) var(--s-3);">
            <div class="compose-preview-label">Live Preview</div>
            <div class="compose-preview" id="ann-preview">
              <div style="font-size:.875rem;color:var(--c-text-muted);">Preview will appear as you type.</div>
            </div>
          </div>

          <div class="card-footer">
            <div class="form-error hidden" id="ann-error"></div>
            <div style="display:flex;justify-content:flex-end;gap:var(--s-3);">
              <button class="btn btn-ghost" onclick="document.getElementById('ann-title').value='';document.getElementById('ann-content').value='';">Clear</button>
              <button id="btn-publish-ann" class="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Publish Announcement
              </button>
            </div>
          </div>
        </div>

        <!-- Recent announcements -->
        <div class="card">
          <div class="card-header"><strong>Recent Announcements</strong></div>
          <div class="card-body" style="padding:0;">
            ${existing.map(a => `
            <div style="padding:var(--s-4) var(--s-6);border-bottom:1px solid var(--c-border);display:flex;align-items:center;justify-content:space-between;gap:var(--s-3);">
              <div style="flex:1;min-width:0;">
                <div style="font-weight:600;font-size:.875rem;truncate">${Utils.escapeHtml(a.title)}</div>
                <div style="font-size:.75rem;color:var(--c-text-muted);">${Utils.formatDateShort(a.published_at)} · ${a.author}</div>
              </div>
              <span class="badge badge-${a.category.toLowerCase()}">${a.category}</span>
              ${a.important ? '<span class="badge badge-danger">Important</span>' : ''}
            </div>`).join('')}
          </div>
        </div>
      </div>`;
    },

    _important: false,

    init() {
      this._important = false;

      // Toggle
      const toggle = document.getElementById('ann-important-toggle');
      toggle?.addEventListener('click', () => {
        this._important = !this._important;
        toggle.classList.toggle('on', this._important);
      });

      // Live preview
      const updatePreview = () => {
        const title = document.getElementById('ann-title')?.value;
        const content = document.getElementById('ann-content')?.value;
        const cat = document.getElementById('ann-category')?.value;
        const preview = document.getElementById('ann-preview');
        if (!preview) return;
        if (!title && !content) {
          preview.innerHTML = '<div style="font-size:.875rem;color:var(--c-text-muted);">Preview will appear as you type.</div>';
          return;
        }
        preview.innerHTML = `
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--s-2);">
            <div style="font-family:var(--f-heading);font-weight:700;">${Utils.escapeHtml(title || '(No title)')}</div>
            ${cat ? `<span class="badge badge-${cat.toLowerCase()}">${cat}</span>` : ''}
          </div>
          <div style="font-size:.875rem;color:var(--c-text-muted);white-space:pre-line;">${Utils.escapeHtml(content || '(No content)')}</div>`;
      };
      document.getElementById('ann-title')?.addEventListener('input', updatePreview);
      document.getElementById('ann-content')?.addEventListener('input', updatePreview);
      document.getElementById('ann-category')?.addEventListener('change', updatePreview);

      // Publish
      document.getElementById('btn-publish-ann')?.addEventListener('click', () => {
        const title   = document.getElementById('ann-title').value.trim();
        const content = document.getElementById('ann-content').value.trim();
        const cat     = document.getElementById('ann-category').value;
        const author  = document.getElementById('ann-author').value.trim() || App.user?.name || 'Staff';
        const errEl   = document.getElementById('ann-error');
        errEl.classList.add('hidden');

        if (!title || !content || !cat) {
          errEl.textContent = 'Please fill in all required fields.';
          errEl.classList.remove('hidden');
          return;
        }

        DB.createAnnouncement({ title, content, category: cat, author, important: this._important });
        Utils.showToast('Announcement published successfully!', 'success', 'Published');
        App.navigate('/staff/announcements');
      });
    }
  };

  /* ══════════════════════════════════════════════════════════
     REPORTS & ANALYTICS
     ══════════════════════════════════════════════════════════ */
  const reports = {
    render() {
      const stats = DB.getRequestStats();
      const incs  = DB.getIncidents();

      return `
      <div class="analytics-page page-enter">
        <div class="page-header-row" style="margin-bottom:var(--s-5);">
          <div>
            <h1 class="page-title">Reports & Analytics</h1>
            <p class="page-subtitle">Overview of barangay service performance.</p>
          </div>
        </div>

        <!-- Stat cards -->
        <div class="analytics-stats stagger">
          <div class="stat-card" style="--stat-accent:var(--c-primary);--stat-icon-bg:var(--c-primary-xlight);">
            <div class="stat-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
            </div>
            <div class="stat-card-value">${stats.total}</div>
            <div class="stat-card-label">Total Requests</div>
          </div>
          <div class="stat-card" style="--stat-accent:var(--c-success);--stat-icon-bg:var(--c-success-light);">
            <div class="stat-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg>
            </div>
            <div class="stat-card-value">${stats.resolutionRate}%</div>
            <div class="stat-card-label">Resolution Rate</div>
          </div>
          <div class="stat-card" style="--stat-accent:var(--c-accent);--stat-icon-bg:var(--c-accent-light);">
            <div class="stat-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div class="stat-card-value">₱${stats.totalRevenue.toLocaleString()}</div>
            <div class="stat-card-label">Total Revenue</div>
          </div>
          <div class="stat-card" style="--stat-accent:var(--c-danger);--stat-icon-bg:var(--c-danger-light);">
            <div class="stat-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
            </div>
            <div class="stat-card-value">${incs.length}</div>
            <div class="stat-card-label">Incident Reports</div>
          </div>
        </div>

        <!-- Charts -->
        <div class="charts-grid">
          <div class="chart-card">
            <div class="chart-card-title">Requests by Document Type</div>
            <canvas id="chart-by-type" height="260"></canvas>
          </div>
          <div class="chart-card">
            <div class="chart-card-title">Request Status Breakdown</div>
            <canvas id="chart-by-status" height="260"></canvas>
          </div>
        </div>

        <!-- Monthly trend -->
        <div class="chart-card" style="margin-bottom:var(--s-5);">
          <div class="chart-card-title">Monthly Request Volume</div>
          <canvas id="chart-monthly" height="200"></canvas>
        </div>

        <!-- Breakdown table -->
        <div class="card" style="margin-bottom:var(--s-8);">
          <div class="card-header"><strong>Document Type Breakdown</strong></div>
          <div class="table-wrap" style="border:none;">
            <table class="table">
              <thead><tr><th>Document Type</th><th>Count</th><th>% of Total</th><th>Revenue</th></tr></thead>
              <tbody>
                ${Object.entries(stats.byType).map(([type, count]) => {
                  const pct = Math.round((count / stats.total) * 100);
                  const fees = { 'Barangay Clearance': 75, 'Certificate of Residency': 50, 'Certificate of Indigency': 0, 'Business Permit Endorsement': 200 };
                  const rev = (fees[type] || 0) * count;
                  return `<tr><td>${type}</td><td style="font-weight:700;">${count}</td><td>${pct}%</td><td>${rev > 0 ? '₱'+rev.toLocaleString() : 'Free'}</td></tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;
    },

    init() {
      const stats = DB.getRequestStats();
      const primaryColors = ['#0d6e6e','#1a9090','#f59e0b','#3b82f6'];
      const statusColors  = { submitted: '#3b82f6', under_review: '#f59e0b', approved: '#10b981', released: '#0d6e6e', rejected: '#ef4444' };

      // Chart: by type (bar)
      const typeCtx = document.getElementById('chart-by-type')?.getContext('2d');
      if (typeCtx && typeof Chart !== 'undefined') {
        new Chart(typeCtx, {
          type: 'bar',
          data: {
            labels: Object.keys(stats.byType).map(t => t.replace('Certificate of ', '')),
            datasets: [{
              data: Object.values(stats.byType),
              backgroundColor: primaryColors,
              borderRadius: 8,
              borderSkipped: false,
            }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              y: { beginAtZero: true, ticks: { stepSize: 1 }, grid: { color: '#f1f5f9' } },
              x: { grid: { display: false } }
            }
          }
        });
      }

      // Chart: by status (doughnut)
      const statusCtx = document.getElementById('chart-by-status')?.getContext('2d');
      if (statusCtx && typeof Chart !== 'undefined') {
        new Chart(statusCtx, {
          type: 'doughnut',
          data: {
            labels: Object.keys(stats.byStatus).map(s => Utils.statusLabel(s)),
            datasets: [{
              data: Object.values(stats.byStatus),
              backgroundColor: Object.keys(stats.byStatus).map(s => statusColors[s] || '#94a3b8'),
              borderWidth: 0,
              hoverOffset: 8,
            }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            cutout: '65%',
            plugins: { legend: { position: 'bottom', labels: { padding: 20, usePointStyle: true } } }
          }
        });
      }

      // Chart: monthly (line)
      const monthCtx = document.getElementById('chart-monthly')?.getContext('2d');
      if (monthCtx && typeof Chart !== 'undefined') {
        const months = Object.keys(stats.byMonth).sort();
        new Chart(monthCtx, {
          type: 'line',
          data: {
            labels: months.map(m => { const d = new Date(m+'-01'); return d.toLocaleDateString('en-PH',{month:'short',year:'2-digit'}); }),
            datasets: [{
              label: 'Requests',
              data: months.map(m => stats.byMonth[m]),
              borderColor: '#0d6e6e',
              backgroundColor: 'rgba(13,110,110,.1)',
              tension: 0.4,
              fill: true,
              pointBackgroundColor: '#0d6e6e',
              pointRadius: 5,
              pointHoverRadius: 7,
            }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              y: { beginAtZero: true, ticks: { stepSize: 1 }, grid: { color: '#f1f5f9' } },
              x: { grid: { display: false } }
            }
          }
        });
      }
    }
  };

  return { queue, residents, incidents, announcements, reports };
})();
