"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FcApproval, FcLineChart, FcRating, FcFlashOn, FcDepartment, FcMoneyTransfer, FcSafe, FcCurrencyExchange, FcBriefcase, FcVip,
  FcSalesPerformance, FcShop, FcPieChart, FcDoughnutChart, FcDocument, FcComboChart, FcBusiness, FcBusinesswoman, FcBusinessman, FcBusinessContact,
  FcBarChart, FcAreaChart, FcStatistics, FcPaid, FcOrganization, FcHome, FcGraduationCap, FcGoodDecision, FcFinePrint, FcAutomotive
} from "react-icons/fc";

// --- Data Generation ---

const names = [
  "Ankit", "Priya", "Amit", "Neha", "Rahul", "Sneha", "Vikram", "Pooja", "Ravi", "Anjali",
  "Rohan", "Kavita", "Suresh", "Divya", "Manish", "Riya", "Karan", "Kirti", "Arun", "Simran",
  "Nitin", "Aarti", "Vikas", "Swati", "Deepak", "Nisha", "Saurabh", "Megha", "Tarun", "Shruti",
  "Gaurav", "Preeti", "Mohit", "Shikha", "Ashish", "Jyoti", "Prateek", "Sakshi", "Harish", "Pallavi"
];

const cities = [
  "Jaipur", "Bangalore", "Pune", "Mumbai", "Delhi", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Surat",
  "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara",
  "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi"
];

const banks = [
  "HDFC Bank", "ICICI Bank", "SBI", "Axis Bank", "Kotak Mahindra", "IndusInd Bank", "Yes Bank", "PNB", "Bank of Baroda", "IDFC First"
];

type Notification = {
  id: string;
  message: string;
  iconData: { icon: any; cardBg: string; border: string; orb: string };
};

const generateNotifications = (): Notification[] => {
  const notifications: Notification[] = [];

  // Seedable pseudo-random generator for consistent client/server rendering
  let seed = 12345;
  const random = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  const getRandomItem = <T,>(arr: T[]) => arr[Math.floor(random() * arr.length)];

  for (let i = 0; i < 300; i++) {
    const name = getRandomItem(names);
    const city = getRandomItem(cities);
    const bank = getRandomItem(banks);

    const amount = Math.floor(random() * 15 + 1) * 100000; // 1L to 15L
    const amountFormatted = amount >= 100000 ? `₹${amount / 100000}L` : `₹${amount.toLocaleString('en-IN')}`;
    const rate = (10 + random() * 3).toFixed(1); // 10.0% to 13.0%
    const randomCashback = `₹${Math.floor(random() * 5 + 1) * 1000}`;
    const randomSip = `₹${Math.floor(random() * 5 + 1) * 1000}`;
    const randomTwoWheeler = `₹${Math.floor(random() * 5 + 5) * 10000}`;
    const randomBonus = `₹${Math.floor(random() * 3 + 1) * 500}`;

    const templates = [
      // Personal Loans
      { message: `${name}'s personal loan of ${amountFormatted} was instantly approved in ${city} 🤩💸`, iconData: { icon: FcApproval, cardBg: "bg-emerald-950", border: "border-emerald-800/50", orb: "bg-emerald-500" } },
      { message: `${name} secured a personal loan from ${bank} at ${rate}% p.a. ✨🥳`, iconData: { icon: FcGoodDecision, cardBg: "bg-emerald-950", border: "border-emerald-800/50", orb: "bg-emerald-500" } },
      { message: `Instant cash! ${name} received a personal loan disbursement of ${amountFormatted} 🚀`, iconData: { icon: FcMoneyTransfer, cardBg: "bg-green-950", border: "border-green-800/50", orb: "bg-green-500" } },
      { message: `${name} from ${city} got zero processing fees 💸 on a personal loan from ${bank} 🎉😍`, iconData: { icon: FcFinePrint, cardBg: "bg-slate-900", border: "border-slate-800/50", orb: "bg-slate-500" } },
      { message: `${name} just received a top-up loan of ${amountFormatted} 💵 from ${bank} 😄`, iconData: { icon: FcComboChart, cardBg: "bg-yellow-950", border: "border-yellow-800/50", orb: "bg-yellow-500" } },

      // Business Loans
      { message: `${name}'s business in ${city} received a ${amountFormatted} working capital boost! 💼📈😎`, iconData: { icon: FcSalesPerformance, cardBg: "bg-teal-950", border: "border-teal-800/50", orb: "bg-teal-500" } },
      { message: `${name} from ${city} disbursed a business loan of ${amountFormatted} 🏭🙌`, iconData: { icon: FcBusiness, cardBg: "bg-emerald-950", border: "border-emerald-800/50", orb: "bg-emerald-500" } },
      { message: `A female entrepreneur 👩‍💼, ${name} from ${city}, secured ${amountFormatted} in funding 💡👏`, iconData: { icon: FcBusinesswoman, cardBg: "bg-blue-950", border: "border-blue-800/50", orb: "bg-blue-500" } },
      { message: `🏢 ${name} started an FSC with a target of ${amountFormatted} in ${city} 🙌`, iconData: { icon: FcDepartment, cardBg: "bg-indigo-950", border: "border-indigo-800/50", orb: "bg-indigo-500" } },
      { message: `${name}'s SME in ${city} just got approved for a ${amountFormatted} machinery loan ⚙️`, iconData: { icon: FcOrganization, cardBg: "bg-orange-950", border: "border-orange-800/50", orb: "bg-orange-500" } },

      // Home Loans
      { message: `Dream come true! 🔑 ${name}'s home loan application for ${amountFormatted} was just sanctioned in ${city} 🏡😍`, iconData: { icon: FcHome, cardBg: "bg-teal-950", border: "border-teal-800/50", orb: "bg-teal-500" } },
      { message: `${name} secured a home loan from ${bank} at ${rate}% 🏠 Keys handed over in ${city}!`, iconData: { icon: FcSafe, cardBg: "bg-cyan-950", border: "border-cyan-800/50", orb: "bg-cyan-500" } },
      { message: `${name}'s home renovation loan of ${amountFormatted} was approved instantly! 🛠️`, iconData: { icon: FcFlashOn, cardBg: "bg-amber-950", border: "border-amber-800/50", orb: "bg-amber-500" } },
      { message: `Property purchase complete! ${name} in ${city} got a ${amountFormatted} mortgage 🏦`, iconData: { icon: FcDepartment, cardBg: "bg-slate-900", border: "border-slate-800/50", orb: "bg-slate-500" } },

      // Auto / Vehicle Loans
      { message: `🚗 ${name} from ${city} got an instant car loan of ${amountFormatted} 🔑🤩`, iconData: { icon: FcAutomotive, cardBg: "bg-sky-950", border: "border-sky-800/50", orb: "bg-sky-500" } },
      { message: `🏍️ ${name} from ${city} got an instant two-wheeler loan of ${randomTwoWheeler} 🔑🤩`, iconData: { icon: FcAutomotive, cardBg: "bg-indigo-950", border: "border-indigo-800/50", orb: "bg-indigo-500" } },
      { message: `${name} drove out with their dream car today thanks to a ${amountFormatted} loan! 🏎️`, iconData: { icon: FcAutomotive, cardBg: "bg-rose-950", border: "border-rose-800/50", orb: "bg-rose-500" } },
      { message: `Commercial vehicle loan of ${amountFormatted} approved for ${name} in ${city} 🚚`, iconData: { icon: FcBusiness, cardBg: "bg-emerald-950", border: "border-emerald-800/50", orb: "bg-emerald-500" } },

      // Education / Gold Loans
      { message: `${name} secured an education loan of ${amountFormatted} 📚 at ${rate}% 🎓😎`, iconData: { icon: FcGraduationCap, cardBg: "bg-fuchsia-950", border: "border-fuchsia-800/50", orb: "bg-fuchsia-500" } },
      { message: `Higher studies funded! 🎒 ${name} from ${city} received a ${amountFormatted} education loan 🌍`, iconData: { icon: FcGraduationCap, cardBg: "bg-purple-950", border: "border-purple-800/50", orb: "bg-purple-500" } },
      { message: `Instant gold loan of ${amountFormatted} 🪙 was disbursed to ${name} in ${city} ✨`, iconData: { icon: FcShop, cardBg: "bg-amber-950", border: "border-amber-800/50", orb: "bg-amber-500" } },
      { message: `${name} pledged gold and received ${amountFormatted} instantly from ${bank} 💰`, iconData: { icon: FcCurrencyExchange, cardBg: "bg-yellow-950", border: "border-yellow-800/50", orb: "bg-yellow-500" } },

      // Balance Transfer & Consolidation
      { message: `Successfully consolidated debt with a ${amountFormatted} loan! 🛡️😌 Way to go, ${name} from ${city}!`, iconData: { icon: FcSafe, cardBg: "bg-pink-950", border: "border-pink-800/50", orb: "bg-pink-500" } },
      { message: `${name} just transferred a ${amountFormatted} balance 🔄 to ${bank} at ${rate}% 😄`, iconData: { icon: FcCurrencyExchange, cardBg: "bg-cyan-950", border: "border-cyan-800/50", orb: "bg-cyan-500" } },
      { message: `${name} saved ${rate}% 💡 on their next loan EMI with ${bank} 😎`, iconData: { icon: FcStatistics, cardBg: "bg-blue-950", border: "border-blue-800/50", orb: "bg-blue-500" } },
      { message: `${name}'s EMI for a ${amountFormatted} loan was successfully reduced 📉🎊🥳`, iconData: { icon: FcAreaChart, cardBg: "bg-emerald-950", border: "border-emerald-800/50", orb: "bg-emerald-500" } },

      // Approvals, Repayments, Processing
      { message: `✅ Document verification for ${name}'s ${amountFormatted} loan was successfully completed 🥳`, iconData: { icon: FcDocument, cardBg: "bg-red-950", border: "border-red-800/50", orb: "bg-red-500" } },
      { message: `${name} from ${city} unlocked a pre-approved loan offer of ${amountFormatted} 🎉🎁`, iconData: { icon: FcFlashOn, cardBg: "bg-purple-950", border: "border-purple-800/50", orb: "bg-purple-500" } },
      { message: `${name} paid off a ${amountFormatted} loan ahead of schedule ✅🏆🥳`, iconData: { icon: FcOrganization, cardBg: "bg-orange-950", border: "border-orange-800/50", orb: "bg-orange-500" } },
      { message: `Credit score boosted! 📈 ${name} got approved for ${amountFormatted} at lowest rates!`, iconData: { icon: FcLineChart, cardBg: "bg-green-950", border: "border-green-800/50", orb: "bg-green-500" } },
      { message: `${name} from ${city} got matched with ${bank} at ${rate}% 🤝🥳`, iconData: { icon: FcBriefcase, cardBg: "bg-teal-950", border: "border-teal-800/50", orb: "bg-teal-500" } },
      { message: `Loan closed! ${name} successfully completed all EMI payments for their ${amountFormatted} loan 🎉`, iconData: { icon: FcApproval, cardBg: "bg-fuchsia-950", border: "border-fuchsia-800/50", orb: "bg-fuchsia-500" } },
      { message: `Instant credit limit of ${amountFormatted} was activated for ${name} in ${city} ⚡`, iconData: { icon: FcBarChart, cardBg: "bg-indigo-950", border: "border-indigo-800/50", orb: "bg-indigo-500" } }
    ];

    const selectedTemplate = getRandomItem(templates);

    notifications.push({
      id: `notify-${i}`,
      message: selectedTemplate.message,
      iconData: selectedTemplate.iconData
    });
  }

  return notifications;
};

const allNotifications = generateNotifications();

// --- Component ---

export const LiveNotifications = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    let timeoutId: NodeJS.Timeout;
    let isShowing = true;
    let index = 0;

    const scheduleNext = () => {
      if (isShowing) {
        // Currently showing a notification, keep it on screen for 4 seconds then hide it
        timeoutId = setTimeout(() => {
          isShowing = false;
          setCurrentIndex(null);
          scheduleNext();
        }, 4000);
      } else {
        // Currently hidden, wait a random asymmetric gap (1s to 15s) before showing the next one
        const randomGap = Math.floor(Math.random() * 14000) + 1000;
        timeoutId = setTimeout(() => {
          isShowing = true;
          index = (index + 1) % allNotifications.length;
          setCurrentIndex(index);
          scheduleNext();
        }, randomGap);
      }
    };

    scheduleNext();

    return () => clearTimeout(timeoutId);
  }, []);

  if (!mounted) return null;

  const currentNotification = currentIndex !== null ? allNotifications[currentIndex] : null;
  const IconComponent = currentNotification?.iconData.icon;

  return (
    <div className="fixed inset-x-0 bottom-4 sm:bottom-6 flex justify-center z-[100] pointer-events-none w-full px-5 sm:px-4">
      <AnimatePresence mode="wait">
        {currentNotification && IconComponent && (
          <div className="w-full max-w-sm sm:max-w-md relative" style={{ perspective: 1000 }}>
            {/* The glowing orb behind the card */}
            <motion.div
              key={`orb-${currentNotification.id}`}
              initial={{ opacity: 0, y: 80, scale: 0.5 }}
              animate={{ opacity: 0.35, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.8,
                transition: { duration: 0.25, ease: "easeInOut" }
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 12,
                mass: 1,
              }}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-16 rounded-full blur-[40px] pointer-events-none ${currentNotification.iconData.orb}`}
            />

            {/* The actual card */}
            <motion.div
              key={currentNotification.id}
              initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: 45 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.95,
                transition: { duration: 0.25, ease: "easeInOut" }
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 12,
                mass: 1,
                opacity: { duration: 0.3 }
              }}
              className="relative w-full"
            >
              {/* Card Background and content - separate div for overflow-hidden */}
              <div className={`
                relative overflow-hidden rounded-xl sm:rounded-2xl
                ${currentNotification.iconData.cardBg} shadow-xl sm:shadow-2xl
              `}>
                {/* Realistic Glass Shine Effect */}
                <motion.div
                  initial={{ left: "-40%" }}
                  animate={{ left: "120%" }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.35 }}
                  className="absolute inset-y-0 w-24 sm:w-32 z-10 pointer-events-none -skew-x-[25deg] mix-blend-overlay"
                  style={{
                    background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.05) 80%, transparent)'
                  }}
                />

                {/* Inner content wrapper */}
                <div className="flex items-center py-3 pr-4 pl-10 sm:py-4 sm:pr-5 sm:pl-12">
                  {/* Message Content */}
                  <div className="flex-1">
                    <p className="text-[13px] sm:text-sm font-medium text-slate-100 leading-snug">
                      {currentNotification.message}
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-slate-400 mt-1 font-bold tracking-widest uppercase">
                      Just now
                    </p>
                  </div>
                </div>
              </div>

              {/* The overlapping raw Icon (no background, no circle) */}
              <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 z-20">
                <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
