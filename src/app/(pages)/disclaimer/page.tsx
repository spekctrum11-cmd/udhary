import React from 'react';

export const metadata = {
  title: 'Disclaimer | Udhary.com',
  description: 'Disclaimer for Udhary.com',
};

export default function DisclaimerPage() {
  return (
    <main className="flex-1 bg-surface-container-lowest">
      <section className="bg-deep-navy py-20 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary rounded-full blur-[100px] opacity-30"></div>
        <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
          <h1 className="text-display-lg font-display-lg text-white">Disclaimer</h1>
        </div>
      </section>
      <section className="py-24 min-h-[40vh] flex items-center justify-center">
        <div className="text-center opacity-40">
          <span className="material-symbols-outlined text-7xl mb-6">gavel</span>
          <p className="text-headline-sm font-medium">Disclaimer content will be updated soon.</p>
        </div>
      </section>
    </main>
  );
}
