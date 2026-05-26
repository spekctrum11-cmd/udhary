"use client";

import React from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export function BlogPagination({ totalPages }: { totalPages: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handlePageChange = (page: number | string) => {
    if (page === '...') return;
    router.push(createPageURL(page), { scroll: false });
  };

  const generatePagination = (current: number, total: number) => {
    if (total <= 7) return Array.from({length: total}, (_, i) => i + 1);
    
    if (current <= 4) return [1, 2, 3, 4, 5, '...', total];
    if (current >= total - 3) return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
    
    return [1, '...', current - 1, current, current + 1, '...', total];
  };

  const pages = generatePagination(currentPage, totalPages);

  return (
    <div className="flex justify-center items-center gap-1 sm:gap-2 mt-12 sm:mt-16 flex-wrap">
      {currentPage > 1 && (
        <button 
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-2 sm:px-4 h-8 sm:h-10 rounded-lg sm:rounded-xl bg-surface-container hover:bg-primary hover:text-white transition-colors font-bold flex items-center justify-center gap-0 sm:gap-1 mr-1 sm:mr-2 text-xs sm:text-base"
        >
          <span className="material-symbols-outlined text-[16px] sm:text-[20px]">chevron_left</span>
          <span className="hidden sm:inline">Prev</span>
        </button>
      )}

      {pages.map((p, idx) => {
        const isActive = p === currentPage;
        const isEllipsis = p === '...';
        
        if (isEllipsis) {
          return <span key={`ellipsis-${idx}`} className="mx-1 sm:mx-2 font-bold text-on-surface-variant text-sm sm:text-base">...</span>;
        }
        
        return (
          <button 
            key={`page-${p}`}
            onClick={() => handlePageChange(p)}
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl font-bold flex items-center justify-center transition-colors text-xs sm:text-base ${
              isActive 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-surface-container hover:bg-primary hover:text-white text-on-surface'
            }`}
          >
            {/* Format numbers over 1000 with a comma like 2,023 */}
            {typeof p === 'number' ? p.toLocaleString() : p}
          </button>
        );
      })}

      {currentPage < totalPages && (
        <button 
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-2 sm:px-4 h-8 sm:h-10 rounded-lg sm:rounded-xl bg-surface-container hover:bg-primary hover:text-white transition-colors font-bold flex items-center justify-center gap-0 sm:gap-1 ml-1 sm:ml-2 text-xs sm:text-base"
        >
          <span className="hidden sm:inline">Next</span>
          <span className="material-symbols-outlined text-[16px] sm:text-[20px]">chevron_right</span>
        </button>
      )}
    </div>
  );
}
