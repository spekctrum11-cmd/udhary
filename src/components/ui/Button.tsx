import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  className?: string;
  href?: string;
}

export function Button({ variant = 'primary', className = '', href, children, ...props }: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-xl font-bold transition-all duration-300 inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/20 text-body-md',
    secondary: 'bg-transparent border-[1.5px] border-primary text-primary hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600',
    accent: 'bg-secondary text-white hover:bg-orange-600 hover:scale-105 transform text-body-md',
    outline: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-orange-500/80 hover:border-orange-400 text-body-md',
  };

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
