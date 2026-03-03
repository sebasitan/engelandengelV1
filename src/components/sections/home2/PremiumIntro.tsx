'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PremiumIntro() {
    return (
        <section className="relative py-32 md:py-56 bg-white overflow-hidden">
            {/* Texture for Architectural Depth */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none select-none">
                <div className="absolute inset-x-0 inset-y-0 bg-[radial-gradient(#0A0F1E_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="container mx-auto relative z-10 px-6 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">

                    {/* Visual Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="lg:col-span-12 xl:col-span-5 relative"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-10 border border-[#D4AF37]/20 rounded-sm translate-x-8 translate-y-8 z-0 pointer-events-none group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-1000" />

                            <div className="relative z-10 bg-[#0A0F1E] text-white p-16 md:p-24 rounded-sm shadow-2xl overflow-hidden min-h-[600px] flex flex-col justify-center">
                                <Image
                                    src="/architectural_detail_luxury_1772278889667.png"
                                    alt="Modern Architecture"
                                    fill
                                    className="object-cover opacity-20 transition-transform duration-[2s] group-hover:scale-110"
                                />
                                <div className="relative z-20">
                                    <span className="block text-xs font-bold tracking-[1em] uppercase text-[#D4AF37] mb-8">Firm Foundation</span>
                                    <span className="block text-[8rem] md:text-[12rem] font-serif italic mb-8 leading-none tracking-tighter">1994</span>
                                    <div className="h-px w-32 bg-[#D4AF37] mb-12" />
                                    <p className="text-white/80 text-xl font-light leading-relaxed">
                                        With over 35 years in the forensic accounting industry, working with attorneys and legal teams in and out of the courtroom.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="lg:col-span-12 xl:col-span-7"
                    >
                        <div className="max-w-4xl">
                            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#0A0F1E] mb-10 tracking-tighter leading-[0.9]">
                                Engel & Engel – <br />
                                <span className="font-serif italic font-medium text-[#0A0F1E]/60 border-b-8 border-[#D4AF37]/20 pb-6 inline-block tracking-normal">Los Angeles Forensic Accounting Firm</span>
                            </h2>

                            <div className="flex items-center space-x-6 mb-16">
                                <div className="h-px w-16 bg-[#D4AF37]" />
                                <span className="text-[#D4AF37] font-bold tracking-[0.8em] uppercase text-sm md:text-lg">From Strategy to Testimony</span>
                            </div>

                            <div className="space-y-12 text-gray-700 text-lg md:text-2xl leading-relaxed font-light">
                                <p>
                                    Established in Los Angeles in 1994, <strong className="font-bold text-[#0A0F1E]">Engel & Engel LLP</strong> has positioned itself as one of the premier providers of forensic accounting and advisory services, not only in California, but nationwide as well. We provide private practice law firms, as well as in-house counsel of Fortune 500 to middle-market companies, complex business litigation support, including fraud investigations, economic damages, business valuation, bankruptcy and insolvency, alter ego, IP litigation, employment litigation, real estate litigation, construction litigation and a variety of other litigation matters.
                                </p>

                                <p>
                                    With over 35 years in the forensic accounting industry, working with attorneys and legal teams in and out of the courtroom, Engel & Engel brings credentials, expertise, and careful attention to each and every case. Our qualifications make us the right choice for developing thoughtful strategies, investigating the particulars, and finally, delivering analysis and calculations with sound and persuasive testimony.
                                </p>

                                <p>
                                    We offer free consultations regarding your matter. Please contact Brandon Engel at (310) 277-2220 or complete our short contact form below.
                                </p>

                                <div className="pt-16 border-t border-gray-100 flex items-center group cursor-default">
                                    <span className="text-4xl font-serif italic text-[#0A0F1E] transition-all duration-700 group-hover:translate-x-6 group-hover:text-[#D4AF37]">Thank You!</span>
                                    <div className="h-px flex-grow bg-gradient-to-r from-gray-100 via-[#D4AF37]/20 to-transparent ml-12" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
