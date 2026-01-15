/**
 * Konstanta aplikasi Merajut Asa Kita
 */

export const SITE_NAME = 'Merajut Asa Kita';
export const SITE_DESCRIPTION = 'Komunitas yang merajut harapan, karya, dan kebersamaan di Kampung Binong Jati';

// Contact Information
export const CONTACT_INFO = {
    phone: '+62', // Update dengan nomor asli
    email: 'info@merajutasakita.id',
    address: 'Kampung Binong Jati, Cibeunying Kidul, Bandung, Jawa Barat 40623',
    instagram: 'https://instagram.com', // Update dengan Instagram asli
    whatsapp: 'https://wa.me/62',
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
