import React from 'react'
import Image from 'next/image'

export default function IntroSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Identity Column */}
          <div className="lg:col-span-5 relative group">
            {/* Background Monogram / Decorative Element */}
            <div className="absolute -left-20 -top-20 text-[18rem] font-serif italic text-gray-50 pointer-events-none select-none z-0 opacity-40 transition-transform duration-1000 group-hover:-translate-y-4">
              E&E
            </div>

            <div className="relative z-10">
              <div className="relative inline-block mb-8">
                <div className="absolute -inset-6 border border-[#D4AF37]/20 rounded-sm translate-x-4 translate-y-4 z-0" />
                <div className="relative z-10 bg-primary-950 text-white p-10 md:p-16 rounded-sm shadow-[20px_20px_60px_-15px_rgba(23,37,84,0.3)]">
                  <div className="absolute top-0 right-0 p-4 opacity-20">
                    <svg className="w-12 h-12 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span className="block text-xs font-bold tracking-[0.6em] uppercase text-[#D4AF37] mb-4">Firm Foundation</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="block text-7xl md:text-9xl font-serif italic mb-6 leading-none">1994</span>
                  </div>
                  <div className="h-[2px] w-24 bg-gradient-to-r from-[#D4AF37] to-transparent mb-8" />
                  <p className="text-primary-100 text-xl leading-relaxed font-light max-w-xs transition-colors group-hover:text-white">
                    With over 30+ years in the forensic accounting industry, working with attorneys and legal teams in and out of the courtroom.
                  </p>
                </div>
              </div>

              {/* Architectural Accent Line */}
              <div className="mt-8 h-px w-full bg-gradient-to-r from-gray-100 via-gray-200 to-transparent" />

              {/* Consultation Card removed */}
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pt-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-4 leading-tight">
              Engel & Engel – <br />
              <span className="text-primary-900">Los Angeles Forensic Accounting Firm</span>
            </h2>
            <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-base md:text-xl">From Strategy to Testimony</span>

            <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
              <p>
                Established in Los Angeles in 1994, <strong>Engel & Engel LLP</strong> has positioned itself as one of the premier providers of forensic accounting and advisory services, not only in California, but nationwide as well. We provide private practice law firms, as well as in-house counsel of Fortune 500 to middle-market companies, complex business litigation support, including fraud investigations, economic damages, business valuation, bankruptcy and insolvency, alter ego, IP litigation, employment litigation, real estate litigation, construction litigation and a variety of other litigation matters.
              </p>

              <p>
                With over 30+ years in the forensic accounting industry, working with attorneys and legal teams in and out of the courtroom, Engel & Engel brings credentials, expertise, and careful attention to each and every case.
                Our qualifications make us the right choice for developing thoughtful strategies, investigating the particulars, and finally, delivering analysis and calculations with sound and persuasive testimony.
              </p>

              <p>
                We offer free consultations regarding your matter. Please contact Brandon Engel at (310) 277-2220 or complete our short contact form below.
              </p>

              <p className="mt-8 text-primary-900 border-t border-gray-100 pt-8 inline-block">Thank You!</p>
            </div>
          </div>
        </div>

        {/* Industry Credentials Logo Bar - Updated with User-Provided Source URLs */}
        <div className="mt-8 pt-10 border-t border-gray-100">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <div className="relative h-16 md:h-20 w-48 opacity-80 hover:grayscale transition-all duration-500">
              <Image src="https://engelandengel.com/wp-content/uploads/elementor/thumbs/aicpa-q9lpfz4lfpwk1yewi9wruisxrxfrhika047rthpf6y.jpg" alt="AICPA" fill className="object-contain" />
            </div>
            <div className="relative h-24 md:h-32 w-40 opacity-80 hover:grayscale transition-all duration-500">
              <Image src="https://engelandengel.com/wp-content/uploads/2023/07/calpa.jpg" alt="CalCPA" fill className="object-contain" />
            </div>
            <div className="relative h-24 md:h-32 w-40 opacity-80 hover:grayscale transition-all duration-500">
              <Image src="https://engelandengel.com/wp-content/uploads/2023/07/acfe.jpg" alt="ACFE" fill className="object-contain" />
            </div>
            <div className="relative h-24 md:h-32 w-40 opacity-80 hover:grayscale transition-all duration-500">
              <Image src="https://engelandengel.com/wp-content/uploads/2023/07/aira.jpg" alt="AIRA" fill className="object-contain" />
            </div>
            <div className="relative h-24 md:h-32 w-48 opacity-80 hover:grayscale transition-all duration-500">
              <Image src="https://engelandengel.com/wp-content/uploads/elementor/thumbs/nacva-q9lpiejl3b881ovxbtp2seqt0rgwdd7bc4vxg83t4a.jpg" alt="NACVA" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
