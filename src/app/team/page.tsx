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
    <main className="bg-[#0a1128] min-h-screen text-white">
      <Header />

      {/* Hero Section with Cinematic Background */}
      <section className="relative min-h-[85vh] flex items-center pt-40 pb-0 overflow-hidden">
        {/* ... existing hero code ... */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/team.jpg"
            alt="Expert Team"
            fill
            className="object-cover object-top opacity-80"
            priority
          />
          {/* Deep Blue Overlay matching screenshot */}
          <div className="absolute inset-0 bg-[#0A1A3C]/80" />


          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center pt-48">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl">
                Our <span className="font-serif italic text-[#D4AF37] font-medium">Team</span>
              </h1>
              <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="pt-8 pb-32 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <div className="relative group bg-[#1e3a8a] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:translate-y-[-10px] border border-[#3b82f6]/20">
                  {/* Photo container */}
                  <Link href={`/team/${member.slug}`} className="block relative">
                    <div className="relative aspect-[1.1/1] overflow-hidden m-4 mb-0 rounded-[1.5rem]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </Link>

                  {/* Info Area */}
                  <div className="p-8 space-y-7">
                    <div>
                      <h3 className="text-[2.2rem] md:text-[2.6rem] font-serif italic text-white mb-1 leading-tight">{member.name}</h3>
                      <p className="text-[18px] font-bold text-[#D4AF37] tracking-[0.1em] uppercase">{member.credentials}</p>
                    </div>

                    {/* Contact Rows */}
                    <div className="space-y-3.5">
                      {/* Phone 1 */}
                      <a href={`tel:${member.phonePrimary.replace(/[^+\d]/g, '')}`} className="flex items-center gap-3.5 text-white/90 hover:text-white transition-colors group/link">
                        <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-[0.95rem] font-medium tracking-tight whitespace-nowrap">{member.phonePrimary}</span>
                      </a>

                      {/* Phone 2 */}
                      <a href={`tel:${member.phoneSecondary.replace(/[^+\d]/g, '')}`} className="flex items-center gap-3.5 text-white/90 hover:text-white transition-colors group/link">
                        <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-[0.95rem] font-medium tracking-tight whitespace-nowrap">{member.phoneSecondary}</span>
                      </a>

                      {/* Email */}
                      <a href={`mailto:${member.email}`} className="flex items-center gap-3.5 text-white/90 hover:text-white transition-colors group/link">
                        <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-[0.95rem] font-medium tracking-tight whitespace-nowrap truncate">{member.email}</span>
                      </a>

                      {/* LinkedIn */}
                      <a href={`https://linkedin.com/in/${member.username}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 text-white/90 hover:text-white transition-colors group/link">
                        <div className="w-4 h-4 bg-[#D4AF37] rounded-[1px] flex items-center justify-center">
                          <svg className="w-3 h-3 text-[#1e3a8a]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.989v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                          </svg>
                        </div>
                        <span className="text-[0.95rem] font-medium tracking-tight truncate">{member.username}</span>
                      </a>
                    </div>

                    {/* Qualifications Button */}
                    <div className="pt-2">
                      <Link href={`/team/${member.slug}`} className="block">
                        <Button className="w-full bg-white text-[#1e3a8a] hover:bg-white/95 text-[0.78rem] font-bold h-11 px-1 rounded-[0.5rem] shadow-lg transition-all active:scale-[0.97] whitespace-nowrap">
                          View {member.name.split(' ')[0]}&apos;s Professional Qualifications
                        </Button>
                      </Link>
                    </div>
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
