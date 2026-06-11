"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonialsData = [
  {
    id: 1,
    name: "Sara Bansal",
    initials: "SB",
    image: "/Testinomial/Sara-bansal.jpg",
    bg: "bg-gradient-to-br from-blue-600 to-blue-800",
    stars: 4.5,
    text: "I had a fantastic experience securing a mortgage loan through Udhary.com. As a first-time homebuyer, I had many questions and their team patiently guided me through each step, ensuring I understood the process thoroughly. My dream came true of owning my own house and I owe a big thank you to Udhary.com for making it possible.",
  },
  {
    id: 2,
    name: "Happy Singh",
    initials: "HS",
    image: "/Testinomial/Happy-singh.jpg",
    bg: "bg-gradient-to-br from-slate-800 to-slate-900",
    stars: 5,
    text: "Udhary.com truly understands the needs of small businesses. Their flexible loan options and competitive rates helped my company through a challenging and tough period. What impressed me. Their commitment to client satisfaction is commendable.my business not only survived but is now on the path to growth.",
  },
  {
    id: 3,
    name: "Rhea Sharma",
    initials: "RS",
    image: "/Testinomial/Rhea-Sharma.jpg",
    bg: "bg-gradient-to-br from-orange-500 to-orange-700",
    stars: 4,
    text: "Choosing Udhary.com for refinancing my existing loans was one of the best decisions I made. Their team went above and beyond to understand my financial situation and provided me with a refinancing option that significantly reduced my monthly payments and overall interest costs.All thanks to Udhary.com expertise and support.",
  }
];

export function TestimonialsSection() {
  const [cards, setCards] = useState(testimonialsData);

  // Function to move the top card to the back of the deck
  const sendToBack = () => {
    setCards((prev) => {
      const newArray = [...prev];
      const first = newArray.shift();
      if (first) newArray.push(first);
      return newArray;
    });
  };

  return (
    <section className="py-6 lg:py-12 bg-slate-50 relative overflow-hidden">
      {/* Ambient glowing blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-100 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 opacity-60 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10 flex flex-col items-center">

        {/* Section Header */}
        <div className="text-center mb-4 lg:mb-8">
          <span className="inline-block px-3 py-1 bg-blue-100/50 text-blue-700 font-bold text-[9px] md:text-[10px] tracking-widest uppercase rounded-full mb-2 shadow-sm border border-blue-200/50 backdrop-blur-sm">
            Wall of Love
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Why People Prefer Udhary
          </h2>
          <p className="text-[13px] md:text-sm text-slate-600 max-w-xl mx-auto font-medium">
            Join thousands of satisfied Indians who found their true financial partner in Udhary.
          </p>
        </div>

        {/* Desktop Grid: Simple 3 cards in line */}
        <div className="hidden lg:grid grid-cols-3 gap-5 w-full mt-2">
          {testimonialsData.map((card) => (
            <div key={card.id} className={`relative p-6 lg:p-8 rounded-[1.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 text-white ${card.bg} flex flex-col justify-between`}>
              <span className="absolute top-2 right-4 text-7xl lg:text-8xl text-white/10 font-serif leading-none select-none pointer-events-none">
                "
              </span>
              <div className="relative z-10">
                <div className="flex gap-0.5 text-yellow-400 mb-4 drop-shadow-md">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const isFull = i + 1 <= card.stars;
                    const isHalf = !isFull && i + 0.5 <= card.stars;
                    return (
                      <span key={i} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: isFull || isHalf ? "'FILL' 1" : "'FILL' 0" }}>
                        {isHalf ? "star_half" : "star"}
                      </span>
                    );
                  })}
                </div>
                <p className="text-[13px] text-white/95 leading-[1.6] font-medium drop-shadow-sm">
                  {card.text}
                </p>
              </div>
              <div className="flex items-center gap-3 relative z-10 mt-6 pt-4 border-t border-white/20">
                {card.image ? (
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-white/30 shadow-inner relative">
                    <Image src={card.image} alt={card.name} fill sizes="40px" className="object-cover" />
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center font-bold shadow-inner border border-white/30 backdrop-blur-md shrink-0">
                    {card.initials}
                  </div>
                )}
                <div>
                  <div className="font-bold text-white text-[14px] drop-shadow-sm">{card.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet: Interactive 3D Card Deck */}
        <div className="flex lg:hidden relative w-full max-w-[300px] md:max-w-[360px] h-[340px] items-center justify-center perspective-1000 mt-2">
          {cards.map((card, index) => {
            const isFront = index === 0;
            // Only render top 3 cards to keep DOM light, but keep them in array
            if (index > 3) return null;

            return (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{
                  opacity: 1 - index * 0.15,
                  scale: 1 - index * 0.05,
                  y: index * 22,
                  zIndex: cards.length - index,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                drag={isFront ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  // If swiped left/right far enough or fast enough, cycle the deck
                  if (offset.x > 100 || offset.x < -100 || Math.abs(swipe) > 500) {
                    sendToBack();
                  }
                }}
                whileDrag={{ scale: 1.05, rotate: 2, cursor: "grabbing" }}
                onClick={() => {
                  if (isFront) sendToBack();
                }}
                className={`absolute w-full h-full p-5 rounded-[1.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.15)] text-white ${card.bg} flex flex-col justify-between ${isFront ? "cursor-grab" : "cursor-default"}`}
              >
                {/* Decorative Giant Quote */}
                <span className="absolute top-3 right-4 text-7xl text-white/10 font-serif leading-none select-none pointer-events-none">
                  "
                </span>

                <div className="relative z-10">
                  <div className="flex gap-0.5 text-yellow-400 mb-3 drop-shadow-md">
                    {Array.from({ length: 5 }).map((_, i) => {
                      const isFull = i + 1 <= card.stars;
                      const isHalf = !isFull && i + 0.5 <= card.stars;
                      return (
                        <span key={i} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: isFull || isHalf ? "'FILL' 1" : "'FILL' 0" }}>
                          {isHalf ? "star_half" : "star"}
                        </span>
                      );
                    })}
                  </div>
                  <p className="text-[12px] text-white/95 leading-[1.5] font-medium drop-shadow-sm">
                    {card.text}
                  </p>
                </div>

                <div className="flex items-center gap-2 relative z-10 mt-auto pt-3 border-t border-white/20">
                  {card.image ? (
                    <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border-2 border-white/30 shadow-inner relative">
                      <Image src={card.image} alt={card.name} fill sizes="32px" className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-white/20 text-white rounded-full flex items-center justify-center font-bold text-[11px] shadow-inner border border-white/30 backdrop-blur-md shrink-0">
                      {card.initials}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-white text-[13px] drop-shadow-sm">{card.name}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Swipe Hint */}
        <div className="flex lg:hidden mt-8 flex-col items-center justify-center gap-1 opacity-60">
          <div className="flex gap-2 items-center animate-bounce">
            <span className="material-symbols-outlined text-[20px] text-slate-500">swipe</span>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
            Swipe or tap top card to explore
          </span>
        </div>

      </div>
    </section>
  );
}
