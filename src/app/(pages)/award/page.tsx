import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Awards & Recognition | Udhary.com',
  description: 'Udhary.com Awards and Recognitions',
};

const awards = [
  { id: 1, src: '/Awards/Spectrum-Finance-Awards-1.jpg', alt: 'Spectrum Finance Award 1' },
  { id: 2, src: '/Awards/Spectrum-Finance-Awards-2.jpg', alt: 'Spectrum Finance Award 2' },
  { id: 3, src: '/Awards/Spectrum-Finance-Awards-3.jpg', alt: 'Spectrum Finance Award 3' },
  { id: 4, src: '/Awards/Spectrum-Finance-Awards-4.jpg', alt: 'Spectrum Finance Award 4' },
];

export default function AwardPage() {
  return (
    <main className="flex-1 bg-slate-50">
      <section className="bg-slate-900 py-16 lg:py-24 relative overflow-hidden">
        {/* Subtle premium background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-400 font-bold text-xs tracking-widest uppercase rounded-full mb-6 border border-blue-500/20 shadow-sm backdrop-blur-sm">
            Milestones
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Awards & Recognition
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-[16px] md:text-lg leading-relaxed">
            Celebrating our milestones and the trust we have built with our partners across India.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {awards.map((award) => (
              <div 
                key={award.id} 
                className="group rounded-[2rem] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 border border-slate-100 flex flex-col p-4 md:p-6"
              >
                <div className="relative w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center p-2">
                  <Image
                    src={award.src}
                    alt={award.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-500 drop-shadow-sm"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
