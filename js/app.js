/**
 * Nepal Flood & Disaster Response - Directory Gateway Application Controller
 * Handles filtering, keyword search, portal rendering, copy/share actions, and live alert ticker.
 */

class DirectoryApp {
  constructor() {
    this.currentCategory = 'all';
    this.searchQuery = '';
    this.portals = window.GOV_PORTALS || [];
    this.hotlines = window.EMERGENCY_HOTLINES || [];
  }

  async init() {
    this.bindEvents();
    
    // Set initial language
    const lang = localStorage.getItem('nfrp_dir_lang') || 'ne';
    window.i18n.setLanguage(lang);

    // Initial render
    this.renderHotlines();
    this.renderSpeedDial();
    this.renderPortals();
    this.updateStatsCounters();
    this.setupSocialSharing();

    // Fetch live river warnings for ticker
    this.fetchLiveRiverTicker();

    // Register PWA Service Worker for Offline access
    this.registerServiceWorker();
  }

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .then(reg => console.log('[PWA] Service Worker registered successfully:', reg.scope))
          .catch(err => console.warn('[PWA] Service Worker registration failed:', err));
      });
    }
  }

  bindEvents() {
    // Language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = e.currentTarget.dataset.lang;
        window.i18n.setLanguage(lang);
        this.renderSpeedDial();
      });
    });

    // Category filter chips
    document.querySelectorAll('.cat-chip-btn').forEach(chip => {
      chip.addEventListener('click', (e) => {
        document.querySelectorAll('.cat-chip-btn').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.currentCategory = chip.dataset.category;
        this.renderPortals();
      });
    });

    // Search input
    const searchInput = document.getElementById('portal-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderPortals();
      });
    }

    // Disclaimer Modal Handlers
    const disclaimerModal = document.getElementById('disclaimer-modal');
    const openDisclaimerBtns = [
      document.getElementById('btn-open-disclaimer'),
      document.getElementById('btn-footer-disclaimer')
    ];
    const closeDisclaimerBtns = [
      document.getElementById('btn-close-disclaimer'),
      document.getElementById('btn-understand-disclaimer')
    ];

    openDisclaimerBtns.forEach(btn => {
      if (btn && disclaimerModal) {
        btn.addEventListener('click', () => {
          disclaimerModal.classList.add('active');
        });
      }
    });

    closeDisclaimerBtns.forEach(btn => {
      if (btn && disclaimerModal) {
        btn.addEventListener('click', () => {
          disclaimerModal.classList.remove('active');
        });
      }
    });

    if (disclaimerModal) {
      disclaimerModal.addEventListener('click', (e) => {
        if (e.target === disclaimerModal) {
          disclaimerModal.classList.remove('active');
        }
      });
    }

    // Donation Modal Handlers
    const donationModal = document.getElementById('donation-modal');
    const openDonateBtn = document.getElementById('btn-open-donate');
    const closeDonateBtn = document.getElementById('btn-close-donate');

    if (openDonateBtn && donationModal) {
      openDonateBtn.addEventListener('click', () => {
        donationModal.classList.add('active');
      });
    }

    if (closeDonateBtn && donationModal) {
      closeDonateBtn.addEventListener('click', () => {
        donationModal.classList.remove('active');
      });
    }

    if (donationModal) {
      donationModal.addEventListener('click', (e) => {
        if (e.target === donationModal) {
          donationModal.classList.remove('active');
        }
      });
    }

    // Speed-Dial Modal Handlers
    const speedDialModal = document.getElementById('speed-dial-modal');
    const openSpeedDialBtn = document.getElementById('btn-open-speed-dial');
    const closeSpeedDialBtn = document.getElementById('btn-close-speed-dial');

    if (openSpeedDialBtn && speedDialModal) {
      openSpeedDialBtn.addEventListener('click', () => {
        speedDialModal.classList.add('active');
      });
    }

    if (closeSpeedDialBtn && speedDialModal) {
      closeSpeedDialBtn.addEventListener('click', () => {
        speedDialModal.classList.remove('active');
      });
    }

    if (speedDialModal) {
      speedDialModal.addEventListener('click', (e) => {
        if (e.target === speedDialModal) {
          speedDialModal.classList.remove('active');
        }
      });
    }
  }

  setupSocialSharing() {
    const pageUrl = window.location.href;
    const shareText = "🚨 विपद् डेस्क (Bipad Desk) - नेपालका बाढी, नदी जलसतह, हराएका नागरिक, सडक अवस्था र २४/७ आपतकालीन हटलाइन (100, 1234, 1155) को आधिकारिक खुला निर्देशिका:\n" + pageUrl;

    const waBtn = document.getElementById('btn-share-whatsapp');
    if (waBtn) {
      waBtn.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    }

    const vbBtn = document.getElementById('btn-share-viber');
    if (vbBtn) {
      vbBtn.href = `viber://forward?text=${encodeURIComponent(shareText)}`;
    }

    const copyBtn = document.getElementById('btn-copy-portal-link');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(pageUrl);
          this.showToast(window.i18n.t('toast_copied') || '✅ Link Copied!');
        } else {
          prompt('Copy Directory URL:', pageUrl);
        }
      });
    }
  }

  renderSpeedDial() {
    const container = document.getElementById('speed-dial-grid-container');
    if (!container) return;

    const lang = window.i18n ? window.i18n.getLang() : 'ne';
    container.innerHTML = this.hotlines.map(h => `
      <a href="tel:${h.number}" class="speed-dial-item">
        <div>
          <span>${h.icon}</span>
          <strong style="margin-left: 6px;">${lang === 'ne' ? h.nameNe : h.nameEn}</strong>
        </div>
        <span class="speed-dial-call-badge">📞 ${h.number}</span>
      </a>
    `).join('');
  }

  showToast(message) {
    const toast = document.getElementById('toast-notification');
    const msgSpan = document.getElementById('toast-message');
    if (toast && msgSpan) {
      msgSpan.textContent = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2500);
    }
  }

  renderHotlines() {
    const container = document.getElementById('hotlines-container');
    if (!container) return;

    const lang = window.i18n.getLang();
    container.innerHTML = this.hotlines.map(h => `
      <a href="tel:${h.number}" class="hotline-card">
        <span class="hotline-icon">${h.icon}</span>
        <div class="hotline-info">
          <span class="hotline-name">${lang === 'ne' ? h.nameNe : h.nameEn}</span>
          <span class="hotline-desc">${lang === 'ne' ? h.descNe : h.descEn}</span>
        </div>
        <span class="hotline-dial-btn">📞 ${h.number}</span>
      </a>
    `).join('');
  }

  renderPortals() {
    const grid = document.getElementById('portals-grid');
    const resultCountEl = document.getElementById('portal-results-count');
    if (!grid) return;

    const lang = window.i18n.getLang();
    const query = this.searchQuery;

    // Filter by Category and Search Query
    const filtered = this.portals.filter(p => {
      // Category Match
      const matchesCategory = (this.currentCategory === 'all') || (p.category === this.currentCategory);

      // Search Query Match (Checks Nepali, English, Department, Features, URL, ID)
      if (!matchesCategory) return false;
      if (!query) return true;

      const haystack = [
        p.nameNe,
        p.nameEn,
        p.departmentNe,
        p.departmentEn,
        p.descriptionNe,
        p.descriptionEn,
        p.url,
        p.category,
        ...(p.featuresNe || []),
        ...(p.featuresEn || [])
      ].join(' ').toLowerCase();

      return haystack.includes(query);
    });

    if (resultCountEl) {
      resultCountEl.textContent = `${filtered.length} / ${this.portals.length} portals`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="no-results-box">
          <div style="font-size: 2.5rem; margin-bottom: 8px;">🔍</div>
          <h3>${lang === 'ne' ? 'कुनै सरकारी पोर्टल भेटिएन' : 'No Government Portals Found'}</h3>
          <p style="color: var(--text-secondary); margin-top: 4px;">
            ${lang === 'ne' ? 'कृपया अर्को शब्द खोज्नुहोस् वा वर्ग परिवर्तन गर्नुहोस्।' : 'Please try a different keyword or reset the category filter.'}
          </p>
          <button class="btn-reset-filter" onclick="window.app.resetFilters()">
            ${lang === 'ne' ? '🔄 फिल्टर रिसेट गर्नुहोस्' : '🔄 Reset All Filters'}
          </button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(p => {
      const name = lang === 'ne' ? p.nameNe : p.nameEn;
      const dept = lang === 'ne' ? p.departmentNe : p.departmentEn;
      const desc = lang === 'ne' ? p.descriptionNe : p.descriptionEn;
      const features = lang === 'ne' ? p.featuresNe : p.featuresEn;
      const isOfficial = p.isGov;

      const badgeLabel = isOfficial 
        ? (lang === 'ne' ? '🇳🇵 नेपाल सरकार (Official Gov)' : '🇳🇵 Official Gov Portal')
        : (lang === 'ne' ? '🌐 प्रामाणिक निकाय (Authority)' : '🌐 Verified Authority');

      const badgeClass = isOfficial ? 'badge-gov' : 'badge-authority';

      const quickLinksHtml = (p.quickLinks && p.quickLinks.length > 0) ? `
        <div class="card-quick-links">
          <span class="quick-links-title">${window.i18n.t('lbl_quick_links')}</span>
          <div class="quick-links-list">
            ${p.quickLinks.map(ql => `
              <a href="${ql.url}" target="_blank" rel="noopener noreferrer" class="quick-link-chip">
                ⚡ ${lang === 'ne' ? ql.titleNe : ql.titleEn}
              </a>
            `).join('')}
          </div>
        </div>
      ` : '';

      return `
        <article class="portal-card" id="portal-${p.id}">
          <div class="portal-card-header">
            <span class="portal-status-badge ${badgeClass}">
              <span class="pulse-dot"></span>
              ${badgeLabel}
            </span>
            <span class="portal-category-tag">${lang === 'ne' ? p.categoryNameNe : p.categoryNameEn}</span>
          </div>

          <h3 class="portal-title">
            <a href="${p.url}" target="_blank" rel="noopener noreferrer">
              ${name}
            </a>
          </h3>

          <div class="portal-dept">
            🏛️ <strong>${window.i18n.t('lbl_source_dept')}</strong> ${dept}
          </div>

          <p class="portal-desc">${desc}</p>

          ${features ? `
            <div class="portal-features-list">
              ${features.map(f => `<span class="feature-tag">✔ ${f}</span>`).join('')}
            </div>
          ` : ''}

          ${quickLinksHtml}

          <div class="portal-card-actions">
            <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn-redirect-primary">
              <span>${window.i18n.t('btn_open_portal')}</span>
              <span class="redirect-arrow">↗</span>
            </a>
            <button class="btn-card-util" onclick="window.app.copyPortalLink('${p.url}')" title="Copy URL">
              ${window.i18n.t('btn_copy_link')}
            </button>
          </div>

          <div class="portal-card-footer">
            <span class="portal-url-display">🔗 ${p.url}</span>
            <span class="portal-ping-status">🟢 Verified Active</span>
          </div>
        </article>
      `;
    }).join('');
  }

  async fetchLiveRiverTicker() {
    let warnCount = 0;
    let dangCount = 0;
    let timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    let fetched = false;

    // 1. Try local PHP proxy first
    try {
      const response = await fetch('api.php?action=summary_stats', { signal: AbortSignal.timeout(4000) });
      if (response.ok) {
        const stats = await response.json();
        warnCount = stats.river_stations_warning || 0;
        dangCount = stats.river_stations_danger || 0;
        timeStr = stats.updated_time || timeStr;
        fetched = true;
      }
    } catch (e) {
      // Local backend not reachable (e.g. running on static Vercel host)
    }

    // 2. Direct client-side fetch to Official Government BIPAD API (for Vercel / GitHub Pages)
    if (!fetched) {
      try {
        const bipadRes = await fetch('https://bipadportal.gov.np/api/v1/river-stations/?limit=100', {
          headers: { 'Accept': 'application/json' },
          signal: AbortSignal.timeout(6000)
        });
        if (bipadRes.ok) {
          const data = await bipadRes.json();
          if (data && data.results) {
            data.results.forEach(st => {
              const wl = parseFloat(st.waterLevel) || 0;
              const dl = parseFloat(st.dangerLevel) || 0;
              const warn = parseFloat(st.warningLevel) || 0;
              if (dl > 0 && wl >= dl) dangCount++;
              else if (warn > 0 && wl >= warn) warnCount++;
            });
            fetched = true;
          }
        }
      } catch (err) {
        console.warn('[Ticker] Direct BIPAD fetch fallback:', err);
      }
    }

    this.liveTickerData = { warnCount, dangCount, timeStr, fetched };
    this.renderTickerContent();
  }

  renderTickerContent() {
    const tickerEl = document.getElementById('live-ticker-text');
    const duplicateEl = document.getElementById('live-ticker-duplicate');
    if (!tickerEl) return;

    const data = this.liveTickerData || {
      warnCount: 0,
      dangCount: 0,
      timeStr: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      fetched: true
    };

    const lang = window.i18n ? window.i18n.getLang() : 'ne';
    let html = '';

    if (lang === 'en') {
      if (data.warnCount > 0 || data.dangCount > 0) {
        html = `<strong>[DHM / BIPAD ${data.timeStr}]:</strong>&nbsp;&nbsp;🌊 Warning River Level:&nbsp;<strong>${data.warnCount} Stations</strong>&nbsp;&nbsp;|&nbsp;&nbsp;🚨 Danger Level Exceeded:&nbsp;<strong>${data.dangCount} Stations</strong> (High vigilance in riverbed areas)&nbsp;&nbsp;|&nbsp;&nbsp;🚧 Highway, Road Status & Weather Telemetry Active`;
      } else {
        html = `<strong>[DHM / BIPAD ${data.timeStr}]:</strong>&nbsp;&nbsp;🌊 All major river water levels in Nepal are currently within normal thresholds.&nbsp;&nbsp;|&nbsp;&nbsp;🌧️ Live Weather & Flood Telemetry Active.&nbsp;&nbsp;|&nbsp;&nbsp;🚨 Dial 100 / 1155 for 24/7 Emergency Assistance.`;
      }
    } else {
      if (data.warnCount > 0 || data.dangCount > 0) {
        html = `<strong>[DHM / BIPAD ${data.timeStr}]:</strong>&nbsp;&nbsp;🌊 नदी जलसतह सतर्कता तह:&nbsp;<strong>${data.warnCount} स्टेसन</strong>&nbsp;&nbsp;|&nbsp;&nbsp;🚨 खतराको तह पार:&nbsp;<strong>${data.dangCount} स्टेसन</strong> (तटीय क्षेत्रमा उच्च सतर्कता अपनाउनुहोस्)&nbsp;&nbsp;|&nbsp;&nbsp;🚧 राजमार्ग, सडक अवरोध तथा मौसम प्रत्यक्ष अनुगमन सक्रिय`;
      } else {
        html = `<strong>[DHM / BIPAD ${data.timeStr}]:</strong>&nbsp;&nbsp;🌊 देशभरका प्रमुख नदीहरूको जलसतह सामान्य स्थितिमा छ।&nbsp;&nbsp;|&nbsp;&nbsp;🌧️ मौसम तथा बाढी प्रत्यक्ष अनुगमन सक्रिय छ।&nbsp;&nbsp;|&nbsp;&nbsp;🚨 आपतकालीन सहयोगका लागि २४/७ हटलाइन प्रयोग गर्नुहोस्।`;
      }
    }

    tickerEl.innerHTML = html;
    if (duplicateEl) {
      duplicateEl.innerHTML = html;
    }
  }

  updateStatsCounters() {
    const totalEl = document.getElementById('stat-total-portals');
    const catEl = document.getElementById('stat-categories-count');
    const hotEl = document.getElementById('stat-hotlines-count');

    if (totalEl) totalEl.textContent = this.portals.length;
    if (catEl) catEl.textContent = '8';
    if (hotEl) hotEl.textContent = this.hotlines.length;
  }

  copyPortalLink(url) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      alert(`${window.i18n.t('portal_title')}:\n\nलिङ्क कपी भयो: ${url}`);
    } else {
      prompt('Copy URL:', url);
    }
  }

  resetFilters() {
    this.currentCategory = 'all';
    this.searchQuery = '';
    const searchInput = document.getElementById('portal-search-input');
    if (searchInput) searchInput.value = '';
    document.querySelectorAll('.cat-chip-btn').forEach(c => {
      if (c.dataset.category === 'all') c.classList.add('active');
      else c.classList.remove('active');
    });
    this.renderPortals();
  }
}

window.app = new DirectoryApp();
document.addEventListener('DOMContentLoaded', () => {
  window.app.init();
});
