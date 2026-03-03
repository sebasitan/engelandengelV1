'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

interface ServiceProps {
    title: string
    href: string
    index: number
    image: string
}

function ServiceCard({ title, href, index, image }: ServiceProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-[#0F3575] h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] flex flex-col justify-end p-12 transition-all duration-1000 border-[#4cc9f0]/20"
            style={{ borderRightWidth: '0.5px' }}
        >
            {/* Cinematic Imagery */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover brightness-[0.4] transition-all duration-[2000ms] ease-out group-hover:scale-110 group-hover:brightness-[0.6]"
                    priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3575] via-[#0F3575]/30 to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-8 w-20 h-px bg-[#D4AF37] opacity-60 transition-all duration-700 group-hover:w-32 group-hover:opacity-100" />

                <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-10 tracking-tighter leading-none text-white uppercase transition-transform duration-700 group-hover:-translate-y-4">
                    {title.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                    ))}
                </h3>

                <Link
                    href={href}
                    className="relative inline-flex flex-col items-center group/link overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0"
                >
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase text-[#D4AF37] mb-2">Explore Practice</span>
                    <div className="w-12 h-px bg-[#D4AF37] transform transition-all duration-500 group-hover/link:w-20" />
                </Link>
            </div>

            {/* Decorative Index Label */}
            <div className="absolute top-12 left-12">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/20">0{index + 1}</span>
            </div>

            {/* Modern High-End Masking Overlay */}
            <div className="absolute inset-0 border-[30px] border-transparent transition-all duration-1000 group-hover:border-white/5 pointer-events-none" />
        </motion.div>
    )
}

export default function ServicesBento() {
    const services = [
        {
            title: 'Forensic Accounting',
            href: '/services/forensic-accounting',
            image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            title: 'Expert Witness Testimony',
            href: '/services/expert-witness-testimony',
            image: 'https://images.pexels.com/photos/159832/pexels-photo-159832.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            title: 'Joint Retention Program',
            href: '/services/joint-retention-program',
            image: 'https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            title: 'Internal Investigations',
            href: '/services/internal-investigations',
            image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
    ]

    return (
        <section className="relative bg-[#0A0F1E] overflow-hidden">
            <div className="container mx-auto px-0 transition-all duration-1000">
                <div className="flex flex-col items-center py-32 md:py-48 bg-white text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold text-[#0A0F1E] mb-4 leading-none tracking-tighter uppercase">
                            Our Services
                        </h2>
                        <div className="h-2 w-96 md:w-[700px] bg-[#D4AF37] mx-auto mb-16 shadow-[0_0_30px_rgba(212,175,55,0.3)]" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
                    {services.map((service, index) => (
                        <ServiceCard key={index} index={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    )
}
