import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getBlogBySlug, getRelatedBlogs, formatDate } from '@/lib/api/blog';
import { RichText } from '@/components/RichText';
import { ShareButtons } from '@/components/ShareButtons';

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const blog = getBlogBySlug(params.slug);
  if (!blog) return { title: 'Not Found' };

  return {
    title: `${blog.title} | Udhary.com Blog`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      publishedTime: new Date(blog.date).toISOString(),
      authors: ['Udhary Team'],
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  const suggestedBlogs = getRelatedBlogs(blog.slug, 3);
  const formattedDate = formatDate(blog.date);

  // Generate URL for social sharing (mock domain if deployed)
  const shareUrl = `https://udhary.netlify.app/blog/${blog.slug}`;

  return (
    <main className="flex-1 bg-surface-container-lowest">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blog.title,
            "image": [
              `https://udhary.netlify.app${blog.image}`
            ],
            "datePublished": new Date(blog.date).toISOString(),
            "author": [{
              "@type": "Organization",
              "name": "Udhary",
              "url": "https://udhary.netlify.app"
            }],
            "description": blog.excerpt
          })
        }}
      />

      {/* Article Header */}
      <section className="relative py-16 md:py-3 text-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <Image
            src={blog.image}
            alt={`Hero background for ${blog.title}`}
            title={blog.title}
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-30 blur-sm"
          />
          <div className="absolute inset-0 bg-deep-navy/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 pt-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex justify-center text-sm font-medium text-white/60 mb-6 drop-shadow-md">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="mx-2">›</span></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><span className="mx-2">›</span></li>
              <li className="text-white line-clamp-1">{blog.title}</li>
            </ol>
          </nav>

          <span className="inline-block px-4 py-1.5 bg-primary/20 text-white font-bold text-xs tracking-widest uppercase rounded-full mb-6 border border-primary/30 backdrop-blur-md">
            {blog.category}
          </span>
          <h1 className="text-[32px] md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            {blog.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray/90 font-medium drop-shadow-md">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              {formattedDate}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content & Share Buttons */}
      <section className="py-12 md:py-16 relative z-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Rich Text Body */}
          <div className="w-full">
            <RichText html={blog.content} />
          </div>

          {/* Share Buttons at Bottom */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">Share this article</h3>
            <ShareButtons url={shareUrl} title={blog.title} />
          </div>

        </div>
      </section>

      {/* Suggested Articles */}
      {suggestedBlogs.length > 0 && (
        <section className="py-16 md:py-24 bg-surface-container/30 border-t border-outline-variant/20 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                More Articles You Might Like
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {suggestedBlogs.map((suggested, idx) => (
                <div key={idx} className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden flex flex-col group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
                  <div className="aspect-[16/9] w-full relative overflow-hidden bg-slate-50">
                    <Image
                      src={suggested.image}
                      alt={`Cover image for ${suggested.title}`}
                      title={suggested.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="bg-white/90 backdrop-blur-md text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                        {suggested.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="text-xs text-slate-500 font-medium mb-3 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span> {formatDate(suggested.date)}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {suggested.title}
                    </h3>
                    <p className="text-slate-600 mb-6 line-clamp-2 text-sm leading-relaxed flex-1">
                      {suggested.excerpt}
                    </p>
                    <Link href={`/blog/${suggested.slug}`} className="text-primary font-bold inline-flex items-center gap-1.5 hover:text-orange-500 transition-colors mt-auto text-sm uppercase tracking-wide">
                      Read Article <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
