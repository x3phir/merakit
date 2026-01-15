import React from 'react';

const PackageCard = ({ badge, title, description, price, features, openWhatsApp, delay }) => {
    return (
        <div
            className="flex flex-col rounded-xl border border-[#e8d7ce] dark:border-white/10 bg-white dark:bg-[#1f1612] p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 scroll-animate"
            style={{ animationDelay: delay }}
        >
            <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${badge.color}`}>
                    {badge.label}
                </span>
            </div>
            <h3 className="text-xl font-bold text-[#1c120d] dark:text-white mb-2">{title}</h3>
            <p className="text-[#1c120d]/60 dark:text-white/60 text-sm mb-6 h-10">{description}</p>
            <div className="mt-auto flex flex-col gap-6">
                <div>
                    <p className="text-sm text-[#1c120d]/60 dark:text-white/60 mb-1">Harga per orang</p>
                    <p className="flex items-baseline gap-1 text-primary">
                        <span className="text-3xl font-black tracking-tight">{price.amount}</span>
                        <span className="text-sm font-bold text-[#1c120d] dark:text-white">{price.unit}</span>
                    </p>
                </div>
                <div className="space-y-3">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm text-[#1c120d] dark:text-white">
                            <span className="material-symbols-outlined text-primary text-xl">{feature.icon}</span>
                            <span>{feature.label}</span>
                        </div>
                    ))}
                </div>
                <button
                    onClick={() => openWhatsApp(title)}
                    className="flex w-full items-center justify-center rounded-lg h-12 px-4 bg-[#25D366] hover:bg-[#128C7E] text-white text-sm font-bold transition-all hover:scale-105 active:scale-95 gap-2"
                >
                    <span className="material-symbols-outlined">chat</span>
                    Reservasi via WhatsApp
                </button>
            </div>
        </div>
    );
};

const PackagesSection = ({ openWhatsApp }) => {
    const packages = [
        {
            badge: { label: 'Pemula', color: 'bg-green-100 text-green-700' },
            title: 'Basic Knitting Workshop',
            description: 'Belajar dasar merajut dari nol sampai bisa membuat coaster sederhana.',
            price: { amount: 'Rp194.000', unit: '/ pax' },
            features: [
                { icon: 'schedule', label: 'Durasi 5 Jam' },
                { icon: 'stars', label: 'Teknik Lanjutan' },
                { icon: 'bakery_dining', label: 'Snack Termasuk' }
            ],
            delay: '0s'
        },
        {
            badge: { label: 'Wisata Lengkap', color: 'bg-purple-100 text-purple-700' },
            title: 'Full Community Tour',
            description: 'Pengalaman total: workshop, interaksi warga, dan tur keliling kampung.',
            price: { amount: 'Rp350.000', unit: '/ pax' },
            features: [
                { icon: 'schedule', label: 'Seharian (Full Day)' },
                { icon: 'restaurant', label: 'Makan Siang Khas' },
                { icon: 'map', label: 'Tour Kampung Binong' }
            ],
            delay: '0.2s'
        }
    ];

    return (
        <section className="py-16 md:py-24 px-6 bg-background-light dark:bg-background-dark" id="packages">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 scroll-animate">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-black text-[#1c120d] dark:text-white mb-4">
                            Creative Tour Packages
                        </h2>
                        <p className="text-lg text-[#1c120d]/70 dark:text-white/70">
                            Rasakan pengalaman langsung merajut bersama warga lokal, belajar teknik baru, dan bawa pulang
                            karya buatanmu sendiri.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <PackageCard
                            key={index}
                            {...pkg}
                            openWhatsApp={openWhatsApp}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PackagesSection;
