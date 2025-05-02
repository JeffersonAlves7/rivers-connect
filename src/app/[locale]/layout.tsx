import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css'; // Adjust path relative to new location
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// This metadata will apply to all pages under /[locale]
// We can use getMessages here to fetch translations if needed.
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const messages = await getMessages({ locale });
  // Assuming you have 'Layout.metadataTitle' and 'Layout.metadataDescription' keys
  const t = (key: string) => messages.Layout?.[key as keyof typeof messages.Layout] || key;

  return {
    title: t('metadataTitle'),
    description: t('metadataDescription'),
  };
}


export default async function LocaleLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          geistSans.variable,
          geistMono.variable
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
