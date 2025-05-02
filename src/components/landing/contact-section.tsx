'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

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

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().optional(), // Making phone optional
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }).max(500, {
      message: 'Message must not exceed 500 characters.'
  }),
  consent: z.boolean().refine(val => val === true, {
    message: 'You must consent to be contacted.',
  }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const { toast } = useToast();
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
            title: "Message Sent!",
            description: "Thank you for contacting us. We'll be in touch shortly.",
        });
        form.reset(); // Reset form on success
    } catch (error) {
        console.error("Failed to send message:", error);
        toast({
            title: "Error",
            description: "Failed to send message. Please try again later.",
            variant: "destructive",
        });
    }
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
       <Card className="max-w-2xl mx-auto shadow-lg">
         <CardHeader className="text-center">
           <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Get in Touch</CardTitle>
           <CardDescription className="mt-2 text-muted-foreground md:text-xl">
            Have a project in mind or want to learn more? Send us a message!
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
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
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
                      <FormLabel>Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Your Phone Number" {...field} />
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your project or inquiry..." {...field} rows={5}/>
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
                          Consent to Contact
                        </FormLabel>
                        <FormDescription>
                          By checking this box, you agree to be contacted by Rivers Software House regarding your inquiry.
                        </FormDescription>
                         <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" variant="accent">
                  Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

