export const defaultQuestions = [
  {
    id: 'q1',
    category: 'Google Sheets & Spreadsheet',
    question: 'Sebutkan fungsi utama Google Sheets / Excel!',
    answers: [
      { id: 1, text: 'Mengolah Data & Angka', points: 35, synonyms: ['olah data', 'mengolah data', 'hitung angka', 'perhitungan', 'matematika', 'data'] },
      { id: 2, text: 'Membuat Tabel & Grafik', points: 25, synonyms: ['tabel', 'grafik', 'chart', 'membuat tabel', 'bikin grafik', 'diagram'] },
      { id: 3, text: 'Menghitung Rumus / Formula (SUM, VLOOKUP)', points: 20, synonyms: ['rumus', 'formula', 'sum', 'vlookup', 'average', 'fungsi'] },
      { id: 4, text: 'Kolaborasi Real-time / Berbagi File', points: 12, synonyms: ['kolaborasi', 'berbagi', 'share', 'online', 'bersama', 'kerjasama'] },
      { id: 5, text: 'Analisis & Laporan Data', points: 8, synonyms: ['analisis', 'laporan', 'report', 'rekap', 'dashboard'] }
    ]
  },
  {
    id: 'q2',
    category: 'Hardware Komputer',
    question: 'Sebutkan perangkat keras (Hardware) utama pada PC / Laptop!',
    answers: [
      { id: 1, text: 'Processor / CPU', points: 32, synonyms: ['processor', 'cpu', 'prosesor', 'otak komputer'] },
      { id: 2, text: 'RAM (Memory)', points: 26, synonyms: ['ram', 'memori', 'memory'] },
      { id: 3, text: 'Storage (SSD / Harddisk)', points: 20, synonyms: ['ssd', 'harddisk', 'hdd', 'storage', 'penyimpanan'] },
      { id: 4, text: 'VGA / GPU (Kartu Grafis)', points: 12, synonyms: ['vga', 'gpu', 'kartu grafis', 'graphics card'] },
      { id: 5, text: 'Motherboard / Mainboard', points: 10, synonyms: ['motherboard', 'mainboard', 'mobo', 'papan induk'] }
    ]
  },
  {
    id: 'q3',
    category: 'Hardware Input',
    question: 'Sebutkan perangkat keras input (masukan) komputer!',
    answers: [
      { id: 1, text: 'Keyboard (Papan Ketik)', points: 38, synonyms: ['keyboard', 'papan ketik', 'ketikan'] },
      { id: 2, text: 'Mouse (Tetikus)', points: 30, synonyms: ['mouse', 'tetikus', 'trackpad', 'touchpad'] },
      { id: 3, text: 'Microphone (Mikrofon)', points: 15, synonyms: ['microphone', 'mikrofon', 'mic'] },
      { id: 4, text: 'Webcam / Kamera', points: 10, synonyms: ['webcam', 'kamera', 'camera'] },
      { id: 5, text: 'Scanner / Barcode Reader', points: 7, synonyms: ['scanner', 'pemindai', 'barcode reader'] }
    ]
  },
  {
    id: 'q4',
    category: 'Jaringan & Internet',
    question: 'Apa saja media / cara terhubung ke jaringan Internet?',
    answers: [
      { id: 1, text: 'Wi-Fi (Wireless)', points: 40, synonyms: ['wifi', 'wi-fi', 'nirkabel', 'wireless'] },
      { id: 2, text: 'Kabel LAN / Ethernet', points: 28, synonyms: ['lan', 'kabel lan', 'ethernet', 'utp', 'kabel'] },
      { id: 3, text: 'Kabel Fiber Optik', points: 16, synonyms: ['fiber optik', 'fiber', 'fo', 'indihome', 'biznet'] },
      { id: 4, text: 'Data Seluler (4G / 5G)', points: 11, synonyms: ['paket data', 'kuota', 'seluler', '4g', '5g', 'tethering'] },
      { id: 5, text: 'Satelit (Starlink)', points: 5, synonyms: ['satelit', 'starlink', 'parabola'] }
    ]
  },
  {
    id: 'q5',
    category: 'Sistem Operasi',
    question: 'Sebutkan nama Sistem Operasi (OS) populer pada komputer & smartphone!',
    answers: [
      { id: 1, text: 'Windows', points: 36, synonyms: ['windows', 'win 10', 'win 11', 'microsoft windows'] },
      { id: 2, text: 'Android', points: 28, synonyms: ['android', 'google android'] },
      { id: 3, text: 'iOS / iPadOS', points: 18, synonyms: ['ios', 'iphone', 'ipados', 'apple ios'] },
      { id: 4, text: 'macOS', points: 10, synonyms: ['macos', 'mac', 'apple macos', 'osx'] },
      { id: 5, text: 'Linux / Ubuntu', points: 8, synonyms: ['linux', 'ubuntu', 'debian', 'kalilinux'] }
    ]
  },
  {
    id: 'q6',
    category: 'Web Browser',
    question: 'Sebutkan web browser yang sering digunakan untuk menjelajah Internet!',
    answers: [
      { id: 1, text: 'Google Chrome', points: 45, synonyms: ['chrome', 'google chrome'] },
      { id: 2, text: 'Mozilla Firefox', points: 24, synonyms: ['firefox', 'mozilla', 'mozilla firefox'] },
      { id: 3, text: 'Safari', points: 15, synonyms: ['safari', 'apple safari'] },
      { id: 4, text: 'Microsoft Edge', points: 10, synonyms: ['edge', 'microsoft edge', 'ms edge'] },
      { id: 5, text: 'Opera / Brave', points: 6, synonyms: ['opera', 'brave', 'tor'] }
    ]
  },
  {
    id: 'q7',
    category: 'Bahasa Pemrograman',
    question: 'Sebutkan bahasa pemrograman yang paling populer digunakan developer!',
    answers: [
      { id: 1, text: 'Python', points: 35, synonyms: ['python', 'py'] },
      { id: 2, text: 'JavaScript / TypeScript', points: 28, synonyms: ['javascript', 'js', 'typescript', 'ts'] },
      { id: 3, text: 'Java', points: 16, synonyms: ['java'] },
      { id: 4, text: 'C++ / C#', points: 12, synonyms: ['c++', 'cpp', 'c#', 'c sharp'] },
      { id: 5, text: 'PHP / HTML & CSS', points: 9, synonyms: ['php', 'html', 'css'] }
    ]
  },
  {
    id: 'q8',
    category: 'Keamanan Siber',
    question: 'Bagaimana cara menjaga keamanan akun & data pribadi di Internet?',
    answers: [
      { id: 1, text: 'Gunakan Password Kuat & Unik', points: 38, synonyms: ['password', 'kata sandi', 'password kuat', 'sandi rumit'] },
      { id: 2, text: 'Aktifkan 2FA (Two-Factor Authentication)', points: 26, synonyms: ['2fa', 'two factor', 'verifikasi 2 langkah', 'otp'] },
      { id: 3, text: 'Hati-hati terhadap Link Phishing', points: 18, synonyms: ['phishing', 'hindari phishing', 'jangan klik link', 'link mencurigakan'] },
      { id: 4, text: 'Update Aplikasi & Antivirus', points: 12, synonyms: ['update', 'antivirus', 'perbarui software'] },
      { id: 5, text: 'Jangan Pakai Wi-Fi Publik Sembarangan', points: 6, synonyms: ['wifi publik', 'vpn', 'wifi gratis'] }
    ]
  },
  {
    id: 'q9',
    category: 'Artificial Intelligence',
    question: 'Apa saja contoh pemanfaatan Artificial Intelligence (AI) saat ini?',
    answers: [
      { id: 1, text: 'ChatGPT / Chatbot AI', points: 40, synonyms: ['chatgpt', 'gpt', 'chatbot', 'gemini', 'claude'] },
      { id: 2, text: 'Pengenal Wajah / Face Recognition', points: 22, synonyms: ['face id', 'face recognition', 'wajah', 'biometrik'] },
      { id: 3, text: 'Asisten Suara (Siri, Google Assistant)', points: 18, synonyms: ['siri', 'google assistant', 'alexa', 'voice assistant'] },
      { id: 4, text: 'Mobil Otonom (Self-Driving Car)', points: 12, synonyms: ['tesla', 'mobil otonom', 'self driving'] },
      { id: 5, text: 'Generative Image / Desain AI (Midjourney)', points: 8, synonyms: ['midjourney', 'dall-e', 'image generator', 'gambar ai'] }
    ]
  },
  {
    id: 'q10',
    category: 'Software Desain & Editing',
    question: 'Aplikasi apa yang biasa digunakan untuk edit foto, video, atau desain grafis?',
    answers: [
      { id: 1, text: 'Canva', points: 36, synonyms: ['canva'] },
      { id: 2, text: 'Adobe Photoshop', points: 28, synonyms: ['photoshop', 'ps', 'adobe photoshop'] },
      { id: 3, text: 'CapCut / Adobe Premiere', points: 18, synonyms: ['capcut', 'premiere', 'edit video'] },
      { id: 4, text: 'Figma / Illustrator', points: 10, synonyms: ['figma', 'illustrator', 'ai'] },
      { id: 5, text: 'CorelDraw', points: 8, synonyms: ['coreldraw', 'corel'] }
    ]
  }
];
