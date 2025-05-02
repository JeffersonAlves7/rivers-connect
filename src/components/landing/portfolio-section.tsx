import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function PortfolioSection() {
   const t = useTranslations('PortfolioSection');

  // Placeholder project data - In a real app, this would come from a CMS or markdown files
  const projects = [
    {
      title: t('project1Title'),
      description: t('project1Desc'),
      imageUrl: 'https://picsum.photos/seed/recommend/600/400',
      imageHint: 'abstract technology',
      link: '#',
    },
    {
      title: t('project2Title'),
      description: t('project2Desc'),
      imageUrl: 'https://picsum.photos/seed/ecommerce/600/400',
      imageHint: 'online shopping website',
      link: '#',
    },
    {
      title: t('project3Title'),
      description: t('project3Desc'),
      imageUrl: 'https://picsum.photos/seed/rpa/600/400',
      imageHint: 'robot automation office',
      link: '#',
    },
      {
      title: t('project4Title'),
      description: t('project4Desc'),
      imageUrl: 'https://picsum.photos/seed/scraping/600/400',
      imageHint: 'data charts graphs',
      link: '#',
    },
  ];


  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">{t('title')}</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                 <Image
                    src={project.imageUrl}
                    alt={`Screenshot of ${project.title}`}
                    width={600}
                    height={400}
                    className="aspect-video object-cover"
                    data-ai-hint={project.imageHint}
                  />
              </CardHeader>
              <CardContent className="p-6">
                 <CardTitle className="text-xl font-semibold text-primary mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                {/* Optional: Add a link to case study or live demo */}
                {/*
                <Button variant="link" asChild className="p-0 h-auto text-accent">
                   <Link href={project.link}>Learn More</Link>
                </Button>
                 */}
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Optional: Add a button to view more projects if the list grows */}
        {/*
        <div className="flex justify-center mt-12">
           <Button variant="outline">View More Projects</Button>
         </div>
         */}
      </div>
    </section>
  );
}
