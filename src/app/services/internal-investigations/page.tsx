'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const overviewParagraphs = [
  'Financial concerns often surface long before litigation begins. Unexplained losses, irregular transactions, or suspected misconduct can raise serious questions that demand answers. Whether the issue involves potential embezzlement, misuse of funds, or fraud within a family, business, or organization, early investigation is critical to understanding what has occurred and preventing further harm.',
  'In other situations, fraud or embezzlement has already come to light, but the full extent of the wrongdoing is still unknown. We are often retained to conduct comprehensive investigations that reveal how misconduct occurred, measure the resulting financial impact, and provide clients with a clear report of findings. These reports give decision-makers the evidence they need to pursue recovery, pursue litigation, strengthen internal controls, or refer the matter to law enforcement.',
  'At Engel & Engel, LLP, we conduct internal forensic accounting investigations that uncover irregularities and quantify financial impact. Our clients include individuals, families, HOAs, companies, celebrities, and government agencies. In many cases, we prepare a professional report of our findings that can be used to take corrective action, strengthen internal controls, pursue civil litigation, or provide to law enforcement agencies such as the Department of Justice or local police.',
];

const services = [
  'Embezzlement Investigations – Identifying misappropriation of funds within businesses, HOAs, and nonprofit',
  'Fraud Detection – Uncovering financial misconduct in companies, family partnerships, and government entities',
  'HOA Investigations – Examining potential fraud, misappropriation of funds, and other financial irregularities in homeowners\' associations',
  'Nonprofit Organization Investigations – Investigating embezzlement, misappropriation, and misuse of charitable or organizational funds',
  'Celebrity and High-Net-Worth Reviews – Examining potential theft or overbilling by contractors, managers, or advisors',
  'Family and Partnership Disputes – Tracing funds and clarifying whether assets have been misused by relatives or business partners',
  'Corporate Investigations – Reviewing internal controls, identifying fraudulent schemes, and calculating damages for organizations',
  'Reporting of Findings – Delivering professional reports that outline evidence and quantify financial impact for decision-making or potential legal action',
];

const practiceAreas = [
  'Economic Damages',
  'Fraud Investigation',
  'Business Valuation',
  'Bankruptcy & Insolvency',
  'Intellectual Property (IP) Investigations',
  'Real Estate Fraud',
  'Construction Fraud',
  'Alter Ego',
  'Fraudulent Transfers',
  'Employment Damages',
  'Business Interruption',
  'Personal Injury Damages',
  'Accounting Malpractice',
  'Partnership/Shareholder Disputes',
];

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function InternalInvestigationsPage() {
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
                  Internal <br />
                  <span className="font-serif italic text-[#D4AF37] font-medium">Investigations</span>
                </h1>
                <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════ OVERVIEW ══════════ */}
        <section className="py-24 relative bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-7"
                >
                  <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0f3574] tracking-tight mb-8 pb-3 border-b-2 border-[#0f3574] w-fit">
                      Service Overview
                    </h2>

                    <div className="space-y-6">
                      {overviewParagraphs.map((p, i) => (
                        <p key={i} className={`text-slate-600 leading-relaxed ${i === 0 ? 'text-xl text-slate-700 font-medium' : 'text-lg'}`}>
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-5 relative"
                >
                  <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group">
                    <Image
                      src="/images/identify-financial-patterns.jpg"
                      alt="Internal Investigations"
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f3574]/40 to-transparent" />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4AF37]/10 -z-10 rounded-full blur-2xl" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ INVESTIGATION SERVICES ══════════ */}
        <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
          <div className="container-custom max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl border border-blue-100 p-10 md:p-16 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f3574] leading-tight mb-8 pb-3 border-b-2 border-[#0f3574] w-fit">
                Engel &amp; Engel&apos;s Internal Investigation Services
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Engel &amp; Engel is often retained by corporate entities, nonprofit organizations, homeowners&apos; associations, government agencies, police departments, high profile individuals, and private individuals, as well as their counsel, to investigate a wide range of suspected misconduct.
              </p>
              <ul className="grid grid-cols-1 gap-4">
                {services.map((item, i) => {
                  const [title, ...descParts] = item.split(' – ');
                  const description = descParts.join(' – ');

                  return (
                    <li key={i} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                      <div className="mt-1 w-8 h-8 rounded-full bg-blue-100 text-[#0f3574] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f3574] group-hover:text-white transition-colors duration-300">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <span className="text-lg font-bold text-slate-800 leading-snug group-hover:text-[#0f3574] transition-colors block mb-1">
                          {title}
                        </span>
                        {description && (
                          <span className="text-base text-slate-600 leading-relaxed block">
                            {description}
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        </section>

        {/* ══════════ PRACTICE AREAS AND CLOSING ══════════ */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          <div className="container-custom max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 rounded-3xl border border-blue-100 p-10 md:p-16 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f3574] leading-tight mb-8 pb-3 border-b-2 border-[#0f3574] w-fit">
                Related Practice Areas
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                In connection with our Internal Investigations, Engel &amp; Engel has the expertise and experience to address complex financial issues including the following:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                {practiceAreas.map((item, i) => (
                  <div key={i} className="flex items-start md:items-center gap-3 p-3 bg-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                    <span className="mt-1 md:mt-0 w-2 h-2 rounded-full bg-[#0f3574] flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#0f3574]/5 border-l-4 border-[#0f3574] p-6 rounded-r-2xl">
                <p className="text-lg text-slate-700 leading-relaxed font-medium italic">
                  With decades of experience in financial forensics, Engel &amp; Engel provides the depth of analysis required to uncover misconduct and quantify its financial impact. Our investigations are confidential, fact-driven, and conducted with a clear understanding of what it takes to withstand scrutiny in court. They often serve as the foundation for pre-litigation strategy or future legal proceedings.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════ CONTACT CTA ══════════ */}
        <section className="relative py-28 bg-[#0A1A3C] overflow-hidden">
          {/* Glow orbs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
          {/* Top rule */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <p className="text-sm md:text-base text-white/60 font-light mb-4 whitespace-nowrap overflow-hidden text-ellipsis">
                For additional information about{' '}
                <span className="text-white font-medium">Engel &amp; Engel&apos;s</span>{' '}
                <span className="font-serif italic text-[#D4AF37]">Internal Investigations</span>{' '}
                or a consultation, please contact:
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Name card */}
                <div className="flex flex-col justify-center space-y-3 p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Brandon J. Engel</h3>
                  <p className="text-white/50 text-sm font-medium tracking-widest uppercase">CPA, CFE</p>
                  <div className="h-px w-16 bg-[#D4AF37] mt-2" />
                </div>

                {/* Links card */}
                <div className="flex flex-col justify-center space-y-5 p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                  <a href="mailto:brandon@engelandengel.com" className="group flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0A1A3C] transition-all duration-300 shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-lg font-semibold text-white/90 group-hover:text-white border-b border-white/20 group-hover:border-[#D4AF37] pb-0.5 transition-all duration-200">
                      brandon@engelandengel.com
                    </span>
                  </a>

                  <a href="tel:310-277-2220" className="group flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0A1A3C] transition-all duration-300 shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-lg font-semibold text-white/90 group-hover:text-white border-b border-white/20 group-hover:border-[#D4AF37] pb-0.5 transition-all duration-200">
                      310-277-2220
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom rule */}
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        </section>

        <Footer />
      </main>
    </>
  );
}
