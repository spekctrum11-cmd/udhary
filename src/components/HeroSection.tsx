import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-2 lg:py-8">
      {/* Subtle background gradient / mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-50 via-white to-white pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center relative z-10 text-center lg:text-left">

        {/* TEXT CONTENT - Takes primary focus at the top on Mobile */}
        <div className="max-w-2xl mx-auto lg:mx-0 w-full pt-4 lg:pt-0">
          <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 font-semibold text-xs tracking-widest uppercase rounded-full mb-6 border border-orange-100 shadow-sm">
            Trusted Fintech Solutions
          </span>
          <h1 className="text-[36px] sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 mb-5 lg:mb-6 leading-[1.15] tracking-tight">
            Quick, Hassle-Free Loans to Meet Your Every Need
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 px-2 lg:px-0">
            Are you a salaried professional looking for extra financial support? Whether it's for a dream vacation, medical emergency, or home renovation — we've got your back!
          </p>

          {/* Sleek Pill Features for Mobile (Saves huge vertical space) */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-4 lg:mb-10">
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-slate-200 shadow-sm transition-all hover:border-orange-200">
              <span className="material-symbols-outlined text-[18px] text-green-600">verified</span>
              <span className="font-semibold text-sm text-slate-800">Low Interest</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-slate-200 shadow-sm transition-all hover:border-blue-200">
              <span className="material-symbols-outlined text-[18px] text-blue-600">speed</span>
              <span className="font-semibold text-sm text-slate-800">Fast Approval</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-slate-200 shadow-sm hidden sm:flex transition-all hover:border-purple-200">
              <span className="material-symbols-outlined text-[18px] text-orange-600">security</span>
              <span className="font-semibold text-sm text-slate-800">100% Secure</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full max-w-md mx-auto lg:mx-0">
            <a href="https://app.udhary.com/loan-application?_gl=1*10jgv0m*_ga*MTQ3NTA3ODg0MC4xNzc5MjcyNTkz*_ga_W44M2VB8CN*czE3Nzk0MjUyNDYkbzUkZzAkdDE3Nzk0MjUyNDYkajYwJGwwJGgw" className="flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-2xl transition-all shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 w-full sm:w-auto text-lg">
              Apply Now <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
            </a>
            <a href="#" className="hidden items-center justify-center px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 transition-all hover:border-slate-300 w-full sm:w-auto text-lg">
              Check Eligibility
            </a>
          </div>
        </div>

        {/* IMAGE CONTENT - Grounded pattern: image rests on the absolute bottom on mobile */}
        <div className="relative hidden lg:flex justify-end mt-4 lg:mt-0 flex-1 lg:flex-auto lg:h-auto items-end">
          {/* Decorative background shape for the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-[320px] lg:max-w-[600px] aspect-square bg-gradient-to-tr from-orange-200/40 to-blue-200/40 rounded-full blur-3xl -z-10"></div>

          <Image
            alt="Hero Graphic"
            src="/hero-boy.png"
            width={600}
            height={700}
            className="relative z-10 w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[550px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            priority
            sizes="(max-width: 1024px) 100vw, 600px"
          />
        </div>
      </div>
    </section>
  );
}
