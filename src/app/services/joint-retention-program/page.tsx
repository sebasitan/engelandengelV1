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
                    <h2 className="text-3xl font-bold text-[#0f3574] tracking-tight pb-6 border-b border-blue-100">
                      Resolving Disputed Financial Issues and Achieving Settlement
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
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base font-semibold text-[#0f3574] mb-6">
                By employing Engel &amp; Engel&apos;s Joint Retention Program, both parties can:
              </p>
              <ul className="space-y-3">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 px-4 py-3 bg-blue-50/30 rounded-lg border border-blue-50">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f3574] flex-shrink-0" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ══════════ OUR PROCESS ══════════ */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-bold text-[#0f3574] uppercase tracking-wide mb-8 pb-4 border-b border-blue-100">
                Our Process
              </h2>
              <p className="text-base text-slate-600 leading-[1.9] mb-6">
                Engel &amp; Engel&apos;s Joint Retention Program is founded on the high standards of independence and impartiality coupled with over forty years of forensic experience. Engel &amp; Engel&apos;s Joint Retention Program is a formal service offering with a uniquely designed process providing the parties with the following:
              </p>
              <ul className="space-y-3">
                {processItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 px-4 py-3 bg-blue-50/30 rounded-lg border border-blue-50">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f3574] flex-shrink-0" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ══════════ PRACTICE AREAS ══════════ */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base text-slate-600 leading-[1.9] mb-6">
                In connection with our Joint Retention Program, Engel &amp; Engel has the expertise and experience in addressing complex business litigation issues including the following:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {practiceAreas.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 px-4 py-2.5 bg-blue-50/40 rounded-lg border border-blue-50 hover:border-blue-200 hover:bg-blue-50/60 transition-colors duration-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0f3574] flex-shrink-0" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
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
                    For additional information about Engel & Engel&apos;s Joint Retention Program or a consultation, please contact:{' '}
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 blur-[120px] rounded-full -z-10" />
        </section>

        <Footer />
      </main>
    </>
  );
}
