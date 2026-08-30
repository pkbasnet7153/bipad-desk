# 🕊️ Bipad Desk (विपद् डेस्क) — Civic Nepal Disaster & Weather Portals Directory

> **विपद् डेस्क (Bipad Desk)** — An independent, open-source, civic emergency gateway collecting scattered official Nepal government disaster, river watch, weather forecast, road blockage, missing persons, and emergency response portals into one unified, mobile-first dashboard.

---

## 🌟 Key Features

- **Centralized Civic Directory**: Curated direct links to official government platforms across departments (DHM Hydrology, BIPAD, MFD Weather Radar, NDRRMA, Dept of Roads, Nepal Police UDB Missing Persons, Child Tracing 104, NEA Dam Alerts, and Nepal Red Cross).
- **Direct Official Redirects**: Every card safely redirects citizens directly to the official `.gov.np` or authoritative platform (`target="_blank"`).
- **Instant Keyword Search & Category Filters**: Search by keyword in both Nepali (Devanagari) and English, and filter by subject (*Missing Persons, River Watch, Weather, Disaster Incidents, Roads, Dams, Health, Hotlines*).
- **Live River Warning Stream**: Real-time river telemetry marquee powered by DHM / BIPAD public telemetry feeds.
- **24/7 One-Tap Emergency Hotlines Desk**: Instant mobile dialers (`tel:`) for Police (`100`), Missing Child (`104`), Traffic (`103`), Flood Warning Desk (`1155`), Red Cross (`1130`), APF (`1114`).
- **Bilingual Interface**: Seamless instant toggle between **नेपाली** and **English**.
- **Lightweight & Privacy-Focused**: Zero user data collection, zero cookies, blazing fast on 2G/3G mobile networks.

---

## Legal Disclaimer & Attribution (कानुनी जानकारी)

- **Non-Governmental Civic Initiative**: Bipad Desk is an independent civic project developed solely for public awareness and disaster preparedness. It is **NOT an official government agency** and does not claim to represent any ministry or state authority.
- **Data Attribution**: Real-time water levels and weather telemetry are streamed directly from publicly accessible feeds of the **Department of Hydrology and Meteorology (DHM)** and the **National Disaster Risk Reduction and Management Authority (NDRRMA / BIPAD Portal)**.
- **Direct Linking**: All directory cards link directly to verified official sources (`.gov.np`).
- **Privacy Assurance**: This platform does not collect, log, or share personal identifying information.

---

## 🚀 Instant Deployment on Vercel

```bash
# Deploy with Vercel CLI
npx vercel
```

---

## 📂 Project Structure

```
├── index.html                 # Main Single-Page Gateway Dashboard
├── js/
│   ├── portals-data.js        # Official Government Portals & Hotlines Registry
│   ├── i18n.js                # Bilingual (नेपाली / English) Translation Dictionary
│   └── app.js                 # Search, category filter & ticker controller
├── css/
│   ├── main.css               # Base layout, typography & header styles
│   ├── dashboard.css          # Portal cards grid, category chips & badges
│   └── mobile.css             # Mobile touch ergonomics
├── assets/
│   ├── bipad-logo.svg         # Custom civic gateway vector logo
│   └── hero-illustration.svg  # Scenery artwork
├── vercel.json                # Vercel deployment configuration & security headers
└── README.md                  # Documentation & Legal Attribution
```

---

## 📜 License
MIT Open Source License. Built for public emergency awareness and civic coordination in Nepal.
