import React from 'react';

interface RichTextProps {
  html: string;
  className?: string;
}

export function RichText({ html, className = '' }: RichTextProps) {
  return (
    <article 
      className={`
        text-slate-700 leading-relaxed text-base
        [&>h2]:text-xl [&>h2]:md:text-2xl [&>h2]:font-extrabold [&>h2]:text-slate-900 [&>h2]:mt-10 [&>h2]:mb-5
        [&>h3]:text-lg [&>h3]:md:text-xl [&>h3]:font-bold [&>h3]:text-slate-800 [&>h3]:mt-8 [&>h3]:mb-3
        [&>p]:mb-5 [&>p]:leading-relaxed
        [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-5 [&>ul>li]:mb-1.5
        [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:mb-5 [&>ol>li]:mb-1.5
        [&>strong]:font-extrabold [&>strong]:text-slate-900
        [&>a]:text-primary [&>a]:font-semibold hover:[&>a]:underline
        [&>blockquote]:border-l-4 [&>blockquote]:border-primary/50 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-slate-600 [&>blockquote]:my-8
        ${className}
      `}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
