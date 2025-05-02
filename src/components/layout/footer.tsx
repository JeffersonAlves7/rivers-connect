'use client'; // Required if using date logic that needs client-side execution

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

export function Footer() {
  const t = useTranslations('Footer');
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  // Avoid hydration mismatch by getting the year on the client
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);


  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          {currentYear !== null ? t('copyright', { currentYear }) : 'Loading...'}
        </p>
      </div>
    </footer>
  );
}
