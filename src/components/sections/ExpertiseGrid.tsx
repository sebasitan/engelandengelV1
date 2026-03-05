'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const expertiseAreas = [
    { title: 'Economic Damages', href: '/practice-areas/economic-damages' },
    { title: 'Fraud Investigation', href: '/practice-areas/fraud-investigation' },
    { title: 'Business Valuation', href: '/practice-areas/business-valuation' },
    { title: 'Bankruptcy & Insolvency', href: '/practice-areas/bankruptcy-insolvency' },
    { title: 'Intellectual Property (IP) Litigation', href: '/practice-areas/ip-litigation' },
    { title: 'Real Estate Litigation', href: '/practice-areas/real-estate-litigation' },
    { title: 'Construction Litigation', href: '/practice-areas/construction-litigation' },
    { title: 'Alter Ego', href: '/practice-areas/alter-ego' },
    { title: 'Fraudulent Transfers', href: '/practice-areas/fraudulent-transfers' },
    { title: 'Employment Litigation', href: '/practice-areas/employment-litigation' },
    { title: 'Business Interruption', href: '/practice-areas/business-interruption' },
    { title: 'Personal Injury', href: '/practice-areas/personal-injury' },
    { title: 'Accounting Malpractice', href: '/practice-areas/accounting-malpractice' },
    { title: 'Partnership / Shareholder Disputes', href: '/practice-areas/partnership-disputes' },
    { title: 'Trust/Probate Litigation', href: '/practice-areas/trust-probate-litigation' },
    { title: 'Defamation', href: '/practice-areas/defamation' }
]

export default function ExpertiseGrid() {
    return (
        <section className="relative py-24 md:py-32 bg-primary-950 overflow-hidden">
            <Image
                src="/images/services.png"
                alt=""
                fill
                priority
                className="absolute inset-0 object-cover object-center opacity-35 brightness-75 contrast-110"
            />
            <div className="absolute inset-0 bg-primary-900/30" />

            {/* Architectural Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#172554 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container-custom relative z-10">
                <div className="flex flex-col items-center text-center gap-8 mb-20">
                    <div className="w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-[0.95] tracking-tighter">
                                Our Areas of Expertise
                            </h2>
                            <div className="h-1.5 w-72 md:w-[800px] bg-[#D4AF37] mx-auto shadow-[0_0_20px_rgba(212,175,55,0.3)] mt-4" />
                        </motion.div>
                    </div>
                    <div className="w-full max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="relative"
                        >
                            <p className="text-base md:text-lg text-white font-light leading-relaxed text-center">
                                Jason A. Engel, CPA, CFE, CIRA, CVA, MAFF, ABV,<br />
                                has served as a financial and economic expert witness<br />
                                for over 35 years and in over 500 cases.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {expertiseAreas.map((area, index) => (
                        <Link key={index} href={area.href} className="group h-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.03, duration: 0.5 }}
                                className="relative h-40 md:h-44 p-6 md:p-7 rounded-2xl bg-[#172554] border-[#4cc9f0]/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-700 ease-out overflow-hidden hover:shadow-[0_20px_50px_rgba(23,37,84,0.15)] hover:border-[#4cc9f0]/60"
                                style={{ borderWidth: '0.5px' }}
                            >
                                {/* Spotlight effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#172554] via-[#1e3a8a] to-[#172554] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Content Wrap */}
                                <div className="relative z-10 h-full flex items-center justify-center text-center">
                                    <div className="w-full">
                                        <h3 className="text-base md:text-lg font-bold uppercase tracking-wide text-white transition-colors duration-500 leading-[1.25] text-center">
                                            {area.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Animated Accent Line */}
                                <div className="absolute top-0 left-0 w-0 h-1.5 bg-[#D4AF37] group-hover:w-full transition-all duration-700 ease-in-out" />
                            </motion.div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}
