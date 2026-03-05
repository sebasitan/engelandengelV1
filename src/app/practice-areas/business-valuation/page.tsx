'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function BusinessValuationPage() {
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
                  Business <br />
                  <span className="font-serif italic text-[#D4AF37] font-medium">Valuation</span>
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
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-7 flex flex-col justify-center"
                >
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <p className="text-slate-600 leading-relaxed text-xl text-slate-700 font-medium" dangerouslySetInnerHTML={{ __html: "Engel & Engel possesses extensive experience and qualifications to provide business valuation services and serve as your valuation expert. Our qualifications include two business valuation credentials, Certified Valuation Analyst (CVA) and Accreditation in Business Valuation (ABV). Our experience includes over 100 business valuations in a wide variety of industries. Overall, Engel & Engel has the credentials and experience to prepare business valuations that are consistent with established valuation principles and are able to withstand the scrutiny of the court." }}></p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-5 relative h-full min-h-[300px]"
                >
                  <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
                    <Image
                      src="/images/future-lost-profits.png"
                      alt="Economic Damages"
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

        {/* ══════════ SERVICES ══════════ */}
        <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
          <div className="container-custom max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl border border-blue-100 p-10 md:p-16 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f3574] leading-tight mb-8 pb-3 border-b-2 border-[#0f3574] w-fit"> Business Valuation Forensic Accounting Services </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8"> When the stakes are high, Engel & Engel can serve as your expert in connection with the following: </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <li key="Minority Shareholder Valuation" className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-[#0f3574] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f3574] group-hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <span className="text-[1.05rem] font-medium text-slate-700 leading-snug group-hover:text-[#0f3574] transition-colors">{"Minority Shareholder Valuation"}</span>
                </li>
                <li key="Corporate Mergers & Acquisitions" className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-[#0f3574] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f3574] group-hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <span className="text-[1.05rem] font-medium text-slate-700 leading-snug group-hover:text-[#0f3574] transition-colors">{"Corporate Mergers & Acquisitions"}</span>
                </li>
                <li key="Corporate and Partnership Dissolutions" className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-[#0f3574] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f3574] group-hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <span className="text-[1.05rem] font-medium text-slate-700 leading-snug group-hover:text-[#0f3574] transition-colors">{"Corporate and Partnership Dissolutions"}</span>
                </li>
                <li key="Corporation Code 2000 Valuation" className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-[#0f3574] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f3574] group-hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <span className="text-[1.05rem] font-medium text-slate-700 leading-snug group-hover:text-[#0f3574] transition-colors">{"Corporation Code 2000 Valuation"}</span>
                </li>
                <li key="Net Worth Valuation" className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-[#0f3574] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f3574] group-hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <span className="text-[1.05rem] font-medium text-slate-700 leading-snug group-hover:text-[#0f3574] transition-colors">{"Net Worth Valuation"}</span>
                </li>
                <li key="Shareholder & Partnership Disputes" className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-[#0f3574] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f3574] group-hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <span className="text-[1.05rem] font-medium text-slate-700 leading-snug group-hover:text-[#0f3574] transition-colors">{"Shareholder & Partnership Disputes"}</span>
                </li>
                <li key="Economic Damage Analysis" className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-[#0f3574] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f3574] group-hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <span className="text-[1.05rem] font-medium text-slate-700 leading-snug group-hover:text-[#0f3574] transition-colors">{"Economic Damage Analysis"}</span>
                </li>
                <li key="Fair Value Solvency Analysis" className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-[#0f3574] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f3574] group-hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <span className="text-[1.05rem] font-medium text-slate-700 leading-snug group-hover:text-[#0f3574] transition-colors">{"Fair Value Solvency Analysis"}</span>
                </li>
                <li key="Estate Valuation" className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-[#0f3574] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f3574] group-hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <span className="text-[1.05rem] font-medium text-slate-700 leading-snug group-hover:text-[#0f3574] transition-colors">{"Estate Valuation"}</span>
                </li>
                <li key="Buy and Sell Agreements" className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-[#0f3574] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f3574] group-hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <span className="text-[1.05rem] font-medium text-slate-700 leading-snug group-hover:text-[#0f3574] transition-colors">{"Buy and Sell Agreements"}</span>
                </li>
                <li key="Buyout Agreements" className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-[#0f3574] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f3574] group-hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <span className="text-[1.05rem] font-medium text-slate-700 leading-snug group-hover:text-[#0f3574] transition-colors">{"Buyout Agreements"}</span>
                </li>
                <li key="Expert Witness Testimony" className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-[#0f3574] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f3574] group-hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <span className="text-[1.05rem] font-medium text-slate-700 leading-snug group-hover:text-[#0f3574] transition-colors">{"Expert Witness Testimony"}</span>
                </li>
              </ul>
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
                Engel &amp; Engel has published the following research publication in connection with business valuation:
              </p>
              <ul className="grid grid-cols-1 gap-4">
                {[
                  'Business Valuation Under California Corporate Code Section 2000',
                ].map((item, i) => (
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
                <span className="font-serif italic text-[#D4AF37]">Forensic Accounting Services</span>{' '}
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
