/**
 * Nepal Flood & Disaster Response Platform - Interactive Map Service (Leaflet)
 * Integrates live BIPAD river stations, rain stations, road blocks, shelter locations,
 * and emergency help requests with color-coded markers matching reference UI.
 */

class MapService {
  constructor() {
    this.map = null;
    this.markers = [];
    this.layerGroups = {
      emergency: null,
      help: null,
      shelter: null,
      road: null,
      river: null,
      rain: null
    };
    this.currentFilter = 'all';
    this.currentDistrict = 'all';
  }

  initMap(containerId = 'live-leaflet-map') {
    const el = document.getElementById(containerId);
    if (!el) return;

    // Check if map already initialized
    if (this.map) {
      this.map.invalidateSize();
      return;
    }

    // Centered on Nepal
    this.map = L.map(containerId, {
      center: [28.1500, 84.5000],
      zoom: window.innerWidth < 768 ? 7 : 7.5,
      zoomControl: false,
      attributionControl: true
    });

    // Clean OpenStreetMap Tile Layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; OpenStreetMap contributors | BIPAD'
    }).addTo(this.map);

    // Zoom control at bottom right on desktop
    L.control.zoom({ position: 'bottomright' }).addTo(this.map);

    // Initialize layer groups
    for (let key in this.layerGroups) {
      this.layerGroups[key] = L.layerGroup().addTo(this.map);
    }

    // Load initial map data
    this.loadAllMapData();
  }

  createPinIcon(color, text = '', size = 32) {
    const svgHtml = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${size}" height="${size}">
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.3"/>
        </filter>
        <circle cx="16" cy="16" r="14" fill="${color}" stroke="#FFFFFF" stroke-width="2.5" filter="url(#shadow)"/>
        <text x="16" y="20" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="${text.length > 2 ? '9' : '11'}" font-weight="bold" text-anchor="middle">${text}</text>
      </svg>
    `;
    return L.divIcon({
      className: 'custom-map-pin',
      html: svgHtml,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
      popupAnchor: [0, -size / 2]
    });
  }

  async loadAllMapData() {
    if (!this.map) return;

    // 1. Fetch live River Stations
    try {
      const rivers = await window.apiService.getRiverStations(40);
      if (rivers.results) {
        rivers.results.forEach(st => {
          if (st.point && st.point.coordinates) {
            const [lng, lat] = st.point.coordinates;
            const wl = parseFloat(st.waterLevel) || 0;
            const warn = parseFloat(st.warningLevel) || 0;
            const dang = parseFloat(st.dangerLevel) || 0;
            
            let color = '#0284C7'; // Blue Info
            let statusText = 'Normal';
            if (dang > 0 && wl >= dang) {
              color = '#DC2626'; // Red Danger
              statusText = 'DANGER LEVEL';
            } else if (warn > 0 && wl >= warn) {
              color = '#EA580C'; // Orange Warning
              statusText = 'WARNING LEVEL';
            }

            const marker = L.marker([lat, lng], {
              icon: this.createPinIcon(color, '🌊', 32)
            });

            const popupContent = `
              <div class="map-popup-card">
                <div class="popup-badge" style="background:${color}20; color:${color};">
                  ${statusText}
                </div>
                <h4 class="popup-title">${st.title || 'River Station'}</h4>
                <div class="popup-meta"><strong>Basin:</strong> ${st.basin || 'N/A'}</div>
                <div class="popup-stat-grid">
                  <div class="popup-stat-box">
                    <span class="lbl">Water Level</span>
                    <span class="val" style="color:${color}; font-weight:bold;">${wl > 0 ? wl.toFixed(2) + 'm' : 'N/A'}</span>
                  </div>
                  <div class="popup-stat-box">
                    <span class="lbl">Warning</span>
                    <span class="val">${warn > 0 ? warn.toFixed(2) + 'm' : 'N/A'}</span>
                  </div>
                  <div class="popup-stat-box">
                    <span class="lbl">Danger</span>
                    <span class="val" style="color:#DC2626;">${dang > 0 ? dang.toFixed(2) + 'm' : 'N/A'}</span>
                  </div>
                </div>
                <div class="popup-footer">
                  <span>Source: <strong>BIPAD / DHM</strong></span>
                  <span>${st.waterLevelOn ? st.waterLevelOn.split('T')[1]?.substring(0, 5) : 'Live'}</span>
                </div>
              </div>
            `;

            marker.bindPopup(popupContent);
            this.layerGroups.river.addLayer(marker);
            this.markers.push({ marker, type: 'river', district: st.district });
          }
        });
      }
    } catch (e) {
      console.warn('River stations map load error:', e);
    }

    // 2. Fetch Highway road status
    try {
      const highways = await window.apiService.getHighways(20);
      if (highways.results) {
        highways.results.forEach(hw => {
          if (hw.point && hw.point.coordinates) {
            const [lng, lat] = hw.point.coordinates;
            const isBlocked = hw.status === 'CLOSED' || hw.status === 'BLOCKED';
            const color = isBlocked ? '#DC2626' : (hw.status === 'PARTIAL' ? '#EA580C' : '#16A34A');
            const iconSymbol = isBlocked ? '🚧' : '🛣️';

            const marker = L.marker([lat, lng], {
              icon: this.createPinIcon(color, iconSymbol, 32)
            });

            const popupContent = `
              <div class="map-popup-card">
                <div class="popup-badge" style="background:${color}20; color:${color};">
                  ${hw.status} - Highway Status
                </div>
                <h4 class="popup-title">${hw.title || 'Highway Section'}</h4>
                <div class="popup-meta"><strong>Location:</strong> ${hw.location || 'Nepal'}</div>
                <div class="popup-meta"><strong>Reason:</strong> ${hw.closureReason || hw.remarks || 'Landslide/Debris'}</div>
                <div class="popup-meta"><strong>Repair ETA:</strong> ${hw.repairEta || 'Under clearance'}</div>
                <div class="popup-footer">
                  <span>Source: <strong>BIPAD / Dept of Roads</strong></span>
                  <span>${hw.dateCreated || 'Live'}</span>
                </div>
              </div>
            `;

            marker.bindPopup(popupContent);
            this.layerGroups.road.addLayer(marker);
            this.markers.push({ marker, type: 'road', district: hw.district });
          }
        });
      }
    } catch (e) {
      console.warn('Highway map load error:', e);
    }

    // 3. Fetch Shelters
    try {
      const shelters = await window.apiService.getShelters();
      if (shelters.results) {
        shelters.results.forEach(sh => {
          if (sh.lat && sh.lng) {
            const marker = L.marker([sh.lat, sh.lng], {
              icon: this.createPinIcon('#16A34A', '🏠', 32)
            });

            const popupContent = `
              <div class="map-popup-card">
                <div class="popup-badge" style="background:#16A34A20; color:#16A34A;">
                  🟢 SAFE SHELTER (${sh.status})
                </div>
                <h4 class="popup-title">${sh.name}</h4>
                <div class="popup-meta"><strong>Municipality:</strong> ${sh.municipality}, ${sh.district}</div>
                <div class="popup-meta"><strong>Occupancy:</strong> ${sh.occupancy} / ${sh.capacity} people</div>
                <div class="popup-meta"><strong>Supplies:</strong> Food: ${sh.foodStatus}, Water: ${sh.waterStatus}</div>
                <div class="popup-meta"><strong>Contact:</strong> ${sh.contactPerson} (${sh.contactPhone})</div>
                <div class="popup-footer">
                  <span>Source: <strong>${sh.source}</strong></span>
                </div>
              </div>
            `;

            marker.bindPopup(popupContent);
            this.layerGroups.shelter.addLayer(marker);
            this.markers.push({ marker, type: 'shelter', district: sh.district });
          }
        });
      }
    } catch (e) {
      console.warn('Shelter map load error:', e);
    }

    // 4. Fetch Emergency Requests
    try {
      const requests = await window.apiService.getEmergencyRequests();
      if (requests.results) {
        requests.results.forEach(rq => {
          if (rq.lat && rq.lng) {
            const isRescue = rq.type === 'rescue';
            const color = isRescue ? '#DC2626' : '#EA580C';
            const symbol = isRescue ? 'SOS' : 'HELP';

            const marker = L.marker([rq.lat, rq.lng], {
              icon: this.createPinIcon(color, symbol, 34)
            });

            const popupContent = `
              <div class="map-popup-card">
                <div class="popup-badge" style="background:${color}20; color:${color};">
                  ${isRescue ? '🚨 URGENT RESCUE' : '🟠 ASSISTANCE NEEDED'} (#${rq.id})
                </div>
                <h4 class="popup-title">${rq.typeName}</h4>
                <div class="popup-meta"><strong>Location:</strong> ${rq.location}</div>
                <div class="popup-meta"><strong>People Affected:</strong> ${rq.peopleCount}</div>
                <div class="popup-meta"><strong>Status:</strong> ${rq.statusLabel}</div>
                <p class="popup-desc">${rq.description}</p>
                <div class="popup-action-btn" onclick="window.app.viewRequestDetail(${rq.id})">
                  View Case Details &rarr;
                </div>
                <div class="popup-footer">
                  <span>Source: <strong>Citizen Report / Verified</strong></span>
                </div>
              </div>
            `;

            marker.bindPopup(popupContent);
            if (isRescue) {
              this.layerGroups.emergency.addLayer(marker);
              this.markers.push({ marker, type: 'emergency', district: rq.district });
            } else {
              this.layerGroups.help.addLayer(marker);
              this.markers.push({ marker, type: 'help', district: rq.district });
            }
          }
        });
      }
    } catch (e) {
      console.warn('Emergency requests map load error:', e);
    }
  }

  filterByType(type) {
    this.currentFilter = type;
    for (let key in this.layerGroups) {
      if (type === 'all' || type === key || (type === 'emergency' && (key === 'emergency' || key === 'help'))) {
        if (!this.map.hasLayer(this.layerGroups[key])) {
          this.map.addLayer(this.layerGroups[key]);
        }
      } else {
        if (this.map.hasLayer(this.layerGroups[key])) {
          this.map.removeLayer(this.layerGroups[key]);
        }
      }
    }
  }

  zoomToDistrict(districtName) {
    const districtCoords = {
      'Kathmandu': [27.7172, 85.3240],
      'Sindhupalchok': [27.8105, 85.7335],
      'Rautahat': [26.7725, 85.2789],
      'Morang': [26.4525, 87.2718],
      'Kavrepalanchok': [27.5819, 85.5186],
      'Makwanpur': [27.4285, 85.0322],
      'Chitwan': [27.5291, 84.3542],
      'Kaski': [28.2096, 83.9856],
      'Jhapa': [26.6500, 87.9000],
      'Kailali': [28.7100, 80.6000]
    };

    if (districtCoords[districtName]) {
      this.map.flyTo(districtCoords[districtName], 10, { duration: 1.2 });
    }
  }

  locateUser() {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        if (this.map) {
          this.map.flyTo([latitude, longitude], 13);
          L.circle([latitude, longitude], {
            radius: 500,
            color: '#0284C7',
            fillColor: '#38BDF8',
            fillOpacity: 0.25
          }).addTo(this.map).bindPopup('📍 Your Current Location').openPopup();
        }
      },
      (err) => {
        console.warn('Geolocation failed:', err);
        alert('Could not get GPS location. Please check location permissions.');
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  }
}

window.mapService = new MapService();
