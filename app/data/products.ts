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
  badge?: string
}

export interface Category {
  id: string
  label: string
  icon: string
}

export interface Brand {
  id: string
  name: string
  category: string
  categoryLabel: string
  logo: string
  description: string
  productCount?: number
}

export const categories: Category[] = [
  { id: 'all', label: 'Semua', icon: '🔒' },
  { id: 'fire-alarm', label: 'Fire Alarm', icon: '🔥' },
  { id: 'access-control', label: 'Access Control', icon: '🚪' },
  { id: 'cctv', label: 'CCTV', icon: '📹' },
  { id: 'security-system', label: 'Security System', icon: '🛡️' },
  { id: 'intruder-alarm', label: 'Intruder Alarm', icon: '🚨' },
  { id: 'xvr-simulation', label: 'XVR Simulation', icon: '🎮' },
  { id: 'perimeter-fencing', label: 'Perimeter Fencing', icon: '🛡️' },
  { id: 'it-solution', label: 'IT Solution', icon: '💻' },
  { id: 'iptv-matv', label: 'IPTV/MATV', icon: '📺' },
  { id: 'x-ray', label: 'X-Ray', icon: '🔍' },
  { id: 'metal-detector', label: 'Metal Detector', icon: '🔎' },
  { id: 'others', label: 'Others', icon: '⚙️' },
]

export const brands: Brand[] = [
  // Fire Alarm (highlighted first)
  { id: 'gst', name: 'GST', category: 'fire-alarm', categoryLabel: 'Fire Alarm', logo: 'GST', description: 'Sistem fire alarm konvensional dan addressable terpercaya' },
  { id: 'notifier', name: 'Notifier', category: 'fire-alarm', categoryLabel: 'Fire Alarm', logo: 'NTF', description: 'Fire alarm system kelas enterprise dari Honeywell' },
  { id: 'edwards', name: 'Edwards', category: 'fire-alarm', categoryLabel: 'Fire Alarm', logo: 'EDW', description: 'Fire alarm dan life safety system berkualitas tinggi' },
  { id: 'simplex', name: 'Simplex', category: 'fire-alarm', categoryLabel: 'Fire Alarm', logo: 'SPX', description: 'Solusi fire detection dan notification system terdepan' },
  { id: 'kidde', name: 'Kidde Fire System', category: 'fire-alarm', categoryLabel: 'Fire Alarm', logo: 'KDE', description: 'Sistem pemadam dan deteksi kebakaran otomatis' },
  { id: 'honeywell', name: 'Honeywell', category: 'fire-alarm', categoryLabel: 'Fire Alarm', logo: 'HWL', description: 'Solusi fire alarm dan building safety terintegrasi' },

  // Access Control (highlighted second)
  { id: 'lenel', name: 'Lenel', category: 'access-control', categoryLabel: 'Access Control', logo: 'LNL', description: 'Solusi access control enterprise Lenel S2 dengan integrasi lengkap' },
  { id: 'genetec', name: 'Genetec', category: 'access-control', categoryLabel: 'Access Control', logo: 'GEN', description: 'Platform keamanan terpadu untuk access control, video surveillance, dan ANPR' },
  { id: 'solution', name: 'Solution', category: 'access-control', categoryLabel: 'Access Control', logo: 'SOL', description: 'Sistem access control dan keamanan pintu terintegrasi' },
  { id: 'zkteco', name: 'ZKTeco', category: 'access-control', categoryLabel: 'Access Control', logo: 'ZKT', description: 'Access control biometrik dan time attendance terkemuka' },

  // CCTV (highlighted third)
  { id: 'siqura', name: 'Siqura', category: 'cctv', categoryLabel: 'CCTV', logo: 'SQR', description: 'Video networking dan surveillance untuk infrastruktur kritis' },
  { id: 'reconyx', name: 'Reconyx', category: 'cctv', categoryLabel: 'CCTV', logo: 'RCX', description: 'Kamera keamanan high-performance untuk area kritis' },
  { id: 'bushnell', name: 'Bushnell', category: 'cctv', categoryLabel: 'CCTV', logo: 'BSH', description: 'Kamera trail dan surveillance outdoor berperforma tinggi' },
  { id: 'hikvision', name: 'Hikvision', category: 'cctv', categoryLabel: 'CCTV', logo: 'HIK', description: 'Solusi CCTV dan video surveillance terdepan di dunia' },
  { id: 'dahua', name: 'Dahua', category: 'cctv', categoryLabel: 'CCTV', logo: 'DHU', description: 'Sistem CCTV dan video IoT profesional berkualitas tinggi' },

  // Security System
  { id: 'geovision', name: 'GeoVision', category: 'security-system', categoryLabel: 'Security System', logo: 'GEO', description: 'Solusi IP surveillance dan video analytics profesional' },
  { id: 'centrix', name: 'Centrix', category: 'security-system', categoryLabel: 'Security System', logo: 'CTX', description: 'Sistem keamanan terintegrasi dengan teknologi terkini' },
  { id: 'safr', name: 'SAFR', category: 'security-system', categoryLabel: 'Security System', logo: 'SFR', description: 'Platform face recognition real-time dengan AI canggih' },
  { id: 'arecont-vision', name: 'Arecont Vision', category: 'security-system', categoryLabel: 'Security System', logo: 'ARC', description: 'Megapixel camera technology untuk keamanan skala besar' },
  { id: 'asis-technologies', name: 'ASIS Technologies', category: 'security-system', categoryLabel: 'Security System', logo: 'ASI', description: 'Teknologi keamanan canggih untuk berbagai kebutuhan industri' },

  // Intruder Alarm
  { id: 'bentel-security', name: 'Bentel Security', category: 'intruder-alarm', categoryLabel: 'Intruder Alarm', logo: 'BNT', description: 'Sistem alarm intrusi profesional dengan teknologi deteksi canggih' },

  // XVR Simulation
  { id: 'xvr-simulation', name: 'XVR Simulation', category: 'xvr-simulation', categoryLabel: 'XVR Simulation', logo: 'XVR', description: 'Platform simulasi virtual reality untuk pelatihan keamanan dan darurat' },

  // Perimeter Fencing
  { id: 'southwest-microwave', name: 'Southwest Microwave', category: 'perimeter-fencing', categoryLabel: 'Perimeter Fencing', logo: 'SWM', description: 'Sistem deteksi perimeter microwave untuk keamanan area luas' },

  // IT Solution
  { id: 'lg', name: 'LG', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'LG', description: 'Monitor dan perangkat display profesional berkualitas tinggi' },
  { id: 'acer', name: 'ACER', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'ACR', description: 'Laptop dan komputer untuk kebutuhan bisnis dan enterprise' },
  { id: 'toshiba', name: 'Toshiba', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'TSB', description: 'Solusi storage dan computing enterprise terpercaya' },
  { id: 'dell', name: 'Dell', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'DLL', description: 'Server, workstation, dan infrastruktur IT enterprise' },
  { id: 'hitachi', name: 'Hitachi', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'HIT', description: 'Solusi IT dan storage enterprise skala besar' },
  { id: 'samsung', name: 'Samsung', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'SSG', description: 'Display profesional dan perangkat IT inovatif' },
  { id: 'asus', name: 'Asus', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'ASS', description: 'Komputer dan perangkat IT berperforma tinggi' },
  { id: 'hp', name: 'HP', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'HP', description: 'Printer, laptop, dan solusi IT bisnis terlengkap' },
  { id: 'fujitsu', name: 'Fujitsu', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'FJT', description: 'Infrastruktur IT dan computing enterprise Jepang' },
  { id: 'lenovo', name: 'Lenovo', category: 'it-solution', categoryLabel: 'IT Solution', logo: 'LNV', description: 'PC, laptop, dan solusi data center enterprise' },

  // IPTV/MATV
  { id: 'ikusi', name: 'IKUSI', category: 'iptv-matv', categoryLabel: 'IPTV/MATV', logo: 'IKS', description: 'Solusi IPTV dan distribusi sinyal TV profesional' },

  // X-Ray
  { id: 'smiths-detection', name: 'Smiths Detection', category: 'x-ray', categoryLabel: 'X-Ray', logo: 'SMD', description: 'Sistem X-Ray screening untuk keamanan bandara dan gedung' },

  // Metal Detector
  { id: 'garrett', name: 'Garrett Metal Detector', category: 'metal-detector', categoryLabel: 'Metal Detector', logo: 'GRT', description: 'Walk-through dan handheld metal detector terkemuka dunia' },
  { id: 'ceia', name: 'CEIA', category: 'metal-detector', categoryLabel: 'Metal Detector', logo: 'CEA', description: 'Metal detector presisi tinggi untuk keamanan profesional' },

  // Others
  { id: 'cisco', name: 'Cisco', category: 'others', categoryLabel: 'Others', logo: 'CSC', description: 'Networking dan infrastruktur jaringan enterprise' },
  { id: 'boon-edam', name: 'Boon Edam', category: 'others', categoryLabel: 'Others', logo: 'BNE', description: 'Revolving door dan security entrance premium' },
  { id: 'windows', name: 'Windows', category: 'others', categoryLabel: 'Others', logo: 'WIN', description: 'Sistem operasi dan platform software enterprise' },
  { id: 'intel', name: 'Intel', category: 'others', categoryLabel: 'Others', logo: 'INT', description: 'Prosesor dan teknologi computing untuk sistem keamanan' },
]

export const products: Product[] = [
  // Fire Alarm (first)
  { id: 27, name: 'GST Fire Alarm Panel', category: 'fire-alarm', categoryLabel: 'Fire Alarm', brand: 'gst', description: 'Panel fire alarm GST konvensional dan addressable.', price: 'Hubungi Kami', features: ['Addressable', 'Multi-Loop', 'LCD Display', 'Network'], icon: '🔥' },
  { id: 29, name: 'Notifier Fire Alarm System', category: 'fire-alarm', categoryLabel: 'Fire Alarm', brand: 'notifier', description: 'Fire alarm system kelas enterprise Notifier dari Honeywell.', price: 'Hubungi Kami', features: ['ONYX Series', 'Enterprise', 'Addressable', 'Networking'], icon: '🔥', badge: 'Enterprise' },
  { id: 28, name: 'Edwards Fire Detection', category: 'fire-alarm', categoryLabel: 'Fire Alarm', brand: 'edwards', description: 'Sistem deteksi kebakaran Edwards dengan teknologi life safety.', price: 'Hubungi Kami', features: ['EST Platform', 'Life Safety', 'Addressable', 'Integration'], icon: '🔥' },
  { id: 30, name: 'Simplex Fire Protection', category: 'fire-alarm', categoryLabel: 'Fire Alarm', brand: 'simplex', description: 'Sistem proteksi kebakaran Simplex dengan deteksi dan notifikasi.', price: 'Hubungi Kami', features: ['TrueAlarm', 'Detection', 'Notification', 'Integration'], icon: '🔥' },
  { id: 31, name: 'Kidde Fire Suppression', category: 'fire-alarm', categoryLabel: 'Fire Alarm', brand: 'kidde', description: 'Sistem pemadam kebakaran otomatis Kidde Fire System.', price: 'Hubungi Kami', features: ['Suppression', 'FM-200', 'Clean Agent', 'Automatic'], icon: '🔥' },
  { id: 32, name: 'Honeywell Fire Solution', category: 'fire-alarm', categoryLabel: 'Fire Alarm', brand: 'honeywell', description: 'Solusi fire alarm dan building safety Honeywell terintegrasi.', price: 'Hubungi Kami', features: ['Integrated', 'Building Safety', 'Smart Detection', 'Cloud'], icon: '🔥', badge: 'Premium' },

  // Access Control (second)
  { id: 6, name: 'Lenel Access Control System', category: 'access-control', categoryLabel: 'Access Control', brand: 'lenel', description: 'Solusi access control enterprise Lenel S2 dengan integrasi keamanan lengkap.', price: 'Hubungi Kami', features: ['Enterprise', 'Integration', 'Scalable', 'Multi-Site'], icon: '🚪', badge: 'Enterprise' },
  { id: 1, name: 'Genetec Security Center', category: 'access-control', categoryLabel: 'Access Control', brand: 'genetec', description: 'Platform keamanan terpadu untuk mengelola access control, video, dan ANPR dalam satu sistem.', price: 'Hubungi Kami', features: ['Unified Platform', 'Video Analytics', 'Access Control', 'ANPR'], icon: '🚪', badge: 'Enterprise' },
  { id: 37, name: 'Solution Access Control', category: 'access-control', categoryLabel: 'Access Control', brand: 'solution', description: 'Sistem access control dan keamanan pintu terintegrasi dari Solution.', price: 'Hubungi Kami', features: ['Door Access', 'Fingerprint', 'Card Reader', 'Mobile Access'], icon: '🚪' },
  { id: 38, name: 'ZKTeco Biometric Access', category: 'access-control', categoryLabel: 'Access Control', brand: 'zkteco', description: 'Access control biometrik ZKTeco dengan fingerprint dan face recognition.', price: 'Hubungi Kami', features: ['Biometric', 'Face Recognition', 'Fingerprint', 'Time Attendance'], icon: '🚪', badge: 'Best Seller' },

  // CCTV (third)
  { id: 7, name: 'Siqura Video Encoder', category: 'cctv', categoryLabel: 'CCTV', brand: 'siqura', description: 'Video networking Siqura untuk infrastruktur kritis dan transportasi.', price: 'Hubungi Kami', features: ['Video Encoder', 'Fiber Optic', 'Critical Infra', 'Rugged'], icon: '📹' },
  { id: 4, name: 'Reconyx Security Camera', category: 'cctv', categoryLabel: 'CCTV', brand: 'reconyx', description: 'Kamera keamanan Reconyx high-performance untuk area kritis dan perimeter.', price: 'Hubungi Kami', features: ['High Performance', 'Weatherproof', 'Night Vision', 'Covert'], icon: '📹' },
  { id: 39, name: 'Bushnell Trail Camera', category: 'cctv', categoryLabel: 'CCTV', brand: 'bushnell', description: 'Kamera trail dan surveillance outdoor Bushnell berperforma tinggi.', price: 'Hubungi Kami', features: ['Trail Camera', 'Outdoor', 'Night Vision', 'Weatherproof'], icon: '📹' },
  { id: 40, name: 'Hikvision IP Camera', category: 'cctv', categoryLabel: 'CCTV', brand: 'hikvision', description: 'Kamera IP dan NVR Hikvision untuk video surveillance profesional.', price: 'Hubungi Kami', features: ['IP Camera', '4K Resolution', 'AI Detection', 'NVR'], icon: '📹', badge: 'Best Seller' },
  { id: 41, name: 'Dahua CCTV System', category: 'cctv', categoryLabel: 'CCTV', brand: 'dahua', description: 'Sistem CCTV dan video IoT Dahua berkualitas tinggi.', price: 'Hubungi Kami', features: ['IP Camera', 'Smart H.265+', 'AI Features', 'XVR/NVR'], icon: '📹' },

  // Security System
  { id: 2, name: 'GeoVision IP Camera', category: 'security-system', categoryLabel: 'Security System', brand: 'geovision', description: 'Kamera IP surveillance GeoVision dengan video analytics dan resolusi tinggi.', price: 'Hubungi Kami', features: ['IP Camera', 'Video Analytics', 'High Resolution', 'PoE'], icon: '🛡️' },
  { id: 3, name: 'Centrix Security System', category: 'security-system', categoryLabel: 'Security System', brand: 'centrix', description: 'Sistem keamanan terintegrasi Centrix untuk kebutuhan enterprise.', price: 'Hubungi Kami', features: ['Integrated System', 'Enterprise Grade', 'Scalable', 'Remote Monitor'], icon: '🛡️' },
  { id: 5, name: 'SAFR Face Recognition', category: 'security-system', categoryLabel: 'Security System', brand: 'safr', description: 'Platform pengenalan wajah real-time SAFR dengan teknologi AI.', price: 'Hubungi Kami', features: ['Face Recognition', 'Real-Time AI', 'High Accuracy', 'Cloud/Edge'], icon: '🛡️', badge: 'AI' },
  { id: 8, name: 'Arecont Megapixel Camera', category: 'security-system', categoryLabel: 'Security System', brand: 'arecont-vision', description: 'Kamera megapixel Arecont Vision untuk surveillance skala besar.', price: 'Hubungi Kami', features: ['Megapixel', 'Panoramic', 'Day/Night', 'H.264'], icon: '🛡️' },
  { id: 9, name: 'ASIS Security Solution', category: 'security-system', categoryLabel: 'Security System', brand: 'asis-technologies', description: 'Solusi keamanan canggih ASIS Technologies untuk berbagai industri.', price: 'Hubungi Kami', features: ['Multi-Industry', 'Advanced Tech', 'Custom Solution', 'Support'], icon: '🛡️' },

  // Intruder Alarm
  { id: 10, name: 'Bentel Alarm Panel', category: 'intruder-alarm', categoryLabel: 'Intruder Alarm', brand: 'bentel-security', description: 'Panel alarm intrusi Bentel Security dengan teknologi deteksi canggih.', price: 'Hubungi Kami', features: ['Multi-Zone', 'Wireless', 'GSM Module', 'App Control'], icon: '🚨', badge: 'Pro' },

  // XVR Simulation
  { id: 11, name: 'XVR Simulation Platform', category: 'xvr-simulation', categoryLabel: 'XVR Simulation', brand: 'xvr-simulation', description: 'Platform simulasi VR untuk pelatihan keamanan dan penanganan darurat.', price: 'Hubungi Kami', features: ['Virtual Reality', 'Training', 'Multi-Scenario', 'Realistic'], icon: '🎮', badge: 'Simulation' },

  // Perimeter Fencing
  { id: 12, name: 'Southwest Microwave Sensor', category: 'perimeter-fencing', categoryLabel: 'Perimeter Fencing', brand: 'southwest-microwave', description: 'Sensor deteksi perimeter microwave untuk keamanan area luas.', price: 'Hubungi Kami', features: ['Microwave Sensor', 'Long Range', 'Weatherproof', 'Low False Alarm'], icon: '🛡️', badge: 'Perimeter' },

  // IT Solution
  { id: 13, name: 'LG Professional Display', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'lg', description: 'Monitor dan display profesional LG untuk command center.', price: 'Hubungi Kami', features: ['4K Display', 'Professional', 'Video Wall', '24/7'], icon: '💻' },
  { id: 14, name: 'ACER Business Laptop', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'acer', description: 'Laptop bisnis ACER untuk kebutuhan operasional dan monitoring.', price: 'Hubungi Kami', features: ['Business Grade', 'Reliable', 'Performance', 'Secure'], icon: '💻' },
  { id: 15, name: 'Toshiba Storage Solution', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'toshiba', description: 'Hard drive dan storage Toshiba untuk sistem surveillance.', price: 'Hubungi Kami', features: ['Surveillance HDD', 'High Capacity', 'Reliable', '24/7'], icon: '💻' },
  { id: 16, name: 'Dell Server & Workstation', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'dell', description: 'Server dan workstation Dell untuk infrastruktur keamanan enterprise.', price: 'Hubungi Kami', features: ['PowerEdge Server', 'Workstation', 'Scalable', 'Enterprise'], icon: '💻', badge: 'Enterprise' },
  { id: 17, name: 'Hitachi Enterprise Storage', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'hitachi', description: 'Solusi storage enterprise Hitachi untuk data center keamanan.', price: 'Hubungi Kami', features: ['Enterprise Storage', 'High Availability', 'Data Protection', 'Scalable'], icon: '💻' },
  { id: 18, name: 'Samsung Display Solution', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'samsung', description: 'Display dan signage Samsung untuk monitoring dan command center.', price: 'Hubungi Kami', features: ['Smart Signage', 'Video Wall', 'LED Display', 'UHD'], icon: '💻' },
  { id: 19, name: 'Asus Commercial PC', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'asus', description: 'PC komersial Asus untuk kebutuhan monitoring dan operasional.', price: 'Hubungi Kami', features: ['Commercial Grade', 'Compact', 'Reliable', 'Performance'], icon: '💻' },
  { id: 20, name: 'HP Enterprise Solution', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'hp', description: 'Solusi enterprise HP untuk printing dan computing.', price: 'Hubungi Kami', features: ['ProLiant Server', 'Printing', 'Managed IT', 'Cloud Ready'], icon: '💻' },
  { id: 21, name: 'Fujitsu IT Infrastructure', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'fujitsu', description: 'Infrastruktur IT Fujitsu untuk data center dan enterprise.', price: 'Hubungi Kami', features: ['PRIMERGY Server', 'Storage', 'Reliable', 'Green IT'], icon: '💻' },
  { id: 22, name: 'Lenovo Data Center', category: 'it-solution', categoryLabel: 'IT Solution', brand: 'lenovo', description: 'Solusi data center dan computing Lenovo untuk enterprise.', price: 'Hubungi Kami', features: ['ThinkSystem', 'Data Center', 'HPC', 'Enterprise'], icon: '💻' },

  // IPTV/MATV
  { id: 23, name: 'IKUSI IPTV System', category: 'iptv-matv', categoryLabel: 'IPTV/MATV', brand: 'ikusi', description: 'Sistem IPTV dan distribusi sinyal TV profesional IKUSI.', price: 'Hubungi Kami', features: ['IPTV', 'MATV', 'Signal Distribution', 'Headend'], icon: '📺', badge: 'Pro' },

  // X-Ray
  { id: 24, name: 'Smiths Detection X-Ray Scanner', category: 'x-ray', categoryLabel: 'X-Ray', brand: 'smiths-detection', description: 'Mesin X-Ray screening Smiths Detection untuk keamanan gedung dan bandara.', price: 'Hubungi Kami', features: ['X-Ray Screening', 'Baggage Scanner', 'Threat Detection', 'High Throughput'], icon: '🔍', badge: 'Security' },

  // Metal Detector
  { id: 25, name: 'Garrett Walk-Through Detector', category: 'metal-detector', categoryLabel: 'Metal Detector', brand: 'garrett', description: 'Walk-through metal detector Garrett untuk keamanan pintu masuk gedung.', price: 'Hubungi Kami', features: ['Walk-Through', 'Multi-Zone', 'High Sensitivity', 'Weather Resistant'], icon: '🔎', badge: 'Best Seller' },
  { id: 26, name: 'CEIA Metal Detector', category: 'metal-detector', categoryLabel: 'Metal Detector', brand: 'ceia', description: 'Metal detector presisi tinggi CEIA untuk keamanan profesional.', price: 'Hubungi Kami', features: ['High Precision', 'Multi-Zone', 'Auto Calibration', 'Network Ready'], icon: '🔎' },

  // Others
  { id: 33, name: 'Cisco Networking Equipment', category: 'others', categoryLabel: 'Others', brand: 'cisco', description: 'Perangkat networking Cisco untuk infrastruktur jaringan keamanan.', price: 'Hubungi Kami', features: ['Switch', 'Router', 'Firewall', 'Enterprise'], icon: '⚙️', badge: 'Networking' },
  { id: 34, name: 'Boon Edam Security Entrance', category: 'others', categoryLabel: 'Others', brand: 'boon-edam', description: 'Revolving door dan security entrance premium Boon Edam.', price: 'Hubungi Kami', features: ['Revolving Door', 'Turnstile', 'Security Gate', 'Premium'], icon: '⚙️' },
  { id: 35, name: 'Windows OS Enterprise', category: 'others', categoryLabel: 'Others', brand: 'windows', description: 'Sistem operasi Windows untuk platform keamanan dan server.', price: 'Hubungi Kami', features: ['Windows Server', 'Enterprise', 'Active Directory', 'Security'], icon: '⚙️' },
  { id: 36, name: 'Intel Processing Platform', category: 'others', categoryLabel: 'Others', brand: 'intel', description: 'Prosesor dan platform Intel untuk sistem keamanan dan computing.', price: 'Hubungi Kami', features: ['Xeon Processor', 'AI Acceleration', 'vPro', 'Edge Computing'], icon: '⚙️' },
]
