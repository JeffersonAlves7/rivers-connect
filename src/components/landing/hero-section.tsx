import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary to-blue-800 text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Rivers Software House
            </h1>
            <p className="mx-auto max-w-[700px] text-lg md:text-xl text-blue-100">
              Driving Innovation with AI, Web Development, RPA, and Web Scraping Solutions.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
