/**
 * Nepal Flood & Disaster Response Platform - API Service Layer
 * Interfaces with api.php proxy for BIPAD official data & local CRUD storage.
 * Features localStorage fallback cache for offline resilience during disasters.
 */

const API_BASE = 'api.php';

class ApiService {
  constructor() {
    this.cachePrefix = 'nfrp_cache_';
    this.subscribers = [];
  }

  async fetchWithFallback(action, params = {}, cacheTtl = 60000) {
    const queryString = new URLSearchParams({ action, ...params }).toString();
    const url = `${API_BASE}?${queryString}`;
    const cacheKey = `${this.cachePrefix}${action}_${JSON.stringify(params)}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const data = await response.json();
      localStorage.setItem(cacheKey, JSON.stringify({
        timestamp: Date.now(),
        data: data
      }));

      return data;
    } catch (err) {
      console.warn(`[ApiService] Network fetch failed for ${action}, trying local cache:`, err);
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          parsed.data._is_offline_cache = true;
          parsed.data._cached_timestamp = parsed.timestamp;
          return parsed.data;
        } catch (e) {
          console.error('[ApiService] Corrupted cache:', e);
        }
      }
      // Return empty fallback
      return { count: 0, results: [], _is_offline_cache: true, error: err.message };
    }
  }

  async getSummaryStats() {
    return this.fetchWithFallback('summary_stats', {}, 30000);
  }

  async getRiverStations(limit = 60) {
    return this.fetchWithFallback('river_stations', { limit }, 60000);
  }

  async getRainStations(limit = 60) {
    return this.fetchWithFallback('rain_stations', { limit }, 60000);
  }

  async getIncidents(limit = 30) {
    return this.fetchWithFallback('incidents', { limit }, 60000);
  }

  async getAlerts(limit = 20) {
    return this.fetchWithFallback('alerts', { limit }, 60000);
  }

  async getHighways(limit = 30) {
    return this.fetchWithFallback('highways', { limit }, 60000);
  }

  async getDistricts() {
    return this.fetchWithFallback('districts', { limit: 100 }, 86400000);
  }

  async getEmergencyRequests() {
    return this.fetchWithFallback('requests', {}, 15000);
  }

  async submitEmergencyRequest(payload) {
    const url = `${API_BASE}?action=requests`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('[ApiService] Submit request failed:', err);
      // Store in offline submission queue
      const queue = JSON.parse(localStorage.getItem('nfrp_offline_requests') || '[]');
      const offlineRecord = {
        ...payload,
        id: 'OFFLINE_' + Date.now(),
        status: 'pending',
        statusLabel: 'Offline Queue (प्रतिक्षारत)',
        createdAt: new Date().toISOString()
      };
      queue.push(offlineRecord);
      localStorage.setItem('nfrp_offline_requests', JSON.stringify(queue));
      return { success: true, offline: true, request: offlineRecord };
    }
  }

  async updateRequestStatus(id, status, assignedTo = '', notes = '') {
    const url = `${API_BASE}?action=update_request_status`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status, assignedTo, notes })
    });
    return response.json();
  }

  async getMissingPersons() {
    return this.fetchWithFallback('missing_persons', {}, 30000);
  }

  async submitMissingPerson(payload) {
    const url = `${API_BASE}?action=missing_persons`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
  }

  async getShelters() {
    return this.fetchWithFallback('shelters', {}, 60000);
  }

  async getFactChecks() {
    return this.fetchWithFallback('fact_checks', {}, 60000);
  }

  async getVerifiedUpdates() {
    return this.fetchWithFallback('verified_updates', {}, 60000);
  }

  async getApiMonitoring() {
    return this.fetchWithFallback('api_monitoring', {}, 10000);
  }
}

window.apiService = new ApiService();
