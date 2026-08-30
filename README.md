# 🇳🇵 Bipad Desk (विपद् डेस्क) — Nepal Government Disaster Portals Gateway
> **विपद् डेस्क (Bipad Desk)** — A unified, lightweight, mobile-first gateway collecting all scattered official Nepal government disaster, river watch, weather forecast, road blockage, missing persons, and emergency response portals in one single dashboard.

---

## 🌟 Key Features

- **Centralized Government Directory**: Curated links to official portals across ministries (DHM Hydrology, BIPAD, MFD Weather Radar, NDRRMA, Dept of Roads, Nepal Police UDB Missing Persons, Child Tracing 104, NEA Dam Alerts, and Red Cross).
- **Fast Instant Search & Category Filters**: Filter portals by category (*Missing Persons, River Watch, Weather, Disaster Incidents, Roads, Dams, Health, Hotlines*) and instant keyword search in both Nepali and English.
- **Direct Official Redirects**: Every card redirects safely to the official `.gov.np` or authoritative institutional platform (`target="_blank"`).
- **24/7 One-Tap Emergency Hotlines Desk**: Instant mobile dialers (`tel:`) for Police (`100`), Missing Child (`104`), Traffic (`103`), Flood Warning Desk (`1155`), Red Cross (`1130`), APF (`1114`).
- **Live River Alert Stream**: Real-time river warning stream powered by BIPAD/DHM data.
- **Bilingual Interface**: Seamless instant toggle between **नेपाली** (Devanagari) and **English**.
- **Lightweight & Mobile-First**: Zero bulky framework dependencies. Blazing fast load times even on slow 2G/3G mobile networks.

---

## 🚀 Instant Deployment on Vercel

### Option A: Deploy via GitHub & Vercel Dashboard (Recommended)

1. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new) and create a **Public** repository (e.g. `nepal-flood-portal-directory`).
2. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Nepal Disaster & Flood Government Portals Directory"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/nepal-flood-portal-directory.git
   git push -u origin main
   ```
3. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **"Add New Project"** > **"Import Git Repository"**.
   - Select your `nepal-flood-portal-directory` repository.
   - Leave the Framework Preset as **Other** / **Static Site** (no build command needed).
   - Click **"Deploy"**.

Your application will be live at `https://your-project-name.vercel.app` with free SSL and global edge CDN!

---

### Option B: Deploy via Vercel CLI (1-Command Deployment)

1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
2. In this project directory, run:
   ```bash
   vercel
   ```
3. Follow the quick terminal prompts and your site will be live instantly!

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
│   ├── nepal-emblem.svg       # Nepal Coat of Arms vector insignia
│   └── hero-illustration.svg  # Scenery artwork
├── vercel.json                # Vercel deployment configuration & security headers
└── README.md                  # Documentation
```

---

## 📜 License & Attribution
- Built for public emergency awareness and civic coordination in Nepal.
- Official data attribution: Department of Hydrology and Meteorology (DHM), National Disaster Risk Reduction and Management Authority (NDRRMA), Ministry of Home Affairs (MoHA), Nepal Police, and Department of Roads.
