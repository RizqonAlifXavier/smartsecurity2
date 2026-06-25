export interface Product {
  id: number
  name: string
  category: string
  categoryLabel: string
  brand: string
  description: string
  price: string
  features: string[]
  icon: string
  image?: string
  badge?: string
}

export interface Category {
  id: string
  label: string
  icon: string
  description?: string
}

export interface Brand {
  id: string
  name: string
  category: string
  categoryLabel: string
  logo: string
  logoImage?: string
  bgImage?: string
  description: string
  productCount?: number
}

export const categories: Category[] = [
  { id: 'all', label: 'All', icon: '🔒', description: 'View all brands across every category' },
  { id: 'fire-alarm', label: 'Fire Alarm', icon: '🔥', description: 'GST, Notifier, Edwards, Simplex, Kidde, Honeywell' },
  { id: 'access-control', label: 'Access Control', icon: '🚪', description: 'Lenel, Genetec, Solution, ZKTeco' },
  { id: 'cctv', label: 'CCTV', icon: '📹', description: 'Siqura, Reconyx, Bushnell, Hikvision, Dahua' },
  { id: 'security-system', label: 'Security System', icon: '🛡️', description: 'GeoVision, Centrix, SAFR, Arecont Vision, ASIS' },
  { id: 'intruder-alarm', label: 'Intruder Alarm', icon: '🚨', description: 'Bentel Security' },
  { id: 'xvr-simulation', label: 'XVR Simulation', icon: '🎮', description: 'XVR Simulation' },
  { id: 'perimeter-fencing', label: 'Perimeter Fencing', icon: '🛡️', description: 'Southwest Microwave' },
  { id: 'it-solution', label: 'IT Solution', icon: '💻', description: 'LG, ACER, Toshiba, Dell, Hitachi, Samsung, Asus, HP, Fujitsu, Lenovo' },
  { id: 'iptv-matv', label: 'IPTV/MATV', icon: '📺', description: 'IKUSI' },
  { id: 'x-ray', label: 'X-Ray', icon: '🔍', description: 'Smiths Detection' },
  { id: 'metal-detector', label: 'Metal Detector', icon: '🔎', description: 'Garrett, CEIA' },
  { id: 'others', label: 'Others', icon: '⚙️', description: 'Cisco, Boon Edam, Windows, Intel' },

  // GST-specific product sub-categories
  { id: 'gst-ul-addressable', label: 'UL Listed Addressable', icon: '🏅' },
  { id: 'gst-ul-conventional', label: 'UL Listed Conventional', icon: '🔔' },
  { id: 'gst-en54-addressable', label: 'EN54 Addressable', icon: '🇪🇺' },
  { id: 'gst-en54-conventional', label: 'EN54 Conventional', icon: '🔶' },
  { id: 'gst-explosion-proof', label: 'Explosion Proof & Special Detectors', icon: '💥' },
  { id: 'gst-gas-release', label: 'Gas Release Control', icon: '🧯' },
  { id: 'gst-tools', label: 'Tools & Accessories', icon: '🔧' },
  { id: 'gst-software', label: 'Software', icon: '🖥️' },
  { id: 'gst-voice-evacuation', label: 'Emergency Voice Evacuation', icon: '📢' },

  // Siqura-specific product sub-categories
  { id: 'siqura-surveillance', label: 'Surveillance cameras', icon: '📹' },
  { id: 'siqura-marine', label: 'Marine & industrial cameras', icon: '🚢' },
  { id: 'siqura-explosion', label: 'Explosion proof cameras', icon: '💥' },
  { id: 'siqura-mobility', label: 'Mobility cameras', icon: '🚗' },
  { id: 'siqura-network', label: 'Network equipment', icon: '🌐' },
  { id: 'siqura-mobility-2', label: 'Mobility Cameras', icon: '🖥️' },

  // Genetec-specific product sub-categories
  { id: 'genetec-saas', label: 'SECURITY CENTER AS A SERVICE', icon: '☁️' },
  { id: 'genetec-on-premise', label: 'ON-PREMISE PLATFORM', icon: '🏢' },
  { id: 'genetec-hardware', label: 'HARDWARE & EDGE DEVICE', icon: '🔌' },
  { id: 'genetec-operations', label: 'OPERATIONS & COLABORATION', icon: '🤝' },

  // Lenel-specific product sub-categories
  { id: 'lenel-access-control', label: 'ACCESS CONTROL', icon: '🚪' },
  { id: 'lenel-mobile-credential', label: 'MOBILE CREDENTIAL', icon: '📱' },
  { id: 'lenel-video-management', label: 'VIDEO MANAGEMENT', icon: '📹' },
  { id: 'lenel-hardware', label: 'HARDWARE', icon: '🔌' },
]

export const brands: Brand[] = [
  // Fire Alarm (highlighted first)
  { id: 'gst', name: 'GST', category: 'fire-alarm', categoryLabel: 'Fire Alarm', logo: 'GST', logoImage: '/brands/GST.jpg', bgImage: '/Product/GST_Product/hero.png', description: 'Reliable conventional and addressable fire alarm systems' },
  { id: 'notifier', name: 'Notifier', category: 'fire-alarm', categoryLabel: 'Fire Alarm', logo: 'NTF', logoImage: '/brands/notifier.png', description: 'Enterprise-class fire alarm system from Honeywell' },
  { id: 'edwards', name: 'Edwards', category: 'fire-alarm', categoryLabel: 'Fire Alarm', logo: 'EDW', logoImage: '/brands/edwards.png', description: 'High-quality fire alarm and life safety systems' },
  { id: 'simplex', name: 'Simplex', category: 'fire-alarm', categoryLabel: 'Fire Alarm', logo: 'SPX', logoImage: '/brands/simplex.png', description: 'Leading fire detection and notification system solutions' },
  { id: 'kidde', name: 'Kidde Fire System', category: 'fire-alarm', categoryLabel: 'Fire Alarm', logo: 'KDE', logoImage: '/brands/kidde_fire_systems.png', description: 'Automatic fire detection and suppression systems' },
  { id: 'honeywell', name: 'Honeywell', category: 'fire-alarm', categoryLabel: 'Fire Alarm', logo: 'HWL', logoImage: '/brands/Honeywell.png', description: 'Integrated fire alarm and building safety solutions' },

  // Access Control (highlighted second)
  { id: 'lenel', name: 'Lenel', category: 'access-control', categoryLabel: 'Access Control', logo: 'LNL', logoImage: '/brands/Lenel.png', description: 'Lenel S2 enterprise access control solutions with full integration' },
  { id: 'genetec', name: 'Genetec', category: 'access-control', categoryLabel: 'Access Control', logo: 'GEN', logoImage: '/brands/genetec.png', description: 'Unified security platform for access control, video surveillance, and ANPR' },
  { id: 'solution', name: 'Solution', category: 'access-control', categoryLabel: 'Access Control', logo: 'SOL', description: 'Integrated access control and door security systems' },
  { id: 'zkteco', name: 'ZKTeco', category: 'access-control', categoryLabel: 'Access Control', logo: 'ZKT', logoImage: '/brands/ZKTeco.png', description: 'Leading biometric access control and time attendance' },

  // CCTV (highlighted third)
  { id: 'siqura', name: 'Siqura', category: 'cctv', categoryLabel: 'CCTV', logo: 'SQR', logoImage: '/brands/siqura.png', description: 'Video networking and surveillance for critical infrastructure' },
  { id: 'reconyx', name: 'Reconyx', category: 'cctv', categoryLabel: 'CCTV', logo: 'RCX', logoImage: '/brands/reconyx.png', description: 'High-performance security cameras for critical areas' },
  { id: 'bushnell', name: 'Bushnell', category: 'cctv', categoryLabel: 'CCTV', logo: 'BSH', logoImage: '/brands/bushnell.png', description: 'High-performance trail cameras and outdoor surveillance' },
  { id: 'hikvision', name: 'Hikvision', category: 'cctv', categoryLabel: 'CCTV', logo: 'HIK', logoImage: '/brands/hikvision.png', description: 'World\'s leading CCTV and video surveillance solutions' },
  { id: 'dahua', name: 'Dahua', category: 'cctv', categoryLabel: 'CCTV', logo: 'DHU', logoImage: '/brands/dahua.png', description: 'High-quality professional CCTV and video IoT systems' },

  // Security System
  { id: 'geovision', name: 'GeoVision', category: 'security-system', categoryLabel: 'Security System', logo: 'GEO', logoImage: '/brands/geovision.png', description: 'Professional IP surveillance and video analytics solutions' },
  { id: 'centrix', name: 'Centrix', category: 'security-system', categoryLabel: 'Security System', logo: 'CTX', logoImage: '/brands/centrix.jpg', description: 'Integrated security systems with the latest technology' },
  { id: 'safr', name: 'SAFR', category: 'security-system', categoryLabel: 'Security System', logo: 'SFR', logoImage: '/brands/safr.png', description: 'Real-time face recognition platform with advanced AI' },
  { id: 'arecont-vision', name: 'Arecont Vision', category: 'security-system', categoryLabel: 'Security System', logo: 'ARC', logoImage: '/brands/arecont_vision.png', description: 'Megapixel camera technology for large-scale security' },
  { id: 'asis-technologies', name: 'ASIS Technologies', category: 'security-system', categoryLabel: 'Security System', logo: 'ASI', logoImage: '/brands/asis tech.png', description: 'Advanced security technology for various industry needs' },

  // Intruder Alarm
  { id: 'bentel-security', name: 'Bentel Security', category: 'intruder-alarm', categoryLabel: 'Intruder Alarm', logo: 'BNT', logoImage: '/brands/bentel.png', description: 'Professional intruder alarm systems with advanced detection technology' },

  // XVR Simulation
  { id: 'xvr-simulation', name: 'XVR Simulation', category: 'xvr-simulation', categoryLabel: 'XVR Simulation', logo: 'XVR', logoImage: '/brands/xvr.png', description: 'Virtual reality simulation platform for security and emergency training' },

  // Perimeter Fencing
  { id: 'southwest-microwave', name: 'Southwest Microwave', category: 'perimeter-fencing', categoryLabel: 'Perimeter Fencing', logo: 'SWM', logoImage: '/brands/southwest_microwave.png', description: 'Microwave perimeter detection systems for wide-area security' },

  // IT Solution
  { id: 'lg', name: 'LG', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'LG', logoImage: '/brands/LG.png', description: 'High-quality professional monitors and display devices' },
  { id: 'acer', name: 'ACER', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'ACR', logoImage: '/brands/acer.png', description: 'Laptops and computers for business and enterprise needs' },
  { id: 'toshiba', name: 'Toshiba', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'TSB', logoImage: '/brands/toshiba.png', description: 'Trusted enterprise storage and computing solutions' },
  { id: 'dell', name: 'Dell', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'DLL', logoImage: '/brands/dell.png', description: 'Enterprise servers, workstations, and IT infrastructure' },
  { id: 'hitachi', name: 'Hitachi', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'HIT', logoImage: '/brands/hitachi.png', description: 'Large-scale enterprise IT and storage solutions' },
  { id: 'samsung', name: 'Samsung', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'SSG', logoImage: '/brands/samsung.png', description: 'Professional displays and innovative IT devices' },
  { id: 'asus', name: 'Asus', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'ASS', logoImage: '/brands/asus.png', description: 'High-performance computers and IT devices' },
  { id: 'hp', name: 'HP', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'HP', logoImage: '/brands/HP.png', description: 'Comprehensive printers, laptops, and business IT solutions' },
  { id: 'fujitsu', name: 'Fujitsu', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'FJT', logoImage: '/brands/fujitsu.png', description: 'Japanese enterprise IT infrastructure and computing' },
  { id: 'lenovo', name: 'Lenovo', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'LNV', logoImage: '/brands/lenovo.png', description: 'Enterprise PCs, laptops, and data center solutions' },

  // IPTV/MATV
  { id: 'ikusi', name: 'IKUSI', category: 'iptv-matv', categoryLabel: 'IPTV/MATV', logo: 'IKS', logoImage: '/brands/ikusi.png', description: 'Professional IPTV solutions and TV signal distribution' },

  // X-Ray
  { id: 'smiths-detection', name: 'Smiths Detection', category: 'x-ray', categoryLabel: 'X-Ray', logo: 'SMD', logoImage: '/brands/smiths_detection.png', description: 'X-Ray screening systems for airport and building security' },

  // Metal Detector
  { id: 'garrett', name: 'Garrett Metal Detector', category: 'metal-detector', categoryLabel: 'Metal Detector', logo: 'GRT', logoImage: '/brands/garret metal.png', description: 'World-leading walk-through and handheld metal detectors' },
  { id: 'ceia', name: 'CEIA', category: 'metal-detector', categoryLabel: 'Metal Detector', logo: 'CEA', logoImage: '/brands/ceia.png', description: 'High-precision metal detectors for professional security' },

  // Others
  { id: 'cisco', name: 'Cisco', category: 'others', categoryLabel: 'Others', logo: 'CSC', logoImage: '/brands/cisco.png', description: 'Enterprise networking and network infrastructure' },
  { id: 'boon-edam', name: 'Boon Edam', category: 'others', categoryLabel: 'Others', logo: 'BNE', logoImage: '/brands/boon_edam.png', description: 'Premium revolving doors and security entrances' },
  { id: 'windows', name: 'Windows', category: 'others', categoryLabel: 'Others', logo: 'WIN', logoImage: '/brands/microsoft.png', description: 'Enterprise operating systems and software platforms' },
  { id: 'intel', name: 'Intel', category: 'others', categoryLabel: 'Others', logo: 'INT', logoImage: '/brands/intel.png', description: 'Processors and computing technology for security systems' },
]

export const products: Product[] = [
  // =====================================================================
  // GST — UL Listed Addressable Products
  // =====================================================================
  // Panels
  { id: 100, name: 'GST-IFP4M', category: 'gst-ul-addressable', categoryLabel: 'UL Listed Addressable', brand: 'gst', description: 'Smart modular panel supporting 1–6 Class A loops with 7" touchscreen. Up to 1,452 addresses per panel, 100,000-event history memory.', price: 'Contact Us', features: ['1–6 Loop', 'Class A', 'Touchscreen 7"', '1,452 Addresses'], icon: '🖥️', image: '/Product/GST_Product/GST-IFP4M.webp', badge: 'Flagship' },
  { id: 101, name: 'GST-M200', category: 'gst-ul-addressable', categoryLabel: 'UL Listed Addressable', brand: 'gst', description: 'Smart wall-mount panel for small to medium projects. Supports 1–2 loops with 240–242 address capacity.', price: 'Contact Us', features: ['1–2 Loop', 'Wall Mount', '240 Addresses', 'Compact'], icon: '🖥️', image: '/Product/GST_Product/GST-M200.webp' },

  // Network Annunciators
  { id: 102, name: 'GST-MNA2C', category: 'gst-ul-addressable', categoryLabel: 'UL Listed Addressable', brand: 'gst', description: 'Touchscreen network annunciator for remote system status monitoring via CAN cable.', price: 'Contact Us', features: ['Touchscreen', 'CAN Bus', 'Remote Monitor', 'Network'], icon: '📟', image: '/Product/GST_Product/GST-MNA2C.webp' },
  { id: 103, name: 'GST-MNA2F', category: 'gst-ul-addressable', categoryLabel: 'UL Listed Addressable', brand: 'gst', description: 'Touchscreen network annunciator for remote system status monitoring via fiber optic.', price: 'Contact Us', features: ['Touchscreen', 'Fiber Optic', 'Remote Monitor', 'Network'], icon: '📟', image: '/Product/GST_Product/GST-MNA2F.webp' },

  // Intelligent Detectors — DI-M910X Series
  { id: 104, name: 'DI-M9101N', category: 'gst-ul-addressable', categoryLabel: 'UL Listed Addressable', brand: 'gst', description: 'Multi-criteria / combination smoke & heat intelligent detector with field-programmable address and 360° LED indicator.', price: 'Contact Us', features: ['Multi-Criteria', 'Smoke & Heat', '360° LED', 'Field-Programmable'], icon: '🔍', image: '/Product/GST_Product/DI-M9101N.webp', badge: 'Smart' },
  { id: 105, name: 'DI-M9102N', category: 'gst-ul-addressable', categoryLabel: 'UL Listed Addressable', brand: 'gst', description: 'Optical / photoelectric intelligent smoke detector with field-programmable address and 360° LED indicator.', price: 'Contact Us', features: ['Photoelectric', 'Smoke Detector', '360° LED', 'Field-Programmable'], icon: '🔍', image: '/Product/GST_Product/DI-M9102N.webp' },
  { id: 106, name: 'DI-M9103N', category: 'gst-ul-addressable', categoryLabel: 'UL Listed Addressable', brand: 'gst', description: 'Intelligent heat detector (Rate-of-Rise & Fixed Temperature) with field-programmable address and 360° LED indicator.', price: 'Contact Us', features: ['Rate-of-Rise', 'Fixed Temp', '360° LED', 'Field-Programmable'], icon: '🌡️', image: '/Product/GST_Product/DI-M9103.webp' },

  // Intelligent Modules — Din-Rail Series
  { id: 107, name: 'DI-M9300', category: 'gst-ul-addressable', categoryLabel: 'UL Listed Addressable', brand: 'gst', description: 'Single input module (Din-Rail) for addressable fire alarm system monitoring.', price: 'Contact Us', features: ['Single Input', 'Din-Rail', 'Addressable', 'Monitor'], icon: '🔌', image: '/Product/GST_Product/DI-M9300.webp' },
  { id: 108, name: 'DI-M9301', category: 'gst-ul-addressable', categoryLabel: 'UL Listed Addressable', brand: 'gst', description: 'Input-output module (Din-Rail) for addressable fire alarm system control and monitoring.', price: 'Contact Us', features: ['Input-Output', 'Din-Rail', 'Addressable', 'Control'], icon: '🔌', image: '/Product/GST_Product/DI-M9301.webp' },
  { id: 109, name: 'DI-M9319', category: 'gst-ul-addressable', categoryLabel: 'UL Listed Addressable', brand: 'gst', description: 'Zone monitor module (Din-Rail) for monitoring conventional zones on addressable loops.', price: 'Contact Us', features: ['Zone Monitor', 'Din-Rail', 'Addressable', 'Conventional Zone'], icon: '🔌', image: '/Product/GST_Product/DI-M9319.webp' },
  { id: 110, name: 'DC-M9503', category: 'gst-ul-addressable', categoryLabel: 'UL Listed Addressable', brand: 'gst', description: 'Loop isolator module (Din-Rail) for protecting loop segments from short circuits.', price: 'Contact Us', features: ['Loop Isolator', 'Din-Rail', 'Short Circuit Protection', 'Auto-Restore'], icon: '🔌', image: '/Product/GST_Product/DC-M9503.webp', badge: 'Essential' },

  // Call Point & Sounder
  { id: 111, name: 'DI-M9204', category: 'gst-ul-addressable', categoryLabel: 'UL Listed Addressable', brand: 'gst', description: 'Digital manual call point (resettable) for addressable fire alarm systems.', price: 'Contact Us', features: ['Manual Call Point', 'Resettable', 'Digital', 'Addressable'], icon: '🚨', image: '/Product/GST_Product/DI-M9204.webp' },
  { id: 112, name: 'DI-M9402', category: 'gst-ul-addressable', categoryLabel: 'UL Listed Addressable', brand: 'gst', description: 'Sounder base — detector base with integrated siren for addressable notification.', price: 'Contact Us', features: ['Sounder Base', 'Integrated Siren', 'Detector Mount', 'Addressable'], icon: '🔊', image: '/Product/GST_Product/DI-M9402.jpeg' },

  // =====================================================================
  // GST — UL Listed Conventional Products
  // =====================================================================
  // Conventional Detectors — DC-M910X Series
  { id: 120, name: 'DC-M910X Series Detectors', category: 'gst-ul-conventional', categoryLabel: 'UL Listed Conventional', brand: 'gst', description: 'Complete range of conventional smoke, heat, and multi-criteria detectors (DC-M9101N, DC-M9102N, DC-M9103N). Uses 2-wire system with low power consumption.', price: 'Contact Us', features: ['Smoke & Heat', '2-Wire', 'Low Power', 'Conventional'], icon: '🔍', image: '/Product/GST_Product/DC-M910X Series Detectors.webp' },

  // Sounder Strobe — DC-M9413 to DC-M9416
  { id: 123, name: 'DC-M9413 / DC-M9414', category: 'gst-ul-conventional', categoryLabel: 'UL Listed Conventional', brand: 'gst', description: 'Ceiling and wall-mount sounder strobes with field-configurable candela intensity and dB level.', price: 'Contact Us', features: ['Ceiling/Wall Mount', 'Sounder Strobe', 'Configurable Candela', 'Audio-Visual'], icon: '🔊', image: '/Product/GST_Product/DC-M9413.webp' },
  { id: 125, name: 'DC-M9415 / DC-M9416', category: 'gst-ul-conventional', categoryLabel: 'UL Listed Conventional', brand: 'gst', description: 'Ceiling and wall-mount strobe lights with field-configurable candela intensity for visual notification.', price: 'Contact Us', features: ['Ceiling/Wall Mount', 'Strobe Light', 'Configurable Candela', 'Visual Alert'], icon: '💡', image: '/Product/GST_Product/DC-M9416.webp' },

  // Conventional Call Point & Sounder Base
  { id: 127, name: 'DC-M9204 & DC-M9402', category: 'gst-ul-conventional', categoryLabel: 'UL Listed Conventional', brand: 'gst', description: 'Conventional manual call point and sounder base (detector base with integrated siren) for zone-based systems.', price: 'Contact Us', features: ['Manual Call Point', 'Sounder Base', 'Conventional', '2-Wire'], icon: '🚨', image: '/Product/GST_Product/DI-M9204.webp' },

  // =====================================================================
  // GST — EN54 Addressable Products
  // =====================================================================
  // EN54 Control Panels
  { id: 130, name: 'GST-IFP8', category: 'gst-en54-addressable', categoryLabel: 'EN54 Addressable', brand: 'gst', description: 'Large-scale modular control panel, expandable up to 8 loops with network interconnection support up to 240 panels.', price: 'Contact Us', features: ['Up to 8 Loops', '240 Panel Network', 'EN54/LPCB', 'Modular'], icon: '🖥️', image: '/Product/GST_Product/GST-IFP8.webp', badge: 'Enterprise' },
  { id: 131, name: 'GST-IFP4E', category: 'gst-en54-addressable', categoryLabel: 'EN54 Addressable', brand: 'gst', description: 'Linux-based integrated panel with 7" touchscreen. Supports up to 6 Class A loops (1,452 addresses).', price: 'Contact Us', features: ['Linux OS', 'Touchscreen 7"', '6 Loops Class A', '1,452 Addresses'], icon: '🖥️', image: '/Product/GST_Product/GST-IFP4E.webp', badge: 'Premium' },
  { id: 132, name: 'GST200N-1', category: 'gst-en54-addressable', categoryLabel: 'EN54 Addressable', brand: 'gst', description: 'Compact smart addressable panel with 1 loop capacity. Ideal for offices, retail stores, and restaurants.', price: 'Contact Us', features: ['1 Loop', 'Compact', 'EN54/LPCB', 'Small Buildings'], icon: '🖥️', image: '/Product/GST_Product/GST200N-1.webp' },
  { id: 133, name: 'GST200N-2', category: 'gst-en54-addressable', categoryLabel: 'EN54 Addressable', brand: 'gst', description: 'Compact smart addressable panel with 2 loop capacity. Ideal for offices, department stores, and restaurants.', price: 'Contact Us', features: ['2 Loops', 'Compact', 'EN54/LPCB', 'Medium Buildings'], icon: '🖥️', image: '/Product/GST_Product/GST200N-2.webp' },
  { id: 134, name: 'GST100', category: 'gst-en54-addressable', categoryLabel: 'EN54 Addressable', brand: 'gst', description: 'Minimalist single-loop addressable panel for small buildings and simple installations.', price: 'Contact Us', features: ['Single Loop', 'Minimalist', 'EN54/LPCB', 'Small Buildings'], icon: '🖥️', image: '/Product/GST_Product/GST100.webp' },

  // EN54 Repeaters & Mimic Panels
  { id: 135, name: 'GST-NR2EC', category: 'gst-en54-addressable', categoryLabel: 'EN54 Addressable', brand: 'gst', description: 'LCD network repeater panel via CAN cable for remote system status display.', price: 'Contact Us', features: ['LCD Repeater', 'CAN Bus', 'Network', 'Remote Display'], icon: '📟', image: '/Product/GST_Product/GST-NR2EC.webp' },
  { id: 136, name: 'GST-NR2EF', category: 'gst-en54-addressable', categoryLabel: 'EN54 Addressable', brand: 'gst', description: 'LCD network repeater panel via fiber optic for remote system status display.', price: 'Contact Us', features: ['LCD Repeater', 'Fiber Optic', 'Network', 'Remote Display'], icon: '📟', image: '/Product/GST_Product/GST-NR2EF.webp' },
  { id: 137, name: 'GST-NRP00', category: 'gst-en54-addressable', categoryLabel: 'EN54 Addressable', brand: 'gst', description: 'Local system status repeater panel for displaying fire alarm system status at secondary locations.', price: 'Contact Us', features: ['Status Repeater', 'Local Display', 'Secondary Location', 'EN54'], icon: '📟', image: '/Product/GST_Product/GST-NRP00.webp' },
  { id: 138, name: 'GST852RP', category: 'gst-en54-addressable', categoryLabel: 'EN54 Addressable', brand: 'gst', description: 'LCD repeater panel for monitoring and displaying fire alarm system events.', price: 'Contact Us', features: ['LCD Display', 'Repeater', 'Event Monitor', 'EN54'], icon: '📟', image: '/Product/GST_Product/GST852RP.webp' },
  { id: 139, name: 'GST8903', category: 'gst-en54-addressable', categoryLabel: 'EN54 Addressable', brand: 'gst', description: 'Smart graphic mimic panel that maps visual building floor-plan layout for intuitive fire alarm monitoring.', price: 'Contact Us', features: ['Graphic Mimic', 'Building Layout', 'Visual Map', 'Smart Display'], icon: '🗺️', image: '/Product/GST_Product/GST8903.webp', badge: 'Visual' },

  // EN54 Intelligent Detectors — DI-910XE Series
  { id: 140, name: 'DI-910XE Series Detectors', category: 'gst-en54-addressable', categoryLabel: 'EN54 Addressable', brand: 'gst', description: 'EN54/LPCB certified intelligent multi-sensor, photoelectric smoke, and heat detectors (DI-9101E, DI-9102E, DI-9103E).', price: 'Contact Us', features: ['Smoke & Heat', 'EN54/LPCB', 'Intelligent', 'Digital Protocol'], icon: '🔍', image: '/Product/GST_Product/DI-910XE.webp', badge: 'Smart' },
  { id: 143, name: 'DI-9105E', category: 'gst-en54-addressable', categoryLabel: 'EN54 Addressable', brand: 'gst', description: 'Reflective beam detector (long-range infrared) for high-ceiling rooms, halls, and warehouses.', price: 'Contact Us', features: ['Beam Detector', 'Infrared', 'Long Range', 'High Ceiling'], icon: '📡', image: '/Product/GST_Product/DI-9105E.webp', badge: 'Long Range' },

  // EN54 Intelligent Modules — DI-9300E Series
  { id: 144, name: 'DI-9300E', category: 'gst-en54-addressable', categoryLabel: 'EN54 Addressable', brand: 'gst', description: 'Digital input module for EN54 addressable fire alarm system monitoring.', price: 'Contact Us', features: ['Digital Input', 'EN54', 'Addressable', 'Monitor'], icon: '🔌', image: '/Product/GST_Product/DI-9300E.webp' },
  { id: 145, name: 'DI-9301E', category: 'gst-en54-addressable', categoryLabel: 'EN54 Addressable', brand: 'gst', description: 'Digital input-output module for EN54 addressable fire alarm system control and monitoring.', price: 'Contact Us', features: ['Input-Output', 'EN54', 'Addressable', 'Control'], icon: '🔌', image: '/Product/GST_Product/DI-9301E.webp' },
  { id: 146, name: 'DI-9302E', category: 'gst-en54-addressable', categoryLabel: 'EN54 Addressable', brand: 'gst', description: 'High voltage output module (relay 220VAC/5A) for integration with elevator control, dampers, or smoke exhaust/pressurized fans.', price: 'Contact Us', features: ['220VAC/5A Relay', 'Elevator Control', 'Damper Integration', 'Smoke Exhaust'], icon: '⚡', image: '/Product/GST_Product/DI-9302E.webp', badge: 'High Voltage' },

  // =====================================================================
  // GST — EN54 Conventional Products
  // =====================================================================
  { id: 150, name: 'GST EN54 Conventional System', category: 'gst-en54-conventional', categoryLabel: 'EN54 Conventional', brand: 'gst', description: 'Range of conventional (non-addressable) sensors, call points, and alarm sirens compliant with European EN54 safety regulation standards.', price: 'Contact Us', features: ['EN54 Certified', 'Zone-Based', 'Non-Addressable', 'European Standard'], icon: '🔶', image: '/Product/GST_Product/GST EN54 Conventional System' },

  // =====================================================================
  // GST — Explosion Proof & Specified Detectors
  // =====================================================================
  { id: 160, name: 'GST Explosion Proof Detectors', category: 'gst-explosion-proof', categoryLabel: 'Explosion Proof & Special Detectors', brand: 'gst', description: 'Fire protection devices designed for extreme industrial environments, hazardous areas, or zones with high gas/vapor explosion risk. Includes flame detectors and high-sensitivity detectors.', price: 'Contact Us', features: ['Hazardous Area', 'Explosion Proof', 'Flame Detector', 'High Sensitivity'], icon: '💥', image: '/Product/GST_Product/GST Explosion Proof Detectors.webp', badge: 'Industrial' },

  // =====================================================================
  // GST — Gas Release Control Products
  // =====================================================================
  { id: 170, name: 'GST Gas Release Control Panel', category: 'gst-gas-release', categoryLabel: 'Gas Release Control', brand: 'gst', description: 'Panel and control units for managing gas suppression agent release. Commonly integrated in server rooms, data centers, archive storage, and electrical substations.', price: 'Contact Us', features: ['Gas Suppression', 'Server Room', 'Data Center', 'Auto Release'], icon: '🧯', image: '/Product/GST_Product/GST Gas Release Control Panel.webp', badge: 'Critical' },

  // =====================================================================
  // GST — Tools & Accessories
  // =====================================================================
  { id: 180, name: 'GST-MBX22', category: 'gst-tools', categoryLabel: 'Tools & Accessories', brand: 'gst', description: 'Protective Din-Rail module mounting box for protecting installed modules.', price: 'Contact Us', features: ['Din-Rail Box', 'Module Protection', 'Mounting', 'Compact'], icon: '📦', image: '/Product/GST_Product/GST-MBX22.webp' },
  { id: 181, name: 'GST-MBX29', category: 'gst-tools', categoryLabel: 'Tools & Accessories', brand: 'gst', description: 'Protective Din-Rail module mounting box (large variant) for protecting installed modules.', price: 'Contact Us', features: ['Din-Rail Box', 'Module Protection', 'Large Size', 'Mounting'], icon: '📦', image: '/Product/GST_Product/GST-MBX29.webp' },
  { id: 182, name: 'D-93TC1', category: 'gst-tools', categoryLabel: 'Tools & Accessories', brand: 'gst', description: 'Transparent protective cover for module connection terminals. Prevents physical contact and external electric shock.', price: 'Contact Us', features: ['Terminal Cover', 'Transparent', 'Shock Protection', 'Safety'], icon: '🛡️', image: '/Product/GST_Product/D-93TC1.jpeg' },
  { id: 183, name: 'D-93TC2', category: 'gst-tools', categoryLabel: 'Tools & Accessories', brand: 'gst', description: 'Transparent protective cover (large variant) for module connection terminals. Prevents physical contact and external electric shock.', price: 'Contact Us', features: ['Terminal Cover', 'Transparent', 'Large Size', 'Safety'], icon: '🛡️', image: '/Product/GST_Product/D-93TC1.jpeg' },
  { id: 184, name: 'GST Handheld Programmer', category: 'gst-tools', categoryLabel: 'Tools & Accessories', brand: 'gst', description: 'Handheld address programmer device for field programming of detector and module addresses.', price: 'Contact Us', features: ['Handheld', 'Address Programming', 'Field Use', 'Portable'], icon: '📱', image: '/Product/GST_Product/GST Handheld Programmer.webp', badge: 'Tool' },

  // =====================================================================
  // GST — Software
  // =====================================================================
  { id: 190, name: 'GST Cause & Effect Configuration Tool', category: 'gst-software', categoryLabel: 'Software', brand: 'gst', description: 'PC-based application for configuring cause-and-effect logic matrix relationships in fire alarm systems.', price: 'Contact Us', features: ['Cause & Effect', 'Logic Matrix', 'PC Software', 'Configuration'], icon: '🖥️' },
  { id: 191, name: 'GST Defining Tool', category: 'gst-software', categoryLabel: 'Software', brand: 'gst', description: 'PC-based application for programming panel interconnection system and defining network topology.', price: 'Contact Us', features: ['Panel Network', 'System Definition', 'PC Software', 'Topology'], icon: '🖥️' },
  { id: 192, name: 'GST Graphic Monitoring Software', category: 'gst-software', categoryLabel: 'Software', brand: 'gst', description: 'Real-time graphic monitoring PC software for visualizing the entire building fire alarm condition across all areas.', price: 'Contact Us', features: ['Real-Time', 'Graphic Monitor', 'Building-Wide', 'PC Software'], icon: '🗺️', badge: 'Monitoring' },

  // =====================================================================
  // GST — Emergency Voice Evacuation
  // =====================================================================
  { id: 200, name: 'GST Emergency Voice Evacuation System', category: 'gst-voice-evacuation', categoryLabel: 'Emergency Voice Evacuation', brand: 'gst', description: 'Automatic emergency audio integration and public address (PA) system for broadcasting mass or zoned voice evacuation instructions when valid fire hazard confirmation is detected.', price: 'Contact Us', features: ['Voice Evacuation', 'PA System', 'Zoned Broadcast', 'Auto Trigger'], icon: '📢', badge: 'Life Safety' },

  // Fire Alarm — Other Brands
  // (Original GST Fire Alarm Panel removed, replaced by detailed products above)
  { id: 29, name: 'Notifier Fire Alarm System', category: 'fire-alarm', categoryLabel: 'Fire Alarm', brand: 'notifier', description: 'Enterprise-class Notifier fire alarm system from Honeywell.', price: 'Contact Us', features: ['ONYX Series', 'Enterprise', 'Addressable', 'Networking'], icon: '🔥', badge: 'Enterprise' },
  { id: 28, name: 'Edwards Fire Detection', category: 'fire-alarm', categoryLabel: 'Fire Alarm', brand: 'edwards', description: 'Edwards fire detection system with life safety technology.', price: 'Contact Us', features: ['EST Platform', 'Life Safety', 'Addressable', 'Integration'], icon: '🔥' },
  { id: 30, name: 'Simplex Fire Protection', category: 'fire-alarm', categoryLabel: 'Fire Alarm', brand: 'simplex', description: 'Simplex fire protection system with detection and notification.', price: 'Contact Us', features: ['TrueAlarm', 'Detection', 'Notification', 'Integration'], icon: '🔥' },
  { id: 31, name: 'Kidde Fire Suppression', category: 'fire-alarm', categoryLabel: 'Fire Alarm', brand: 'kidde', description: 'Kidde Fire System automatic fire suppression system.', price: 'Contact Us', features: ['Suppression', 'FM-200', 'Clean Agent', 'Automatic'], icon: '🔥' },
  { id: 32, name: 'Honeywell Fire Solution', category: 'fire-alarm', categoryLabel: 'Fire Alarm', brand: 'honeywell', description: 'Integrated Honeywell fire alarm and building safety solutions.', price: 'Contact Us', features: ['Integrated', 'Building Safety', 'Smart Detection', 'Cloud'], icon: '🔥', badge: 'Premium' },

  // Access Control (second)
  // (Original Lenel & Genetec placeholders removed, replaced by detailed products below)
  { id: 37, name: 'Solution Access Control', category: 'access-control', categoryLabel: 'Access Control', brand: 'solution', description: 'Integrated access control and door security system from Solution.', price: 'Contact Us', features: ['Door Access', 'Fingerprint', 'Card Reader', 'Mobile Access'], icon: '🚪' },
  { id: 38, name: 'ZKTeco Biometric Access', category: 'access-control', categoryLabel: 'Access Control', brand: 'zkteco', description: 'ZKTeco biometric access control with fingerprint and face recognition.', price: 'Contact Us', features: ['Biometric', 'Face Recognition', 'Fingerprint', 'Time Attendance'], icon: '🚪', badge: 'Best Seller' },

  // CCTV (third)
  // (Original Siqura placeholder removed, replaced by detailed products below)
  { id: 4, name: 'Reconyx Security Camera', category: 'cctv', categoryLabel: 'CCTV', brand: 'reconyx', description: 'Reconyx high-performance security cameras for critical areas and perimeters.', price: 'Contact Us', features: ['High Performance', 'Weatherproof', 'Night Vision', 'Covert'], icon: '📹' },
  { id: 39, name: 'Bushnell Trail Camera', category: 'cctv', categoryLabel: 'CCTV', brand: 'bushnell', description: 'High-performance Bushnell trail and outdoor surveillance cameras.', price: 'Contact Us', features: ['Trail Camera', 'Outdoor', 'Night Vision', 'Weatherproof'], icon: '📹' },
  { id: 40, name: 'Hikvision IP Camera', category: 'cctv', categoryLabel: 'CCTV', brand: 'hikvision', description: 'Hikvision IP cameras and NVRs for professional video surveillance.', price: 'Contact Us', features: ['IP Camera', '4K Resolution', 'AI Detection', 'NVR'], icon: '📹', badge: 'Best Seller' },
  { id: 41, name: 'Dahua CCTV System', category: 'cctv', categoryLabel: 'CCTV', brand: 'dahua', description: 'High-quality Dahua CCTV and IoT video systems.', price: 'Contact Us', features: ['IP Camera', 'Smart H.265+', 'AI Features', 'XVR/NVR'], icon: '📹' },

  // Security System
  { id: 2, name: 'GeoVision IP Camera', category: 'security-system', categoryLabel: 'Security System', brand: 'geovision', description: 'GeoVision IP surveillance cameras with video analytics and high resolution.', price: 'Contact Us', features: ['IP Camera', 'Video Analytics', 'High Resolution', 'PoE'], icon: '🛡️' },
  { id: 3, name: 'Centrix Security System', category: 'security-system', categoryLabel: 'Security System', brand: 'centrix', description: 'Centrix integrated security system for enterprise needs.', price: 'Contact Us', features: ['Integrated System', 'Enterprise Grade', 'Scalable', 'Remote Monitor'], icon: '🛡️' },
  { id: 5, name: 'SAFR Face Recognition', category: 'security-system', categoryLabel: 'Security System', brand: 'safr', description: 'SAFR real-time face recognition platform with AI technology.', price: 'Contact Us', features: ['Face Recognition', 'Real-Time AI', 'High Accuracy', 'Cloud/Edge'], icon: '🛡️', badge: 'AI' },
  { id: 8, name: 'Arecont Megapixel Camera', category: 'security-system', categoryLabel: 'Security System', brand: 'arecont-vision', description: 'Arecont Vision megapixel cameras for large-scale surveillance.', price: 'Contact Us', features: ['Megapixel', 'Panoramic', 'Day/Night', 'H.264'], icon: '🛡️' },
  { id: 9, name: 'ASIS Security Solution', category: 'security-system', categoryLabel: 'Security System', brand: 'asis-technologies', description: 'ASIS Technologies advanced security solutions for various industries.', price: 'Contact Us', features: ['Multi-Industry', 'Advanced Tech', 'Custom Solution', 'Support'], icon: '🛡️' },

  // Intruder Alarm
  { id: 10, name: 'Bentel Alarm Panel', category: 'intruder-alarm', categoryLabel: 'Intruder Alarm', brand: 'bentel-security', description: 'Bentel Security intrusion alarm panel with advanced detection technology.', price: 'Contact Us', features: ['Multi-Zone', 'Wireless', 'GSM Module', 'App Control'], icon: '🚨', badge: 'Pro' },

  // XVR Simulation
  { id: 11, name: 'XVR Simulation Platform', category: 'xvr-simulation', categoryLabel: 'XVR Simulation', brand: 'xvr-simulation', description: 'VR simulation platform for security training and emergency handling.', price: 'Contact Us', features: ['Virtual Reality', 'Training', 'Multi-Scenario', 'Realistic'], icon: '🎮', badge: 'Simulation' },

  // Perimeter Fencing
  { id: 12, name: 'Southwest Microwave Sensor', category: 'perimeter-fencing', categoryLabel: 'Perimeter Fencing', brand: 'southwest-microwave', description: 'Microwave perimeter detection sensor for wide-area security.', price: 'Contact Us', features: ['Microwave Sensor', 'Long Range', 'Weatherproof', 'Low False Alarm'], icon: '🛡️', badge: 'Perimeter' },

  // IT Solution
  { id: 13, name: 'LG Professional Display', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'lg', description: 'LG professional monitors and displays for command centers.', price: 'Contact Us', features: ['4K Display', 'Professional', 'Video Wall', '24/7'], icon: '💻' },
  { id: 14, name: 'ACER Business Laptop', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'acer', description: 'ACER business laptops for operational and monitoring needs.', price: 'Contact Us', features: ['Business Grade', 'Reliable', 'Performance', 'Secure'], icon: '💻' },
  { id: 15, name: 'Toshiba Storage Solution', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'toshiba', description: 'Toshiba hard drives and storage for surveillance systems.', price: 'Contact Us', features: ['Surveillance HDD', 'High Capacity', 'Reliable', '24/7'], icon: '💻' },
  { id: 16, name: 'Dell Server & Workstation', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'dell', description: 'Dell servers and workstations for enterprise security infrastructure.', price: 'Contact Us', features: ['PowerEdge Server', 'Workstation', 'Scalable', 'Enterprise'], icon: '💻', badge: 'Enterprise' },
  { id: 17, name: 'Hitachi Enterprise Storage', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'hitachi', description: 'Hitachi enterprise storage solutions for security data centers.', price: 'Contact Us', features: ['Enterprise Storage', 'High Availability', 'Data Protection', 'Scalable'], icon: '💻' },
  { id: 18, name: 'Samsung Display Solution', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'samsung', description: 'Samsung displays and signage for monitoring and command centers.', price: 'Contact Us', features: ['Smart Signage', 'Video Wall', 'LED Display', 'UHD'], icon: '💻' },
  { id: 19, name: 'Asus Commercial PC', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'asus', description: 'Asus commercial PCs for monitoring and operational needs.', price: 'Contact Us', features: ['Commercial Grade', 'Compact', 'Reliable', 'Performance'], icon: '💻' },
  { id: 20, name: 'HP Enterprise Solution', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'hp', description: 'HP enterprise solutions for printing and computing.', price: 'Contact Us', features: ['ProLiant Server', 'Printing', 'Managed IT', 'Cloud Ready'], icon: '💻' },
  { id: 21, name: 'Fujitsu IT Infrastructure', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'fujitsu', description: 'Fujitsu IT infrastructure for data centers and enterprise.', price: 'Contact Us', features: ['PRIMERGY Server', 'Storage', 'Reliable', 'Green IT'], icon: '💻' },
  { id: 22, name: 'Lenovo Data Center', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'lenovo', description: 'Lenovo data center and computing solutions for enterprise.', price: 'Contact Us', features: ['ThinkSystem', 'Data Center', 'HPC', 'Enterprise'], icon: '💻' },

  // IPTV/MATV
  { id: 23, name: 'IKUSI IPTV System', category: 'iptv-matv', categoryLabel: 'IPTV/MATV', brand: 'ikusi', description: 'IKUSI professional IPTV and TV signal distribution systems.', price: 'Contact Us', features: ['IPTV', 'MATV', 'Signal Distribution', 'Headend'], icon: '📺', badge: 'Pro' },

  // X-Ray
  { id: 24, name: 'Smiths Detection X-Ray Scanner', category: 'x-ray', categoryLabel: 'X-Ray', brand: 'smiths-detection', description: 'Smiths Detection X-Ray screening machines for building and airport security.', price: 'Contact Us', features: ['X-Ray Screening', 'Baggage Scanner', 'Threat Detection', 'High Throughput'], icon: '🔍', badge: 'Security' },

  // Metal Detector
  { id: 25, name: 'Garrett Walk-Through Detector', category: 'metal-detector', categoryLabel: 'Metal Detector', brand: 'garrett', description: 'Garrett walk-through metal detectors for building entrance security.', price: 'Contact Us', features: ['Walk-Through', 'Multi-Zone', 'High Sensitivity', 'Weather Resistant'], icon: '🔎', badge: 'Best Seller' },
  { id: 26, name: 'CEIA Metal Detector', category: 'metal-detector', categoryLabel: 'Metal Detector', brand: 'ceia', description: 'CEIA high-precision metal detectors for professional security.', price: 'Contact Us', features: ['High Precision', 'Multi-Zone', 'Auto Calibration', 'Network Ready'], icon: '🔎' },

  // Others
  { id: 33, name: 'Cisco Networking Equipment', category: 'others', categoryLabel: 'Others', brand: 'cisco', description: 'Cisco networking equipment for security network infrastructure.', price: 'Contact Us', features: ['Switch', 'Router', 'Firewall', 'Enterprise'], icon: '⚙️', badge: 'Networking' },
  { id: 34, name: 'Boon Edam Security Entrance', category: 'others', categoryLabel: 'Others', brand: 'boon-edam', description: 'Boon Edam premium revolving doors and security entrances.', price: 'Contact Us', features: ['Revolving Door', 'Turnstile', 'Security Gate', 'Premium'], icon: '⚙️' },
  { id: 35, name: 'Windows OS Enterprise', category: 'others', categoryLabel: 'Others', brand: 'windows', description: 'Windows operating system for security platforms and servers.', price: 'Contact Us', features: ['Windows Server', 'Enterprise', 'Active Directory', 'Security'], icon: '⚙️' },
  { id: 36, name: 'Intel Processing Platform', category: 'others', categoryLabel: 'Others', brand: 'intel', description: 'Intel processors and platforms for security systems and computing.', price: 'Contact Us', features: ['Xeon Processor', 'AI Acceleration', 'vPro', 'Edge Computing'], icon: '⚙️' },

  // === Multi-category products (brands appearing in more than one category) ===

  // Honeywell — CCTV
  { id: 42, name: 'Honeywell CCTV Camera', category: 'cctv', categoryLabel: 'CCTV', brand: 'honeywell', description: 'Honeywell CCTV cameras with video analytics technology and high resolution.', price: 'Contact Us', features: ['IP Camera', 'Video Analytics', '4K', 'IR Night Vision'], icon: '📹' },
  // Honeywell — Access Control
  { id: 43, name: 'Honeywell Access Control', category: 'access-control', categoryLabel: 'Access Control', brand: 'honeywell', description: 'Honeywell access control systems with building management integration.', price: 'Contact Us', features: ['Card Reader', 'Mobile Access', 'BMS Integration', 'Cloud'], icon: '🚪' },

  // Hikvision — Access Control
  { id: 44, name: 'Hikvision Access Control', category: 'access-control', categoryLabel: 'Access Control', brand: 'hikvision', description: 'Hikvision access control terminals with face recognition and fingerprint.', price: 'Contact Us', features: ['Face Recognition', 'Fingerprint', 'Card Access', 'App Control'], icon: '🚪' },
  // Hikvision — Intruder Alarm
  { id: 45, name: 'Hikvision Intruder Alarm', category: 'intruder-alarm', categoryLabel: 'Intruder Alarm', brand: 'hikvision', description: 'Hikvision intrusion alarm systems with PIR sensors and wireless connectivity.', price: 'Contact Us', features: ['PIR Sensor', 'Wireless', 'App Notification', 'Siren'], icon: '🚨' },

  // Dahua — Access Control
  { id: 46, name: 'Dahua Access Control', category: 'access-control', categoryLabel: 'Access Control', brand: 'dahua', description: 'Dahua access control with face recognition technology and IC card.', price: 'Contact Us', features: ['Face Recognition', 'IC Card', 'Fingerprint', 'Remote Unlock'], icon: '🚪' },

  // ZKTeco — Metal Detector
  { id: 47, name: 'ZKTeco Walk-Through Detector', category: 'metal-detector', categoryLabel: 'Metal Detector', brand: 'zkteco', description: 'ZKTeco walk-through metal detectors with multi-zone detection.', price: 'Contact Us', features: ['Walk-Through', '18 Zones', 'High Sensitivity', 'LCD Display'], icon: '🔎' },
  // ZKTeco — Security System
  { id: 48, name: 'ZKTeco Security Platform', category: 'security-system', categoryLabel: 'Security System', brand: 'zkteco', description: 'ZKTeco integrated security platform for access management and surveillance.', price: 'Contact Us', features: ['Integrated Platform', 'Video Surveillance', 'Access Management', 'Cloud'], icon: '🛡️' },

  // =====================================================================
  // SIQURA Products
  // =====================================================================
  { id: 1000, name: 'FD5008', category: 'siqura-surveillance', categoryLabel: 'Surveillance cameras', brand: 'siqura', description: 'SIQURA FD5008', price: 'Contact Us', features: [], icon: '📹' },
  { id: 1001, name: 'FD2024F', category: 'siqura-surveillance', categoryLabel: 'Surveillance cameras', brand: 'siqura', description: 'SIQURA FD2024F', price: 'Contact Us', features: [], icon: '📹' },
  { id: 1002, name: 'FD2024M', category: 'siqura-surveillance', categoryLabel: 'Surveillance cameras', brand: 'siqura', description: 'SIQURA FD2024M', price: 'Contact Us', features: [], icon: '📹' },
  { id: 1003, name: 'BL2026M', category: 'siqura-surveillance', categoryLabel: 'Surveillance cameras', brand: 'siqura', description: 'SIQURA BL2026M', price: 'Contact Us', features: [], icon: '📹' },
  { id: 1004, name: 'BL2024M', category: 'siqura-surveillance', categoryLabel: 'Surveillance cameras', brand: 'siqura', description: 'SIQURA BL2024M', price: 'Contact Us', features: [], icon: '📹' },
  { id: 1005, name: 'PD950DC', category: 'siqura-surveillance', categoryLabel: 'Surveillance cameras', brand: 'siqura', description: 'SIQURA PD950DC', price: 'Contact Us', features: [], icon: '📹' },
  { id: 1006, name: 'SFP Module', category: 'siqura-surveillance', categoryLabel: 'Surveillance cameras', brand: 'siqura', description: 'SIQURA SFP Module', price: 'Contact Us', features: [], icon: '📹' },
  { id: 1007, name: 'FE5012', category: 'siqura-surveillance', categoryLabel: 'Surveillance cameras', brand: 'siqura', description: 'SIQURA FE5012', price: 'Contact Us', features: [], icon: '📹' },
  { id: 1008, name: 'PD5004W', category: 'siqura-surveillance', categoryLabel: 'Surveillance cameras', brand: 'siqura', description: 'SIQURA PD5004W', price: 'Contact Us', features: [], icon: '📹' },
  { id: 1009, name: 'SA3-PTZ D-IR', category: 'siqura-marine', categoryLabel: 'Marine & industrial cameras', brand: 'siqura', description: 'SIQURA SA3-PTZ D-IR', price: 'Contact Us', features: [], icon: '🚢' },
  { id: 1010, name: 'SA3-PTZ SERIES', category: 'siqura-marine', categoryLabel: 'Marine & industrial cameras', brand: 'siqura', description: 'SIQURA SA3-PTZ SERIES', price: 'Contact Us', features: [], icon: '🚢' },
  { id: 1011, name: 'SA3-FIX SERIES', category: 'siqura-marine', categoryLabel: 'Marine & industrial cameras', brand: 'siqura', description: 'SIQURA SA3-FIX SERIES', price: 'Contact Us', features: [], icon: '🚢' },
  { id: 1012, name: 'TC3-X', category: 'siqura-marine', categoryLabel: 'Marine & industrial cameras', brand: 'siqura', description: 'SIQURA TC3-X', price: 'Contact Us', features: [], icon: '🚢' },
  { id: 1013, name: 'XCU3 FUSION', category: 'siqura-marine', categoryLabel: 'Marine & industrial cameras', brand: 'siqura', description: 'SIQURA XCU3 FUSION', price: 'Contact Us', features: [], icon: '🚢' },
  { id: 1014, name: 'XCU3 COMPACT THERMAL', category: 'siqura-marine', categoryLabel: 'Marine & industrial cameras', brand: 'siqura', description: 'SIQURA XCU3 COMPACT THERMAL', price: 'Contact Us', features: [], icon: '🚢' },
  { id: 1015, name: 'SA-BL28', category: 'siqura-marine', categoryLabel: 'Marine & industrial cameras', brand: 'siqura', description: 'SIQURA SA-BL28', price: 'Contact Us', features: [], icon: '🚢' },
  { id: 1016, name: 'BC980H2-AS', category: 'siqura-marine', categoryLabel: 'Marine & industrial cameras', brand: 'siqura', description: 'SIQURA BC980H2-AS', price: 'Contact Us', features: [], icon: '🚢' },
  { id: 1017, name: 'PA80-2', category: 'siqura-marine', categoryLabel: 'Marine & industrial cameras', brand: 'siqura', description: 'SIQURA PA80-2', price: 'Contact Us', features: [], icon: '🚢' },
  { id: 1018, name: 'WP10', category: 'siqura-marine', categoryLabel: 'Marine & industrial cameras', brand: 'siqura', description: 'SIQURA WP10', price: 'Contact Us', features: [], icon: '🚢' },
  { id: 1019, name: 'BC822v2H3-AS', category: 'siqura-marine', categoryLabel: 'Marine & industrial cameras', brand: 'siqura', description: 'SIQURA BC822v2H3-AS', price: 'Contact Us', features: [], icon: '🚢' },
  { id: 1020, name: 'INT3-RJ/INT3-SM/INT3-EoC', category: 'siqura-marine', categoryLabel: 'Marine & industrial cameras', brand: 'siqura', description: 'SIQURA INT3-RJ/INT3-SM/INT3-EoC', price: 'Contact Us', features: [], icon: '🚢' },
  { id: 1021, name: 'EX3-PTZ D-IR', category: 'siqura-explosion', categoryLabel: 'Explosion proof cameras', brand: 'siqura', description: 'SIQURA EX3-PTZ D-IR', price: 'Contact Us', features: [], icon: '💥' },
  { id: 1022, name: 'EX3-PTZ D SERIES', category: 'siqura-explosion', categoryLabel: 'Explosion proof cameras', brand: 'siqura', description: 'SIQURA EX3-PTZ D SERIES', price: 'Contact Us', features: [], icon: '💥' },
  { id: 1023, name: 'EX3-FIX IR SERIES', category: 'siqura-explosion', categoryLabel: 'Explosion proof cameras', brand: 'siqura', description: 'SIQURA EX3-FIX IR SERIES', price: 'Contact Us', features: [], icon: '💥' },
  { id: 1024, name: 'EX-PD24', category: 'siqura-explosion', categoryLabel: 'Explosion proof cameras', brand: 'siqura', description: 'SIQURA EX-PD24', price: 'Contact Us', features: [], icon: '💥' },
  { id: 1025, name: 'EX-JB01', category: 'siqura-explosion', categoryLabel: 'Explosion proof cameras', brand: 'siqura', description: 'SIQURA EX-JB01', price: 'Contact Us', features: [], icon: '💥' },
  { id: 1026, name: 'EX-WP10', category: 'siqura-explosion', categoryLabel: 'Explosion proof cameras', brand: 'siqura', description: 'SIQURA EX-WP10', price: 'Contact Us', features: [], icon: '💥' },
  { id: 1027, name: 'UP-IR200', category: 'siqura-mobility', categoryLabel: 'Mobility cameras', brand: 'siqura', description: 'SIQURA UP-IR200', price: 'Contact Us', features: [], icon: '🚗' },
  { id: 1028, name: 'UP33', category: 'siqura-mobility', categoryLabel: 'Mobility cameras', brand: 'siqura', description: 'SIQURA UP33', price: 'Contact Us', features: [], icon: '🚗' },
  { id: 1029, name: 'UP36', category: 'siqura-mobility', categoryLabel: 'Mobility cameras', brand: 'siqura', description: 'SIQURA UP36', price: 'Contact Us', features: [], icon: '🚗' },
  { id: 1030, name: 'XSNet C4208SW PoE V2', category: 'siqura-network', categoryLabel: 'Network equipment', brand: 'siqura', description: 'SIQURA XSNet C4208SW PoE V2', price: 'Contact Us', features: [], icon: '🌐' },
  { id: 1031, name: 'XSNet 3300MC SFP', category: 'siqura-network', categoryLabel: 'Network equipment', brand: 'siqura', description: 'SIQURA XSNet 3300MC SFP', price: 'Contact Us', features: [], icon: '🌐' },
  { id: 1032, name: 'XSNet 3100MC', category: 'siqura-network', categoryLabel: 'Network equipment', brand: 'siqura', description: 'SIQURA XSNet 3100MC', price: 'Contact Us', features: [], icon: '🌐' },
  { id: 1033, name: 'NVH-1004XRR', category: 'siqura-mobility-2', categoryLabel: 'Mobility Cameras', brand: 'siqura', description: 'SIQURA NVH-1004XRR', price: 'Contact Us', features: [], icon: '🖥️' },
  { id: 1034, name: 'NVH-2624R', category: 'siqura-mobility-2', categoryLabel: 'Mobility Cameras', brand: 'siqura', description: 'SIQURA NVH-2624R', price: 'Contact Us', features: [], icon: '🖥️' },
  { id: 1035, name: 'NVH-1504R', category: 'siqura-mobility-2', categoryLabel: 'Mobility Cameras', brand: 'siqura', description: 'SIQURA NVH-1504R', price: 'Contact Us', features: [], icon: '🖥️' },
  { id: 1036, name: 'NVH-2004X', category: 'siqura-mobility-2', categoryLabel: 'Mobility Cameras', brand: 'siqura', description: 'SIQURA NVH-2004X', price: 'Contact Us', features: [], icon: '🖥️' },
  { id: 1037, name: 'NVH-1010M', category: 'siqura-mobility-2', categoryLabel: 'Mobility Cameras', brand: 'siqura', description: 'SIQURA NVH-1010M', price: 'Contact Us', features: [], icon: '🖥️' },
  { id: 1038, name: 'IPH-S24', category: 'siqura-mobility-2', categoryLabel: 'Mobility Cameras', brand: 'siqura', description: 'SIQURA IPH-S24', price: 'Contact Us', features: [], icon: '🖥️' },

  // =====================================================================
  // GENETEC Products
  // =====================================================================
  { id: 1039, name: 'Security Center (SaaS)', category: 'genetec-saas', categoryLabel: 'SECURITY CENTER AS A SERVICE', brand: 'genetec', description: 'GENETEC Security Center (SaaS)', price: 'Contact Us', features: [], icon: '☁️' },
  { id: 1040, name: 'Access Control as a service (ACaaS)', category: 'genetec-saas', categoryLabel: 'SECURITY CENTER AS A SERVICE', brand: 'genetec', description: 'GENETEC Access Control as a service (ACaaS)', price: 'Contact Us', features: [], icon: '☁️' },
  { id: 1041, name: 'Video Surveillance as a service (VSaaS)', category: 'genetec-saas', categoryLabel: 'SECURITY CENTER AS A SERVICE', brand: 'genetec', description: 'GENETEC Video Surveillance as a service (VSaaS)', price: 'Contact Us', features: [], icon: '☁️' },
  { id: 1042, name: 'Cloud Manages Appliances', category: 'genetec-saas', categoryLabel: 'SECURITY CENTER AS A SERVICE', brand: 'genetec', description: 'GENETEC Cloud Manages Appliances', price: 'Contact Us', features: [], icon: '☁️' },
  { id: 1043, name: 'Genetec Operations Center', category: 'genetec-saas', categoryLabel: 'SECURITY CENTER AS A SERVICE', brand: 'genetec', description: 'GENETEC Genetec Operations Center', price: 'Contact Us', features: [], icon: '☁️' },
  { id: 1044, name: 'Security Center', category: 'genetec-on-premise', categoryLabel: 'ON-PREMISE PLATFORM', brand: 'genetec', description: 'GENETEC Security Center', price: 'Contact Us', features: [], icon: '🏢' },
  { id: 1045, name: 'Synergis', category: 'genetec-on-premise', categoryLabel: 'ON-PREMISE PLATFORM', brand: 'genetec', description: 'GENETEC Synergis', price: 'Contact Us', features: [], icon: '🏢' },
  { id: 1046, name: 'Omicast', category: 'genetec-on-premise', categoryLabel: 'ON-PREMISE PLATFORM', brand: 'genetec', description: 'GENETEC Omicast', price: 'Contact Us', features: [], icon: '🏢' },
  { id: 1047, name: 'Autovu', category: 'genetec-on-premise', categoryLabel: 'ON-PREMISE PLATFORM', brand: 'genetec', description: 'GENETEC Autovu', price: 'Contact Us', features: [], icon: '🏢' },
  { id: 1048, name: 'Sipelia', category: 'genetec-on-premise', categoryLabel: 'ON-PREMISE PLATFORM', brand: 'genetec', description: 'GENETEC Sipelia', price: 'Contact Us', features: [], icon: '🏢' },
  { id: 1049, name: 'Genetec Mission Control', category: 'genetec-on-premise', categoryLabel: 'ON-PREMISE PLATFORM', brand: 'genetec', description: 'GENETEC Genetec Mission Control', price: 'Contact Us', features: [], icon: '🏢' },
  { id: 1050, name: 'Intrusion Management', category: 'genetec-on-premise', categoryLabel: 'ON-PREMISE PLATFORM', brand: 'genetec', description: 'GENETEC Intrusion Management', price: 'Contact Us', features: [], icon: '🏢' },
  { id: 1051, name: 'Industrial Internet Of Things (IIoT)', category: 'genetec-on-premise', categoryLabel: 'ON-PREMISE PLATFORM', brand: 'genetec', description: 'GENETEC Industrial Internet Of Things (IIoT)', price: 'Contact Us', features: [], icon: '🏢' },
  { id: 1052, name: 'SY-CLOUDLINK-312', category: 'genetec-hardware', categoryLabel: 'HARDWARE & EDGE DEVICE', brand: 'genetec', description: 'GENETEC SY-CLOUDLINK-312', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1053, name: 'SY-CLOUDLINK-G2', category: 'genetec-hardware', categoryLabel: 'HARDWARE & EDGE DEVICE', brand: 'genetec', description: 'GENETEC SY-CLOUDLINK-G2', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1054, name: 'SY-LP1502', category: 'genetec-hardware', categoryLabel: 'HARDWARE & EDGE DEVICE', brand: 'genetec', description: 'GENETEC SY-LP1502', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1055, name: 'SY-LP1501', category: 'genetec-hardware', categoryLabel: 'HARDWARE & EDGE DEVICE', brand: 'genetec', description: 'GENETEC SY-LP1501', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1056, name: 'SY-MP1502', category: 'genetec-hardware', categoryLabel: 'HARDWARE & EDGE DEVICE', brand: 'genetec', description: 'GENETEC SY-MP1502', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1057, name: 'SY-MP4502', category: 'genetec-hardware', categoryLabel: 'HARDWARE & EDGE DEVICE', brand: 'genetec', description: 'GENETEC SY-MP4502', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1058, name: 'SY-MR62E', category: 'genetec-hardware', categoryLabel: 'HARDWARE & EDGE DEVICE', brand: 'genetec', description: 'GENETEC SY-MR62E', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1059, name: 'SY-MR16IN-S3', category: 'genetec-hardware', categoryLabel: 'HARDWARE & EDGE DEVICE', brand: 'genetec', description: 'GENETEC SY-MR16IN-S3', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1060, name: 'SY-MP1502-SCS', category: 'genetec-hardware', categoryLabel: 'HARDWARE & EDGE DEVICE', brand: 'genetec', description: 'GENETEC SY-MP1502-SCS', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1061, name: 'SY-MP1501', category: 'genetec-hardware', categoryLabel: 'HARDWARE & EDGE DEVICE', brand: 'genetec', description: 'GENETEC SY-MP1501', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1062, name: 'SY-MP2500', category: 'genetec-hardware', categoryLabel: 'HARDWARE & EDGE DEVICE', brand: 'genetec', description: 'GENETEC SY-MP2500', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1063, name: 'SY-MR52-S3', category: 'genetec-hardware', categoryLabel: 'HARDWARE & EDGE DEVICE', brand: 'genetec', description: 'GENETEC SY-MR52-S3', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1064, name: 'SY-MR16OUT-S3', category: 'genetec-hardware', categoryLabel: 'HARDWARE & EDGE DEVICE', brand: 'genetec', description: 'GENETEC SY-MR16OUT-S3', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1065, name: 'SY-MR50-S3', category: 'genetec-hardware', categoryLabel: 'HARDWARE & EDGE DEVICE', brand: 'genetec', description: 'GENETEC SY-MR50-S3', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1066, name: 'Streamvault™ SV-300E-T4', category: 'genetec-hardware', categoryLabel: 'HARDWARE & EDGE DEVICE', brand: 'genetec', description: 'GENETEC Streamvault™ SV-300E-T4', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1067, name: 'Autovu Cloudrunner', category: 'genetec-operations', categoryLabel: 'OPERATIONS & COLABORATION', brand: 'genetec', description: 'GENETEC Autovu Cloudrunner', price: 'Contact Us', features: [], icon: '🤝' },
  { id: 1068, name: 'Genetec Clearance', category: 'genetec-operations', categoryLabel: 'OPERATIONS & COLABORATION', brand: 'genetec', description: 'GENETEC Genetec Clearance', price: 'Contact Us', features: [], icon: '🤝' },
  { id: 1069, name: 'Genetec ClearID', category: 'genetec-operations', categoryLabel: 'OPERATIONS & COLABORATION', brand: 'genetec', description: 'GENETEC Genetec ClearID', price: 'Contact Us', features: [], icon: '🤝' },

  // =====================================================================
  // LENEL Products
  // =====================================================================
  { id: 1071, name: 'On Guard Cloud', category: 'lenel-access-control', categoryLabel: 'ACCESS CONTROL', brand: 'lenel', description: 'LENEL On Guard Cloud', price: 'Contact Us', features: [], icon: '🚪' },
  { id: 1072, name: 'OnGuard Version 8.4', category: 'lenel-access-control', categoryLabel: 'ACCESS CONTROL', brand: 'lenel', description: 'LENEL OnGuard Version 8.4', price: 'Contact Us', features: [], icon: '🚪' },
  { id: 1073, name: 'OnGuard Version 8.3', category: 'lenel-access-control', categoryLabel: 'ACCESS CONTROL', brand: 'lenel', description: 'LENEL OnGuard Version 8.3', price: 'Contact Us', features: [], icon: '🚪' },
  { id: 1074, name: 'OnGuard Version 8.2', category: 'lenel-access-control', categoryLabel: 'ACCESS CONTROL', brand: 'lenel', description: 'LENEL OnGuard Version 8.2', price: 'Contact Us', features: [], icon: '🚪' },
  { id: 1075, name: 'OnGuard Version 8.1', category: 'lenel-access-control', categoryLabel: 'ACCESS CONTROL', brand: 'lenel', description: 'LENEL OnGuard Version 8.1', price: 'Contact Us', features: [], icon: '🚪' },
  { id: 1076, name: 'OnGuard Access', category: 'lenel-access-control', categoryLabel: 'ACCESS CONTROL', brand: 'lenel', description: 'LENEL OnGuard Access', price: 'Contact Us', features: [], icon: '🚪' },
  { id: 1077, name: 'OnGuard Enterprise', category: 'lenel-access-control', categoryLabel: 'ACCESS CONTROL', brand: 'lenel', description: 'LENEL OnGuard Enterprise', price: 'Contact Us', features: [], icon: '🚪' },
  { id: 1078, name: 'OnGuard ID Identity Management', category: 'lenel-access-control', categoryLabel: 'ACCESS CONTROL', brand: 'lenel', description: 'LENEL OnGuard ID Identity Management', price: 'Contact Us', features: [], icon: '🚪' },
  { id: 1079, name: 'OnGuard Visitor', category: 'lenel-access-control', categoryLabel: 'ACCESS CONTROL', brand: 'lenel', description: 'LENEL OnGuard Visitor', price: 'Contact Us', features: [], icon: '🚪' },
  { id: 1080, name: 'OnGuard Monitor', category: 'lenel-access-control', categoryLabel: 'ACCESS CONTROL', brand: 'lenel', description: 'LENEL OnGuard Monitor', price: 'Contact Us', features: [], icon: '🚪' },
  { id: 1081, name: 'OnGuard WATCH', category: 'lenel-access-control', categoryLabel: 'ACCESS CONTROL', brand: 'lenel', description: 'LENEL OnGuard WATCH', price: 'Contact Us', features: [], icon: '🚪' },
  { id: 1082, name: 'OnGuard Policies', category: 'lenel-access-control', categoryLabel: 'ACCESS CONTROL', brand: 'lenel', description: 'LENEL OnGuard Policies', price: 'Contact Us', features: [], icon: '🚪' },
  { id: 1083, name: 'OnGuard Credentials', category: 'lenel-access-control', categoryLabel: 'ACCESS CONTROL', brand: 'lenel', description: 'LENEL OnGuard Credentials', price: 'Contact Us', features: [], icon: '🚪' },
  { id: 1084, name: 'OnGuard Visitor Self Service (VSS)', category: 'lenel-access-control', categoryLabel: 'ACCESS CONTROL', brand: 'lenel', description: 'LENEL OnGuard Visitor Self Service (VSS)', price: 'Contact Us', features: [], icon: '🚪' },
  { id: 1085, name: 'Milestone Xprotect', category: 'lenel-access-control', categoryLabel: 'ACCESS CONTROL', brand: 'lenel', description: 'LENEL Milestone Xprotect', price: 'Contact Us', features: [], icon: '🚪' },
  { id: 1087, name: 'OnGuard Biometrics & Smart Cards', category: 'lenel-mobile-credential', categoryLabel: 'MOBILE CREDENTIAL', brand: 'lenel', description: 'LENEL OnGuard Biometrics & Smart Cards', price: 'Contact Us', features: [], icon: '📱' },
  { id: 1088, name: 'OnGuard Surveillance', category: 'lenel-video-management', categoryLabel: 'VIDEO MANAGEMENT', brand: 'lenel', description: 'LENEL OnGuard Surveillance', price: 'Contact Us', features: [], icon: '📹' },
  { id: 1089, name: 'Magic Monitor - OnGuard', category: 'lenel-video-management', categoryLabel: 'VIDEO MANAGEMENT', brand: 'lenel', description: 'LENEL Magic Monitor - OnGuard', price: 'Contact Us', features: [], icon: '📹' },
  { id: 1091, name: 'LNL-M2210', category: 'lenel-hardware', categoryLabel: 'HARDWARE', brand: 'lenel', description: 'LENEL LNL-M2210', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1092, name: 'LNL-M2220', category: 'lenel-hardware', categoryLabel: 'HARDWARE', brand: 'lenel', description: 'LENEL LNL-M2220', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1093, name: 'LNL-M3300', category: 'lenel-hardware', categoryLabel: 'HARDWARE', brand: 'lenel', description: 'LENEL LNL-M3300', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1094, name: 'LNL-M4420', category: 'lenel-hardware', categoryLabel: 'HARDWARE', brand: 'lenel', description: 'LENEL LNL-M4420', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1095, name: 'LNL-X2210', category: 'lenel-hardware', categoryLabel: 'HARDWARE', brand: 'lenel', description: 'LENEL LNL-X2210', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1096, name: 'LNL-X2220', category: 'lenel-hardware', categoryLabel: 'HARDWARE', brand: 'lenel', description: 'LENEL LNL-X2220', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1097, name: 'LNL-X3300', category: 'lenel-hardware', categoryLabel: 'HARDWARE', brand: 'lenel', description: 'LENEL LNL-X3300', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1098, name: 'LNL-X4420', category: 'lenel-hardware', categoryLabel: 'HARDWARE', brand: 'lenel', description: 'LENEL LNL-X4420', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1099, name: 'LNL-1320-S3', category: 'lenel-hardware', categoryLabel: 'HARDWARE', brand: 'lenel', description: 'LENEL LNL-1320-S3', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1100, name: 'LNL-1100-S3', category: 'lenel-hardware', categoryLabel: 'HARDWARE', brand: 'lenel', description: 'LENEL LNL-1100-S3', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1101, name: 'LNL-1200-S3', category: 'lenel-hardware', categoryLabel: 'HARDWARE', brand: 'lenel', description: 'LENEL LNL-1200-S3', price: 'Contact Us', features: [], icon: '🔌' },
  { id: 1102, name: 'LNL-1300-S3', category: 'lenel-hardware', categoryLabel: 'HARDWARE', brand: 'lenel', description: 'LENEL LNL-1300-S3', price: 'Contact Us', features: [], icon: '🔌' },
]
