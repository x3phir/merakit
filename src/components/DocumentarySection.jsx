import React, { useState, useEffect, useRef } from 'react';

const VideoCard = ({ video, index }) => {
    const [isInView, setIsInView] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const thumbnailUrl = video.videoSrc.replace('/video/upload/', '/video/upload/f_jpg,q_auto:low/').replace('.mp4', '.jpg');

    return (
        <div
            ref={videoRef}
            className="flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-[#1f1612] shadow-lg hover:shadow-2xl transition-all duration-500 scroll-animate group"
            style={{ animationDelay: `${0.1 * index}s` }}
        >
            <div className="relative aspect-video bg-gray-900">
                {isInView ? (
                    <>
                        <video
                            ref={(el) => { video.ref.current = el; }}
                            className="w-full h-full object-cover transition-opacity duration-300"
                            style={{ opacity: isLoaded ? 1 : 0 }}
                            controls
                            preload="none"
                            loading="lazy"
                            onLoadedData={() => setIsLoaded(true)}
                            onPlay={() => setIsLoaded(true)}
                            poster={thumbnailUrl}
                        >
                            <source src={video.videoSrc} type="video/mp4" />
                        </video>
                        {!isLoaded && (
                            <div className="absolute inset-0 bg-gray-900 animate-pulse" />
                        )}
                    </>
                ) : (
                    <div className="absolute inset-0 bg-gray-800" />
                )}
            </div>

            <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide">
                        Dokumentasi
                    </span>
                </div>
                <h4 className="text-xl font-bold text-[#1c120d] dark:text-white mb-2">
                    {video.title}
                </h4>
                <p className="text-[#1c120d]/60 dark:text-white/60">
                    {video.description}
                </p>
            </div>
        </div>
    );
};

const DocumentarySection = () => {
    const videos = [
        {
            id: 1,
            title: 'Dokumentasi Kegiatan MERAKIT',
            description: 'Video dokumentasi kegiatan dan aktivitas komunitas MERAKIT dalam memberdayakan masyarakat lokal.',
            videoSrc: 'https://res.cloudinary.com/dm9xspnbe/video/upload/v1769832453/docum_j3itop.mp4',
            ref: null
        },
        {
            id: 2,
            title: 'Wawancara dengan Tim MERAKIT',
            description: 'Cerita inspiratif dan wawancara dengan para anggota dan penggerak komunitas MERAKIT.',
            videoSrc: 'https://res.cloudinary.com/dm9xspnbe/video/upload/v1769832199/interview_1_ialjmt.mp4',
            ref: null
        },
        {
            id: 3,
            title: 'Kunjungan MERAKIT',
            description: 'Momen kunjungan dan pengalaman bersama komunitas MERAKIT dalam kegiatan pemberdayaan masyarakat.',
            videoSrc: 'https://res.cloudinary.com/dm9xspnbe/video/upload/v1778504146/IMG_2830_u6n6lh.mp4',
            ref: null
        }
    ];

    return (
        <section className="py-16 md:py-24 px-6 bg-background-light dark:bg-background-dark" id="documentary">
            <div className="max-w-[1280px] mx-auto">
                <div className="text-center mb-12 scroll-animate">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">Cerita Kami</span>
                    <h2 className="text-3xl md:text-4xl font-black text-[#1c120d] dark:text-white mt-2">
                        Video Dokumenter MERAKIT
                    </h2>
                    <p className="text-[#1c120d]/60 dark:text-white/60 mt-4 max-w-2xl mx-auto">
                        Saksikan perjalanan inspiratif komunitas kami dalam merajut harapan dan memberdayakan masyarakat lokal.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {videos.map((video, index) => (
                        <VideoCard key={video.id} video={video} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DocumentarySection;