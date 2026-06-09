import React from "react";

export function WhatsAppFAB() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center justify-center">
      {/* Continuous Circular Line Ripples */}
      <div 
        className="absolute inset-0 rounded-full border-2 border-blue-500/60 animate-ping pointer-events-none" 
        style={{ animationDuration: '3s' }}
      ></div>
      <div 
        className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-ping pointer-events-none" 
        style={{ animationDuration: '3s', animationDelay: '1s' }}
      ></div>
      <div 
        className="absolute inset-0 rounded-full border-2 border-blue-300/40 animate-ping pointer-events-none" 
        style={{ animationDuration: '3s', animationDelay: '2s' }}
      ></div>

      {/* Main FAB */}
      <a
        href="https://wa.me/917669755501"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(59,130,246,0.3)] group"
      >
        {/* Base Gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-blue-500 transition-opacity duration-500"></div>
        
        {/* Hover Glowing Gradient & Shadow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all duration-500"></div>

        <span className="material-symbols-outlined text-[32px] md:text-[34px] relative z-10 text-white transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
          chat
        </span>
        
        {/* Tooltip with Arrow */}
        <span className="absolute right-[calc(100%+20px)] top-1/2 -translate-y-1/2 bg-white text-slate-800 px-4 py-2.5 rounded-2xl text-sm font-bold shadow-[0_5px_20px_rgba(0,0,0,0.08)] border border-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-3 group-hover:translate-x-0 whitespace-nowrap pointer-events-none">
          WhatsApp Us
          {/* Arrow pointing right */}
          <span className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-white/95 rotate-45 border-r border-t border-transparent rounded-[2px]"></span>
        </span>
      </a>
    </div>
  );
}
