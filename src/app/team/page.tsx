'use client'

import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'



const teamMembers = [
  {
    slug: 'jason-a-engel',
    name: 'Jason A. Engel',
    credentials: 'CPA, CFE, CIRA, CVA, MAFF, ABV',
    title: 'Managing Partner & Senior Forensic Accountant',
    experience: '45+ Years',
    specialties: [
      'Expert Witness Testimony',
      'Complex Fraud Investigations',
      'Business Valuations',
      'Economic Damage Analysis'
    ],
    achievements: [
      'Lead Expert in 500+ Cases',
      'Court-Qualified Expert Witness',
      'Published Author on Forensic Accounting',
      'Industry Speaker & Educator'
    ],
    description: 'Jason A. Engel is the Managing Partner and Senior Forensic Accountant at Engel & Engel LLP with over 45 years of experience in forensic accounting, fraud investigation, and expert witness testimony. He holds multiple prestigious certifications including CPA, CFE, CIRA, CVA, MAFF, and ABV, making him one of the most qualified forensic accountants in California.',
    phonePrimary: '(310) 277-5986',
    phoneSecondary: '(310) 277-2220',
    email: 'jasonengel@engelandengel.com',
    username: 'jasonengel',
    qualificationLabel: "View Jason's Professional Qualifications",
    image: '/images/team/jason-engel.jpg'
  },
  {
    slug: 'brandon-j-engel',
    name: 'Brandon J. Engel',
    credentials: 'CPA, CFE, ABV',
    title: 'Partner & Forensic Accountant',
    experience: '15+ Years',
    specialties: [
      'Fraud Investigations',
      'Economic Damage Calculations',
      'Business Valuations',
      'Bankruptcy & Insolvency'
    ],
    achievements: [
      'Expert in 200+ Forensic Cases',
      'Certified Fraud Examiner',
      'Complex Financial Investigations',
      'Trial Testimony Experience'
    ],
    description: 'Brandon J. Engel is a Partner and Forensic Accountant with over 15 years of experience in forensic accounting and fraud investigation. As a CPA and CFE, Brandon has conducted over 200 forensic accounting cases and has testified as an expert witness in deposition and trial.',
    phonePrimary: '(310) 579-0115',
    phoneSecondary: '(310) 277-2220 Ext. 3',
    email: 'brandon@engelandengel.com',
    username: 'brandon-engel',
    qualificationLabel: "View Brandon's Professional Qualifications",
    image: '/images/team/brandon-engel.jpg'
  },
  {
    slug: 'douglas-h-engel',
    name: 'Douglas H. Engel',
    credentials: 'CPA, MBA',
    title: 'Tax & Business Consultant',
    experience: '45+ Years',
    specialties: [
      'Tax & Business Consulting',
      'High Net Worth Individuals',
      'Forensic Tax Services',
      'Estate & Trust Taxation'
    ],
    achievements: [
      '45+ Years CPA Experience',
      'MBA in Taxation',
      'Court-Appointed Guardian',
      'Tax Malpractice Expert'
    ],
    description: 'Douglas H. Engel is a Tax & Business Consultant with over 45 years of experience, specializing in tax planning and business consulting for high net worth individuals and forensic accounting services for tax controversies and bankruptcy matters.',
    phonePrimary: '(818) 710-0071',
    phoneSecondary: '(310) 277-2220',
    email: 'douglas@engelandengel.com',
    username: 'douglasengelcpa',
    qualificationLabel: "View Douglas's Professional Qualifications",
    image: '/images/team/douglas-engel.jpg'
  }
]

export default function TeamPage() {
  return (
    <main className="bg-[#0f3574] min-h-screen text-white">
      <Header />

      {/* Simplified Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tighter">
                <span className="text-white">Our</span> <span className="font-serif italic text-[#D4AF37] font-medium drop-shadow-sm">Team</span>
              </h1>
              <div className="h-px w-24 bg-[#D4AF37]/30 mx-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="pb-32 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-primary-900 border border-white/10">
                  {/* Photo */}
                  <Link href={`/team/${member.slug}`} className="block">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f3574] via-transparent to-transparent opacity-60" />
                    </div>
                  </Link>

                  {/* Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <Link href={`/team/${member.slug}`}>
                        <h3 className="text-2xl md:text-3xl font-serif italic text-white leading-tight hover:text-[#D4AF37] transition-colors">{member.name}</h3>
                      </Link>
                      <p className="text-xs font-semibold text-[#D4AF37] tracking-[0.3em] uppercase mt-1">{member.credentials}</p>
                    </div>

                    {/* Phone Numbers */}
                    <div className="space-y-1.5">
                      <a href={`tel:${member.phonePrimary.replace(/[^+\d]/g, '')}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                        <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        {member.phonePrimary}
                      </a>
                      <a href={`tel:${member.phoneSecondary.replace(/[^+\d]/g, '')}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                        <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        {member.phoneSecondary}
                      </a>
                    </div>

                    {/* Email */}
                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                      <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      {member.email}
                    </a>

                    {/* LinkedIn */}
                    <a href={`https://www.linkedin.com/in/${member.username}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                      <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                      {member.username}
                    </a>

                    {/* Qualifications Button */}
                    <Link href={`/team/${member.slug}#qualifications`} className="block mt-4">
                      <Button as="span" variant="secondary" className="w-full border-[#000080] text-[#000080] hover:bg-[#000080] hover:text-white text-sm">
                        {member.qualificationLabel}
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      <Footer />
    </main>
  )
}
