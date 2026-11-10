'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { useStudio } from '@/components/layout/StudioContext';
import { cn } from '@/components/ui/Button';

interface StepIndicatorProps {
  currentStep: number;
  onSelectStep: (step: number) => void;
}

export function StepIndicator({ currentStep, onSelectStep }: StepIndicatorProps) {
  const { t } = useStudio();

  const steps = [
    { number: 1, label: t.bookingPage.steps.package },
    { number: 2, label: t.bookingPage.steps.finishBackdrop },
    { number: 3, label: t.bookingPage.steps.dateTime },
    { number: 4, label: t.bookingPage.steps.contact },
    { number: 5, label: t.bookingPage.steps.summary },
  ];

  return (
    <div className="w-full bg-surface rounded-2xl border border-borderWarm p-4 sm:p-5 shadow-editorial">
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {steps.map((step) => {
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;

          return (
            <button
              key={step.number}
              type="button"
              onClick={() => onSelectStep(step.number)}
              className={cn(
                'flex items-center gap-2.5 p-2.5 rounded-xl text-left transition-all border',
                isCurrent
                  ? 'bg-espresso text-canvas border-espresso shadow-sm'
                  : isCompleted
                  ? 'bg-gold-light/70 text-espresso border-gold/40 hover:bg-gold-light'
                  : 'bg-canvas text-taupe border-borderWarm hover:border-taupe-light'
              )}
            >
              <span
                className={cn(
                  'w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0',
                  isCurrent
                    ? 'bg-gold text-espresso'
                    : isCompleted
                    ? 'bg-espresso text-gold'
                    : 'bg-taupe-bg text-taupe'
                )}
              >
                {isCompleted ? <Check className="w-3.5 h-3.5" /> : step.number}
              </span>
              <span className="text-xs font-semibold truncate">{step.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
