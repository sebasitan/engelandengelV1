'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export default function ContactCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-primary-950 overflow-hidden text-white">
      {/* Cinematic architectural background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.08)_0%,transparent_60%)]" />
        <div className="absolute left-10 top-0 bottom-0 w-px bg-white/5" />
        <div className="absolute right-10 top-0 bottom-0 w-px bg-white/5" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Context & Leads */}
          <div className="lg:col-span-12 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tighter">
                Contact us today <br />
                <span className="font-serif italic text-[#D4AF37] text-2xl md:text-4xl block mt-2">to discuss how we can help you</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  name: 'Jason A. Engel',
                  creds: 'CPA, CFE, CIRA, CVA, MAFF, ABV',
                  image: '/images/team/jason-engel.jpg',
                  address: '350 S Grand Avenue, Suite 3160',
                  city: 'Los Angeles, CA 90071',
                  tel: '(310) 277-2220',
                  fax: '(310) 277-2212',
                  email: 'jasonengel@engelandengel.com'
                },
                {
                  name: 'Brandon J. Engel',
                  creds: 'CPA, CFE, ABV',
                  image: '/images/team/brandon-engel.jpg',
                  address: '350 S Grand Avenue, Suite 3160',
                  city: 'Los Angeles, CA 90071',
                  tel: '(310) 277-2220',
                  fax: '(310) 277-2212',
                  email: 'brandon@engelandengel.com'
                }
              ].map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                  className="p-6 border border-white/10 group hover:border-[#D4AF37]/50 transition-all duration-500 bg-white/5 backdrop-blur-sm relative"
                >
                  <div className="flex items-start space-x-6">
                    <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-[#D4AF37]/20 flex-shrink-0">
                      <Image src={member.image} alt={member.name} fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="flex-1">

                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-[10px] font-bold text-[#D4AF37]/80 tracking-widest uppercase mb-4">{member.creds}</p>

                      <div className="space-y-1 text-sm text-white font-normal">
                        <p className="text-white">{member.address}</p>
                        <p className="text-white">{member.city}</p>
                        <p className="text-white font-bold">TEL: {member.tel}</p>
                        <p className="text-white font-bold">FAX: {member.fax}</p>
                        <p><span className="text-white font-bold mr-2">EMAIL:</span> <a href={`mailto:${member.email}`} className="text-white hover:underline transition-colors">{member.email}</a></p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Stakes Inquiry Form */}
          <div className="lg:col-span-12 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative p-8 md:p-16 bg-white shadow-2xl overflow-hidden h-full"
            >
              {/* Form Side Accent */}
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#D4AF37]" />

              <h3 className="text-2xl md:text-3xl font-bold text-primary-950 mb-10 uppercase tracking-widest">Contact Us</h3>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-bold text-primary-950 uppercase tracking-[0.3em] mb-2">Your Name</label>
                    <input type="text" placeholder="YOUR NAME*" className="w-full px-4 py-3 bg-[#f8fbff] border-[#172554]/30 focus:border-[#0B253E] outline-none transition-all text-primary-950 font-bold placeholder:text-gray-400" style={{ borderWidth: '0.1px' }} required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-primary-950 uppercase tracking-[0.3em] mb-2">Your Email</label>
                    <input type="email" placeholder="YOUR EMAIL*" className="w-full px-4 py-3 bg-[#f8fbff] border-[#172554]/30 focus:border-[#0B253E] outline-none transition-all text-primary-950 font-bold placeholder:text-gray-400" style={{ borderWidth: '0.1px' }} required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-primary-950 uppercase tracking-[0.3em] mb-2">Your Phone Number</label>
                    <input type="text" placeholder="YOUR PHONE NUMBER" className="w-full px-4 py-3 bg-[#f8fbff] border-[#172554]/30 focus:border-[#0B253E] outline-none transition-all text-primary-950 font-bold placeholder:text-gray-400" style={{ borderWidth: '0.1px' }} />
                  </div>
                </div>

                <div className="space-y-6 h-full">
                  <label className="block text-[10px] font-bold text-primary-950 uppercase tracking-[0.3em] mb-1">Enter a Brief Message</label>
                  <textarea
                    placeholder="ENTER A BRIEF MESSAGE"
                    rows={6}
                    className="w-full px-4 py-3 bg-[#f8fbff] border-[#172554]/30 focus:border-[#0B253E] outline-none transition-all text-primary-950 font-bold placeholder:text-gray-400 resize-none h-full min-h-[240px]"
                    style={{ borderWidth: '0.1px' }}
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-primary-950 uppercase tracking-[0.3em] mb-2">Google reCAPTCHA</label>
                  <div className="w-full h-20 border-[#172554]/30 bg-[#f8fbff] flex items-center justify-center text-sm text-primary-950/70" style={{ borderWidth: '0.1px' }}>
                    reCAPTCHA widget placeholder
                  </div>
                </div>

                <div className="md:col-span-2 pt-8">
                  <Button className="w-full py-8 bg-primary-950 hover:bg-[#D4AF37] text-white font-bold tracking-[0.5em] uppercase text-xs transition-all duration-500 rounded-none group relative overflow-hidden">
                    <span className="relative z-10">SEND MESSAGE</span>
                    <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </Button>
                </div>
              </form>
            </motion.div>


          </div>
        </div>
      </div>
    </section>
  )
}
