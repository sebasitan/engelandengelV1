'use client';

import Image from 'next/image';
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
      'Engel & Engel is a Los Angeles forensic accounting firm. for over 30+ years, we have provided clients with high-level forensic accounting services. Our clients include top law firms, public corporations, and private companies, seeking forensic accounting services on a variety of litigation issues for both plaintiffs and defendants. Our experience includes testifying in state, federal, and bankruptcy courts.',
      'We rely on decades of experience and powerful analytical tools to expose hidden transactions, detect manipulated and erroneous information, and identify inconsistencies contained in relevant business records. We work with trial counsel to build a compelling forensic analysis that is understandable to judges and juries. With six professional certifications, extensive experience, and 20 research publications, clients can be confident that our forensic accounting analyses are consistent with established legal and financial principles that can withstand the scrutiny of the court.',
      'When the stakes are high, Engel & Engel can serve as your expert in connection with the following:',
    ],
    items: [],
  },
  {
    id: 'economic-damages',
    title: 'Economic Damages',
    paragraphs: [],
    items: [
      'Contract Damages',
      'Lost Profits',
      'Fraud Damages',
      'Lost Goodwill',
      'Compensatory Damages',
      'Out of Pocket Damages',
      'Mitigation Analysis',
      'Rescission Damages',
      'Reliance Damages',
      'Benefit of the Bargain Damages',
      'IP Infringement Damages',
      'Construction Damages and Delay Claims',
      'Business Interruption Damages',
      'Unestablished Business Damages',
      'Reputational Damages',
      'Employment Damages',
    ],
  },
  {
    id: 'fraud-investigation',
    title: 'Fraud Investigation',
    paragraphs: [],
    items: [
      'Contract Fraud',
      'Money Laundering',
      'Misappropriation of Funds',
      'Securities Fraud',
      'Fraudulent & Misleading Financial Statements',
      'Construction Fraud',
      'Insurance Fraud',
      'Embezzlement Schemes',
      'Ponzi Schemes',
      'Employee Embezzlement',
      'International Money Laundering',
      'Bankruptcy Fraud',
      'Tracing of Fraudulent Funds',
      'Real Estate Fraud',
      'Inventory Fraud',
      'Expert Witness Testimony',
    ],
  },
  {
    id: 'business-valuation',
    title: 'Business Valuation',
    paragraphs: [],
    items: [
      'Corporate Valuation',
      'Minority Shareholder Valuation',
      'Corporate Mergers & Acquisitions',
      'Corporate and Partnership Dissolutions',
      'Corporation Code 2000 Valuation',
      'Net Worth Valuation',
      'Shareholder & Partnership Disputes',
      'Economic Damage Analysis',
      'Fair Value Solvency Analysis',
      'Estate Valuation',
      'Buy and Sell Agreements',
      'Buyout Agreements',
      'Expert Witness Testimony',
    ],
  },
  {
    id: 'bankruptcy-insolvency',
    title: 'Bankruptcy & Insolvency',
    paragraphs: [],
    items: [
      'Bankruptcy Fraud Investigation',
      'Solvency Analysis',
      'Preference Analysis',
      'Liquidation Analysis',
      'Adequate Protection Analysis',
      'Reorganization Plans',
      'Fraudulent Transfers',
      'Fair Value and Fair Market Value Valuations',
      'Analysis of Undercapitalization',
      'Analysis or Reasonably Equivalent Value',
      'Investigation of Hidden Distributions',
      'Expert Witness Testimony',
    ],
  },
  {
    id: 'ip-litigation',
    title: 'Intellectual Property (IP) Litigation',
    paragraphs: [],
    items: [
      'Infringement Damages',
      'Misappropriation of Trade Secrets',
      'Unfair Business Competition',
      'Lost Profits Analysis',
      'Market Share Analysis',
      'Mitigation Analysis',
      'Reasonable Royalty Analysis',
      'Panduit Test',
      'Analysis of Substitute Products',
      'Corrective Advertising',
      'Expert Witness Testimony',
    ],
  },
  {
    id: 'real-estate',
    title: 'Real Estate Litigation',
    paragraphs: [],
    items: [
      'Investigation with Ownership Issues',
      'Investigation of Capital Contribution Issues',
      'Analysis of Distributions',
      'Investigation of Hidden Distributions',
      'Analysis of Shareholder/Partnership Agreements',
      'Analysis of Capital Accounts',
      'Analysis of Historical Revenues and Expenses',
      'Analysis of Loans and Loan Proceeds',
      'Analysis of Historical Expenses and Hidden Distributions',
      'Analysis of Operating Agreements',
      'Analysis of Lost Profits and Damages',
    ],
  },
  {
    id: 'construction',
    title: 'Construction Litigation',
    paragraphs: [],
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
  {
    id: 'alter-ego',
    title: 'Alter Ego',
    paragraphs: [],
    items: [
      'Analysis of Alter Ego Factors',
      'Analysis of Undercapitalization',
      'Commingling of Funds',
      'Diversion of Corporate Funds',
      'Separate Books and Records',
      'Separate Bank Accounts',
      'Separate Employees and Offices',
      'Analysis of Reasonable Compensation',
      'Analysis of Related Party Transactions',
      'Analysis of Hidden Distributions',
      'Expert Witness Testimony',
    ],
  },
  {
    id: 'fraudulent-transfers',
    title: 'Fraudulent Transfers',
    paragraphs: [],
    items: [
      'Analysis of Reasonable Equivalent Value',
      'Solvency Analysis',
      'Analysis of Ability to Pay Debts as they Become Due',
      'Analysis of Undercapitalization',
      'Tracing of Fraudulent Transactions',
      'Business Fair Market Valuation',
      'Business Fair Valuation',
      'Valuation of Intangible Assets',
      'Liquidation Analysis',
      'Financial Fraud Investigations',
      'Expert Witness Testimony',
    ],
  },
  {
    id: 'employment',
    title: 'Employment Litigation',
    paragraphs: [],
    items: [
      'Historical Lost Earnings',
      'Projected Lost Earnings',
      'Lost Benefits',
      'Mitigation Analysis',
      'Expert Witness Testimony',
    ],
  },
  {
    id: 'business-interruption',
    title: 'Business Interruption',
    paragraphs: [],
    items: [
      'Lost Sales Due to Business Interruption',
      'Lost Profits Due to Business Interruption',
      'Lost Goodwill Due to Business Interruption',
      'Expenses Incurred in Connection with Business Interruption',
      'Mitigation Analysis in Connection with Business Interruption',
      'Analysis of Market Conditions Relating to Business Interruption',
      'Expert Witness Testimony',
    ],
  },
  {
    id: 'personal-injury',
    title: 'Personal Injury',
    paragraphs: [],
    items: [
      'Historical Lost Earnings',
      'Projected Lost Earnings',
      'Historical Medical Costs',
      'Projected Medical Costs',
      'Mitigation Analysis',
      'Analysis of Life-care Plans',
      'Analysis of Cost Reports',
      'Expert Witness Testimony',
    ],
  },
  {
    id: 'accounting-malpractice',
    title: 'Accounting Malpractice',
    paragraphs: [],
    items: [
      'Analysis and Evaluation of Misleading Financial Statements',
      'Analysis and Evaluation of Accounting and Auditing Standard of Care',
      'Analysis and Identification of Relevant GAAP and GAAS Principles',
      'Economic Damages Analysis',
      'Materiality Analysis',
      'Disclosure Analysis in Accordance with GAAP and GAAS',
      'Expert Witness Testimony',
    ],
  },
  {
    id: 'shareholder-disputes',
    title: 'Partnership / Shareholder Disputes',
    paragraphs: [],
    items: [
      'Dissolution Accounting',
      'Shareholder Valuation',
      'Shareholder Derivative Claims',
      'Minority Shareholder Discount',
      'Business Valuation in Accordance with California Corporations Code Section 2000',
      'Excess Officer\'s Compensation',
      'Concealment of Distributions',
      'Ownership Disputes',
      'Shareholder & Partnership Provisions for Shareholder Buyouts',
      'Investigation of Misappropriation of Funds and Fraud',
    ],
  },
  {
    id: 'industry-expertise',
    title: 'Industry Expertise',
    paragraphs: [],
    items: [
      'Aerospace',
      'Agriculture',
      'Apparel',
      'Art Galleries and Museums',
      'Automobile',
      'Charitable and Nonprofits',
      'Construction',
      'Cannabis',
      'Distributorships',
      'Education',
      'Entertainment',
      'Finance',
      'Franchises',
      'Government',
      'Home Owners Associations (HOA)',
      'Hospitality (Food & Beverage, Restaurants)',
      'Hospitals / Healthcare Facilities',
      'Imports & Exports',
      'Insurance & Reinsurance',
      'Investment',
      'Manufacturing',
      'Medical Practices',
      'Media & Entertainment',
      'Professional Services Practices',
      'Real Estate Acquisition & Investment',
      'Real Estate Property Management',
      'Retail',
      'Shipping and Transportation',
      'Investments',
      'Warehousing',
      'Technology',
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

export default function ForensicAccountingPage() {
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
                  Forensic Accounting <br />
                  <span className="font-serif italic text-[#D4AF37] font-medium">Services</span>
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
                  <div className="space-y-6">
                    <p className="text-xl text-slate-700 leading-relaxed font-medium">
                      <strong>Engel & Engel</strong> is a Los Angeles forensic accounting firm. for over 30+ years, we have provided clients with high-level forensic accounting services. Our clients include top law firms, public corporations, and private companies, seeking forensic accounting services on a variety of litigation issues for both plaintiffs and defendants. Our experience includes testifying in state, federal, and bankruptcy courts.
                    </p>

                    <p className="text-lg text-slate-600 leading-[1.8]">
                      We rely on decades of experience and powerful analytical tools to expose hidden transactions, detect manipulated and erroneous information, and identify inconsistencies contained in relevant business records. We work with trial counsel to build a compelling forensic analysis that is understandable to judges and juries. With six professional certifications, extensive experience, and 20 research publications, clients can be confident that our forensic accounting analyses are consistent with established legal and financial principles that can withstand the scrutiny of the court.
                    </p>

                    <div className="p-8 bg-blue-50 rounded-2xl">
                      <p className="text-lg text-[#0f3574] font-semibold italic">
                        When the stakes are high, Engel & Engel can serve as your expert in connection with the following:
                      </p>
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
                      src="/images/accounting-111.jpg"
                      alt="Forensic Accounting Office"
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

        {/* ══════════ PRACTICE AREAS GRID ══════════ */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              {sections.filter((s) => ['economic-damages', 'fraud-investigation', 'business-valuation', 'bankruptcy-insolvency', 'ip-litigation', 'real-estate'].includes(s.id)).map((section) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl border border-blue-100 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                >
                  <h2 className="text-base font-bold text-[#0f3574] uppercase tracking-wide mb-4 pb-2 border-b-2 border-[#0f3574] w-fit">
                    {section.title}
                  </h2>
                  {section.paragraphs.length > 0 && (
                    <p className="text-sm text-slate-500 leading-relaxed mb-3">{section.paragraphs[0]}</p>
                  )}
                  {section.items && section.items.length > 0 && (
                    <ul className="columns-1 sm:columns-2 gap-x-6">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 py-1.5 break-inside-avoid">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-[#0f3574] flex-shrink-0" />
                          <span className="text-sm text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}

              {/* Right Column */}
              {sections.filter((s) => ['construction', 'alter-ego', 'fraudulent-transfers', 'employment', 'business-interruption', 'personal-injury', 'accounting-malpractice', 'shareholder-disputes'].includes(s.id)).map((section) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl border border-blue-100 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                >
                  <h2 className="text-base font-bold text-[#0f3574] uppercase tracking-wide mb-4 pb-2 border-b-2 border-[#0f3574] w-fit">
                    {section.title}
                  </h2>
                  {section.paragraphs.length > 0 && (
                    <p className="text-sm text-slate-500 leading-relaxed mb-3">{section.paragraphs[0]}</p>
                  )}
                  {section.items && section.items.length > 0 && (
                    <ul className="columns-1 sm:columns-2 gap-x-6">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 py-1.5 break-inside-avoid">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-[#0f3574] flex-shrink-0" />
                          <span className="text-sm text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ INDUSTRY EXPERTISE ══════════ */}
        {
          sections.filter((s) => s.id === 'industry-expertise').map((section) => (
            <section key={section.id} className="py-16 lg:py-20 bg-white">
              <div className="container-custom">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-xl font-bold text-[#0f3574] uppercase tracking-wide mb-8 pb-2 border-b-2 border-[#0f3574] w-fit">
                    {section.title}
                  </h2>
                  {section.items && section.items.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                      {section.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors duration-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0f3574] flex-shrink-0" />
                          <span className="text-sm text-slate-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </section>
          ))
        }

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

              {/* Contact Cards */}
              <p className="text-sm md:text-base text-white/60 font-light mb-4">
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
