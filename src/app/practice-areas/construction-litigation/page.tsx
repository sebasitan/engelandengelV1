'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const sections = [
  {
    id: 'overview',
    title: 'Overview',
    paragraphs: [
      'Construction litigation often demands the financial expertise of a forensic accountant. Engel & Engel has extensive experience in conducting forensic investigations and providing expert testimony in connection with construction litigation for both plaintiffs and defendants. Builders, general contractors, developers, subcontractors, and owners have turned to Engel & Engel\'s expertise in financial issues relating to disputes in construction projects. Overall, Engel & Engel has the qualifications and experience to investigate and opine on complex construction issues that are consistent with established financial principles.',
    ],
    subheading: '',
    items: [],
  },
  {
    id: 'services',
    title: 'Services',
    paragraphs: [
      'How Engel & Engel Helps Construction Litigation Attorneys',
      'When the stakes are high, Engel & Engel can serve as your expert in connection with the following:',
    ],
    subheading: '',
    items: [
      'Construction Fraud Investigation',
      'Construction Damage Analysis',
      'Construction Defect Damages',
      'Construction Delay Damages',
      'Eichleay Formula Calculations',
      'Construction Accounting',
      'Investigation of Change Orders',
      'Bid Analysis',
      'Construction Cost Investigation',
      'Construction Loan Analysis',
      'Construction Budget Analysis',
      'Expert Witness Testimony',
    ],
  },
];

const stats = [
  { value: '30+', label: 'Years of Experience' },
  { value: '6', label: 'Professional Certifications' },
  { value: '20', label: 'Research Publications' },
];

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function ConstructionLitigationPage() {
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
                  Construction <br />
                  <span className="font-serif italic text-[#D4AF37] font-medium">Litigation</span>
                </h1>
                <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════ CONTENT BODY ══════════ */}
        <section className="py-24 relative bg-slate-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {sections.map((section, idx) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`group relative bg-white p-8 md:p-10 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-[#0f3574] border-t-4 hover:shadow-[0_20px_60px_-20px_rgba(15,53,116,0.15)] transition-all duration-500 flex flex-col ${section.id === 'overview' ? 'md:col-span-2' : ''
                    }`}
                >
                  <div className="mb-8">
                    <h3 className="text-[1.75rem] font-bold text-[#0A1A3C] tracking-tight leading-tight mb-6 group-hover:text-[#0f3574] transition-colors duration-300 relative inline-block">
                      {section.title}
                      <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0f3574] to-transparent transition-all duration-500 group-hover:w-full" />
                    </h3>
                  </div>

                  <div className="space-y-6 flex-grow">
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className="text-slate-600 font-light leading-relaxed text-[1.1rem]">
                        {p}
                      </p>
                    ))}

                    {section.subheading && (
                      <p className="text-lg font-semibold text-[#0f3574] pt-2">{section.subheading}</p>
                    )}

                    {section.items && section.items.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mt-4">
                        {section.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-3 group/item">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0 transition-transform duration-300 group-hover/item:scale-125" />
                            <span className="text-slate-700 font-medium leading-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 p-8 md:p-12 bg-[#0A1A3C] rounded-2xl text-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:bg-white/10 transition-colors duration-700" />
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="max-w-2xl text-center md:text-left">
                  <h4 className="text-2xl font-bold mb-4">Professional Consultation</h4>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    For additional information about Engel &amp; Engel&apos;s Forensic Accounting Services or a consultation, please contact:{' '}
                    <span className="text-[#D4AF37] font-semibold text-white">Brandon J. Engel, CPA, CFE</span>
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-end gap-3 min-w-[300px]">
                  <a href="mailto:brandon@engelandengel.com" className="bg-[#D4AF37] hover:bg-[#C5A028] text-[#0A1A3C] px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 w-full text-center">
                    brandon@engelandengel.com
                  </a>
                  <a href="tel:+13102772220" className="border border-white/20 hover:border-white/50 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:bg-white/5 w-full text-center">
                    310-277-2220
                  </a>
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

