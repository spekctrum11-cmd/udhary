"use client";

import React, { useState } from 'react';

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    timeHours: '',
    timeMinutes: '',
    timeAmPm: 'AM',
    query: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) newErrors.firstName = "This field is required. Please input your first name.";
    if (!formData.lastName.trim()) newErrors.lastName = "This field is required. Please input your last name.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setStep(2);
    }
  };

  const handlePrevious = () => {
    setStep(1);
  };

  const handleSubmit = async () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.phone.trim()) newErrors.phone = "This field is required. Please input your phone number.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-outline-variant/20 flex flex-col items-center justify-center min-h-[400px] text-center animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-5xl">check_circle</span>
        </div>
        <h2 className="text-headline-md font-bold text-primary mb-2">Appointment Booked!</h2>
        <p className="text-on-surface-variant mb-8">
          Thank you, {formData.firstName}. Your appointment details have been successfully received and an email confirmation has been sent.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setStep(1);
            setFormData({ firstName: '', lastName: '', email: '', phone: '', date: '', timeHours: '', timeMinutes: '', timeAmPm: 'AM', query: '' });
          }}
          className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-deep-navy transition-colors cursor-pointer"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-outline-variant/20 relative overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-surface-container">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: step === 1 ? '50%' : '100%' }}
        ></div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <h2 className="text-headline-md font-bold text-primary">Send us a Message</h2>
        <span className="text-label-sm font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
          Step {step} of 2
        </span>
      </div>
      <p className="text-on-surface-variant mb-8">Please fill in the details below to book an appointment.</p>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className={`transition-all duration-500 ${step === 1 ? 'opacity-100 translate-x-0' : 'hidden opacity-0 -translate-x-full'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-label-md font-bold text-on-surface">First Name *</label>
              <input
                id="firstName"
                type="text"
                placeholder="E.g. Himanshu"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-error bg-error/5' : 'border-outline-variant bg-surface-container-lowest focus:ring-primary'} focus:outline-none focus:ring-2 transition-shadow`}
              />
              {errors.firstName && <p className="text-error text-label-sm animate-in fade-in slide-in-from-top-1">{errors.firstName}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-label-md font-bold text-on-surface">Last Name *</label>
              <input
                id="lastName"
                type="text"
                placeholder="E.g. Kumar"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-error bg-error/5' : 'border-outline-variant bg-surface-container-lowest focus:ring-primary'} focus:outline-none focus:ring-2 transition-shadow`}
              />
              {errors.lastName && <p className="text-error text-label-sm animate-in fade-in slide-in-from-top-1">{errors.lastName}</p>}
            </div>
          </div>
          <div className="mt-8">
            <button
              type="button"
              onClick={handleNext}
              className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-deep-navy transition-all active:scale-[0.98] shadow-md hover:shadow-lg flex justify-center items-center gap-2 group cursor-pointer"
            >
              Next
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className={`transition-all duration-500 ${step === 2 ? 'opacity-100 translate-x-0 block' : 'hidden opacity-0 translate-x-full'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-label-md font-bold text-on-surface">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="E.g. himanshu@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone-input" className="text-label-md font-bold text-on-surface cursor-pointer">Phone Number *</label>
              <div className={`flex items-center rounded-xl border ${errors.phone ? 'border-error bg-error/5 focus-within:ring-1 focus-within:ring-error' : 'border-outline-variant bg-surface-container-lowest focus-within:border-primary focus-within:ring-2 focus-within:ring-primary'} transition-all overflow-hidden group`}>
                <label htmlFor="phone-input" className="flex items-center gap-2 pl-4 pr-3 py-3 border-r border-outline-variant/30 bg-surface-blue/50 select-none transition-colors group-focus-within:bg-primary/5 cursor-pointer">
                  <span className="text-lg leading-none filter drop-shadow-sm">🇮🇳</span>
                  <span className="font-bold text-primary">+91</span>
                </label>
                <input
                  id="phone-input"
                  type="tel"
                  placeholder="E.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent focus:outline-none placeholder:text-on-surface-variant/50 font-medium text-on-surface"
                />
              </div>
              {errors.phone && <p className="text-error text-label-sm animate-in fade-in slide-in-from-top-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label htmlFor="date" className="text-label-md font-bold text-on-surface">Date</label>
              <input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-shadow cursor-pointer"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="timeHours" className="text-label-md font-bold text-on-surface">Time</label>
              <div className="flex items-center gap-2">
                <select
                  id="timeHours"
                  aria-label="Hours"
                  value={formData.timeHours}
                  onChange={(e) => setFormData({ ...formData, timeHours: e.target.value })}
                  className="flex-1 px-3 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-shadow cursor-pointer"
                >
                  <option value="" disabled>Hours</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map(h => (
                    <option key={h} value={h < 10 ? `0${h}` : h}>{h < 10 ? `0${h}` : h}</option>
                  ))}
                </select>
                <span className="font-bold">:</span>
                <select
                  id="timeMinutes"
                  aria-label="Minutes"
                  value={formData.timeMinutes}
                  onChange={(e) => setFormData({ ...formData, timeMinutes: e.target.value })}
                  className="flex-1 px-3 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-shadow cursor-pointer"
                >
                  <option value="" disabled>Mins</option>
                  {['00', '15', '30', '45'].map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <select
                  id="timeAmPm"
                  aria-label="AM PM"
                  value={formData.timeAmPm}
                  onChange={(e) => setFormData({ ...formData, timeAmPm: e.target.value })}
                  className="px-3 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-shadow font-bold cursor-pointer"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-2 mb-8">
            <label htmlFor="query" className="text-label-md font-bold text-on-surface">Query</label>
            <textarea
              id="query"
              rows={4}
              placeholder="How can we help you today?"
              value={formData.query}
              onChange={(e) => setFormData({ ...formData, query: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-none"
            />
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-4">
            <button
              type="button"
              onClick={handlePrevious}
              className="w-full sm:w-auto px-6 py-4 bg-surface-container-low text-on-surface-variant font-bold rounded-xl hover:bg-surface-container-high transition-colors flex justify-center items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Previous
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full sm:flex-1 py-4 bg-primary text-white font-bold rounded-xl hover:bg-deep-navy transition-all active:scale-[0.98] shadow-md hover:shadow-lg flex justify-center items-center gap-2 disabled:opacity-70 disabled:active:scale-100 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin">progress_activity</span>
                  Processing...
                </>
              ) : (
                <>
                  Book Appointment
                  <span className="material-symbols-outlined">event_available</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
