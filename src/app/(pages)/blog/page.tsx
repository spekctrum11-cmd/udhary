import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPagination } from '@/components/BlogPagination';
import { getAllBlogs, formatDate } from '@/lib/api/blog';

export const metadata = {
  title: 'Blog | Udhary.com',
  description: 'Read the latest insights and updates from Udhary.com.',
};

export default async function BlogPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const resolvedParams = await props.searchParams;
  const currentPage = parseInt((resolvedParams.page as string) || '1', 10);
  const itemsPerPage = 3;

  const allBlogs = getAllBlogs();
  const totalPages = Math.max(1, Math.ceil(allBlogs.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBlogs = allBlogs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="flex-1 bg-surface-container-lowest">
      {/* Hero Section */}
      <section className="bg-deep-navy py-20 text-center relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <h1 className="text-display-lg font-display-lg text-white mb-4">Our <span className="text-secondary-fixed">Blog</span></h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto">Latest news, insights and tips from the financial world.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBlogs.map((blog, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-lg border border-outline-variant/30 overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300">
                <div className="aspect-[16/9] w-full relative overflow-hidden bg-slate-50">
                  <Image 
                    src={blog.image} 
                    alt={`Cover image for ${blog.title}`}
                    title={blog.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="bg-white text-primary text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-3">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span> 
                      {formatDate(blog.date)}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {blog.title}
                  </h2>
                  <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
                    {blog.excerpt}
                  </p>
                  <Link href={`/blog/${blog.slug}`} className="text-primary font-bold inline-flex items-center gap-1.5 hover:text-orange-500 transition-colors mt-auto text-sm uppercase tracking-wide">
                    Read Article <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <React.Suspense fallback={<div className="h-10 mt-16 w-full animate-pulse bg-surface-container rounded-xl"></div>}>
              <BlogPagination totalPages={totalPages} />
            </React.Suspense>
          )}
        </div>
      </section>
    </main>
  );
}
