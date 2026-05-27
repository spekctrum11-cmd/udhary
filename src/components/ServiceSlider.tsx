"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useVelocity, useSpring, useTransform } from 'framer-motion';

const services = [
  { icon: 'flight', label: 'Flight', href: 'https://www.spectrumtravel.in/flight-booking' },
  { icon: 'directions_bus', label: 'Bus', href: 'https://www.spectrumtravel.in/bus-booking' },
  { icon: 'car_rental', label: 'Rental Cars', href: 'https://www.spectrumtravel.in/car-booking' },
  { icon: 'hotel', label: 'Hotels', href: 'https://www.spectrumtravel.in/hotel-booking' },
  { icon: 'travel_explore', label: 'Holidays', href: 'https://www.spectrumtravel.in/holiday-packages' },
  { icon: 'airplane_ticket', label: 'Visa', href: 'https://www.spectrumtravel.in/visa' },
  { icon: 'currency_exchange', label: 'Money Transfer', href: 'https://partner.sahipe.com/app/register' },
  { icon: 'fingerprint', label: 'AEPS', href: 'https://partner.sahipe.com/app/register' },
  { icon: 'sync_alt', label: 'DMT', href: 'https://partner.sahipe.com/app/register' },
  { icon: 'atm', label: 'Micro ATM', href: 'https://partner.sahipe.com/app/register' },
  { icon: 'receipt_long', label: 'CMS', href: 'https://partner.sahipe.com/app/register' },
  { icon: 'payments', label: 'Bill Payment', href: 'https://partner.sahipe.com/app/register' },
  { icon: 'stacked_line_chart', label: 'DEMAT', href: 'https://investesy.investwell.app/app/#/kycOnBoarding/mobileSignUp' },
  { icon: 'savings', label: 'FD', href: 'https://www.shriramfinance.in/fixed-deposit' },
  { icon: 'pie_chart', label: 'Mutual Fund', href: 'https://investesy.investwell.app/app/#/kycOnBoarding/mobileSignUp' },
  { icon: 'request_quote', label: 'Bond', href: 'https://investesy.investwell.app/app/#/kycOnBoarding/mobileSignUp' },
  { icon: 'account_balance', label: 'NPS', href: 'https://investesy.in/' },
  { icon: 'monetization_on', label: 'Digital Gold', href: 'https://investesy.augmont.com/digi-gold' },
  { icon: 'electric_bolt', label: 'Electricity Bill', href: 'https://partner.sahipe.com/app/register' },
  { icon: 'toll', label: 'Fast Tag', href: 'https://partner.sahipe.com/app/register' },
  { icon: 'phone_iphone', label: 'Recharge', href: 'https://partner.sahipe.com/app/register' },
  { icon: 'propane_tank', label: 'LPG', href: 'https://partner.sahipe.com/app/register' },
  { icon: 'satellite_alt', label: 'D2H', href: 'https://partner.sahipe.com/app/register' },
  { icon: 'water_drop', label: 'Water Bill', href: 'https://partner.sahipe.com/app/register' },
  { icon: 'person', label: 'Personal Loan', href: 'https://app.udhary.com/loan-application' },
  { icon: 'business_center', label: 'Business Loan', href: 'https://app.udhary.com/loan-application' },
  { icon: 'real_estate_agent', label: 'Home Loan', href: 'https://app.udhary.com/loan-application' },
  { icon: 'directions_car', label: 'Car Loan', href: 'https://app.udhary.com/loan-application' },
  { icon: 'credit_card', label: 'Credit Card', href: 'https://app.udhary.com/apply-credit-card' },
  { icon: 'shield', label: 'LIC', href: 'https://beemaaa.com/home' },
  { icon: 'health_and_safety', label: 'Health Insurance', href: 'https://beemaaa.com/home' },
  { icon: 'two_wheeler', label: 'Motor Insurance', href: 'https://beemaaa.com/home/Car_Insurance' },
  { icon: 'groups', label: 'Term Insurance', href: 'https://beemaaa.com/home/term-life' },
  { icon: 'elderly', label: 'Retirement Plan', href: 'https://beemaaa.com/' },
  { icon: 'trending_up', label: 'Investment Plan', href: 'https://beemaaa.com/' },
];

const ServiceCard = ({ service }: { service: any }) => {
  const inner = (
    <div className="relative z-10 flex items-center gap-2 md:gap-2.5 px-3 py-1 md:px-4 md:py-1 bg-white/70 backdrop-blur-xl rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white/60 min-w-max transition-all duration-500 group-hover:bg-white group-hover:-translate-y-1.5 group-hover:shadow-[0_15px_35px_rgba(249,115,22,0.12)] overflow-hidden">
      
      {/* Animated glowing gradient background that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-400/0 to-orange-500/0 group-hover:from-orange-500/[0.04] group-hover:via-orange-400/[0.08] group-hover:to-orange-500/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-slate-50/80 flex items-center justify-center group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-500 shrink-0 shadow-inner border border-slate-100/50 group-hover:border-blue-100/80">
        <span className="material-symbols-outlined text-primary text-[13px] md:text-[15px] transition-colors duration-500" style={{ fontVariationSettings: "'wght' 300" }}>{service.icon}</span>
      </div>
      <span className="text-[11px] md:text-[13px] font-normal text-slate-600 whitespace-nowrap tracking-wide group-hover:text-primary transition-colors duration-500 relative z-10">{service.label}</span>
    </div>
  );

  return service.href === "#" ? (
    <div className="group cursor-default pointer-events-auto block outline-none">{inner}</div>
  ) : (
    <Link href={service.href} className="group cursor-pointer pointer-events-auto block outline-none" target="_blank" rel="noopener noreferrer" draggable={false}>
      {inner}
    </Link>
  );
};

const AutoScrollRow = ({ items, reverse = false, speed = 0.5 }: { items: any[], reverse?: boolean, speed?: number }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  
  // Track sub-pixel scrolling accurately
  const exactScrollLeft = useRef(0); 
  
  const isPaused = useRef(false);
  const pauseTimeout = useRef<NodeJS.Timeout | null>(null);

  // Physics & Momentum tracking
  const velocity = useRef(0);
  const lastTime = useRef(0);
  const lastX = useRef(0);
  const inertiaFrameId = useRef(0);

  // ELITE VELOCITY SKEW EFFECT
  const { scrollX } = useScroll({ container: scrollRef });
  const scrollVelocity = useVelocity(scrollX);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  // Map smooth velocity to a skew degree and scale down. 
  // When swiped fast, the items aerodynamically lean and stretch!
  const skew = useTransform(smoothVelocity, [-3000, 3000], [15, -15]);
  const scale = useTransform(smoothVelocity, [-3000, 0, 3000], [0.92, 1, 0.92]);

  const pauseAutoScroll = () => {
    isPaused.current = true;
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    if (inertiaFrameId.current) cancelAnimationFrame(inertiaFrameId.current);
  };

  const resumeAutoScroll = (delay = 2000) => {
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => {
      isPaused.current = false;
      if (scrollRef.current) {
        exactScrollLeft.current = scrollRef.current.scrollLeft;
      }
    }, delay);
  };

  const handleBoundaryWrap = (el: HTMLDivElement) => {
    const unit = el.scrollWidth / 4;
    let didWrap = false;
    
    if (el.scrollLeft <= unit * 0.5) {
      el.scrollLeft += unit;
      exactScrollLeft.current += unit;
      didWrap = true;
    } else if (el.scrollLeft >= unit * 2.5) {
      el.scrollLeft -= unit;
      exactScrollLeft.current -= unit;
      didWrap = true;
    }
    return didWrap;
  };

  useEffect(() => {
    let animationFrameId: number;
    const el = scrollRef.current;
    if (!el) return;

    const scroll = () => {
      if (!isDragging.current && !isPaused.current) {
        if (reverse) {
          exactScrollLeft.current -= speed;
        } else {
          exactScrollLeft.current += speed;
        }
        
        el.scrollLeft = exactScrollLeft.current;
        handleBoundaryWrap(el);
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    setTimeout(() => {
      if (el) {
        const unit = el.scrollWidth / 4;
        el.scrollLeft = unit * 1.5;
        exactScrollLeft.current = unit * 1.5;
      }
    }, 150);

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [reverse, speed]);

  const handleMouseDown = (e: React.MouseEvent) => {
    pauseAutoScroll();
    isDragging.current = true;
    startX.current = e.pageX;
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
    
    lastTime.current = performance.now();
    lastX.current = e.pageX;
    velocity.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX.current) * 1.5; 
    
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    }

    const now = performance.now();
    const dt = now - lastTime.current;
    const dx = x - lastX.current;
    
    if (dt > 0) {
      velocity.current = (velocity.current * 0.4) + ((dx / dt) * 0.6); 
    }
    
    lastTime.current = now;
    lastX.current = x;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDragging.current) {
      resumeAutoScroll(500); 
      return;
    }
    isDragging.current = false;

    const applyInertia = () => {
      if (Math.abs(velocity.current) > 0.05 && scrollRef.current) {
        const el = scrollRef.current;
        el.scrollLeft -= velocity.current * 16 * 1.2; 
        exactScrollLeft.current = el.scrollLeft;
        
        velocity.current *= 0.94; 
        
        handleBoundaryWrap(el);
        inertiaFrameId.current = requestAnimationFrame(applyInertia);
      } else {
        resumeAutoScroll(500);
      }
    };
    
    inertiaFrameId.current = requestAnimationFrame(applyInertia);
  };

  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-auto cursor-grab active:cursor-grabbing w-full scroll-smooth-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-1.5 px-2"
      onMouseEnter={pauseAutoScroll}
      onMouseLeave={handleMouseUpOrLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUpOrLeave}
      onMouseMove={handleMouseMove}
      onTouchStart={pauseAutoScroll}
      onTouchEnd={() => resumeAutoScroll(2000)}
    >
      <div className="flex gap-4 md:gap-6 pr-4 md:pr-6 w-max shrink-0 items-center">
        {[...items, ...items, ...items, ...items].map((service, index) => (
          <motion.div 
            key={`${index}`} 
            style={{ skewX: skew, scale: scale }}
            className="origin-bottom transform-gpu"
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export function ServiceSlider() {
  const halfLength = Math.ceil(services.length / 2);
  const row1 = services.slice(0, halfLength);
  const row2 = services.slice(halfLength);

  return (
    <section className="bg-slate-50/60 border-t border-b border-slate-200/80 overflow-hidden pt-4 pb-4 relative backdrop-blur-md">
      {/* Subtle Premium Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 via-slate-50/20 to-slate-50/0 pointer-events-none -z-10"></div>
      
      {/* Edge Gradients for smooth fading */}
      <div className="absolute top-0 left-0 w-16 md:w-40 h-full bg-gradient-to-r from-slate-50/90 via-slate-50/50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-16 md:w-40 h-full bg-gradient-to-l from-slate-50/90 via-slate-50/50 to-transparent z-10 pointer-events-none"></div>

      <div className="flex flex-col gap-0 select-none">
        <AutoScrollRow items={row1} speed={1.8} />
        <AutoScrollRow items={row2} reverse speed={1.8} />
      </div>
    </section>
  );
}
