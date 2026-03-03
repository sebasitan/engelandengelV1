'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CorporateIntro() {
    return (
        <section className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="mb-8">
                            <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">From Strategy to Testimony</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-[#0A0F1E] mb-8 leading-tight">
                                Engel & Engel – <br />
                                <span className="text-[#0A0F1E]/70">Los Angeles Forensic Accounting Firm</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                            <p>
                                Established in Los Angeles in 1994, <strong className="font-semibold text-[#0A0F1E]">Engel & Engel LLP</strong> has positioned itself as one of the premier providers of forensic accounting and advisory services, not only in California, but nationwide as well. We provide private practice law firms, as well as in-house counsel of Fortune 500 to middle-market companies, complex business litigation support, including fraud investigations, economic damages, business valuation, bankruptcy and insolvency, alter ego, IP litigation, employment litigation, real estate litigation, construction litigation and a variety of other litigation matters.
                            </p>

                            <p>
                                With over 35 years in the forensic accounting industry, working with attorneys and legal teams in and out of the courtroom, Engel & Engel brings credentials, expertise, and careful attention to each and every case. Our qualifications make us the right choice for developing thoughtful strategies, investigating the particulars, and finally, delivering analysis and calculations with sound and persuasive testimony.
                            </p>

                            <p className="font-medium text-[#0A0F1E]">
                                We offer free consultations regarding your matter. Please contact Brandon Engel at (310) 277-2220 or complete our short contact form below.
                            </p>

                            <div className="pt-8 flex items-center space-x-4 border-t border-gray-100">
                                <span className="text-xl font-serif italic text-gray-900">Thank You!</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] md:h-[600px] rounded-sm overflow-hidden shadow-2xl order-1 lg:order-2"
                    >
                        <Image
                            src="/professional_handshake_legal_1772279129932.png"
                            alt="Professional Engagement"
                            fill
                            className="object-cover"
                        />
                        {/* Overlay Grid Stats */}
                        <div className="absolute bottom-0 left-0 right-0 bg-[#0A0F1E]/95 p-12 text-white">
                            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-4 block">Firm Foundation</span>
                            <div className="text-6xl md:text-8xl font-bold mb-4">1994</div>
                            <p className="text-primary-100 text-xl font-light leading-relaxed">
                                With over 35 years in the forensic accounting industry, working with attorneys and legal teams in and out of the courtroom.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
