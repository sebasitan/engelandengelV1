'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { memo } from 'react'

const NumberTicker = memo(({ value }: { value: string }) => {
    return <span>{value}</span>
})
NumberTicker.displayName = 'NumberTicker'

export default function HeroV2() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

    const stats = [
        { text: '30+ Year Forensic Accounting Practice' },
        { text: '500+ Forensic Accounting ', highlight: 'Cases' },
        { text: '20 Authored Research Publications' },
        { text: '6 Professional Certifications' },
        { text: 'Big 4 Forensic Experience' },
        { text: '$2.3 Billion Jury Award', isGold: true }
    ]

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0F1E]"
        >
            {/* Cinematic Background Layer */}
            <motion.div style={{ y, scale, opacity }} className="absolute inset-0 z-0">
                <Image
                    src="https://images.pexels.com/photos/2525903/pexels-photo-2525903.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280"
                    alt="Los Angeles Cinematic Backdrop"
                    fill
                    className="object-cover brightness-[0.25] contrast-[1.1]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/90 via-transparent to-[#0A0F1E]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,15,30,0.8)_100%)]" />
            </motion.div>

            <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col items-center text-center">

                    {/* Subtle Institutional Line */}
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: '80px', opacity: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="h-px bg-[#D4AF37] mb-12"
                    />

                    {/* Majestic Headline */}
                    <div className="overflow-hidden mb-8">
                        <motion.h1
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white tracking-tighter leading-[0.85] uppercase"
                        >
                            California&apos;s Top <br />
                            <span className="font-serif italic font-medium text-[#D4AF37] lowercase tracking-normal">Forensic Accountants</span>
                        </motion.h1>
                    </div>

                    {/* Subline with Tracking Fade */}
                    <motion.div
                        initial={{ opacity: 0, letterSpacing: '0.2em' }}
                        animate={{ opacity: 0.6, letterSpacing: '0.6em' }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="text-[10px] md:text-xs font-bold text-white uppercase mb-12 whitespace-nowrap"
                    >
                        Let Our Numbers Do The Talking:
                    </motion.div>

                    {/* Premium Institutional List */}
                    <div className="w-full border-t border-white/5 pt-10 flex justify-center">
                        <motion.ul
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 1.0,
                                        delayChildren: 2.8
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

            {/* Elegant Scroll Progression */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-30">
                <div className="w-px h-24 bg-gradient-to-b from-[#D4AF37] to-transparent" />
            </div>
        </section>
    )
}
