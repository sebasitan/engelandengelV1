'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
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
  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen text-slate-900">

        {/* ══════════ HERO ══════════ */}
        <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-[#0f3574] text-white text-center">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 animate-ken-burns"
              style={{ backgroundImage: 'url("https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f3574] via-[#0f3574]/95 to-[#0f3574]" />
            <div className="absolute top-0 right-0 w-[1200px] h-[800px] bg-[#D4AF37]/10 blur-[200px] rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[2.5rem] font-bold leading-[1.1] tracking-tighter text-white">
                Forensic Accounting Services
              </h1>
            </motion.div>
          </div>
        </section>

        {/* ══════════ OVERVIEW ══════════ */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-5"
              >
                {sections.filter((s) => s.id === 'overview').map((section) => (
                  <div key={section.id} className="space-y-5">
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className="text-base text-slate-600 leading-[1.9]">{p}</p>
                    ))}
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-5"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/accounting-111.jpg"
                    alt="Forensic Accounting"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
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
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 hover:shadow-lg hover:border-slate-300/80 transition-all duration-300"
                >
                  <h2 className="text-base font-bold text-[#0f3574] uppercase tracking-wide mb-4 pb-3 border-b border-slate-100">
                    {section.title}
                  </h2>
                  {section.paragraphs.length > 0 && (
                    <p className="text-sm text-slate-500 leading-relaxed mb-3">{section.paragraphs[0]}</p>
                  )}
                  {section.items && section.items.length > 0 && (
                    <ul className="columns-1 sm:columns-2 gap-x-6">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 py-1.5 break-inside-avoid">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
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
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 hover:shadow-lg hover:border-slate-300/80 transition-all duration-300"
                >
                  <h2 className="text-base font-bold text-[#0f3574] uppercase tracking-wide mb-4 pb-3 border-b border-slate-100">
                    {section.title}
                  </h2>
                  {section.paragraphs.length > 0 && (
                    <p className="text-sm text-slate-500 leading-relaxed mb-3">{section.paragraphs[0]}</p>
                  )}
                  {section.items && section.items.length > 0 && (
                    <ul className="columns-1 sm:columns-2 gap-x-6">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 py-1.5 break-inside-avoid">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
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
        {sections.filter((s) => s.id === 'industry-expertise').map((section) => (
          <section key={section.id} className="py-16 lg:py-20 bg-white">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-xl font-bold text-[#0f3574] uppercase tracking-wide mb-8 pb-4 border-b border-slate-200">
                  {section.title}
                </h2>
                {section.items && section.items.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors duration-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </section>
        ))}

        {/* ══════════ CONTACT FOOTER ══════════ */}
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="container-custom">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-slate-500">
              <p>
                For additional information or a consultation, please contact:{' '}
                <strong className="text-[#0f3574]">Brandon J. Engel, CPA, CFE</strong>
              </p>
              <div className="flex items-center gap-4">
                <a href="mailto:brandon@engelandengel.com" className="text-primary-600 hover:text-primary-800 hover:underline transition-colors">
                  brandon@engelandengel.com
                </a>
                <span className="text-slate-300">|</span>
                <a href="tel:+13102772220" className="text-primary-600 hover:text-primary-800 hover:underline transition-colors">
                  310-277-2220
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
