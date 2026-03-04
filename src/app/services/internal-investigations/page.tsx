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
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-bold text-[#0f3574] uppercase tracking-wide mb-8 pb-4 border-b border-blue-100">
                Engel &amp; Engel&apos;s Internal Investigation Services
              </h2>
              <p className="text-base text-slate-600 leading-[1.9] mb-6">
                Engel &amp; Engel is often retained by corporate entities, nonprofit organizations, homeowners&apos; associations, government agencies, police departments, high profile individuals, and private individuals, as well as their counsel, to investigate a wide range of suspected misconduct.
              </p>
              <ul className="space-y-3">
                {services.map((item, i) => (
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
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base text-slate-600 leading-[1.9] mb-6">
                In connection with our Internal Investigations, Engel &amp; Engel has the expertise and experience to address complex financial issues including the following:
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

        {/* ══════════ CLOSING ══════════ */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base text-slate-600 leading-[1.9]">
                With decades of experience in financial forensics, Engel &amp; Engel provides the depth of analysis required to uncover misconduct and quantify its financial impact. Our investigations are confidential, fact-driven, and conducted with a clear understanding of what it takes to withstand scrutiny in court. They often serve as the foundation for pre-litigation strategy or future legal proceedings.
              </p>
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
                    For additional information about Engel & Engel&apos;s Internal Investigations or a consultation, please contact:{' '}
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
