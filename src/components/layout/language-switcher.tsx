'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe } from 'lucide-react';
import { locales } from '@/i18n'; // Import locales from your config

export default function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onSelectChange = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <Select value={locale} onValueChange={onSelectChange}>
      <SelectTrigger className="w-auto border-none focus:ring-0 focus:ring-offset-0 gap-1 pr-2">
         <Globe className="h-4 w-4" />
        <SelectValue placeholder={t('selectLanguageLabel')} />
      </SelectTrigger>
      <SelectContent align="end">
        {locales.map((loc) => (
          <SelectItem key={loc} value={loc}>
            {loc === 'en' ? 'English' : 'Português (BR)'}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
