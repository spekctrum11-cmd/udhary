import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-[#060C17] text-white pt-20 pb-10 relative overflow-hidden border-t border-slate-800 mt-auto">
      {/* Subtle Premium Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link href="/" className="mb-6 inline-block">
              <Image 
                src="/logo.png" 
                alt="Udhary.com Logo" 
                width={160} 
                height={50} 
                className="h-12 w-auto object-contain"
                style={{ width: 'auto' }}
              />
            </Link>
            <p className="text-[14px] text-slate-400 mb-8 leading-relaxed max-w-[280px] lg:max-w-sm">
              Spectrum Fintech Private Limited. Your trusted partner for seamless financial journeys in modern India.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="https://instagram.com/udhary.com_/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group shadow-lg shadow-black/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-white transition-colors">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/people/Udharycom/61575830348623/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group shadow-lg shadow-black/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-white transition-colors">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="mailto:Care@Udhary.com" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 group shadow-lg shadow-black/20">
                <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-white transition-colors">mail</span>
              </a>
            </div>
          </div>

          {/* Links & Contact Section */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
            
            {/* Quick Links */}
            <div>
              <h4 className="text-[15px] font-bold text-white mb-6 tracking-wider uppercase">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link href="/about-us" className="text-[14px] text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-flex font-medium">About Us</Link></li>
                <li><Link href="/contact-us" className="text-[14px] text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-flex font-medium">Contact Us</Link></li>
                <li><Link href="/career" className="text-[14px] text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-flex font-medium">Careers</Link></li>
                <li><Link href="/faqs" className="text-[14px] text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-flex font-medium">FAQs</Link></li>
                <li><Link href="/blog" className="text-[14px] text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-flex font-medium">Blog</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[15px] font-bold text-white mb-6 tracking-wider uppercase">Legal & Info</h4>
              <ul className="space-y-4">
                <li><Link href="/privacy-policy" className="text-[14px] text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-flex font-medium">Privacy Policy</Link></li>
                <li><Link href="/refund-policy" className="text-[14px] text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-flex font-medium">Refund Policy</Link></li>
                <li><Link href="/disclaimer" className="text-[14px] text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-flex font-medium">Disclaimer</Link></li>
                <li><Link href="/knowledge-center" className="text-[14px] text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-flex font-medium">Knowledge Center</Link></li>
                <li><Link href="/gallery" className="text-[14px] text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-flex font-medium">Gallery</Link></li>
                <li><Link href="/award" className="text-[14px] text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-flex font-medium">Awards</Link></li>
              </ul>
            </div>

            {/* Contact (Spans 2 columns on Mobile for readability) */}
            <div className="col-span-2 md:col-span-1 border-t border-slate-800/50 md:border-t-0 pt-8 md:pt-0">
              <h4 className="text-[15px] font-bold text-white mb-6 tracking-wider uppercase">Get in Touch</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-blue-500/50 transition-colors">
                    <span className="material-symbols-outlined text-[16px] text-blue-500">location_on</span>
                  </div>
                  <span className="text-[13.5px] text-slate-400 leading-relaxed mt-1">Unit 502, 5th Floor, Time House Tower, Delhi-110052</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-green-500/50 transition-colors">
                    <span className="material-symbols-outlined text-[16px] text-green-500">call</span>
                  </div>
                  <span className="text-[14px] text-slate-400 font-medium">+91 - 7669755501</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-orange-500/50 transition-colors">
                    <span className="material-symbols-outlined text-[16px] text-orange-500">mail</span>
                  </div>
                  <a href="mailto:Care@Udhary.com" className="text-[14px] text-slate-400 hover:text-white transition-colors font-medium">Care@Udhary.com</a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-slate-500 font-medium tracking-wide">
            © {new Date().getFullYear()} Udhary.com. All rights reserved.
          </p>
          <p className="text-[13px] text-slate-500 font-medium flex items-center gap-2">
            Your trusted financial partner
            <span className="material-symbols-outlined text-[14px] text-orange-500">verified</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
