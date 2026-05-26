import Link from "next/link";

export function FinancialEcosystemSection() {
  return (
    <section className="py-2 pt-6 lg:py-8 bg-surface-blue">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-6 lg:mb-12">
          <h2 className="text-headline-md font-headline-md text-primary mb-4">Our Financial Ecosystem</h2>
          <p className="text-body-md text-on-surface-variant">
            Access a comprehensive suite of financial services designed for modern India.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { icon: 'account_balance', label: 'Personal Loan', href: "https://app.udhary.com/loan-application?_gl=1*10jgv0m*_ga*MTQ3NTA3ODg0MC4xNzc5MjcyNTkz*_ga_W44M2VB8CN*czE3Nzk0MjUyNDYkbzUkZzAkdDE3Nzk0MjUyNDYkajYwJGwwJGgw" },
            { icon: 'credit_card', label: 'Credit Card', href: "https://app.udhary.com/apply-credit-card?_gl=1*1n4nhtf*_ga*MTQ3NTA3ODg0MC4xNzc5MjcyNTkz*_ga_W44M2VB8CN*czE3Nzk0MjUyNDYkbzUkZzEkdDE3Nzk0MjUzOTAkajgkbDAkaDA." },
            { icon: 'home', label: 'Home Loan', href: "https://app.udhary.com/loan-application?_gl=1*10jgv0m*_ga*MTQ3NTA3ODg0MC4xNzc5MjcyNTkz*_ga_W44M2VB8CN*czE3Nzk0MjUyNDYkbzUkZzAkdDE3Nzk0MjUyNDYkajYwJGwwJGgw" },
            { icon: 'directions_car', label: 'Car Loan', href: "https://app.udhary.com/loan-application?_gl=1*10jgv0m*_ga*MTQ3NTA3ODg0MC4xNzc5MjcyNTkz*_ga_W44M2VB8CN*czE3Nzk0MjUyNDYkbzUkZzAkdDE3Nzk0MjUyNDYkajYwJGwwJGgw" },
            { icon: 'health_and_safety', label: 'Insurance', href: "https://beemaaa.com/" },
            { icon: 'flight_takeoff', label: 'Travel Booking', href: "https://www.spectrumtravel.in/" },
          ].map((item, idx) => {
            const inner = (
              <>
                <div className="w-12 h-12 bg-surface-container rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-white/20">
                  <span className="material-symbols-outlined text-primary group-hover:text-white">{item.icon}</span>
                </div>
                <span className="font-label-md text-on-surface group-hover:text-white block">{item.label}</span>
              </>
            );
            const className = "group bg-white p-4 sm:p-6 rounded-xl soft-elevation hover:bg-primary transition-all duration-300 text-center relative z-10";

            return item.href === "#" ? (
              <div key={idx} className={`${className} cursor-default`}>
                {inner}
              </div>
            ) : (
              <Link href={item.href} key={idx} className={`${className} cursor-pointer`}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
