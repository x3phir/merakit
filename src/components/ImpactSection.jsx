import React from 'react';

const ImpactSection = () => {
    const impacts = [
        {
            icon: 'diversity_3',
            title: 'Inklusif',
            description: 'Perempuan & difabel terlibat aktif',
            delay: '0s'
        },
        {
            icon: '❤',
            title: 'Karya Penuh Makna',
            description: 'Setiap rajutan membawa cerita & harapan',
            delay: '0.5s'
        },
        {
            icon: 'volunteer_activism',
            title: 'Komunitas',
            description: 'Ruang belajar aman & suportif',
            delay: '1s'
        },
        {
            icon: 'potted_plant',
            title: 'Lokal',
            description: 'Ekonomi kreatif berbasis kampung',
            delay: '1.5s'
        }
    ];

    return (
        <section className="py-12 bg-white dark:bg-[#1a100c] border-y border-[#f4ebe7] dark:border-white/5" id="impact">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                <div className="text-center mb-12 scroll-animate">
                    <h2 className="text-3xl md:text-4xl font-black text-[#1c120d] dark:text-white mb-4">Dampak Sosial Kami</h2>
                    <p className="text-[#1c120d]/60 dark:text-white/60 mt-2">Membangun perubahan nyata dari langkah kecil.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {impacts.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 rounded-2xl bg-background-light dark:bg-background-dark hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20 hover:-translate-y-2 scroll-animate"
                            style={{ animationDelay: `${0.1 * index}s` }}
                        >
                            <div
                                className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 animate-float"
                                style={{ animationDelay: item.delay }}
                            >
                                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                            </div>
                            <h3 className="text-3xl font-black text-[#1c120d] dark:text-white mb-2">{item.title}</h3>
                            <p className="text-sm font-medium text-[#1c120d]/70 dark:text-white/70">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
