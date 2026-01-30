import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import toast from 'react-hot-toast';
import SectionHeader from './SectionHeader';

const PackageCard = ({ badge, title, description, price, duration, minParticipants, features, openWhatsApp, delay }) => {
    const handleReserve = () => {
        toast.loading('Membuka WhatsApp...', { id: 'whatsapp-toast' });
        setTimeout(() => {
            openWhatsApp(title);
            toast.dismiss('whatsapp-toast');
            toast.success(`${title} ditambahkan!`, { duration: 3000 });
        }, 500);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -15,
                boxShadow: '0 30px 60px rgba(242, 89, 13, 0.2)'
            }}
            transition={{
                duration: 0.4,
                delay: parseFloat(delay)
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col rounded-2xl border border-[#e8d7ce] dark:border-white/10 bg-white dark:bg-[#1f1612] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden"
        >
            {/* Animated background gradient */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-primary/10 pointer-events-none"
            />

            <div className="relative z-10">
                {/* Badge */}
                <motion.span
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: parseFloat(delay) + 0.1 }}
                    viewport={{ once: true }}
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 ${badge.color}`}
                >
                    {badge.label}
                </motion.span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#1c120d] dark:text-white mb-2">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-[#1c120d]/60 dark:text-white/60 text-sm mb-6 min-h-10">
                    {description}
                </p>

                {/* Price */}
                <div className="mt-auto flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: parseFloat(delay) + 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="flex items-baseline gap-1 text-primary">
                            <span className="text-3xl font-black tracking-tight">{price.amount}</span>
                            <span className="text-sm font-bold text-[#1c120d] dark:text-white">{price.unit}</span>
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {duration && (
                                <span className="inline-flex items-center gap-1 text-xs text-[#1c120d]/70 dark:text-white/70 bg-gray-100 dark:bg-white/10 px-2 py-1 rounded-full">
                                    <span className="material-symbols-outlined text-sm">schedule</span>
                                    {duration}
                                </span>
                            )}
                            {minParticipants && (
                                <span className="inline-flex items-center gap-1 text-xs text-[#1c120d]/70 dark:text-white/70 bg-gray-100 dark:bg-white/10 px-2 py-1 rounded-full">
                                    <span className="material-symbols-outlined text-sm">group</span>
                                    {minParticipants}
                                </span>
                            )}
                        </div>
                    </motion.div>

                    {/* Features */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: parseFloat(delay) + 0.3 }}
                        viewport={{ once: true }}
                        className="space-y-3"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: parseFloat(delay) + 0.4 + index * 0.05 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 text-sm text-[#1c120d] dark:text-white"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    className="text-primary"
                                >
                                    <Check size={18} strokeWidth={3} />
                                </motion.div>
                                <span>{feature.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                        onClick={handleReserve}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        className="flex w-full items-center justify-center rounded-lg h-12 px-4 bg-primary hover:shadow-lg text-white text-sm font-bold transition-all gap-2 group/btn"
                    >
                        <span>Reservasi via WhatsApp</span>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

const PackagesSection = ({ openWhatsApp }) => {
    const packages = [
        {
            badge: { label: 'Populer', color: 'bg-orange-100 text-orange-700' },
            title: 'Paket Merakit',
            description: 'Pengalaman edukatif di Kampung Wisata Kreatif Rajut Binong: belajar merajut, eksplorasi kampung kreatif, hingga membawa pulang kenang-kenangan khas.',
            price: { amount: 'Rp194.000', unit: '/pax' },
            duration: '1 Day Trip',
            minParticipants: 'Min. 20 peserta',
            features: [
                { icon: 'person', label: 'Tour Guide' },
                { icon: 'school', label: 'Coach' },
                { icon: 'content_cut', label: 'Workshop Rajut' },
                { icon: 'checkroom', label: 'Merchandise' },
                { icon: 'workspace_premium', label: 'E-Certificate' },
                { icon: 'local_cafe', label: 'Welcome Drink' }
            ],
            delay: '0s'
        },
        {
            badge: { label: 'Lengkap', color: 'bg-blue-100 text-blue-700' },
            title: 'Paket Live-In',
            description: 'Rasakan pengalaman tinggal langsung di Kampung Wisata Kreatif Rajut Binong selama tiga hari dua malam, belajar, berinteraksi, & hidup bersama warga.',
            price: { amount: 'Rp848.000', unit: '/pax' },
            duration: '3 Hari 2 Malam',
            minParticipants: 'Min. 12 peserta',
            features: [
                { icon: 'school', label: 'Coach & Workshop' },
                { icon: 'checkroom', label: 'Merchandise' },
                { icon: 'workspace_premium', label: 'E-Certificate' },
                { icon: 'home', label: 'Homestay' },
                { icon: 'restaurant', label: 'Makan' },
                { icon: 'theater_comedy', label: 'Pertunjukan Budaya' },
                { icon: 'local_cafe', label: 'Welcome Drink' }
            ],
            delay: '0.1s'
        },
        {
            badge: { label: 'Singkat', color: 'bg-purple-100 text-purple-700' },
            title: 'Paket Walking Tour',
            description: 'Ikuti Walking Tour dan biarkan kaki membawamu menyusuri lorong-lorong kreatif Binong. Di sini, setiap langkah punya cerita, setiap perajin punya kisah.',
            price: { amount: 'Rp57.000', unit: '/pax' },
            duration: '1 Day Trip',
            minParticipants: 'Min. 25 peserta',
            features: [
                { icon: 'person', label: 'Guide' },
                { icon: 'checkroom', label: 'Merchandise' },
                { icon: 'local_cafe', label: 'Welcome Drink' }
            ],
            delay: '0.2s'
        }
    ];

    return (
        <section className="py-16 md:py-24 px-6 bg-background-light dark:bg-background-dark" id="packages">
            <div className="max-w-[1280px] mx-auto ">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <SectionHeader
                        title="Creative Tour Packages"
                        description="Rasakan pengalaman langsung merajut bersama warga lokal, belajar teknik baru, dan bawa pulang
                            karya buatanmu sendiri."
                    />
                </motion.div>
                {/* Package Grid */}
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
