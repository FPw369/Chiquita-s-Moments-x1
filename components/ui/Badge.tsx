'use client';

import React from 'react';
import { cn } from './Button';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'espresso' | 'cream' | 'Antique' | 'success';
}

export function Badge({ className, variant = 'gold', children, ...props }: BadgeProps) {
  const styles: Record<NonNullable<BadgeProps['variant']>, string> = {
    gold: 'bg-gold-light text-gold-dark border-gold/40',
    espresso: 'bg-espresso text-canvas border-espresso',
    cream: 'bg-taupe-bg text-espresso-light border-borderWarm',
    Antique: 'bg-[#EFE6D5] text-[#6E5023] border-[#D4BC94]',
    success: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide border',
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
