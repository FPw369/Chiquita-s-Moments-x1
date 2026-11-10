'use client';

import React from 'react';
import { Globe } from 'lucide-react';
import { useStudio } from './StudioContext';
import { cn } from '@/components/ui/Button';

export function LanguageSwitch({ className }: { className?: string }) {
  const { language, setLanguage } = useStudio();

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full bg-taupe-bg p-1 border border-borderWarm',
        className
      )}
      role="group"
      aria-label="Language Switcher"
    >
      <Globe className="w-3.5 h-3.5 text-taupe ml-2 mr-1.5 hidden sm:inline-block" />
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={cn(
          'px-2.5 py-1 rounded-full text-xs font-semibold transition-all',
          language === 'en'
            ? 'bg-espresso text-canvas shadow-sm'
            : 'text-espresso-light hover:text-espresso'
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('es')}
        className={cn(
          'px-2.5 py-1 rounded-full text-xs font-semibold transition-all',
          language === 'es'
            ? 'bg-gold text-espresso shadow-sm'
            : 'text-espresso-light hover:text-espresso'
        )}
      >
        ES
      </button>
    </div>
  );
}
