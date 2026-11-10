'use client';

import React from 'react';
import { cn } from './Button';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, helperText, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-espresso mb-1.5"
          >
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            'w-full rounded-xl bg-surface border border-borderWarm px-4 py-2.5 text-sm text-espresso placeholder:text-taupe/70 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all',
            error && 'border-red-500 focus:ring-red-400',
            className
          )}
          {...props}
        />
        {helperText && !error && (
          <p className="mt-1 text-xs text-taupe">{helperText}</p>
        )}
        {error && <p className="mt-1 text-xs text-red-600 font-medium">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
