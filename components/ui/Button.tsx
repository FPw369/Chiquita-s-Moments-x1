'use client';

import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
    const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
      primary:
        'bg-espresso text-canvas hover:bg-espresso-light active:scale-[0.99] shadow-sm border border-espresso',
      gold:
        'bg-gold text-espresso font-semibold hover:bg-gold-dark hover:text-white active:scale-[0.99] shadow-heirloom border border-gold-dark/30',
      secondary:
        'bg-taupe-bg text-espresso hover:bg-borderWarm active:scale-[0.99] border border-borderWarm',
      outline:
        'bg-transparent text-espresso border border-espresso/30 hover:border-espresso hover:bg-espresso/5',
      ghost:
        'bg-transparent text-espresso-light hover:bg-taupe-bg/70 hover:text-espresso',
    };

    const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
      sm: 'px-3.5 py-1.5 text-xs rounded-lg gap-1.5',
      md: 'px-5 py-2.5 text-sm rounded-xl gap-2',
      lg: 'px-7 py-3.5 text-base rounded-xl gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/50 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
