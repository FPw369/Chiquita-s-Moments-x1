'use client';

import React from 'react';
import { cn } from './Button';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  highlighted?: boolean;
}

export function Card({
  className,
  hoverable = false,
  highlighted = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface rounded-2xl border border-borderWarm shadow-editorial transition-all duration-300',
        hoverable && 'hover:-translate-y-1 hover:shadow-editorial-lg hover:border-gold/50',
        highlighted && 'ring-2 ring-gold border-gold shadow-heirloom',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
