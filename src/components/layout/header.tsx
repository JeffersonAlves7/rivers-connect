import Link from 'next/link';
import { MountainSnow } from 'lucide-react'; // Using MountainSnow as a placeholder logo
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './language-switcher'; // Corrected import path
import { useRouter, usePathname } from '@/navigation'; // Import from the correct path

export function Header() {
  const t = useTranslations('Header');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Changed justify-between to justify-center to center the items */}
      <div className="container flex h-14 items-center justify-center space-x-4">
        <Link href="/" className="flex items-center space-x-2">
          <MountainSnow className="h-6 w-6 text-primary" />
          <span className="font-bold inline-block text-primary">
            {t('siteName')}
          </span>
        </Link>
        <LanguageSwitcher />
        {/* Navigation links could go here */}
      </div>
    </header>
  );
}
