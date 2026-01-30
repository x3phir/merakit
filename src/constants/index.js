/**
 * Konstanta aplikasi Merajut Asa Kita
 */

export const SITE_NAME = 'Merajut Asa Kita';
export const SITE_DESCRIPTION = 'Komunitas yang merajut harapan, karya, dan kebersamaan di Kampung Binong Jati';

// Contact Information
export const CONTACT_INFO = {
    phone: '+62 822 1914 5422',
    email: 'info@merajutasakita.id',
    address: 'Kampung Binong Jati, Cibeunying Kidul, Bandung, Jawa Barat 40623',
    instagram: 'https://www.instagram.com/merajutasakita/',
    whatsapp: 'https://wa.me/62082219145422',
};

// Operating Hours
export const OPERATING_HOURS = {
    monday: '09:00 - 17:00',
    tuesday: '09:00 - 17:00',
    wednesday: '09:00 - 17:00',
    thursday: '09:00 - 17:00',
    friday: '09:00 - 17:00',
    saturday: '10:00 - 15:00',
    sunday: 'Tutup (Khusus Grup)',
};

// Navigation Items
export const NAV_ITEMS = [
    { label: 'About', href: '#about' },
    { label: 'Impact', href: '#impact' },
    { label: 'Packages', href: '#packages' },
    { label: 'Katalog', href: '#catalog' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Lokasi', href: '#location' },
];

// Tour Packages
export const TOUR_PACKAGES = [
    {
        id: 'basic-workshop',
        badge: { label: 'Pemula', color: 'bg-green-100 text-green-700' },
        title: 'Basic Knitting Workshop',
        description: 'Belajar dasar merajut dari nol sampai bisa membuat coaster sederhana.',
        price: { amount: 'Rp194.000', unit: '/ pax' },
        features: [
            { icon: 'schedule', label: 'Durasi 5 Jam' },
            { icon: 'stars', label: 'Teknik Lanjutan' },
            { icon: 'bakery_dining', label: 'Snack Termasuk' },
        ],
        delay: '0s',
    },
    {
        id: 'full-tour',
        badge: { label: 'Wisata Lengkap', color: 'bg-purple-100 text-purple-700' },
        title: 'Full Community Tour',
        description: 'Pengalaman total: workshop, interaksi warga, dan tur keliling kampung.',
        price: { amount: 'Rp350.000', unit: '/ pax' },
        features: [
            { icon: 'schedule', label: 'Seharian (Full Day)' },
            { icon: 'restaurant', label: 'Makan Siang Khas' },
            { icon: 'map', label: 'Tour Kampung Binong' },
        ],
        delay: '0.2s',
    },
];

// Impact Metrics
export const IMPACT_METRICS = [
    {
        icon: 'diversity_3',
        title: 'Inklusif',
        description: 'Perempuan & difabel terlibat aktif',
        delay: '0s',
    },
    {
        icon: 'checkroom',
        title: '100%',
        description: 'Produk rajut handmade & lokal',
        delay: '0.5s',
    },
    {
        icon: 'volunteer_activism',
        title: 'Komunitas',
        description: 'Ruang belajar aman & suportif',
        delay: '1s',
    },
    {
        icon: 'potted_plant',
        title: 'Lokal',
        description: 'Ekonomi kreatif berbasis kampung',
        delay: '1.5s',
    },
];

// Images - Local paths
export const IMAGES = {
    about: {
        img1: '/images/about-1.jpg',
        img2: '/images/about-2.jpg',
        img3: '/images/about-3.jpg',
    },
    gallery: [
        {
            src: '/images/gallery-1.jpg',
            alt: 'Workshop Harian',
        },
        {
            src: '/images/gallery-2.jpg',
            alt: 'Colorful yarn',
        },
        {
            src: '/images/gallery-3.jpg',
            alt: 'Komunitas Kami',
        },
        {
            src: '/images/gallery-4.jpg',
            alt: 'Finished product',
        },
        {
            src: '/images/gallery-5.jpg',
            alt: 'Belajar Bersama',
        },
        {
            src: '/images/gallery-6.jpg',
            alt: 'Macrame art',
        },
    ],
};

// Social Media Links
export const SOCIAL_MEDIA = {
    instagram: 'https://instagram.com/merajutasakita',
    facebook: 'https://facebook.com/merajutasakita',
    whatsapp: 'https://wa.me/62',
};

// Color Palette
export const COLORS = {
    primary: '#f2590d',
    'background-light': '#f8f6f5',
    'background-dark': '#221610',
    text: '#1c120d',
    'text-light': '#fcf9f8',
};

// Chatbot Knowledge Base
export const CHATBOT_KNOWLEDGE = {
    about: `MERAKIT (Merajut Asa Kita) adalah komunitas pemberdayaan masyarakat di Kampung Wisata Rajut Binong, Bandung, yang fokus pada pembinaan sobat istimewa (disabilitas), pengembangan kreativitas rajut, dan wisata edukatif berbasis komunitas.`,

    vision: `Memberdayakan masyarakat agar hidup setara melalui keterampilan rajut, kreativitas, dan kolaborasi sosial.`,

    location: {
        address: 'Jl. Binong Jati No.124, Bandung, Jawa Barat',
        near: 'Alun-Alun Bandung & Kiara Arta Park',
    },

    activities: [
        'Wisata edukasi rajut',
        'Workshop & kelas merajut',
        'Shopping village rajut',
        'Pameran & event',
        'Konten media sosial & marketplace',
    ],

    benefits: [
        'Meditasi & terapi',
        'Mengurangi stres dan kecemasan',
        'Melatih daya ingat dan fokus',
        'Baik untuk kesehatan sendi',
        'Meningkatkan rasa percaya diri',
        'Mendukung kesehatan mental',
    ],

    braceletTutorial: [
        'Membuat simpul awal (slip knot)',
        'Membuat rantai dasar sesuai ukuran pergelangan tangan',
        'Single crochet di setiap rantai',
        'Ulangi hingga lebar sesuai',
        'Finishing dan pasang penutup gelang',
    ],

    packages: [
        {
            name: 'Paket Merakit',
            description: 'Workshop rajut lengkap dengan tour guide, coach, merchandise, e-certificate, dan welcome drink. Durasi 1 hari, min. 20 peserta. Harga Rp194.000/pax',
            highlight: 'Popular Package'
        },
        {
            name: 'Paket Live-In',
            description: 'Full experience dengan homestay, workshop, pertunjukan budaya, makan, merchandise, e-certificate, dan welcome drink. Durasi 3 hari 2 malam, min. 12 peserta. Harga Rp848.000/pax',
            highlight: 'Full Experience'
        },
        {
            name: 'Paket Walking Tour',
            description: 'Jelajahi kampung rajut dengan guide berpengalaman, merchandise, dan welcome drink. Durasi 1 hari, min. 25 peserta. Harga Rp57.000/pax',
            highlight: 'Explore Kampung'
        }
    ],

    contact: {
        instagram: '@merajutasakita',
        email: 'merajutasa23@gmail.com',
        phone: ['085624010106', '082118748464'],
    },
};
