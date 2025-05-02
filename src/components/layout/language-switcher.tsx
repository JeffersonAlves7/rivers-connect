
'use client';

import { useLocale, useTranslations } from 'next-intl';
// Temporarily use base Next.js hooks to diagnose error. Functionality might be broken.
import { usePathname, useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe } from 'lucide-react';
import { locales } from '@/i18n';
import React from 'react';

export default function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const router = useRouter(); // Using base router
  const pathname = usePathname(); // Using base pathname (might lack locale prefix)

  const onSelectChange = (nextLocale: string) => {
    if (nextLocale !== locale) {
      React.startTransition(() => {
        // Remove o locale atual do início do pathname (assume estrutura /[locale]/resto)
        const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');
        // Constrói a nova URL com o locale selecionado
        const newPath = `/${nextLocale}${pathWithoutLocale}`;
        router.replace(newPath);
      });
    }
  };
  
  return (
    <Select value={locale} onValueChange={onSelectChange}>
      <SelectTrigger
        className="w-auto border-none focus:ring-0 focus:ring-offset-0 gap-1 pr-2"
        aria-label={t('selectLanguageLabel')} // Add aria-label
      >
        <Globe className="h-4 w-4" />
        <SelectValue placeholder={t('selectLanguageLabel')} />
      </SelectTrigger>
      <SelectContent align="end">
        {locales.map((loc) => (
          <SelectItem key={loc} value={loc}>
            {/* Consider adding translations for language names */}
            {loc === 'en' ? 'English' : 'Português (BR)'}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

