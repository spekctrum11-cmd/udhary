export function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/917838899530"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-success-green text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 group"
    >
      <span className="material-symbols-outlined text-[32px]">chat</span>
      <span className="absolute right-16 bg-white text-on-surface px-4 py-2 rounded-lg text-label-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        WhatsApp Us
      </span>
    </a>
  );
}
