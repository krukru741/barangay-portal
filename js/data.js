/* ============================================================
   DATA.JS — localStorage DB layer + seed data
   E-Barangay San Miguel Portal
   ============================================================ */

const DB = (() => {
  const KEYS = {
    USERS: 'brgy_users',
    SESSION: 'brgy_session',
    REQUESTS: 'brgy_requests',
    INCIDENTS: 'brgy_incidents',
    ANNOUNCEMENTS: 'brgy_announcements',
    SEEDED: 'brgy_seeded_v3',
  };

  /* ── Core storage helpers ── */
  const get  = k => JSON.parse(localStorage.getItem(k) || 'null');
  const set  = (k, v) => localStorage.setItem(k, JSON.stringify(v));
  const getArr = k => get(k) || [];

  /* ── Seed data ── */
  const SEED = {
    users: [
      {
        id: 'u1', phone: '09171234567', name: 'Maria Santos', role: 'resident',
        address: 'Blk 5 Lot 3, Purok Sampaguita', purok: 'Purok Sampaguita',
        civil_status: 'Married', birthdate: '1985-03-15', gender: 'Female',
        occupation: 'Teacher', email: 'maria.santos@email.com',
        household: [
          { id: 'hm1', name: 'Juan Santos', relation: 'Spouse', age: 42 },
          { id: 'hm2', name: 'Ana Santos', relation: 'Child', age: 9 },
          { id: 'hm3', name: 'Pedro Santos', relation: 'Child', age: 7 },
        ],
        profile_complete: true, created_at: '2026-01-15T08:00:00',
      },
      {
        id: 'u2', phone: '09281234567', name: 'Carlo Reyes', role: 'resident',
        address: 'Blk 2 Lot 8, Purok Ilang-ilang', purok: 'Purok Ilang-ilang',
        civil_status: 'Single', birthdate: '1998-07-22', gender: 'Male',
        occupation: 'Student', email: '',
        household: [],
        profile_complete: true, created_at: '2026-03-01T10:00:00',
      },
      {
        id: 'u3', phone: '09351234567', name: 'Lourdes Bautista', role: 'resident',
        address: '', purok: '', civil_status: '', birthdate: '', gender: '',
        occupation: '', email: '',
        household: [],
        profile_complete: false, created_at: '2026-07-20T14:00:00',
      },
      {
        id: 'u4', phone: '09289876543', name: 'Rolando Cruz', role: 'staff',
        address: 'Barangay Hall', purok: 'San Miguel', civil_status: '', birthdate: '',
        gender: 'Male', occupation: 'Barangay Secretary', email: 'r.cruz@brgysanmiguel.gov.ph',
        household: [], profile_complete: true, created_at: '2025-01-01T08:00:00',
      },
      {
        id: 'u5', phone: '09151112222', name: 'Kapitan Elena Villanueva', role: 'admin',
        address: 'Barangay Hall', purok: 'San Miguel', civil_status: '', birthdate: '',
        gender: 'Female', occupation: 'Punong Barangay', email: 'kapitan@brgysanmiguel.gov.ph',
        household: [], profile_complete: true, created_at: '2024-06-01T08:00:00',
      },
    ],

    requests: [
      {
        id: 'req1', ref: 'REF-20260805-001',
        resident_id: 'u1', resident_name: 'Maria Santos', resident_phone: '09171234567',
        type: 'Barangay Clearance', purpose: 'Employment',
        status: 'approved', payment_status: 'paid', amount: 75,
        address: 'Blk 5 Lot 3, Purok Sampaguita', years_in_brgy: 5,
        notes: 'Verified residence. Approved.', reject_reason: '',
        submitted_at: '2026-08-05T10:30:00', updated_at: '2026-08-07T14:00:00',
      },
      {
        id: 'req2', ref: 'REF-20260810-002',
        resident_id: 'u1', resident_name: 'Maria Santos', resident_phone: '09171234567',
        type: 'Certificate of Residency', purpose: 'School enrollment',
        status: 'under_review', payment_status: 'paid', amount: 50,
        address: 'Blk 5 Lot 3, Purok Sampaguita', years_in_brgy: 5,
        notes: '', reject_reason: '',
        submitted_at: '2026-08-10T09:00:00', updated_at: '2026-08-11T11:00:00',
      },
      {
        id: 'req3', ref: 'REF-20260812-003',
        resident_id: 'u2', resident_name: 'Carlo Reyes', resident_phone: '09281234567',
        type: 'Certificate of Indigency', purpose: 'PhilHealth application',
        status: 'submitted', payment_status: 'free', amount: 0,
        address: 'Blk 2 Lot 8, Purok Ilang-ilang', years_in_brgy: 3,
        notes: '', reject_reason: '',
        submitted_at: '2026-08-12T08:00:00', updated_at: '2026-08-12T08:00:00',
      },
      {
        id: 'req4', ref: 'REF-20260801-004',
        resident_id: 'u2', resident_name: 'Carlo Reyes', resident_phone: '09281234567',
        type: 'Barangay Clearance', purpose: 'Travel',
        status: 'released', payment_status: 'paid', amount: 75,
        address: 'Blk 2 Lot 8, Purok Ilang-ilang', years_in_brgy: 3,
        notes: 'Document released.', reject_reason: '',
        submitted_at: '2026-08-01T09:00:00', updated_at: '2026-08-03T15:00:00',
      },
      {
        id: 'req5', ref: 'REF-20260809-005',
        resident_id: 'u3', resident_name: 'Lourdes Bautista', resident_phone: '09351234567',
        type: 'Business Permit Endorsement', purpose: 'Sari-sari store permit',
        status: 'under_review', payment_status: 'paid', amount: 200,
        address: 'Blk 8 Lot 2, Purok Rosal', years_in_brgy: 10,
        notes: 'Awaiting additional business documents from applicant.', reject_reason: '',
        submitted_at: '2026-08-09T14:00:00', updated_at: '2026-08-10T09:00:00',
      },
      {
        id: 'req6', ref: 'REF-20260806-006',
        resident_id: 'u1', resident_name: 'Maria Santos', resident_phone: '09171234567',
        type: 'Certificate of Indigency', purpose: 'Hospital assistance',
        status: 'rejected', payment_status: 'free', amount: 0,
        address: 'Blk 5 Lot 3, Purok Sampaguita', years_in_brgy: 5,
        notes: '', reject_reason: 'Applicant does not qualify based on household income assessment.',
        submitted_at: '2026-08-06T11:00:00', updated_at: '2026-08-08T10:00:00',
      },
    ],

    incidents: [
      {
        id: 'inc1', ref: 'INC-20260810-001',
        reporter_id: 'u2', reporter_name: 'Carlo Reyes', reporter_phone: '09281234567',
        anonymous: false,
        category: 'Road Damage',
        description: 'Malaking butas sa kalsada sa harap ng Purok Ilang-ilang. Mapanganib na sa mga motorsiklo at bata.',
        location: { lat: 14.6760, lng: 121.0437, address: 'Purok Ilang-ilang, kanto ng Rizal St.' },
        photo: null, status: 'investigating', staff_notes: 'Coordinating with DPWH for road repair.',
        submitted_at: '2026-08-10T09:00:00', updated_at: '2026-08-11T11:00:00',
      },
      {
        id: 'inc2', ref: 'INC-20260811-002',
        reporter_id: 'u1', reporter_name: 'Anonymous', reporter_phone: '',
        anonymous: true,
        category: 'Illegal Dumping',
        description: 'May nagtatapon ng basura sa lote sa kanto ng Purok Sampaguita at kalye Rizal. Nakaka-polusyon ang amoy.',
        location: { lat: 14.6745, lng: 121.0420, address: 'Kanto ng Purok Sampaguita at Rizal St.' },
        photo: null, status: 'received', staff_notes: '',
        submitted_at: '2026-08-11T16:00:00', updated_at: '2026-08-11T16:00:00',
      },
      {
        id: 'inc3', ref: 'INC-20260808-003',
        reporter_id: 'u2', reporter_name: 'Carlo Reyes', reporter_phone: '09281234567',
        anonymous: false,
        category: 'Street Light Out',
        description: 'Patay ang ilaw sa dulo ng Purok Ilang-ilang. Madilim na ang lugar tuwing gabi, delikado para sa mga residente.',
        location: { lat: 14.6755, lng: 121.0430, address: 'Dulo ng Purok Ilang-ilang' },
        photo: null, status: 'resolved', staff_notes: 'Light bulb replaced by barangay maintenance team.',
        submitted_at: '2026-08-08T07:00:00', updated_at: '2026-08-09T14:00:00',
      },
    ],

    announcements: [
      {
        id: 'ann1', title: 'Free Medical Mission — August 15',
        content: 'Ang Barangay San Miguel kasama ang Quezon City Health Office ay magsasagawa ng libreng medical mission para sa lahat ng mga residente. Kasama ang libreng check-up, gamot, at dental consultation.\n\nDalhin ang inyong Barangay ID o anumang valid ID. Open sa lahat ng residente, walang bayad.',
        category: 'Health', important: true,
        author: 'Kapitan Elena Villanueva',
        published_at: '2026-08-13T08:00:00', created_at: '2026-08-13T07:00:00',
      },
      {
        id: 'ann2', title: 'Barangay Assembly — August 20, 2026',
        content: 'Lahat ng mga pamilya ay mainit na inaanyayahan sa aming buwanang barangay assembly na gaganapin sa Barangay Hall.\n\nAgenda:\n• Ulat sa katayuan ng COVID booster program\n• Bagong livelihood program ng DOLE\n• Disaster Risk Reduction at preparedness update\n• Open forum\n\nLibre ang meryenda para sa lahat ng dadalo.',
        category: 'General', important: false,
        author: 'Sekretarya Rolando Cruz',
        published_at: '2026-08-12T10:00:00', created_at: '2026-08-12T09:30:00',
      },
      {
        id: 'ann3', title: '⚠️ Typhoon Preparedness Advisory',
        content: 'Ayon sa PAGASA, may papalapit na bagyo sa ating lugar ngayong susunod na linggo. Hinihiling ng Barangay San Miguel na ihanda na ang lahat ng mga pamilya.\n\nMga dapat ihanda:\n• Emergency kit (gamot, pagkain ng 3 araw, tubig)\n• Mahalagang dokumento (sa waterproof na bag)\n• Flashlight at extra batteries\n• Cash para sa emergency\n\nAng opisyal na evacuation center ay ang San Miguel Elementary School. Para sa emergencies, tawagan ang Barangay Hall: (02) 8123-4567.',
        category: 'Disaster', important: true,
        author: 'BDRRMC Office',
        published_at: '2026-08-11T06:00:00', created_at: '2026-08-11T05:30:00',
      },
      {
        id: 'ann4', title: 'Senior Citizen ID Renewal Schedule',
        content: 'Ang lahat ng Senior Citizens ng Barangay San Miguel ay pinapaalalahanan na i-renew ang kanilang OSCA ID bago mag-September 30.\n\nDalhin ang inyong lumang ID at 1x1 na litrato. Pumunta sa Barangay Hall, lunes hanggang biyernes, 8AM–4PM.',
        category: 'General', important: false,
        author: 'OSCA Office',
        published_at: '2026-08-09T08:00:00', created_at: '2026-08-09T07:30:00',
      },
      {
        id: 'ann5', title: 'Fun Run for Peace — August 25',
        content: 'Samahan kami sa Barangay San Miguel Fun Run para sa kapayapaan at kalikasan! Ang lahat ng kita ay mapupunta sa scholarship program ng barangay.\n\nRegistration: ₱150 (kasama ang singlet at kit). Puwesto: Barangay Hall, 5AM. Mag-register na sa barangay hall o tumawag sa (02) 8123-4567.',
        category: 'Events', important: false,
        author: 'Barangay Youth Council',
        published_at: '2026-08-08T09:00:00', created_at: '2026-08-08T08:30:00',
      },
    ],
  };

  /* ── Init / seed ── */
  function init() {
    if (!get(KEYS.SEEDED)) {
      set(KEYS.USERS,         SEED.users);
      set(KEYS.REQUESTS,      SEED.requests);
      set(KEYS.INCIDENTS,     SEED.incidents);
      set(KEYS.ANNOUNCEMENTS, SEED.announcements);
      set(KEYS.SEEDED, true);
    }
  }

  /* ── Session ── */
  function getSession()       { return get(KEYS.SESSION); }
  function setSession(user)   { set(KEYS.SESSION, user); }
  function clearSession()     { localStorage.removeItem(KEYS.SESSION); }

  /* ── Users ── */
  function getUsers()           { return getArr(KEYS.USERS); }
  function getUserById(id)      { return getUsers().find(u => u.id === id) || null; }
  function getUserByPhone(phone){ return getUsers().find(u => u.phone === phone) || null; }

  function updateUser(id, updates) {
    const users = getUsers();
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return null;
    users[idx] = { ...users[idx], ...updates };
    set(KEYS.USERS, users);
    return users[idx];
  }

  function getResidents() {
    return getUsers().filter(u => u.role === 'resident');
  }

  /* ── Requests ── */
  function getRequests(filter = {}) {
    let reqs = getArr(KEYS.REQUESTS);
    if (filter.resident_id) reqs = reqs.filter(r => r.resident_id === filter.resident_id);
    if (filter.status)      reqs = reqs.filter(r => r.status === filter.status);
    // Sort by most recent first
    return reqs.sort((a, b) => new Date(b.submitted_at) - new Date(a.submitted_at));
  }

  function getRequestById(id) {
    return getArr(KEYS.REQUESTS).find(r => r.id === id) || null;
  }

  function getRequestByRef(ref) {
    return getArr(KEYS.REQUESTS).find(r => r.ref === ref) || null;
  }

  function createRequest(data) {
    const reqs = getArr(KEYS.REQUESTS);
    const newReq = {
      id: Utils.generateId(),
      ref: Utils.generateRef('REF'),
      status: 'submitted',
      payment_status: data.amount === 0 ? 'free' : 'pending',
      notes: '',
      reject_reason: '',
      submitted_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      ...data,
    };
    reqs.unshift(newReq);
    set(KEYS.REQUESTS, reqs);
    return newReq;
  }

  function updateRequest(id, updates) {
    const reqs = getArr(KEYS.REQUESTS);
    const idx = reqs.findIndex(r => r.id === id);
    if (idx === -1) return null;
    reqs[idx] = { ...reqs[idx], ...updates, updated_at: new Date().toISOString() };
    set(KEYS.REQUESTS, reqs);
    return reqs[idx];
  }

  /* ── Incidents ── */
  function getIncidents(filter = {}) {
    let incs = getArr(KEYS.INCIDENTS);
    if (filter.reporter_id) incs = incs.filter(i => i.reporter_id === filter.reporter_id);
    if (filter.status)      incs = incs.filter(i => i.status === filter.status);
    return incs.sort((a, b) => new Date(b.submitted_at) - new Date(a.submitted_at));
  }

  function getIncidentById(id) {
    return getArr(KEYS.INCIDENTS).find(i => i.id === id) || null;
  }

  function createIncident(data) {
    const incs = getArr(KEYS.INCIDENTS);
    const newInc = {
      id: Utils.generateId(),
      ref: Utils.generateRef('INC'),
      status: 'received',
      staff_notes: '',
      submitted_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      ...data,
    };
    incs.unshift(newInc);
    set(KEYS.INCIDENTS, incs);
    return newInc;
  }

  function updateIncident(id, updates) {
    const incs = getArr(KEYS.INCIDENTS);
    const idx = incs.findIndex(i => i.id === id);
    if (idx === -1) return null;
    incs[idx] = { ...incs[idx], ...updates, updated_at: new Date().toISOString() };
    set(KEYS.INCIDENTS, incs);
    return incs[idx];
  }

  /* ── Announcements ── */
  function getAnnouncements(filter = {}) {
    let anns = getArr(KEYS.ANNOUNCEMENTS);
    if (filter.category) anns = anns.filter(a => a.category === filter.category);
    return anns.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
  }

  function createAnnouncement(data) {
    const anns = getArr(KEYS.ANNOUNCEMENTS);
    const newAnn = {
      id: Utils.generateId(),
      published_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      ...data,
    };
    anns.unshift(newAnn);
    set(KEYS.ANNOUNCEMENTS, anns);
    return newAnn;
  }

  /* ── Analytics helpers ── */
  function getRequestStats() {
    const reqs = getArr(KEYS.REQUESTS);
    const byType = {};
    const byStatus = {};
    const byMonth = {};

    reqs.forEach(r => {
      byType[r.type]     = (byType[r.type] || 0) + 1;
      byStatus[r.status] = (byStatus[r.status] || 0) + 1;

      const month = r.submitted_at?.slice(0, 7) || 'Unknown';
      byMonth[month] = (byMonth[month] || 0) + 1;
    });

    const totalRevenue = reqs
      .filter(r => r.payment_status === 'paid')
      .reduce((sum, r) => sum + (r.amount || 0), 0);

    const resolved = reqs.filter(r => ['approved','released'].includes(r.status)).length;
    const resolutionRate = reqs.length ? Math.round((resolved / reqs.length) * 100) : 0;

    return { byType, byStatus, byMonth, totalRevenue, resolutionRate, total: reqs.length };
  }

  /* ── Expose ── */
  return {
    init,
    getSession, setSession, clearSession,
    getUsers, getUserById, getUserByPhone, getResidents, updateUser,
    getRequests, getRequestById, getRequestByRef, createRequest, updateRequest,
    getIncidents, getIncidentById, createIncident, updateIncident,
    getAnnouncements, createAnnouncement,
    getRequestStats,
  };
})();
