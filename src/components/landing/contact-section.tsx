'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// Import server action if created
// import { saveLeadAction } from '@/app/actions/saveLead';


export function ContactSection() {
  const t = useTranslations('ContactSection');
  const { toast } = useToast();

  // Define Zod schema inside the component to access `t`
  const formSchema = z.object({
    name: z.string().min(2, {
      message: t('nameMinError'),
    }),
    email: z.string().email({
      message: t('emailError'),
    }),
    phone: z.string().optional(), // Making phone optional
    message: z.string().min(10, {
      message: t('messageMinError'),
    }).max(500, {
        message: t('messageMaxError')
    }),
    consent: z.boolean().refine(val => val === true, {
      message: t('consentError'),
    }),
  });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      consent: false,
    },
  });

  async function onSubmit(values: FormData) {
    console.log('Form submitted:', values);
    // Here you would call your server action to save the lead
    // e.g., const result = await saveLeadAction(values);
    // Handle result (success/error)
    try {
        // Simulate API call or server action
        // await saveLeadAction(values);

        toast({
            title: t('successToastTitle'),
            description: t('successToastDescription'),
        });
        form.reset(); // Reset form on success
    } catch (error) {
        console.error("Failed to send message:", error);
        toast({
            title: t('errorToastTitle'),
            description: t('errorToastDescription'),
            variant: "destructive",
        });
    }
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
       <Card className="max-w-2xl mx-auto shadow-lg">
         <CardHeader className="text-center">
           <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">{t('title')}</CardTitle>
           <CardDescription className="mt-2 text-muted-foreground md:text-xl">
            {t('subtitle')}
           </CardDescription>
         </CardHeader>
         <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('nameLabel')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('namePlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('emailLabel')}</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={t('emailPlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('phoneLabel')}</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder={t('phonePlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('messageLabel')}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t('messagePlaceholder')} {...field} rows={5}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm bg-background">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          {t('consentLabel')}
                        </FormLabel>
                        <FormDescription>
                          {t('consentDescription')}
                        </FormDescription>
                         <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" variant="accent">
                  {t('sendMessageButton')}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
