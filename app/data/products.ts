export interface Product {
  id: number
  name: string
  category: string
  categoryLabel: string
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

export const categories: Category[] = [
  { id: 'all', label: 'Semua', icon: '🔒' },
  { id: 'cctv', label: 'CCTV', icon: '📹' },
  { id: 'access-control', label: 'Access Control', icon: '🔐' },
  { id: 'alarm', label: 'Alarm System', icon: '🚨' },
  { id: 'intercom', label: 'Intercom', icon: '📞' },
  { id: 'fire-alarm', label: 'Fire Alarm', icon: '🔥' },
]

export const products: Product[] = [
  // CCTV
  {
    id: 1,
    name: 'CCTV Indoor 2MP Dome',
    category: 'cctv',
    categoryLabel: 'CCTV',
    description: 'Kamera CCTV indoor resolusi Full HD 2MP dengan night vision IR hingga 30 meter. Desain dome elegan cocok untuk rumah & kantor.',
    price: 'Rp 450.000',
    features: ['2MP Full HD', 'IR 30m', 'Indoor Dome', 'WDR'],
    icon: '📹',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'CCTV Outdoor 4MP Bullet',
    category: 'cctv',
    categoryLabel: 'CCTV',
    description: 'Kamera CCTV outdoor tahan cuaca IP67 dengan resolusi 4MP Super HD. Dilengkapi smart motion detection.',
    price: 'Rp 850.000',
    features: ['4MP Super HD', 'IP67 Waterproof', 'Smart Motion', 'IR 50m'],
    icon: '📹',
  },
  {
    id: 3,
    name: 'CCTV PTZ 8MP 4K',
    category: 'cctv',
    categoryLabel: 'CCTV',
    description: 'Kamera PTZ 8MP resolusi 4K dengan kemampuan pan, tilt, zoom. Auto tracking & 360° rotation.',
    price: 'Rp 3.500.000',
    features: ['8MP 4K UHD', 'Pan/Tilt/Zoom', 'Auto Tracking', '360° View'],
    icon: '📹',
    badge: 'Premium',
  },
  {
    id: 4,
    name: 'NVR 8 Channel',
    category: 'cctv',
    categoryLabel: 'CCTV',
    description: 'Network Video Recorder 8 channel untuk merekam dan menyimpan rekaman CCTV. Support resolusi hingga 8MP.',
    price: 'Rp 1.800.000',
    features: ['8 Channel', 'Support 8MP', 'H.265+', 'Remote View'],
    icon: '💾',
  },
  // Access Control
  {
    id: 5,
    name: 'Fingerprint Access X100',
    category: 'access-control',
    categoryLabel: 'Access Control',
    description: 'Mesin fingerprint access control dengan kapasitas 3.000 sidik jari. Dilengkapi RFID card reader.',
    price: 'Rp 2.200.000',
    features: ['3000 Fingerprints', 'RFID Card', 'TCP/IP', 'Door Lock'],
    icon: '🔐',
    badge: 'Popular',
  },
  {
    id: 6,
    name: 'Face Recognition FR-500',
    category: 'access-control',
    categoryLabel: 'Access Control',
    description: 'Sistem face recognition AI dengan akurasi tinggi. Pengenalan wajah dalam 0.3 detik bahkan dengan masker.',
    price: 'Rp 5.500.000',
    features: ['AI Face ID', '0.3s Speed', 'Mask Detection', '5000 Faces'],
    icon: '🔐',
    badge: 'New',
  },
  {
    id: 7,
    name: 'Magnetic Door Lock',
    category: 'access-control',
    categoryLabel: 'Access Control',
    description: 'Magnetic lock 600lbs untuk pintu kaca dan kayu. Kekuatan magnet 280kg, tahan lama dan aman.',
    price: 'Rp 650.000',
    features: ['280kg Force', 'DC 12V', 'LED Status', 'Fail-Safe'],
    icon: '🔒',
  },
  // Alarm System
  {
    id: 8,
    name: 'Alarm Wireless GSM Pro',
    category: 'alarm',
    categoryLabel: 'Alarm System',
    description: 'Sistem alarm wireless GSM dengan 99 zona. Notifikasi langsung via SMS dan panggilan telepon.',
    price: 'Rp 1.500.000',
    features: ['99 Zones', 'GSM/WiFi', 'SMS Alert', 'App Control'],
    icon: '🚨',
    badge: 'Best Seller',
  },
  {
    id: 9,
    name: 'Sensor PIR Motion',
    category: 'alarm',
    categoryLabel: 'Alarm System',
    description: 'Sensor gerak PIR wireless jarak deteksi hingga 12 meter dengan sudut 110°. Anti hewan peliharaan.',
    price: 'Rp 250.000',
    features: ['12m Range', '110° Angle', 'Pet Immune', 'Wireless'],
    icon: '📡',
  },
  // Intercom
  {
    id: 10,
    name: 'Video Door Phone 7"',
    category: 'intercom',
    categoryLabel: 'Intercom',
    description: 'Video door phone layar 7 inch dengan kamera wide angle. Unlock pintu jarak jauh via monitor.',
    price: 'Rp 1.800.000',
    features: ['7" Screen', 'Wide Angle', 'Night Vision', 'Unlock'],
    icon: '📞',
    badge: 'Popular',
  },
  {
    id: 11,
    name: 'IP Video Intercom',
    category: 'intercom',
    categoryLabel: 'Intercom',
    description: 'Intercom IP modern dengan koneksi SIP. Monitor pengunjung dari smartphone kapanpun dan dimanapun.',
    price: 'Rp 3.200.000',
    features: ['SIP Protocol', 'Smartphone App', 'HD Camera', 'PoE'],
    icon: '📞',
  },
  // Fire Alarm
  {
    id: 12,
    name: 'Smoke Detector Photoelectric',
    category: 'fire-alarm',
    categoryLabel: 'Fire Alarm',
    description: 'Detektor asap photoelectric untuk deteksi dini kebakaran. Alarm 85dB, baterai tahan 2 tahun.',
    price: 'Rp 350.000',
    features: ['Photoelectric', '85dB Alarm', '2yr Battery', 'LED Flash'],
    icon: '🔥',
  },
  {
    id: 13,
    name: 'Fire Alarm Control Panel',
    category: 'fire-alarm',
    categoryLabel: 'Fire Alarm',
    description: 'Panel kontrol fire alarm 8 zona konvensional. Dilengkapi baterai backup dan output bell/siren.',
    price: 'Rp 4.200.000',
    features: ['8 Zones', 'Battery Backup', 'Bell Output', 'Zone LED'],
    icon: '🔥',
    badge: 'Pro',
  },
  {
    id: 14,
    name: 'Heat Detector Fixed Temp',
    category: 'fire-alarm',
    categoryLabel: 'Fire Alarm',
    description: 'Detektor panas fixed temperature 57°C untuk area dapur dan ruang mesin. Tahan debu dan kelembapan.',
    price: 'Rp 280.000',
    features: ['57°C Trigger', 'Dust Proof', 'Kitchen Safe', 'LED Status'],
    icon: '🌡️',
  },
]
