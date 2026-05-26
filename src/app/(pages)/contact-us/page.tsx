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
      <section className="bg-surface-blue py-20 border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h1 className="text-display-lg font-display-lg text-primary mb-4">Contact <span className="text-secondary">Us</span></h1>
          <p className="text-body-lg text-on-surface-variant">We'd love to hear from you. Please fill out the form below or reach us through our contact details.</p>
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
