'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const stats = [
    { text: '30+ Year Forensic Accounting Practice' },
    { text: '500+ Forensic Accounting ', highlight: 'Cases' },
    { text: '20 Authored Research Publications' },
    { text: '6 Professional Certifications' },
    { text: 'Big 4 Forensic Experience' },
    { text: '$2.3 Billion Jury Award', isGold: true }
]

export default function PremiumHero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

    return (
        <section
            ref={containerRef}
            className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#030712]"
        >
            {/* Cinematic Background */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="/la_skyline_premium_1772278731106.png"
                    alt="Los Angeles Skyline"
                    fill
                    className="object-cover brightness-[0.3] contrast-[1.2] scale-[1.05]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/40 to-[#030712]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,18,0.7)_100%)]" />
            </motion.div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 100 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-1 bg-[#D4AF37] mx-auto mb-10"
                    />

                    <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-bold text-white tracking-tighter leading-[0.8] mb-12 uppercase">
                        California&apos;s Top <br />
                        <span className="font-serif italic font-medium text-[#D4AF37] lowercase tracking-normal">Forensic Accountants</span>
                    </h1>

                    <div className="flex items-center justify-center space-x-8 mb-16 max-w-2xl mx-auto">
                        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
                        <h2 className="text-xs md:text-sm font-bold text-white tracking-[0.8em] uppercase whitespace-nowrap opacity-80">
                            Let Our Numbers Do The Talking:
                        </h2>
                        <div className="h-px flex-grow bg-gradient-to-l from-transparent via-[#D4AF37]/50 to-transparent" />
                    </div>
                </motion.div>

                {/* Premium Institutional List */}
                <div className="flex justify-center pt-4 max-w-4xl mx-auto">
                    <motion.ul
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 1.0,
                                    delayChildren: 1.8
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

            {/* Decorative architectural elements */}
            <div className="absolute left-10 bottom-10 flex flex-col items-center space-y-4 opacity-20">
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white [writing-mode:vertical-lr] rotate-180">Discovery</span>
                <div className="w-px h-24 bg-white" />
            </div>

            <div className="absolute right-10 bottom-10 flex flex-col items-center space-y-4 opacity-20">
                <div className="w-px h-24 bg-white" />
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white [writing-mode:vertical-lr]">Accuracy</span>
            </div>
        </section>
    )
}
