'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from './Button';

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
  badge?: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
}

export function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? items[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3.5">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              'rounded-2xl border transition-all duration-200 overflow-hidden bg-surface',
              isOpen
                ? 'border-gold shadow-heirloom'
                : 'border-borderWarm hover:border-taupe-light'
            )}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <div className="space-y-1">
                {item.badge && (
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-gold-dark">
                    {item.badge}
                  </span>
                )}
                <h4 className="font-serif text-lg sm:text-xl font-medium text-espresso">
                  {item.question}
                </h4>
              </div>
              <span
                className={cn(
                  'flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center border transition-transform duration-300',
                  isOpen
                    ? 'bg-gold text-espresso border-gold rotate-180'
                    : 'bg-canvas text-taupe border-borderWarm'
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-espresso-light leading-relaxed border-t border-borderWarm/60">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
