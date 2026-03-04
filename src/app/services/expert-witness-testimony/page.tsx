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
                    <h2 className="text-3xl font-bold text-[#0f3574] tracking-tight pb-6 border-b border-blue-100">
                      Service Overview
                    </h2>

                    <div className="space-y-6">
                      {overviewParagraphs.map((p, i) => (
                        <p key={i} className={`text-slate-600 leading-[1.8] ${i === 0 ? 'text-xl text-slate-700 font-medium' : 'text-lg'}`}>
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
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-bold text-[#0f3574] uppercase tracking-wide mb-8 pb-4 border-b border-blue-100">
                Credibility in the Courtroom: Before, During and After Trial
              </h2>
              <div className="space-y-5">
                {courtroomParagraphs.map((p, i) => (
                  <p key={i} className="text-base text-slate-600 leading-[1.9]">{p}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════ PUBLICATIONS ══════════ */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-bold text-[#0f3574] uppercase tracking-wide mb-4 pb-4 border-b border-blue-100">
                Research Publications
              </h2>
              <p className="text-base text-slate-600 leading-[1.9] mb-6">
                Engel &amp; Engel has published the following research publications in connection with expert witness testimony:
              </p>
              <ul className="space-y-3">
                {publications.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 px-4 py-3 bg-blue-50/30 rounded-lg border border-blue-50">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f3574] flex-shrink-0" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ══════════ CONTACT CTA ══════════ */}
        <section className="py-24 relative bg-slate-50 overflow-hidden">
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-[3rem] p-12 md:p-16 border border-blue-100 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500 text-center">
                <div className="relative z-10 space-y-6">
                  <p className="text-xl md:text-2xl text-[#0f3574] leading-relaxed font-medium">
                    For additional information about Engel & Engel&apos;s Expert Witness Testimony or a consultation, please contact:{' '}
                    <span className="font-bold">Brandon J. Engel, CPA, CFE</span>
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                    <a
                      href="mailto:brandon@engelandengel.com"
                      className="text-lg font-bold text-blue-600 hover:text-[#0f3574] transition-colors pb-1 border-b-2 border-blue-100 hover:border-[#0f3574]"
                    >
                      brandon@engelandengel.com
                    </a>
                    <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <a
                      href="tel:+13102772220"
                      className="text-lg font-bold text-blue-600 hover:text-[#0f3574] transition-colors pb-1 border-b-2 border-blue-100 hover:border-[#0f3574]"
                    >
                      310-277-2220
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 blur-[120px] rounded-full -z-10" />
        </section>

        <Footer />
      </main>
    </>
  );
}
