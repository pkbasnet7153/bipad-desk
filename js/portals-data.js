/**
 * Nepal Flood & Disaster Response - Comprehensive Official Government Portals Directory
 * Verified registry of all official Nepal government and authoritative disaster portals.
 */

const GOV_PORTALS = [
  // 0. OFFICIAL LOST & FOUND OF CITIZENS / MISSING PERSONS (GOVERNMENT)
  {
    id: 'nepalpolice-udb',
    category: 'missing',
    categoryNameNe: 'हराएका तथा भेटिएका व्यक्ति',
    categoryNameEn: 'Missing & Found Citizens',
    nameNe: 'नेपाल प्रहरी - हराएका तथा फेला परेका व्यक्तिको आधिकारिक राष्ट्रिय पोर्टल (UDB)',
    nameEn: 'Nepal Police Official Missing Persons & Unidentified Citizens Portal (UDB)',
    departmentNe: 'नेपाल प्रहरी अपराध अनुसन्धान विभाग / गृह मन्त्रालय',
    departmentEn: 'Crime Investigation Department (CID) / Ministry of Home Affairs',
    url: 'https://udb.nepalpolice.gov.np',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: 'नेपाल सरकारको आधिकारिक पोर्टल जहाँ बाढी, पहिरो तथा विपद्मा हराएका व्यक्तिहरूको तस्बिर, हुलिया, जिल्ला र फेला परेका नागरिकहरूको राष्ट्रिय विवरण खोज्न तथा दर्ता गर्न सकिन्छ।',
    descriptionEn: 'Official Nepal Government portal for searching, verifying and reporting missing individuals, lost family members, and unidentified recovered persons during disasters and emergencies.',
    featuresNe: ['हराएका व्यक्तिको तस्बिर खोजी', 'फेला परेका नागरिक विवरण', 'जिल्ला अनुसार फिल्टर', 'हुलिया तथा पहिचान ट्र्याकिङ'],
    featuresEn: ['Photo Search Database', 'Found Citizen Records', 'District-wise Filter', 'CID Identification Records'],
    quickLinks: [
      { titleNe: 'हराएका व्यक्ति खोज्नुहोस्', titleEn: 'Search Missing Database', url: 'https://udb.nepalpolice.gov.np' },
      { titleNe: 'नेपाल प्रहरी १०० कल', titleEn: 'Police Emergency 100', url: 'tel:100' }
    ]
  },
  {
    id: 'ncrc-missing-child-104',
    category: 'missing',
    categoryNameNe: 'हराएका तथा भेटिएका व्यक्ति',
    categoryNameEn: 'Missing & Found Citizens',
    nameNe: 'राष्ट्रिय बाल अधिकार परिषद् - बालबालिका खोजतलास तथा समन्वय केन्द्र (१०४)',
    nameEn: 'National Child Rights Council (NCRC) - Missing Child Tracing Portal (104)',
    departmentNe: 'महिला, बालबालिका तथा ज्येष्ठ नागरिक मन्त्रालय',
    departmentEn: 'Ministry of Women, Children and Senior Citizens / NCRC',
    url: 'https://ncrc.gov.np/',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: 'बाढी, पहिरो तथा आपतकालीन अवस्थामा परिवारबाट छुट्टिएका वा हराएका बालबालिकाहरूको खोजी, उद्धार तथा पारिवारिक पुनर्मिलन गराउने नेपाल सरकारको आधिकारिक निकाय र १०४ हटलाइन।',
    descriptionEn: 'Official government child search and family reunification center. Dedicated toll-free 104 helpline to locate, rescue, and reunite lost or separated children during disasters.',
    featuresNe: ['१०४ निःशुल्क हटलाइन', 'बालबालिका खोजतलास सेवा', 'पारिवारिक पुनर्मिलन', 'अस्थायी संरक्षण शिविर'],
    featuresEn: ['Toll-Free 104 Helpline', 'Missing Child Search', 'Family Reunification', 'Child Protection Camp'],
    quickLinks: [
      { titleNe: '१०४ मा सिधै कल गर्नुहोस्', titleEn: 'Call 104 Child Search', url: 'tel:104' },
      { titleNe: 'NCRC पोर्टल', titleEn: 'NCRC Official Website', url: 'https://ncrc.gov.np/' }
    ]
  },
  {
    id: 'police-ldims-docs',
    category: 'missing',
    categoryNameNe: 'हराएका तथा भेटिएका व्यक्ति',
    categoryNameEn: 'Missing & Found Citizens',
    nameNe: 'नेपाल प्रहरी - हराएका तथा फेला परेका कागजात तथा सामान प्रणाली (LDIMS)',
    nameEn: 'Nepal Police Lost & Found Documents / Property System (LDIMS)',
    departmentNe: 'नेपाल प्रहरी / काठमाडौं उपत्यका ट्राफिक प्रहरी',
    departmentEn: 'Nepal Police / Kathmandu Valley Traffic Police',
    url: 'https://ldims.nepalpolice.gov.np',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: 'बाढी तथा विपद्मा हराएका नागरिकता, राहदानी (पासपोर्ट), सवारी चालक अनुमतिपत्र (लाइसेन्स) तथा ब्लुबुक अनलाइन दर्ता र खोजी गर्ने आधिकारिक प्रणाली।',
    descriptionEn: 'Official online government portal to report and track lost/found citizenship cards, passports, driving licenses, bluebooks, and personal property.',
    featuresNe: ['हराएको कागजात सिफारिस', 'नागरिकता/लाइसेन्स खोजी', 'अनलाइन उजुरी दर्ता'],
    featuresEn: ['Lost Document Registration', 'License/Passport Search', 'Police Verification Slip'],
    quickLinks: [
      { titleNe: 'कागजात उजुरी दर्ता', titleEn: 'Register Lost Document', url: 'https://ldims.nepalpolice.gov.np' }
    ]
  },
  {
    id: 'nrcs-rfl-family',
    category: 'missing',
    categoryNameNe: 'हराएका तथा भेटिएका व्यक्ति',
    categoryNameEn: 'Missing & Found Citizens',
    nameNe: 'नेपाल रेडक्रस तथा ICRC - पारिवारिक सम्पर्क पुनर्स्थापना (Restoring Family Links)',
    nameEn: 'Nepal Red Cross & ICRC - Restoring Family Links (RFL) Disaster Tracing',
    departmentNe: 'नेपाल रेडक्रस सोसाइटी तथा अन्तर्राष्ट्रिय रेडक्रस (ICRC)',
    departmentEn: 'Nepal Red Cross Society / ICRC Tracing Agency',
    url: 'https://familylinks.icrc.org/',
    badge: 'HUMANITARIAN_AUTHORITY',
    isGov: false,
    status: 'ONLINE',
    descriptionNe: 'बाढी, पहिरो तथा ठूला प्राकृतिक विपद्मा सम्पर्कविहीन भएका आफन्त तथा परिवारका सदस्यहरूको खोजी र पुनर्मिलन गराउने निःशुल्क मानवीय ट्रेसिङ सेवा।',
    descriptionEn: 'Global humanitarian family tracing service helping families locate and reconnect with relatives missing or separated due to natural disasters and flood crises in Nepal.',
    featuresNe: ['पारिवारिक खोजी ट्रेसिङ', 'निःशुल्क सेवा', '७७ जिल्ला रेडक्रस सञ्जाल'],
    featuresEn: ['Family Tracing System', 'Free Humanitarian Service', '77 District Red Cross Units'],
    quickLinks: [
      { titleNe: 'Family Links पोर्टल', titleEn: 'ICRC Family Links', url: 'https://familylinks.icrc.org/' },
      { titleNe: '११३० रेडक्रस कल', titleEn: 'Call Red Cross 1130', url: 'tel:1130' }
    ]
  },

  // 1. River & Flood Monitoring
  {
    id: 'dhm-hydrology',
    category: 'river',
    categoryNameNe: 'नदी तथा बाढी',
    categoryNameEn: 'River & Flood Levels',
    nameNe: 'जल तथा मौसम विज्ञान विभाग - बाढी पूर्वानुमान एवं जलसतह पोर्टल',
    nameEn: 'DHM Real-Time River Watch & Flood Forecasting System',
    departmentNe: 'जल तथा मौसम विज्ञान विभाग (DHM) / ऊर्जा मन्त्रालय',
    departmentEn: 'Department of Hydrology & Meteorology / Ministry of Energy',
    url: 'http://hydrology.gov.np/',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: 'नेपालभरका प्रमुख नदीहरूको वास्तविक समय (Real-time) को जलसतह, खतराको तह (Danger Level), सतर्कता तह (Warning Level) र बाढीको प्रक्षेपण।',
    descriptionEn: 'Official real-time river water levels, danger marks, warning thresholds, and river basin flood forecasting across Nepal.',
    featuresNe: ['प्रत्यक्ष जलसतह (Live Water Level)', 'खतराको रेखा अलर्ट', 'नदी बेसिन नक्सा', '११५५ बाढी कल सेन्टर'],
    featuresEn: ['Live River Gauges', 'Danger Threshold Alerts', 'Basin Hydrograph', '1155 Warning Desk'],
    quickLinks: [
      { titleNe: 'नदी जलसतह नक्सा', titleEn: 'River Station Map', url: 'http://hydrology.gov.np/#/river_monitoring?_k=3k5s6g' },
      { titleNe: 'दैनिक बाढी बुलेटिन', titleEn: 'Daily Flood Bulletin', url: 'http://hydrology.gov.np/#/bulletin?_k=482v51' }
    ]
  },
  {
    id: 'bipad-river',
    category: 'river',
    categoryNameNe: 'नदी तथा बाढी',
    categoryNameEn: 'River & Flood Levels',
    nameNe: 'विपद् पोर्टल - प्रत्यक्ष नदी जलमापन स्टेसन',
    nameEn: 'BIPAD Portal - Real-time River Stations Network',
    departmentNe: 'राष्ट्रिय विपद् जोखिम न्यूनीकरण प्राधिकरण (NDRRMA)',
    departmentEn: 'National Disaster Risk Reduction & Management Authority',
    url: 'https://bipadportal.gov.np/realtime/river/',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: 'सरकारी BIPAD प्रणालीमा देशभरका ५०+ नदी स्टेसनहरूको स्वचालित जलसतह, प्रभावित जनसंख्या र २४ घण्टे बाढी ग्राफ।',
    descriptionEn: 'Interactive real-time visualization of 50+ river telemetry stations, affected population demographics, and 24h hydrographs.',
    featuresNe: ['अन्तरक्रियात्मक नक्सा', 'प्रभावित जनसंख्या तथ्याङ्क', '२४ घण्टे बाढी ट्रेन्ड'],
    featuresEn: ['Interactive GIS Map', 'Affected Demographics', '24h River Trend'],
    quickLinks: [
      { titleNe: 'नदी स्टेसन सूची', titleEn: 'River Station List', url: 'https://bipadportal.gov.np/realtime/river/' }
    ]
  },
  {
    id: 'icimod-cbfews',
    category: 'river',
    categoryNameNe: 'नदी तथा बाढी',
    categoryNameEn: 'River & Flood Levels',
    nameNe: 'इसिमोड - सामुदायिक बाढी पूर्वसूचना प्रणाली (CBFEWS & HI-RISK)',
    nameEn: 'ICIMOD Community-Based Flood Early Warning System & Regional Hydrology',
    departmentNe: 'ICIMOD / क्षेत्रीय जलस्रोत केन्द्र',
    departmentEn: 'International Centre for Integrated Mountain Development',
    url: 'https://geoapps.icimod.org/',
    badge: 'REGIONAL_AUTHORITY',
    isGov: false,
    status: 'ONLINE',
    descriptionNe: 'हिन्दुकुश हिमालय क्षेत्र, कोशी, गण्डकी तथा कर्णाली नदी बेसिनको बाढी जोखिम मोडलिङ र सीमापार बाढी सूचना।',
    descriptionEn: 'Regional flood inundation modeling, cross-border Koshi/Gandaki/Karnali basin flood risk telemetry and early warning.',
    featuresNe: ['सीमापार बाढी सूचना', 'उपग्रह भू-उपयोग', 'बाढी डुबान मोडेल'],
    featuresEn: ['Cross-border Flood Alerts', 'Satellite Inundation', 'River Basin Modeling'],
    quickLinks: [
      { titleNe: 'GeoApps पोर्टल', titleEn: 'ICIMOD GeoApps', url: 'https://geoapps.icimod.org/' }
    ]
  },

  // 2. Weather & Rainfall Forecast
  {
    id: 'mfd-gov',
    category: 'weather',
    categoryNameNe: 'मौसम तथा वर्षा',
    categoryNameEn: 'Weather & Rainfall',
    nameNe: 'मौसम पूर्वानुमान महाशाखा (MFD) - दैनिक तथा ३ दिने मौसम बुलेटिन',
    nameEn: 'Meteorological Forecasting Division (MFD) - Weather Forecast',
    departmentNe: 'जल तथा मौसम विज्ञान विभाग / मौसम महाशाखा',
    departmentEn: 'Department of Hydrology & Meteorology / Forecast Division',
    url: 'https://mfd.gov.np/',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: 'नेपालभरको आधिकारिक ३ दिने मौसम पूर्वानुमान, भारी वर्षाको विशेष चेतावनी बुलेटिन, भू-उपग्रह तस्बिर र मौसमी राडार।',
    descriptionEn: 'Official 3-day weather forecast for Nepal, heavy rainfall special alerts, live INSAT/Himawari satellite cloud imagery and weather radars.',
    featuresNe: ['३ दिने वर्षा पूर्वानुमान', 'उपग्रह तस्बिर (Satellite)', 'भारी वर्षा विशेष चेतावनी', 'रेडियो मौसम सन्देश'],
    featuresEn: ['3-Day Rain Forecast', 'Live Cloud Satellite', 'Severe Rain Advisories', 'Aviation Weather'],
    quickLinks: [
      { titleNe: 'उपग्रह तस्बिर', titleEn: 'Live Satellite Imagery', url: 'https://mfd.gov.np/satellite/' },
      { titleNe: 'विशेष मौसम बुलेटिन', titleEn: 'Special Weather Alert', url: 'https://mfd.gov.np/' }
    ]
  },
  {
    id: 'bipad-rain',
    category: 'weather',
    categoryNameNe: 'मौसम तथा वर्षा',
    categoryNameEn: 'Weather & Rainfall',
    nameNe: 'विपद् पोर्टल - वास्तविक समय वर्षा मापन स्टेसन',
    nameEn: 'BIPAD Real-Time Rainfall Stations Network',
    departmentNe: 'राष्ट्रिय विपद् जोखिम न्यूनीकरण प्राधिकरण (NDRRMA)',
    departmentEn: 'National Disaster Risk Reduction & Management Authority',
    url: 'https://bipadportal.gov.np/realtime/rain/',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: 'नेपालभर जडित स्वचालित वर्षा मापन केन्द्रहरूको १ घण्टा, ३ घण्टा, ६ घण्टा, १२ घण्टा र २४ घण्टे वर्षाको रेकर्ड।',
    descriptionEn: 'Real-time precipitation recordings across Nepal for 1-hour, 3-hour, 6-hour, 12-hour, and 24-hour accumulated rainfall.',
    featuresNe: ['२४ घण्टे वर्षा तथ्याङ्क', 'अति भारी वर्षा सतर्कता', 'वर्षा स्टेसन म्यापिङ'],
    featuresEn: ['24h Rain Accumulation', 'Extreme Rainfall Ticker', 'Rain Gauge Map'],
    quickLinks: [
      { titleNe: 'वर्षा नक्सा हेर्नुहोस्', titleEn: 'Rainfall Map', url: 'https://bipadportal.gov.np/realtime/rain/' }
    ]
  },

  // 3. National Disaster Management & Incident Reporting
  {
    id: 'bipad-main',
    category: 'disaster',
    categoryNameNe: 'विपद् तथा घटना',
    categoryNameEn: 'Disaster & Incidents',
    nameNe: 'BIPAD पोर्टल - राष्ट्रिय विपद् सूचना व्यवस्थापन प्रणाली',
    nameEn: 'BIPAD Portal - National Integrated Disaster Information System',
    departmentNe: 'राष्ट्रिय विपद् जोखिम न्यूनीकरण तथा व्यवस्थापन प्राधिकरण (NDRRMA)',
    departmentEn: 'National Disaster Risk Reduction & Management Authority',
    url: 'https://bipadportal.gov.np/',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: 'नेपाल सरकारको केन्द्रीय विपद् पोर्टल: बाढी, पहिरो, आगलागीका घटना, क्षति विवरण, राहत तथ्याङ्क र जोखिम नक्सांकन।',
    descriptionEn: 'The central master disaster information platform of Nepal: tracks real-time incidents, damage assessments, relief data, and hazard vulnerability.',
    featuresNe: ['घटना रिपोर्टिङ', 'क्षति तथा नोक्सानी तथ्याङ्क', 'आपतकालीन राहत समन्वय', 'स्थानीय तह जोखिम प्रोफाइल'],
    featuresEn: ['Incident Tracking', 'Loss & Damage Analytics', 'Relief Coordination', 'Municipal Hazard Profiles'],
    quickLinks: [
      { titleNe: 'घटना विश्लेषिकी', titleEn: 'Incident Analytics', url: 'https://bipadportal.gov.np/incident/analytics/' },
      { titleNe: 'नागरिक रिपोर्ट', titleEn: 'Citizen Report', url: 'https://bipadportal.gov.np/citizen-report/' }
    ]
  },
  {
    id: 'ndrrma-gov',
    category: 'disaster',
    categoryNameNe: 'विपद् तथा घटना',
    categoryNameEn: 'Disaster & Incidents',
    nameNe: 'राष्ट्रिय विपद् जोखिम न्यूनीकरण तथा व्यवस्थापन प्राधिकरण (NDRRMA)',
    nameEn: 'National Disaster Risk Reduction & Management Authority (NDRRMA)',
    departmentNe: 'गृह मन्त्रालय, सिंहदरबार, काठमाडौं',
    departmentEn: 'Ministry of Home Affairs, Singhadurbar',
    url: 'https://ndrrma.gov.np/',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: 'विपद् जोखिम न्यूनीकरण तथा व्यवस्थापनको शीर्ष सरकारी निकाय। मनसुन पूर्वतयारी तथा प्रतिकार्य कार्ययोजना र राहत निर्देशिका।',
    descriptionEn: 'Apex government body for disaster management, monsoon preparedness action plans, national response protocols, and emergency guidelines.',
    featuresNe: ['दैनिक विपद् प्रतिवेदन', 'मनसुन प्रतिकार्य योजना', 'पुनर्निर्माण तथा राहत कार्यविधि'],
    featuresEn: ['Daily Disaster Reports', 'Monsoon Action Plan', 'Relief Directives'],
    quickLinks: [
      { titleNe: 'दैनिक प्रतिवेदन', titleEn: 'Daily Situation Reports', url: 'https://ndrrma.gov.np/sitrep/' }
    ]
  },
  {
    id: 'neoc-moha',
    category: 'disaster',
    categoryNameNe: 'विपद् तथा घटना',
    categoryNameEn: 'Disaster & Incidents',
    nameNe: 'राष्ट्रिय आपतकालीन कार्यसञ्चालन केन्द्र (NEOC) - गृह मन्त्रालय',
    nameEn: 'National Emergency Operation Centre (NEOC) - Ministry of Home Affairs',
    departmentNe: 'गृह मन्त्रालय (MoHA)',
    departmentEn: 'Ministry of Home Affairs (MoHA)',
    url: 'https://moha.gov.np/',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: '२४ घण्टा ७ दिन आपतकालीन उद्धार समन्वय गर्ने सरकारी कमान्ड सेन्टर। सेना, प्रहरी र सशस्त्र प्रहरीको खोज तथा उद्धार परिचालन।',
    descriptionEn: '24/7 National Emergency Command Centre coordinating multi-agency search and rescue mobilization with Nepal Army, Police, and APF.',
    featuresNe: ['२४/७ उद्धार नियन्त्रण कक्ष', 'हेलिकप्टर उद्धार समन्वय', 'जिल्ला आपतकालीन केन्द्र (DEOC) सञ्जाल'],
    featuresEn: ['24/7 Command Control', 'Helicopter Rescue Dispatch', 'DEOC District Network'],
    quickLinks: [
      { titleNe: 'गृह मन्त्रालय सूचना', titleEn: 'MoHA Notices', url: 'https://moha.gov.np/' }
    ]
  },

  // 4. Highways, Roads & Bridges Status
  {
    id: 'dor-highway',
    category: 'roads',
    categoryNameNe: 'सडक तथा यातायात',
    categoryNameEn: 'Roads & Highways',
    nameNe: 'सडक विभाग - राष्ट्रिय राजमार्ग अवस्था तथा पहिरो अवरोध पोर्टल',
    nameEn: 'Department of Roads (DoR) - National Highway Status & Roadblock Portal',
    departmentNe: 'सडक विभाग / भौतिक पूर्वाधार तथा यातायात मन्त्रालय',
    departmentEn: 'Department of Roads / Ministry of Physical Infrastructure',
    url: 'https://dor.gov.np/',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: 'वर्षा र पहिरोले बन्द भएका मुख्य राष्ट्रिय राजमार्गहरू (पृथ्वी राजमार्ग, नारायणगढ-मुग्लिन, त्रिभुवन राजपथ आदि) को प्रत्यक्ष अवस्था र मर्मत समय।',
    descriptionEn: 'Real-time highway closure monitoring across Prithvi, Narayangadh-Muglin, BP Highway, Karnali Highway, with repair ETAs and detour routes.',
    featuresNe: ['राजमार्ग अवरोध प्रत्यक्ष स्थिति', 'पहिरो पन्छाउने कार्य प्रगति', 'वैकल्पिक सडक जानकारी'],
    featuresEn: ['Live Highway Closures', 'Landslide Clearance ETA', 'Alternative Detour Routes'],
    quickLinks: [
      { titleNe: 'सडक अवस्था हेर्नुहोस्', titleEn: 'Roadblock Map', url: 'https://bipadportal.gov.np/realtime/highway/' }
    ]
  },
  {
    id: 'traffic-police',
    category: 'roads',
    categoryNameNe: 'सडक तथा यातायात',
    categoryNameEn: 'Roads & Highways',
    nameNe: 'नेपाल ट्राफिक प्रहरी - उपत्यका तथा राजमार्ग ट्राफिक अपडेट',
    nameEn: 'Nepal Traffic Police - Live Highway Traffic & Road Advisory',
    departmentNe: 'नेपाल प्रहरी प्रधान कार्यालय / ट्राफिक महाशाखा',
    departmentEn: 'Nepal Police Headquarters / Traffic Directorate',
    url: 'https://traffic.nepalpolice.gov.np/',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: 'सवारी साधन आवागमनको पछिल्लो स्थिति, बाढी-पहिरोले रोकिएका गाडीहरूको डाइभर्सन र १०३ ट्राफिक हटलाइन।',
    descriptionEn: 'Live vehicle movement advisories, flood/landslide diversions, highway convoy management, and 103 Traffic Helpline.',
    featuresNe: ['१०३ हटलाइन कल', 'राजमार्ग ट्राफिक अवस्था', 'डाइभर्सन सूचना'],
    featuresEn: ['103 Helpline', 'Highway Flow Status', 'Diversion Notices'],
    quickLinks: [
      { titleNe: '१०३ कल गर्नुहोस्', titleEn: 'Call Traffic 103', url: 'tel:103' }
    ]
  },

  // 5. Dam & Hydropower Reservoir Level Alerts
  {
    id: 'nea-dams',
    category: 'dams',
    categoryNameNe: 'बाँध तथा जलाशय',
    categoryNameEn: 'Dams & Reservoirs',
    nameNe: 'नेपाल विद्युत प्राधिकरण - कुलेखानी तथा मुख्य जलविद्युत बाँध सतर्कता',
    nameEn: 'Nepal Electricity Authority (NEA) - Kulekhani & Major Dam Level Alerts',
    departmentNe: 'नेपाल विद्युत प्राधिकरण (NEA) / ऊर्जा मन्त्रालय',
    departmentEn: 'Nepal Electricity Authority / Ministry of Energy',
    url: 'https://nea.org.np/',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: 'कुलेखानी जलाशय, कालीगण्डकी ‘ए’, मध्य मर्स्याङ्दी, त्रिशूली लगायतका बाँधहरूको जलसतह, ढोका (Gates) खोल्ने पूर्वचेतावनी र तटीय सतर्कता।',
    descriptionEn: 'Water level surveillance for Kulekhani reservoir, Kali Gandaki, Marsyangdi, Trishuli dams, sluice gate opening advisories, and downstream warnings.',
    featuresNe: ['जलाशय जलसतह स्थिति', 'बाँधको ढोका खोल्ने सूचना', 'तटीय क्षेत्र सतर्कता अलर्ट'],
    featuresEn: ['Reservoir Water Levels', 'Sluice Gate Discharge Alerts', 'Downstream River Warnings'],
    quickLinks: [
      { titleNe: 'प्राधिकरण सूचना', titleEn: 'NEA Official Notices', url: 'https://nea.org.np/' }
    ]
  },

  // 6. Health, Relief & Shelter Support
  {
    id: 'heoc-health',
    category: 'health',
    categoryNameNe: 'स्वास्थ्य तथा राहत',
    categoryNameEn: 'Health & Relief',
    nameNe: 'स्वास्थ्य आपतकालीन कार्यसञ्चालन केन्द्र (HEOC) - स्वास्थ्य मन्त्रालय',
    nameEn: 'Health Emergency Operation Center (HEOC) - Ministry of Health & Population',
    departmentNe: 'स्वास्थ्य तथा जनसंख्या मन्त्रालय (MoHP)',
    departmentEn: 'Ministry of Health and Population',
    url: 'https://heoc.mohp.gov.np/',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: 'बाढीपछिको महामारी (झाडापखाला, हैजा, डेंगु) रोकथाम, आपतकालीन औषधि आपूर्ति, अस्थायी अस्पताल र चिकित्सक परिचालन।',
    descriptionEn: 'Post-flood waterborne disease surveillance, emergency medical supplies distribution, mobile health camps, and hospital bed availability.',
    featuresNe: ['महामारी पूर्वसूचना', 'आपतकालीन औषधि समन्वय', 'अस्पताल हटलाइन'],
    featuresEn: ['Epidemic Surveillance', 'Emergency Medicines', 'Hospital Hotlines'],
    quickLinks: [
      { titleNe: 'स्वास्थ्य बुलेटिन', titleEn: 'Health Situation Reports', url: 'https://heoc.mohp.gov.np/' }
    ]
  },
  {
    id: 'nrcs-disaster',
    category: 'health',
    categoryNameNe: 'स्वास्थ्य तथा राहत',
    categoryNameEn: 'Health & Relief',
    nameNe: 'नेपाल रेडक्रस सोसाइटी - बाढी राहत, एम्बुलेन्स तथा आश्रय सेवा',
    nameEn: 'Nepal Red Cross Society (NRCS) - Flood Relief & Emergency Response',
    departmentNe: 'नेपाल रेडक्रस सोसाइटी केन्द्रीय कार्यालय',
    departmentEn: 'Nepal Red Cross Society National Headquarters',
    url: 'https://nrcs.org/',
    badge: 'HUMANITARIAN_AUTHORITY',
    isGov: false,
    status: 'ONLINE',
    descriptionNe: '७७ वटै जिल्लामा एम्बुलेन्स सेवा, प्राथमिक उपचार, रक्तसञ्चार (Blood Bank), अस्थायी त्रिपाल/राहत वितरण र शिविर व्यवस्थापन।',
    descriptionEn: '77-district ambulance network, first-aid response, emergency blood banks, non-food relief distribution, and temporary shelter management.',
    featuresNe: ['११३० हटलाइन', 'एम्बुलेन्स खोजी सेवा', 'रक्तसञ्चार सेवा', 'सामुदायिक राहत शिविर'],
    featuresEn: ['1130 Hotline', 'Ambulance Finder', 'Blood Bank Service', 'Relief Camps'],
    quickLinks: [
      { titleNe: '११३० रेडक्रस कल', titleEn: 'Call Red Cross 1130', url: 'tel:1130' },
      { titleNe: 'राहत कार्यक्रम', titleEn: 'NRCS Relief Operations', url: 'https://nrcs.org/' }
    ]
  },

  // 7. Security Forces & Emergency Search & Rescue
  {
    id: 'nepal-police',
    category: 'hotlines',
    categoryNameNe: 'सुरक्षा तथा हटलाइन',
    categoryNameEn: 'Security & Hotlines',
    nameNe: 'नेपाल प्रहरी - आपतकालीन खोज तथा उद्धार कमान्ड (१००)',
    nameEn: 'Nepal Police - Emergency Search & Rescue Command (100)',
    departmentNe: 'गृह मन्त्रालय / नेपाल प्रहरी',
    departmentEn: 'Ministry of Home Affairs / Nepal Police',
    url: 'https://www.nepalpolice.gov.np/',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: '२४ घण्टा निःशुल्क आपतकालीन १०० हटलाइन, जिल्ला प्रहरी कार्यालय उद्धार टोली, डुङ्गा तथा गोताखोर परिचालन।',
    descriptionEn: '24/7 Toll-free Emergency 100 hotline, district police rescue units, boat rescue, and emergency evacuation dispatch.',
    featuresNe: ['१०० हटलाइन', 'जिल्ला प्रहरी समन्वय', 'उद्धार टोली परिचालन'],
    featuresEn: ['Dial 100 Hotline', 'District Coordination', 'Search & Rescue'],
    quickLinks: [
      { titleNe: '१०० कल गर्नुहोस्', titleEn: 'Call Police 100', url: 'tel:100' }
    ]
  },
  {
    id: 'apf-disaster',
    category: 'hotlines',
    categoryNameNe: 'सुरक्षा तथा हटलाइन',
    categoryNameEn: 'Security & Hotlines',
    nameNe: 'सशस्त्र प्रहरी बल (APF) - विपद् व्यवस्थापन तालिम शिक्षालय तथा गोताखोर (१११४)',
    nameEn: 'Armed Police Force (APF) - Disaster Management & Deep Diving Unit (1114)',
    departmentNe: 'गृह मन्त्रालय / सशस्त्र प्रहरी बल नेपाल',
    departmentEn: 'Armed Police Force Headquarters / MoHA',
    url: 'https://apf.gov.np/',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: 'नदी तथा बाढी उद्धारमा विशेष तालिमप्राप्त सशस्त्र प्रहरीको र्‍याफ्टिङ, मोटरबोट र डीप डाइभिङ (गोताखोर) टोली। १११४ हटलाइन।',
    descriptionEn: 'Specialized deep diving squads, motorized rescue boats, white-water rafting rescue teams, and 1114 emergency hotline.',
    featuresNe: ['१११४ हटलाइन', 'गोताखोर उद्धार टोली', 'मोटरबोट तथा र्‍याफ्टिङ'],
    featuresEn: ['1114 APF Helpline', 'Deep Diving Unit', 'Motorboat Rescue Teams'],
    quickLinks: [
      { titleNe: '१११४ कल गर्नुहोस्', titleEn: 'Call APF 1114', url: 'tel:1114' }
    ]
  },
  {
    id: 'dhm-sms-1155',
    category: 'hotlines',
    categoryNameNe: 'सुरक्षा तथा हटलाइन',
    categoryNameEn: 'Security & Hotlines',
    nameNe: 'बाढी पूर्वसूचना टोल-फ्री हटलाइन (११५५)',
    nameEn: 'DHM Flood Early Warning Toll-Free Hotline (1155)',
    departmentNe: 'जल तथा मौसम विज्ञान विभाग (DHM)',
    departmentEn: 'Department of Hydrology & Meteorology',
    url: 'tel:1155',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: 'कुनै पनि फोनबाट ११५५ मा निःशुल्क कल गरी आफू रहेको नदी बेसिनको बाढीको खतरा तथा सतर्कता अवस्था सुन्न सकिने स्वचालित सेवा।',
    descriptionEn: 'Free 24/7 automated interactive voice response hotline to check real-time river flood threats for all major basins in Nepal.',
    featuresNe: ['निःशुल्क ११५५ कल', '२४/७ स्वचालित आवाज सेवा', 'नदी बेसिन छनोट'],
    featuresEn: ['Toll-free 1155', '24/7 Automated IVR', 'Basin Level Audio Reports'],
    quickLinks: [
      { titleNe: '११५५ मा कल गर्नुहोस्', titleEn: 'Call 1155 Now', url: 'tel:1155' }
    ]
  },
  // 7. PM RELIEF FUND & HEALTH SERVICES (From OPMCM & MoHP)
  {
    id: 'pm-disaster-relief-fund',
    category: 'health',
    categoryNameNe: 'स्वास्थ्य तथा राहत',
    categoryNameEn: 'Health & Relief',
    nameNe: 'प्रधानमन्त्री दैवी प्रकोप उद्धार कोष (PM Disaster Relief Fund)',
    nameEn: 'Prime Minister Disaster Relief Fund (PMDRF) Official Donation Gateway',
    departmentNe: 'प्रधानमन्त्री तथा मन्त्रिपरिषद्को कार्यालय (OPMCM)',
    departmentEn: 'Office of the Prime Minister and Council of Ministers (OPMCM)',
    url: 'https://pmdrf.nchl.com.np/',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: 'नेपाल सरकारको आधिकारिक प्रधानमन्त्री दैवी प्रकोप उद्धार कोषमा कार्ड, क्युआर (Fonepay/NepalPay), र अन्तर्राष्ट्रिय SWIFT मार्फत विपद् पीडितहरूका लागि सिधै सहयोग पठाउने पोर्टल।',
    descriptionEn: 'Official government portal to contribute to the Prime Minister Disaster Relief Fund via cards, QR codes (Fonepay/NepalPay/UPI), and international SWIFT wire transfers.',
    featuresNe: ['अनलाइन कार्ड पेमेन्ट (NCHL/HBL)', 'Fonepay / NepalPay QR', 'SWIFT बैंक ट्रान्सफर', 'कर छुट सुविधा'],
    featuresEn: ['Online Card Payment', 'Domestic QR & UPI', 'SWIFT Wire Transfer', 'Official Tax Exemption'],
    quickLinks: [
      { titleNe: 'NCHL पेमेन्ट गेटवे', titleEn: 'NCHL Payment Portal', url: 'https://pmdrf.nchl.com.np/' },
      { titleNe: 'हिमालयन बैंक गेटवे', titleEn: 'HBL PMDRF Gateway', url: 'https://pmrelieffund.himalayanbank.com/' }
    ]
  },
  {
    id: 'mohp-blood-bank',
    category: 'health',
    categoryNameNe: 'स्वास्थ्य तथा राहत',
    categoryNameEn: 'Health & Relief',
    nameNe: 'स्वास्थ्य तथा जनसङ्ख्या मन्त्रालय - राष्ट्रिय रक्तसञ्चार तथा ब्लड बैंक स्थिति',
    nameEn: 'Ministry of Health (MoHP) - National Blood Bank Stock Status',
    departmentNe: 'स्वास्थ्य तथा जनसङ्ख्या मन्त्रालय (MoHP)',
    departmentEn: 'Ministry of Health and Population (MoHP)',
    url: 'https://freehealth.mohp.gov.np/blood-bank',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: 'बाढी, पहिरो तथा आपतकालीन घाइतेहरूको उपचारका लागि देशभरका अस्पताल र रेडक्रस रक्तसञ्चार केन्द्रहरूमा रगतको मौज्दात स्थिति हेर्ने आधिकारिक पोर्टल।',
    descriptionEn: 'Official national dashboard tracking real-time blood group availability and stock in hospital blood banks and Red Cross transfusion centers across Nepal.',
    featuresNe: ['रक्त समूह उपलब्धता', 'अस्पताल अनुसार मौज्दात', 'आपतकालीन सम्पर्क'],
    featuresEn: ['Blood Group Availability', 'Hospital-wise Inventory', 'Emergency Transfusion Contacts'],
    quickLinks: [
      { titleNe: 'ब्लड बैंक मौज्दात हेर्नुहोस्', titleEn: 'Check Blood Availability', url: 'https://freehealth.mohp.gov.np/blood-bank' }
    ]
  },
  {
    id: 'ndrrma-setu-damage',
    category: 'disaster',
    categoryNameNe: 'विपद् तथा घटना',
    categoryNameEn: 'Disaster Incidents',
    nameNe: 'राष्ट्रिय विपद् प्राधिकरण - सेतु द्रुत क्षति मूल्याङ्कन पोर्टल (SETU)',
    nameEn: 'NDRRMA - SETU Rapid Post-Disaster Damage Assessment Portal',
    departmentNe: 'राष्ट्रिय विपद् जोखिम न्यूनीकरण तथा व्यवस्थापन प्राधिकरण (NDRRMA)',
    departmentEn: 'National Disaster Risk Reduction and Management Authority (NDRRMA)',
    url: 'https://setu.ndrrma.gov.np/',
    badge: 'GOV_OFFICIAL',
    isGov: true,
    status: 'ONLINE',
    descriptionNe: 'विपद् पछिको भौतिक पूर्वाधार, निजी आवास र जनधनको क्षतिको द्रुत मूल्याङ्कन गरी राहत र पुनर्निर्माणको योजना बनाउन प्रयोग गरिने आधिकारिक सरकारी प्रणाली।',
    descriptionEn: 'Official NDRRMA platform for rapid damage assessment of housing and public infrastructure to coordinate post-disaster recovery and reconstruction grants.',
    featuresNe: ['द्रुत क्षति विवरण संकलन', 'पालिका स्तरको तथ्याङ्क', 'पुनर्निर्माण अनुदान ट्र्याकिङ'],
    featuresEn: ['Rapid Damage Reporting', 'Municipal Field Data', 'Reconstruction Grant Tracking'],
    quickLinks: [
      { titleNe: 'SETU पोर्टल खोल्नुहोस्', titleEn: 'Open SETU Portal', url: 'https://setu.ndrrma.gov.np/' }
    ]
  }
];

// National Quick Emergency Hotlines Bar
const EMERGENCY_HOTLINES = [
  { nameNe: 'नेपाल प्रहरी (Police)', nameEn: 'Nepal Police', number: '100', descNe: 'उद्धार तथा सुरक्षा', descEn: 'Emergency & Rescue', icon: '🚨' },
  { nameNe: 'विपद् उद्धार केन्द्र (NEOC)', nameEn: 'Disaster Operations (NEOC)', number: '1234', descNe: 'राष्ट्रिय आपतकालीन केन्द्र', descEn: 'National Emergency Center', icon: '⚠️' },
  { nameNe: 'हराएका बालबालिका (Missing Child)', nameEn: 'Missing Child Search', number: '104', descNe: 'खोजतलास तथा समन्वय', descEn: 'Child Tracing 104', icon: '🧒' },
  { nameNe: 'बाल हेल्पलाइन (Child Helpline)', nameEn: 'Child Helpline', number: '1098', descNe: 'संरक्षण तथा सहायता', descEn: 'Child & Family Protection', icon: '🛡️' },
  { nameNe: 'दमकल / अग्नि नियन्त्रक (Fire)', nameEn: 'Fire Brigade', number: '101', descNe: 'आगो तथा विपद् उद्धार', descEn: 'Fire & Incident Rescue', icon: '🚒' },
  { nameNe: 'एम्बुलेन्स सेवा (Ambulance)', nameEn: 'Ambulance Service', number: '102', descNe: 'तत्काल स्वास्थ्य उपचार', descEn: 'Urgent Medical Transit', icon: '🚑' },
  { nameNe: 'ट्राफिक प्रहरी (Traffic)', nameEn: 'Traffic Police', number: '103', descNe: 'सडक तथा राजमार्ग स्थिति', descEn: 'Road Blockage Status', icon: '🛣️' },
  { nameNe: 'बाढी पूर्वसूचना (Flood Alert)', nameEn: 'Flood Warning Desk', number: '1155', descNe: 'नदी जलसतह जानकारी', descEn: 'River Water Levels', icon: '🌊' },
  { nameNe: 'नेपाल रेडक्रस (Red Cross)', nameEn: 'Nepal Red Cross', number: '1130', descNe: 'राहत तथा प्राथमिक उपचार', descEn: 'Relief & First Aid', icon: '🏥' },
  { nameNe: 'सशस्त्र प्रहरी (APF Rescue)', nameEn: 'APF Disaster Squad', number: '1114', descNe: 'गोताखोर तथा जल उद्धार', descEn: 'Deep Diving & Boats', icon: '🛟' }
];

window.GOV_PORTALS = GOV_PORTALS;
window.EMERGENCY_HOTLINES = EMERGENCY_HOTLINES;
