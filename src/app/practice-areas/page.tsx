'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const practiceAreas = [
  {
    title: 'Economic Damages',
    description: 'Quantification of economic losses in commercial litigation, personal injury, and business disputes.',
    href: '/practice-areas/economic-damages',
    iconKey: 'damages'
  },
  {
    title: 'Fraud Investigation',
    description: 'Comprehensive fraud detection and investigation services for businesses and legal proceedings.',
    href: '/practice-areas/fraud-investigation',
    iconKey: 'fraud'
  },
  {
    title: 'Business Valuation',
    description: 'Professional business valuations for litigation, mergers, acquisitions, and partnership disputes.',
    href: '/practice-areas/business-valuation',
    iconKey: 'valuation'
  },
  {
    title: 'Bankruptcy & Insolvency',
    description: 'Forensic accounting services for bankruptcy proceedings, creditor protection, and insolvency matters.',
    href: '/practice-areas/bankruptcy-insolvency',
    iconKey: 'bankruptcy'
  },
  {
    title: 'IP Litigation',
    description: 'Economic damage analysis for patent, trademark, and copyright infringement cases.',
    href: '/practice-areas/ip-litigation',
    iconKey: 'ip'
  },
  {
    title: 'Real Estate Litigation',
    description: 'Financial analysis and expert testimony for real estate disputes and construction defect cases.',
    href: '/practice-areas/real-estate-litigation',
    iconKey: 'realestate'
  },
  {
    title: 'Construction Litigation',
    description: 'Expert analysis for construction delays, cost overruns, and construction defect disputes.',
    href: '/practice-areas/construction-litigation',
    iconKey: 'construction'
  },
  {
    title: 'Alter Ego',
    description: 'Forensic analysis for piercing the corporate veil and alter ego liability cases.',
    href: '/practice-areas/alter-ego',
    iconKey: 'alterego'
  },
  {
    title: 'Fraudulent Transfers',
    description: 'Asset tracing and recovery analysis for fraudulent transfer and voidable transaction cases.',
    href: '/practice-areas/fraudulent-transfers',
    iconKey: 'transfers'
  },
  {
    title: 'Employment Litigation',
    description: 'Economic damage calculations for wrongful termination, discrimination, and wage disputes.',
    href: '/practice-areas/employment-litigation',
    iconKey: 'employment'
  },
  {
    title: 'Business Interruption',
    description: 'Lost income analysis for business interruption insurance claims and coverage disputes.',
    href: '/practice-areas/business-interruption',
    iconKey: 'interruption'
  },
  {
    title: 'Personal Injury',
    description: 'Economic damage analysis for personal injury and wrongful death cases.',
    href: '/practice-areas/personal-injury',
    iconKey: 'injury'
  },
  {
    title: 'Accounting Malpractice',
    description: 'Professional standard analysis and damage calculations for accounting malpractice cases.',
    href: '/practice-areas/accounting-malpractice',
    iconKey: 'malpractice'
  },
  {
    title: 'Partnership & Shareholder Disputes',
    description: 'Forensic accounting for partnership dissolution, shareholder disputes, and business breakups.',
    href: '/practice-areas/partnership-disputes',
    iconKey: 'partnership'
  },
  {
    title: 'Trust/Probate Litigation',
    description: 'Expert forensic accounting for trust, estate, and probate disputes, tracing assets and verifying accountings.',
    href: '/practice-areas/trust-probate-litigation',
    iconKey: 'trust'
  },
  {
    title: 'Defamation Litigation',
    description: 'Economic damage analysis for defamation cases, evaluating reputational harm and measurable financial losses.',
    href: '/practice-areas/defamation',
    iconKey: 'defamation'
  }
];

const stats = [
  { value: '30+', label: 'Years Experience' },
  { value: '100+', label: 'Court Testimonies' },
  { value: '1,000+', label: 'Cases Resolved' },
  { value: '$2.3B', label: 'Record Jury Award' },
];

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function PracticeAreasPage() {
  const { scrollY } = useScroll();

  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });

  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen text-slate-900 overflow-hidden">

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
                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl">
                  Practice <br />
                  <span className="font-serif italic text-[#D4AF37] font-medium">Areas</span>
                </h1>
                <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════ PRACTICE AREAS GRID ══════════ */}
        <section className="py-32 relative bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {practiceAreas.map((area, idx) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <Link
                    href={area.href}
                    className="group relative bg-white p-8 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-[#0f3574] border-t-4 hover:shadow-[0_20px_60px_-20px_rgba(15,53,116,0.15)] transition-all duration-500 flex flex-col h-full"
                  >
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-6 flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#0f3574] group-hover:bg-[#0f3574] group-hover:text-white transition-all duration-500">
                          <div className="w-5 h-5 border-2 border-current rounded-sm rotate-45" />
                        </div>
                        <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#0A1A3C] mb-4 tracking-tight leading-tight group-hover:text-[#0f3574] transition-colors duration-300 relative inline-block">
                        {area.title}
                        <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#0f3574] to-transparent transition-all duration-500 group-hover:w-full" />
                      </h3>

                      <p className="text-slate-600 font-light leading-relaxed text-[0.95rem] flex-grow mb-6">
                        {area.description}
                      </p>

                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#0f3574] opacity-70 group-hover:opacity-100 transition-all uppercase mt-auto">
                        View Service
                        <div className="h-px flex-grow bg-[#0f3574]/10 group-hover:bg-[#0f3574]/30" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CTA SECTION ══════════ */}
        <section className="py-24 relative bg-slate-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 lg:p-20 bg-[#0A1A3C] rounded-[2rem] text-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl group-hover:bg-white/10 transition-colors duration-700" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl transition-all duration-1000 group-hover:scale-125" />

              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="max-w-2xl text-center md:text-left">
                  <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Request Consultation</span>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    Secure a Confidential <br />
                    <span className="font-serif italic text-[#D4AF37] font-medium transition-all duration-500">Consultation</span>
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
                    Discuss your needs with Los Angeles’ leading forensic accounting experts. We provide clear, defensive financial evidence that withstands court scrutiny.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="bg-[#D4AF37] hover:bg-[#C5A028] text-[#0A1A3C] px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 text-center">
                      Schedule Now
                    </Link>
                    <a href="tel:+13102772220" className="border border-white/20 hover:border-white/50 text-white px-10 py-4 rounded-full font-bold transition-all duration-300 hover:bg-white/5 text-center">
                      (310) 277-2220
                    </a>
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="w-px h-64 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                </div>

                <div className="text-center md:text-right space-y-4 min-w-[240px]">
                  <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Primary Contact</p>
                  <p className="text-xl font-bold">Brandon J. Engel</p>
                  <p className="text-slate-400 font-light">CPA, CFE, CIRA, CVA, MAFF, ABV</p>
                  <div className="h-px w-12 bg-[#D4AF37] ml-auto hidden md:block" />
                  <p className="text-slate-400">brandon@engelandengel.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

