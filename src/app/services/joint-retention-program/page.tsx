'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const overviewParagraphs = [
  'Business litigation often requires the retention of forensic accounting experts by both litigants in a dispute. Engel & Engel provides a specialized Joint Retention Program as an alternative to the typical litigation process as a way to resolve disputed financial issues and achieve settlement. Engel & Engel\'s Joint Retention Program is particularly beneficial in arbitration, mediation and litigation cases where the parties prefer a process that can help settle their differences in a cost-effective manner. Our Joint Retention Program is designed to equally address the financial concerns of both parties in a dispute, whereby the parties jointly retain Engel & Engel to conduct an objective and independent forensic accounting investigation.',
  'In addition, Engel & Engel can serve as a referee in accordance with California Code of Civil Procedure § 638 and § 639 and as a special master in accordance with California Code of Civil Procedure § 845. Engel & Engel can also serve as a special master in accordance with Federal Rules of Civil Procedure § 53.',
];

const benefits = [
  'Save on forensic accounting costs.',
  'Save on litigation costs.',
  'Efficiently obtain accounting and business records.',
  'Expedite resolution of financial issues.',
  'Eliminate discovery disputes and related discovery costs.',
  'Receive an independent and objective analysis on which both parties can rely.',
  'Eliminate unnecessary and duplicative forensic accounting analysis.',
  'Minimize or eliminate financial disputes between the parties.',
];

const processItems = [
  'Assurance that Engel & Engel is independent, objective, and neutral throughout the process, including a formal conflicts check and disclosure statement.',
  'A jointly agreed upon scope of the assignment.',
  'Discovery of the relevant accounting and business records.',
  'An objective financial analysis that includes the concerns of both parties.',
  'An objective and impartial report of findings.',
  'A process for both parties to challenge Engel & Engel\'s findings.',
];

const practiceAreas = [
  'Economic Damages',
  'Fraud Investigation',
  'Business Valuation',
  'Bankruptcy & Insolvency',
  'Intellectual Property (IP) Litigation',
  'Real Estate Litigation',
  'Construction Litigation',
  'Alter Ego',
  'Fraudulent Transfers',
  'Employment Litigation',
  'Business Interruption',
  'Personal Injury',
  'Accounting Malpractice',
  'Partnership/Shareholder Disputes',
  'Trust/Probate Litigation',
  'Defamation',
];

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function JointRetentionProgramPage() {
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
                  Joint Retention <br />
                  <span className="font-serif italic text-[#D4AF37] font-medium">Program</span>
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
                      Engel &amp; Engel’s Joint Retention Program: Resolving Disputed Financial Issues and Achieving Settlement
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
                      src="/images/retention-program.jpg"
                      alt="Joint Retention Program"
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

        {/* ══════════ BENEFITS ══════════ */}
        <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
          <div className="container-custom max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl border border-blue-100 p-10 md:p-16 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f3574] leading-tight mb-8 pb-3 border-b-2 border-[#0f3574]">
                By employing Engel &amp; Engel&apos;s Joint Retention Program, both parties can:
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                    <div className="mt-1 w-8 h-8 rounded-full bg-blue-100 text-[#0f3574] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f3574] group-hover:text-white transition-colors duration-300 text-sm font-bold">
                      {i + 1}
                    </div>
                    <span className="text-lg font-medium text-slate-700 leading-snug group-hover:text-[#0f3574] transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        </section>

        {/* ══════════ OUR PROCESS ══════════ */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-custom max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 rounded-3xl border border-blue-100 p-10 md:p-16 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f3574] tracking-tight mb-8 pb-3 border-b-2 border-[#0f3574] w-fit">
                Our Process
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Engel &amp; Engel&apos;s Joint Retention Program is founded on the high standards of independence and impartiality coupled with over forty years of forensic experience. Engel &amp; Engel&apos;s Joint Retention Program is a formal service offering with a uniquely designed process providing the parties with the following:
              </p>
              <ul className="grid grid-cols-1 gap-4">
                {processItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 group">
                    <div className="mt-1 w-8 h-8 rounded-full bg-blue-50 text-[#0f3574] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f3574] group-hover:text-white transition-colors duration-300">
                      <div className="w-2.5 h-2.5 rounded-full bg-current" />
                    </div>
                    <span className="text-lg font-medium text-slate-700 leading-snug group-hover:text-[#0f3574] transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ══════════ PRACTICE AREAS ══════════ */}
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
                Related Practice Areas
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                In connection with our Joint Retention Program, Engel &amp; Engel has the expertise and experience in addressing complex business litigation issues including the following:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {practiceAreas.map((item, i) => (
                  <div key={i} className="flex items-start md:items-center gap-3 p-3 bg-blue-50/50 rounded-xl border border-blue-100 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-300">
                    <span className="mt-1 md:mt-0 w-2 h-2 rounded-full bg-[#0f3574] flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          {/* Subtle background element */}
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3" />
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
                <span className="font-serif italic text-[#D4AF37]">Joint Retention Program</span>{' '}
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
