'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const contactPersons = [
  {
    header: 'Forensic Accounting Services',
    name: 'Jason A. Engel, CPA, CFE, CIRA, CVA, MAFF, ABV',
    address: '350 S Grand Avenue, Suite 3160',
    city: 'Los Angeles, CA 90071',
    phone: '(310) 277-2220',
    fax: '(310) 277-2212',
    email: 'jasonengel@engelandengel.com',
  },
  {
    header: 'Forensic Accounting Services',
    name: 'Brandon J. Engel, CPA, CFE',
    address: '350 S Grand Avenue, Suite 3160',
    city: 'Los Angeles, CA 90071',
    phone: '(310) 277-2220',
    fax: '(310) 277-2212',
    email: 'brandon@engelandengel.com',
  }
];

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('There was an error sending your message. Please try again or call (310) 277-2220.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="bg-[#0f3574] min-h-screen text-white flex items-center justify-center pt-20">
          <div className="container-custom py-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-[#D4AF37]/30">
                <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h1 className="text-[2.5rem] font-bold leading-[1.1] tracking-tighter text-white">Message Received</h1>
              <p className="text-xl text-slate-400 mb-10 font-light">
                Thank you for contacting Engel & Engel. We will review your inquiry and respond within 24 hours. For urgent matters, please call (310) 277-2220.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-[#D4AF37] hover:bg-[#B8962E] text-black font-bold px-10 py-4 h-auto text-lg rounded-xl"
              >
                Send Another Message
              </Button>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen">

        {/* ══════════ CINEMATIC HERO ══════════ */}
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
                Contact us today to discuss <br />
                <span className="font-serif italic text-[#D4AF37] font-medium text-[2.5rem]">how we can help you</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* ══════════ MAIN CONTENT ═════════ */}
        <section className="pb-32 -mt-16 relative z-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">

              {/* ▬▬ LEFT COLUMN: CONTACT INFO ▬▬ */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 space-y-8"
              >
                {/* Principal Authorities Cards */}
                {contactPersons.map((person, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col group hover:border-[#D4AF37]/30 transition-all duration-300">
                    <div className="mb-6">
                      <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-2">{person.header}</h3>
                      <p className="text-xl font-bold text-slate-900 leading-tight">{person.name}</p>
                    </div>

                    <div className="space-y-4 text-slate-500 font-light text-sm">
                      <p>
                        {person.address}<br />
                        {person.city}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] transition-colors">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <span>Tel: {person.phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                            </svg>
                          </div>
                          <span>Fax: {person.fax}</span>
                        </div>
                      </div>
                      <div className="pt-2">
                        <a href={`mailto:${person.email}`} className="flex items-center gap-3 text-primary-600 hover:text-primary-800 transition-colors font-medium">
                          <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          {person.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}


              </motion.div>

              {/* ▬▬ RIGHT COLUMN: CONTACT FORM ▬▬ */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7"
              >
                <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.07)] border border-slate-100 relative">
                  <div className="absolute top-12 right-12 text-slate-100 opacity-50 select-none">
                    <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 4v10h16V8l-8 5-8-5zm0-2l8 5 8-5H4z" />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-2">Send an Inquiry</h2>
                    <p className="text-slate-500 font-light mb-12">Submit your details and we will contact you shortly to discuss your case requirements.</p>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Name */}
                        <div className="space-y-2 relative group">
                          <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1 transition-colors">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full bg-[#f8fbff] border-[#172554]/30 rounded-xl px-5 py-4 text-slate-900 focus:border-[#172554]/60 outline-none transition-all placeholder:text-slate-300"
                            style={{ borderWidth: '0.1px' }}
                            placeholder="John Doe"
                          />
                        </div>
                        {/* Email */}
                        <div className="space-y-2 relative group">
                          <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1 transition-colors">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-[#f8fbff] border-[#172554]/30 rounded-xl px-5 py-4 text-slate-900 focus:border-[#172554]/60 outline-none transition-all placeholder:text-slate-300"
                            style={{ borderWidth: '0.1px' }}
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Phone */}
                        <div className="space-y-2 relative group">
                          <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1 transition-colors">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full bg-[#f8fbff] border-[#172554]/30 rounded-xl px-5 py-4 text-slate-900 focus:border-[#172554]/60 outline-none transition-all placeholder:text-slate-300"
                            style={{ borderWidth: '0.1px' }}
                            placeholder="(555) 000-0000"
                          />
                        </div>
                        {/* Company */}
                        <div className="space-y-2 relative group">
                          <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1 transition-colors">Law Firm / Company</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full bg-[#f8fbff] border-[#172554]/30 rounded-xl px-5 py-4 text-slate-900 focus:border-[#172554]/60 outline-none transition-all placeholder:text-slate-300"
                            style={{ borderWidth: '0.1px' }}
                            placeholder="Optional"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2 relative group">
                        <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1 group-focus-within:text-[#D4AF37] transition-colors">Message / Case Overview</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full bg-[#f8fbff] border-[#172554]/30 rounded-xl px-5 py-4 text-slate-900 focus:border-[#172554]/60 outline-none transition-all placeholder:text-slate-300 resize-none"
                          style={{ borderWidth: '0.1px' }}
                          placeholder="How can we assist you?"
                        />
                      </div>

                      <div className="pt-4">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#0f3574] hover:bg-black text-white font-bold py-5 h-auto text-lg rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] group relative overflow-hidden transition-all"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-3">
                            {isSubmitting ? 'Processing...' : 'Send Message'}
                            <svg className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isSubmitting ? 'hidden' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </span>
                        </Button>
                        <p className="text-center text-[10px] uppercase tracking-widest text-slate-400 mt-6 mt-6">
                          Protected by attorney-client privilege measures.
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════ MAP SECTION ══════════ */}
        <section className="pb-32">
          <div className="container-custom">
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl group grayscale hover:grayscale-0 transition-all duration-700">
              {/* Note: In a real app we'd use Google Maps. Using a placeholders/styled div for now */}
              <div className="absolute inset-0 bg-[#0f3574]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.672901974726!2d-118.25206982348505!3d34.05223417315664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c64bd9807669%3A0xc68e592634e5a953!2s350%20S%20Grand%20Ave%20%233160%2C%20Los%20Angeles%2C%20CA%2090071!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, opacity: 0.6 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="absolute top-10 left-10 z-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs border border-white">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Visit Our Office</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  Centrally located in Downtown Los Angeles at <span className="text-slate-900 font-medium">350 S Grand Ave.</span> Validated parking available for all clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <style jsx global>{`
        @keyframes ken-burns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.1) translate(-1%, -1%); }
        }
        .animate-ken-burns {
          animation: ken-burns 20s infinite alternate linear;
        }
      `}</style>
    </>
  );
}

