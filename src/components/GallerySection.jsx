import React from 'react';


const GallerySection = () => {
    const galleryItems = [
        {
            src: '/images/gallery-1.jpg',
            alt: 'Hands knitting',
            label: 'Workshop Harian',
            delay: '0s'
        },
        {
            src: '/images/gallery-2.jpg',
            alt: 'Colorful yarn',
            label: '',
            delay: '0.1s'
        },
        {
            src: '/images/gallery-3.jpg',
            alt: 'Community group',
            label: 'Komunitas Kami',
            delay: '0.2s'
        },
        {
            src: '/images/gallery-4.jpg',
            alt: 'Finished product',
            label: '',
            delay: '0.3s'
        },
        {
            src: '/images/gallery-5.jpg',
            alt: 'Teaching session',
            label: 'Belajar Bersama',
            delay: '0.4s'
        },
        {
            src: '/images/gallery-6.jpg',
            alt: 'Macrame art',
            label: '',
            delay: '0.5s'
        }
    ];

    return (
        <section
            className="py-16 px-6 bg-background-light dark:bg-background-dark border-t border-[#f4ebe7] dark:border-white/5"
            id="gallery"
        >
            <div className="max-w-[1280px] mx-auto">
                <h2 className="text-3xl font-black text-[#1c120d] dark:text-white mb-8 text-center scroll-animate">
                    Galeri Kegiatan
                </h2>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className="break-inside-avoid rounded-xl overflow-hidden group relative cursor-pointer scroll-animate"
                            style={{ animationDelay: item.delay }}
                        >
                            <img
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                alt={item.alt}
                                src={item.src}
                            />
                            {item.label && (
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white font-bold">
                                    {item.label}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
