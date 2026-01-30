import React from 'react';

const AboutSection = () => {
    const images = [
        {
            src: '/images/gallery-1.jpg',
            alt: 'Women sitting in a circle knitting together',
            className: 'aspect-[3/4]'
        },
        {
            src: '/images/gallery-4.jpg',
            alt: 'Colorful knitted fabric texture',
            className: 'aspect-[4/3]'
        },
        {
            src: '/images/gallery-6.jpg',
            alt: 'Teaching knitting techniques',
            className: 'aspect-[3/4]'
        }
    ];

    return (
        <section className="py-16 md:py-24 px-6 md:px-10 lg:px-20 bg-background-light dark:bg-background-dark" id="about">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="flex flex-col gap-6 scroll-animate">
                    <div className="flex flex-col gap-2">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase">Tentang Kami</span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#1c120d] dark:text-white leading-tight">
                            Ruang Tumbuh & Berkarya Bersama
                        </h2>
                    </div>
                    <div className="space-y-4 text-base md:text-lg text-[#1c120d]/80 dark:text-white/80 leading-relaxed">
                        <p>
                            MERAKIT (Merajut Asa Kita) merupakan komunitas yang berada di area
                            Kampung Wisata Rajut Binong terletak di bagian timur Bandung Raya
                            dan berjarak kurang dari 2 km dari pusat kota (Alun-Alun Bandung)
                            500m Kiara Arta Park di Kelurahan Binong Kecamatan Batununggal.
                        </p>
                        <p>
                            MERAKIT merupakan pemberdayaan masyarakat  Binong  khususnya
                            untuk  membina  sobat  istimewa  / disabilitas mulai dari memberikan
                            kesempatan kerja yang setara, serta mengembangkan kreatifitas rajut
                            dan paket wisata di Kampung Wisata Binong.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 scroll-animate">
                    <div className="flex flex-col gap-4 mt-8">
                        {images[0] && (
                            <div className={`${images[0].className} rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500`}>
                                <img
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                    alt={images[0].alt}
                                    src={images[0].src}
                                />
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-4">
                        {images[1] && (
                            <div className={`${images[1].className} rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500`}>
                                <img
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                    alt={images[1].alt}
                                    src={images[1].src}
                                />
                            </div>
                        )}
                        {images[2] && (
                            <div className={`${images[2].className} rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500`}>
                                <img
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                    alt={images[2].alt}
                                    src={images[2].src}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
