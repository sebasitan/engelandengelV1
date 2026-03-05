'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const overviewParagraphs = [
  'High stakes litigation demands persuasive, effective, and well-credentialed forensic expert testimony. Engel & Engel has provided expert testimony in over 100 cases for both plaintiffs and defendants in state, federal, and bankruptcy courts. Engel & Engel\'s expert qualifications includes 1,000+ forensic accounting cases, six professional certifications, 20 authored research publications, and Big Four forensic accounting experience.',
  'Engel & Engel\'s courtroom experience is highlighted in numerous judge and jury awards including a $2.3 billion jury award in connection with misappropriation of trade secrets.',
];

const courtroomParagraphs = [
  'Before we enter the courtroom, we are armed with evidence obtained in the course of a rigorous forensic investigation. To uncover all the relevant information, we utilize specialized investigatory techniques to probe and analyze data buried in a proliferation of records. Thus, we find the financial evidence needed to build a convincing case. We work alongside trial counsel to ensure important issues are properly addressed before they become obstacles.',
  'On the witness stand, we present our findings and opinions clearly and concisely. We utilize charts and graphs to break down complex concepts and ensure that the points we emphasize are understood. Our trial exhibits provide a visual summary of the facts and enable us to explain even the most complex concepts with clarity. By combining a visual summary with our concise and articulate testimony, we are able to reinforce our findings and opinions and ensure that the court comprehends the points we emphasize.',
  'Our professional demeanor, exemplary credentials, and integrity, provide us with the conviction needed to withstand the most grueling cross-examinations.',
];

const publications = [
  'Admissibility of Expert Witness Testimony',
  'The Business Records Exception to the Hearsay Rule: The Admissibility of Financial Records as Evidence in Federal and State Court',
];

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function ExpertWitnessTestimonyPage() {
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
                  Expert Witness <br />
                  <span className="font-serif italic text-[#D4AF37] font-medium">Testimony</span>
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
                      src="/images/court-1.jpg"
                      alt="Expert Witness Testimony"
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

        {/* ══════════ COURTROOM ══════════ */}
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
                Credibility in the Courtroom: Before, During and After Trial
              </h2>
              <div className="space-y-6">
                {courtroomParagraphs.map((p, i) => (
                  <p key={i} className="text-lg text-slate-600 leading-relaxed">{p}</p>
                ))}
              </div>
            </motion.div>
          </div>
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        </section>

        {/* ══════════ PUBLICATIONS ══════════ */}
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
                Research Publications
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Engel &amp; Engel has published the following research publications in connection with expert witness testimony:
              </p>
              <ul className="grid grid-cols-1 gap-4">
                {publications.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 group">
                    <div className="mt-1 w-8 h-8 rounded-full bg-blue-50 text-[#0f3574] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f3574] group-hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-slate-700 leading-snug group-hover:text-[#0f3574] transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
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
                <span className="font-serif italic text-[#D4AF37]">Expert Witness Testimony</span>{' '}
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
