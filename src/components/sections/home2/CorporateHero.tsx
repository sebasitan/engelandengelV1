'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const stats = [
    { text: '30+ Year Forensic Accounting Practice' },
    { text: '500+ Forensic Accounting ', highlight: 'Cases' },
    { text: '20 Authored Research Publications' },
    { text: '6 Professional Certifications' },
    { text: 'Big 4 Forensic Experience' },
    { text: '$2.3 Billion Jury Award', isGold: true }
]

export default function CorporateHero() {
    return (
        <section className="relative h-[85vh] min-h-[700px] flex items-center bg-[#0A0F1E] overflow-hidden">
            {/* High-End Corporate Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/corporate_office_la_1772279101058.png"
                    alt="Corporate Office"
                    fill
                    className="object-cover brightness-[0.4]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E] via-[#0A0F1E]/60 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-12">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight uppercase">
                            California&apos;s Top <br />
                            <span className="text-[#D4AF37] font-serif italic font-medium lowercase">Forensic Accountants</span>
                        </h1>

                        <p className="text-white/80 text-lg md:text-xl tracking-[0.4em] uppercase font-bold mb-8 border-l-4 border-[#D4AF37] pl-8">
                            Let Our Numbers Do The Talking:
                        </p>
                    </motion.div>

                    <div className="pt-8 border-t border-white/10">
                        <motion.ul
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 1.0,
                                        delayChildren: 1.2
                                    }
                                }
                            }}
                            className="space-y-1 md:space-y-2 text-left inline-block"
                        >
                            {stats.map((stat, index) => (
                                <motion.li
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 200 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.8,
                                                ease: [0.22, 1, 0.36, 1]
                                            }
                                        }
                                    }}
                                    whileHover={{ x: 15 }}
                                    className={`flex items-start md:items-center text-base md:text-lg lg:text-xl font-bold tracking-tight transition-all duration-500 group/item cursor-default ${stat.isGold ? 'text-[#D4AF37]' : 'text-white'}`}
                                >
                                    <motion.span
                                        variants={{
                                            hidden: { scale: 0 },
                                            visible: { scale: 1, transition: { type: 'spring', stiffness: 200 } }
                                        }}
                                        className={`mt-2 md:mt-0 w-2 h-2 md:w-3 md:h-3 rounded-full mr-6 shrink-0 transition-all duration-500 group-hover/item:scale-150 ${stat.isGold ? 'bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.6)]' : 'bg-white shadow-[0_0_15px_rgba(255,255,255,0.6)]'}`}
                                    />
                                    <div className="relative overflow-hidden flex items-center flex-wrap drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
                                        <span className="relative group-hover/item:text-[#D4AF37] transition-colors duration-500 py-1">
                                            {stat.text}
                                            {stat.highlight && (
                                                <span className="relative inline-block text-[#D4AF37]">
                                                    {stat.highlight}
                                                    <motion.span
                                                        variants={{
                                                            hidden: { width: 0 },
                                                            visible: {
                                                                width: '100%',
                                                                transition: { delay: 0.5, duration: 0.8 }
                                                            }
                                                        }}
                                                        className="absolute -bottom-1 left-0 h-[3px] bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                                                    />
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
