"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  '/partner/Bajaj-finserv.png',
  '/partner/Captial-global-logo.png',
  '/partner/Incred-finance.jpg',
  '/partner/Roha.jpg',
  '/partner/piramal-Png.png',
];

export function PartnerMarquee() {
  const [activePartner, setActivePartner] = useState<number | null>(null);

  // Triplicate the list so the animation has enough content to scroll seamlessly
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="py-8 lg:py-24 bg-white relative overflow-hidden border-t border-b border-slate-100">
      {/* Edge Gradients for smooth fading effect */}
      <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div className="text-center mb-6 lg:mb-10 relative z-20">
        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">
          Trusted by India&apos;s Top Financial Institutions
        </h3>
      </div>

      {/* The scrolling container */}
      <div className="flex w-max">
        <motion.div
          // Scroll exactly 25% because we have 4 sets of the array.
          // This loops perfectly as it shifts exactly one full set of images over.
          animate={{ x: ["0%", "-25%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32"
        >
          {duplicatedPartners.map((src, index) => {
            const isActive = activePartner === index;
            return (
              <div
                key={index}
                tabIndex={0}
                onClick={() => setActivePartner(isActive ? null : index)}
                onBlur={() => setActivePartner(null)}
                className={`flex-shrink-0 w-40 md:w-48 h-20 relative transition-all duration-500 cursor-pointer outline-none mix-blend-multiply ${isActive
                    ? 'grayscale-0 opacity-100'
                    : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
                  }`}
              >
                <Image
                  src={src}
                  alt={`Partner ${index}`}
                  fill
                  sizes="(max-width: 768px) 160px, 192px"
                  className="object-contain contrast-[1.05] brightness-[1.05]"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
