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
      {/* Header Section */}
                  {/* Elegant Ambient Background */}
      <section className="bg-slate-50 pt-20 pb-16 border-b border-slate-200 relative overflow-hidden">
        {/* Ambient Aurora Glows (Highly Visible) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[150px] -left-[100px] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-[150px] -right-[100px] w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-[80px]"></div>
        </div>
        
        {/* Crisp Top Highlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
        
        <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-primary font-bold text-xs tracking-widest uppercase rounded-full mb-6 border border-blue-500/20 shadow-sm backdrop-blur-sm">
            Milestones
          </span>
          <h1 className="text-display-lg font-display-lg text-primary mb-4">
            Awards & <span className="text-secondary">Recognition</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Celebrating our milestones and the trust we have built with our partners across India.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
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
                    unoptimized
                    priority
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
