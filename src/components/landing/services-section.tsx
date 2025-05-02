import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { BrainCircuit, CodeXml, Bot, SearchCode } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ServicesSection() {
  const t = useTranslations('ServicesSection');

  const services = [
    {
      icon: <BrainCircuit className="h-10 w-10 text-accent" />,
      title: t('service1Title'),
      description: t('service1Desc'),
    },
    {
      icon: <CodeXml className="h-10 w-10 text-accent" />,
      title: t('service2Title'),
      description: t('service2Desc'),
    },
    {
      icon: <Bot className="h-10 w-10 text-accent" />,
      title: t('service3Title'),
      description: t('service3Desc'),
    },
    {
      icon: <SearchCode className="h-10 w-10 text-accent" />,
      title: t('service4Title'),
      description: t('service4Desc'),
    },
  ];


  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">{t('title')}</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle className="mt-4 text-xl font-semibold text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
