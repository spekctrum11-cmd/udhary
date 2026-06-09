import React from 'react';

export const metadata = {
  title: 'Careers | Udhary.com',
  description: 'Join the Udhary.com team. Explore our current open positions and apply today.',
};

export default function CareerPage() {
  const WHATSAPP_NUMBER = "917669755501";
  
  const generateWhatsAppLink = (jobTitle: string) => {
    const text = encodeURIComponent(`Application for ${jobTitle} - North-Delhi`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

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
            Join Our Team
          </span>
          <h1 className="text-display-lg font-display-lg text-primary mb-4">
            Build Your Career with <span className="text-secondary">Udhary</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            We are looking for passionate individuals to join our mission of empowering people through accessible financial solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-container-max mx-auto px-gutter">
          <h2 className="text-headline-lg font-headline-md text-primary text-center mb-16">
            Current Opportunities
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Job 1 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-outline-variant/30 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-headline-sm font-bold text-primary group-hover:text-secondary transition-colors">
                    Team Leader – Customer Support
                  </h3>
                  <span className="bg-surface-blue text-primary px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">Full-time</span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-on-surface-variant font-medium mb-8">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">location_on</span> North-Delhi, India</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">work_history</span> 3–5 years Exp.</span>
                </div>
                <div className="space-y-4 text-on-surface-variant">
                  <div>
                    <h4 className="font-bold text-on-surface mb-2">Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Lead and mentor a team of customer support executives.</li>
                      <li>Monitor team performance and provide constructive feedback.</li>
                      <li>Develop and implement training programs for new hires.</li>
                      <li>Handle escalated customer issues and ensure timely resolution.</li>
                      <li>Analyze customer service metrics and prepare reports for management.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Proven experience in a supervisory role within a customer support environment.</li>
                      <li>Strong leadership and decision-making skills.</li>
                      <li>Excellent problem-solving abilities.</li>
                      <li>Familiarity with CRM systems and support tools.</li>
                      <li>Bachelor’s degree in Business Administration or a related field.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/30">
                <a 
                  href={generateWhatsAppLink("Team Leader – Customer Support")} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-deep-navy transition-colors"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
                  Apply Now on WhatsApp
                </a>
              </div>
            </div>

            {/* Job 2 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-outline-variant/30 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-headline-sm font-bold text-primary group-hover:text-secondary transition-colors">
                    Customer Care Support Executive
                  </h3>
                  <span className="bg-surface-blue text-primary px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">Full-time</span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-on-surface-variant font-medium mb-8">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">location_on</span> North-Delhi, India</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">work_history</span> 1–3 years Exp.</span>
                </div>
                <div className="space-y-4 text-on-surface-variant">
                  <div>
                    <h4 className="font-bold text-on-surface mb-2">Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Respond promptly to customer inquiries via phone, email and chat.</li>
                      <li>Resolve customer complaints and ensure a high level of customer satisfaction.</li>
                      <li>Maintain detailed records of customer interactions.</li>
                      <li>Collaborate with internal teams to address customer needs.</li>
                      <li>Provide feedback on the efficiency of the customer service process.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Strong communication and interpersonal skills.</li>
                      <li>Proficiency in using customer support software and tools.</li>
                      <li>Ability to multitask and manage time effectively.</li>
                      <li>12th/ Graduation – Eligible, Basic computer knowledge.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/30">
                <a 
                  href={generateWhatsAppLink("Customer Care Support Executive")} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-deep-navy transition-colors"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
                  Apply Now on WhatsApp
                </a>
              </div>
            </div>

            {/* Job 3 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-outline-variant/30 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-headline-sm font-bold text-primary group-hover:text-secondary transition-colors">
                    Telecaller
                  </h3>
                  <span className="bg-surface-blue text-primary px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">Full-time</span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-on-surface-variant font-medium mb-8">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">location_on</span> North-Delhi, India</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">work_history</span> 0–2 years Exp.</span>
                </div>
                <div className="space-y-4 text-on-surface-variant">
                  <div>
                    <h4 className="font-bold text-on-surface mb-2">Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Initiate outbound calls to potential customers to introduce Udhary.com’s services.</li>
                      <li>Understand customer needs and provide relevant information.</li>
                      <li>Maintain a database of customer information and interactions.</li>
                      <li>Achieve daily and monthly call targets.</li>
                      <li>Gather feedback and relay insights to the marketing and product teams.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Excellent verbal communication skills in Hindi and English.</li>
                      <li>Ability to handle rejection and remain motivated.</li>
                      <li>Basic computer proficiency.</li>
                      <li>Prior experience in telesales or customer service is a plus.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/30">
                <a 
                  href={generateWhatsAppLink("Telecaller")} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-deep-navy transition-colors"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
                  Apply Now on WhatsApp
                </a>
              </div>
            </div>

            {/* Why Join Us */}
            <div className="bg-gradient-to-br from-primary to-deep-navy p-8 md:p-10 rounded-3xl shadow-lg text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <span className="material-symbols-outlined text-9xl">workspace_premium</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-headline-md font-bold mb-6">Why Join Udhary.com?</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed">check_circle</span> Competitive salary packages.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed">check_circle</span> Opportunities for professional growth.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed">check_circle</span> Collaborative and inclusive work culture.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed">check_circle</span> State-of-the-art office facilities.
                  </li>
                </ul>
                <div className="mt-10 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                  <h4 className="font-bold mb-2">Ready to make a difference?</h4>
                  <p className="opacity-90">Send your updated resume to <a href="mailto:Info@udhary.com" className="font-bold underline text-secondary-fixed">Info@udhary.com</a> with the subject line: "Application for [Position Name] – North-Delhi".</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
