import React from 'react';
import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | Udhary.com',
  description: 'Get in touch with Udhary.com. We are here to assist you with all your loan and financial queries.',
};

export default function ContactUsPage() {
  return (
    <main className="flex-1 bg-surface-container-lowest">
      {/* Hero Section */}
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
            Get in touch
          </span>
          <h1 className="text-display-lg font-display-lg text-primary mb-4">
            Contact <span className="text-secondary">Us</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            We'd love to hear from you. Please fill out the form below or reach us through our contact details.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <div className="space-y-8 lg:mt-8">
            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 bg-surface-blue text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">location_on</span>
              </div>
              <div>
                <h3 className="text-headline-sm font-bold text-primary mb-2">Address</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Unit 502, 5th Floor, Plot Number 5, Time House Tower, Wajirpur Community Centre, WIA, Delhi-110052.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 bg-surface-blue text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">call</span>
              </div>
              <div>
                <h3 className="text-headline-sm font-bold text-primary mb-2">Contact Us</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  +91 - 7669755501
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 bg-surface-blue text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">mail</span>
              </div>
              <div>
                <h3 className="text-headline-sm font-bold text-primary mb-2">Mailing Address</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Care@Udhary.com
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
