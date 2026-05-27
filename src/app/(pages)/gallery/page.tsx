import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Gallery | Udhary.com',
  description: 'Explore the Udhary.com photo gallery.',
};

// Removed duplicates like 'Gallery-3 (1).jpg'
const images = [
  'Gallery-1.jpg',
  'Gallery-2-1.jpg',
  'Gallery-3.jpg',
  'Gallery-4.jpg',
  'Gallery-5.jpg',
  'Gallery-6.jpg',
  'Gallery-7.jpg',
  'Gallery-8.jpg',
  'Gallery-9.jpg',
  'Gallery-11.jpg',
  'Gallery-12.jpg',
  'Gallery-13.jpg',
  'Gallery-17.jpg',
  'Gallery-18.jpg',
  'Gallery-19.jpg',
  'Gallery-20.jpg',
];

export default function GalleryPage() {
  return (
    <main className="flex-1 bg-slate-50">
      {/* Header Section matching the premium style */}
      <section className="bg-slate-900 py-16 lg:py-24 relative overflow-hidden">
        {/* Subtle premium background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-400 font-bold text-xs tracking-widest uppercase rounded-full mb-6 border border-blue-500/20 shadow-sm backdrop-blur-sm">
            Memories
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Gallery
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-[16px] md:text-lg leading-relaxed">
            A glimpse into our events, celebrations, and the vibrant culture that makes Udhary.com special.
          </p>
        </div>
      </section>

      {/* Masonry Gallery Section */}
      <section className="py-16 md:py-24 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
        {/* CSS Multi-column layout for masonry effect */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((filename, index) => (
            <div 
              key={index} 
              className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-sm bg-white border border-slate-100"
            >
              {/* Image Container */}
              <div className="relative w-full overflow-hidden rounded-2xl bg-slate-50">
                <Image
                  src={`/Gallery/${filename}`}
                  alt={`Gallery Image ${index + 1}`}
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
