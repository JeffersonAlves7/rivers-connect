import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { BrainCircuit, CodeXml, Bot, SearchCode } from 'lucide-react';

const services = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-accent" />,
    title: 'AI Technology',
    description: 'Leveraging cutting-edge AI to build intelligent solutions that drive business value.',
  },
  {
    icon: <CodeXml className="h-10 w-10 text-accent" />,
    title: 'Website Development & Deployment',
    description: 'Creating modern, responsive, and scalable web applications tailored to your needs.',
  },
  {
    icon: <Bot className="h-10 w-10 text-accent" />,
    title: 'Robotic Process Automation (RPA)',
    description: 'Automating repetitive tasks to improve efficiency and reduce operational costs.',
  },
  {
    icon: <SearchCode className="h-10 w-10 text-accent" />,
    title: 'Web Scraping',
    description: 'Extracting valuable data from the web to provide insights and power your applications.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Our Expertise</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            We specialize in a range of technologies to build powerful and efficient solutions.
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
