'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import RequestPublicationModal from '@/components/modals/RequestPublicationModal';

const publications = [
    { title: 'The Framework for a Document Request & The Production of Financial Records', image: '/images/future-lost-profits.png' },
];

export default function DocumentRequestPublications() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPub, setSelectedPub] = useState({ title: '', image: '' });
    const { scrollY } = useScroll();

    // Parallax transforms
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

    const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });

    const handleRequestClick = (title: string, image: string) => {
        setSelectedPub({ title, image });
        setIsModalOpen(true);
    };

    return (
        <main className="bg-slate-50 min-h-screen overflow-hidden">
            <Header />

            {/* ══════════ CINEMATIC HERO ══════════ */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#0A1A3C]">
                {/* Parallax Background Decorations */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {/* Glowing orbs */}
                    <motion.div
                        style={{ y: y2, scale }}
                        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[150px] rounded-full"
                    />
                    <motion.div
                        style={{ y: y1 }}
                        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#3b82f6]/10 blur-[120px] rounded-full"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
                </div>

                <div className="container-custom relative z-10 w-full">
                    <motion.div
                        style={{ y: springY1, opacity }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl">
                                Document Request for <br />
                                <span className="font-serif italic text-[#D4AF37] font-medium block mt-4 text-[0.8em]">Accounting & Business Records</span>
                            </h1>
                            <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════ PUBLICATIONS GRID ══════════ */}
            <section className="py-24 relative bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                        {publications.map((pub, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative bg-white p-8 rounded-[2rem] flex flex-col items-start h-full text-left overflow-hidden"
                            >
                                {/* Static Blue Architectural Frame */}
                                <div className="absolute inset-0 border border-[#0A1A3C] rounded-[2rem]" />
                                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#0A1A3C] rounded-tr-[2rem]" />
                                <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#0A1A3C] rounded-bl-[2rem]" />

                                {/* Document Preview */}
                                <div className="relative w-full max-w-[200px] aspect-[3/4] mb-8 overflow-hidden rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.1)] bg-slate-50 mx-auto">
                                    <Image
                                        src={pub.image}
                                        alt={pub.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-base font-medium text-[#0A1A3C] mb-8 leading-[1.3] tracking-tight min-h-[5.5rem] flex items-center text-left">
                                    {pub.title}
                                </h3>

                                <button
                                    onClick={() => handleRequestClick(pub.title, pub.image)}
                                    className="mt-auto w-full group/btn relative overflow-hidden bg-[#0A1A3C] hover:bg-[#D4AF37] text-white py-4 px-6 rounded-xl transition-all duration-500 flex items-center justify-center gap-3 shadow-lg hover:shadow-[#D4AF37]/30"
                                >
                                    <span className="text-[11px] font-bold tracking-[0.25em] uppercase relative z-10 transition-colors duration-500 group-hover/btn:text-[#0A1A3C]">
                                        Request Publication
                                    </span>
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <RequestPublicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                publicationTitle={selectedPub.title}
                publicationImage={selectedPub.image}
            />
        </main>
    );
}
