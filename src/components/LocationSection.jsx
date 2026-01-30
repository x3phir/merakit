import React from 'react';

const LocationSection = ({ openWhatsApp }) => {
    const contactInfo = [
        {
            icon: 'location_on',
            title: 'Alamat',
            content: 'Kampung Binong Jati\nCibeunying Kidul, Bandung\nJawa Barat, Indonesia 40623'
        },
        {
            icon: 'phone',
            title: 'Hubungi Kami',
            content: '+62 822 1914 5422',
            link: 'https://wa.me/6282219145422'
        },
        {
            icon: 'mail',
            title: 'Email',
            content: 'MERAJUTASA23@gmail.com',
            link: 'mailto:MERAJUTASA23@gmail.com'
        },
        {
            icon: 'schedule',
            title: 'Jam Operasional',
            content: 'Senin - Sabtu: 09:00 - 17:00\nMinggu: Tutup'
        }
    ];

    return (
        <section className="py-16 md:py-24 px-6 bg-background-light dark:bg-background-dark border-t border-[#f4ebe7] dark:border-white/5" id="location">
            <div className="max-w-[1280px] mx-auto">
                <div className="text-center mb-12 scroll-animate">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">Temukan Kami</span>
                    <h2 className="text-3xl md:text-4xl font-black text-[#1c120d] dark:text-white mt-2">Lokasi Kampung Rajut</h2>
                    <p className="text-[#1c120d]/60 dark:text-white/60 mt-4 max-w-2xl mx-auto">
                        Kunjungi kami di Kampung Binong Jati dan rasakan pengalaman merajut yang autentik bersama komunitas lokal.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch scroll-animate">
                    {/* Map */}
                    <div className="rounded-2xl overflow-hidden shadow-lg h-96 lg:h-full min-h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12238.029441549286!2d107.63300300409585!3d-6.936071842100171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9967f192e51%3A0x55e1d7a2ffde1e87!2sKampoeng%20Rajoet!5e0!3m2!1sid!2sid!4v1768462552260!5m2!1sid!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Location Map"
                        />
                    </div>

                    {/* Location Info */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-white dark:bg-[#1f1612] rounded-2xl p-8 border border-[#e8d7ce] dark:border-white/10 shadow-sm">
                            <h3 className="text-2xl font-bold text-[#1c120d] dark:text-white mb-6">Informasi Lokasi</h3>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                                                <span className="material-symbols-outlined text-primary text-2xl">{info.icon}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-[#1c120d] dark:text-white uppercase tracking-wide">
                                                {info.title}
                                            </h4>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="text-primary hover:text-primary/80 transition-colors font-semibold mt-1 block"
                                                >
                                                    {info.content}
                                                </a>
                                            ) : (
                                                <p className="text-[#1c120d]/70 dark:text-white/70 mt-1 whitespace-pre-line">
                                                    {info.content}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => openWhatsApp('Saya ingin berkunjung')}
                                className="w-full flex items-center justify-center rounded-lg h-12 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-all hover:scale-105 active:scale-95 gap-2 mt-8"
                            >
                                <span className="material-symbols-outlined">chat</span>
                                Kunjungi Kami
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
