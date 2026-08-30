/**
 * Nepal Flood & Disaster Response Platform - Admin & Volunteer Dashboard Controller
 * Triage workflows, API synchronization monitoring, audit logs, and data exports.
 */

class AdminController {
  constructor() {
    this.currentTab = 'overview';
  }

  async init() {
    this.bindEvents();
  }

  bindEvents() {
    document.querySelectorAll('.admin-nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.admin-nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const tab = item.dataset.adminTab;
        this.switchAdminTab(tab);
      });
    });

    const refreshSyncBtn = document.getElementById('btn-refresh-sync');
    if (refreshSyncBtn) {
      refreshSyncBtn.addEventListener('click', () => this.triggerSyncRefresh());
    }
  }

  switchAdminTab(tab) {
    this.currentTab = tab;
    document.querySelectorAll('.admin-tab-pane').forEach(pane => {
      pane.classList.remove('active');
    });
    const activePane = document.getElementById(`admin-pane-${tab}`);
    if (activePane) {
      activePane.classList.add('active');
    }

    if (tab === 'monitoring') {
      this.loadApiMonitoringLogs();
    }
  }

  async loadApiMonitoringLogs() {
    const tbody = document.getElementById('api-logs-tbody');
    if (!tbody) return;

    try {
      const data = await window.apiService.getApiMonitoring();
      if (data && data.sync_logs) {
        tbody.innerHTML = data.sync_logs.map(log => `
          <tr>
            <td><code>${log.endpoint}</code></td>
            <td>
              <span class="status-pill-mini ${log.status === 'SUCCESS' ? 'success' : 'danger'}">
                ${log.status} (${log.statusCode || 200})
              </span>
            </td>
            <td>${log.duration_ms || 120} ms</td>
            <td>${log.count !== undefined ? log.count : 'N/A'}</td>
            <td>${log.timestamp}</td>
          </tr>
        `).join('');
      }
    } catch (e) {
      console.warn('Monitoring log fetch error:', e);
    }
  }

  async triggerSyncRefresh() {
    const btn = document.getElementById('btn-refresh-sync');
    if (btn) {
      btn.disabled = true;
      btn.textContent = '⏳ Syncing with BIPAD...';
    }

    try {
      await window.apiService.getRiverStations(50);
      await window.apiService.getHighways(30);
      await window.apiService.getIncidents(30);
      await window.app.refreshSummaryStats();
      await this.loadApiMonitoringLogs();
      alert('BIPAD Disaster API Successfully Synchronized!');
    } catch (e) {
      alert('Sync completed with warnings.');
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = '🔄 Sync BIPAD API Now';
      }
    }
  }

  exportRequestsCSV() {
    const reqs = window.app.allRequests || [];
    if (reqs.length === 0) {
      alert('No data to export');
      return;
    }

    const headers = ['ID', 'Type', 'Location', 'District', 'People Count', 'Status', 'Phone', 'Created At', 'Description'];
    const rows = reqs.map(r => [
      r.id,
      `"${r.typeName || r.type}"`,
      `"${r.location}"`,
      `"${r.district || ''}"`,
      r.peopleCount,
      r.status,
      `"${r.phone || ''}"`,
      `"${r.createdAt}"`,
      `"${(r.description || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Nepal_Disaster_Requests_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

window.admin = new AdminController();
document.addEventListener('DOMContentLoaded', () => {
  window.admin.init();
});
