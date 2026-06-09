import React from 'react';

export const metadata = {
  title: 'Knowledge Center | Udhary.com',
  description: 'Udhary.com Knowledge Center',
};

export default function KnowledgeCenterPage() {
  return (
    <main className="flex-1 bg-surface-container-lowest">
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
            Learn
          </span>
          <h1 className="text-display-lg font-display-lg text-primary mb-4">
            Knowledge <span className="text-secondary">Center</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Resources, guides and insights to help you make informed financial decisions.
          </p>
        </div>
      </section>
      <section className="py-24 min-h-[40vh] flex items-center justify-center">
        <div className="text-center opacity-40">
          <span className="material-symbols-outlined text-7xl mb-6">menu_book</span>
          <p className="text-headline-sm font-medium">Knowledge Center content will be updated soon.</p>
        </div>
      </section>
    </main>
  );
}
