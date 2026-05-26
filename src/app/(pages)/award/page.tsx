import React from 'react';

export const metadata = {
  title: 'Awards | Udhary.com',
  description: 'Udhary.com Awards',
};

export default function AwardPage() {
  return (
    <main className="flex-1 bg-surface-container-lowest">
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10"></div>
        <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
          <h1 className="text-display-lg font-display-lg text-white">Awards & Recognition</h1>
        </div>
      </section>
      <section className="py-24 min-h-[40vh] flex items-center justify-center">
        <div className="text-center opacity-40">
          <span className="material-symbols-outlined text-7xl mb-6 text-secondary">workspace_premium</span>
          <p className="text-headline-sm font-medium">Awards content will be updated soon.</p>
        </div>
      </section>
    </main>
  );
}
