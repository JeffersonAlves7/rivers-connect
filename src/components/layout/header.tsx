import Link from 'next/link';
import { MountainSnow } from 'lucide-react'; // Using MountainSnow as a placeholder logo
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './language-switcher'; // Corrected import path

export function Header() {
  const t = useTranslations('Header');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Use justify-between to space items, container class handles centering and max-width */}
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <MountainSnow className="h-6 w-6 text-primary" />
          <span className="font-bold inline-block text-primary">
            {t('siteName')}
          </span>
        </Link>
        {/* Navigation links could go here if needed */}
        <LanguageSwitcher />
      </div>
    </header>
  );
}
