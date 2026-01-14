import { TopBar } from "@/components/navigation/TopBar";
import { MainNav } from "@/components/navigation/MainNav";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactInfo } from "@/components/forms/ContactInfo";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Spayka Air Cargo Solutions",
  description:
    "Get in touch with Spayka Air Cargo Solutions for all your air freight and logistics needs. Based at Schiphol Airport, Amsterdam.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <MainNav />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Let's Talk About Your Logistics Needs
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Our team of experts is ready to provide you with tailored air
              cargo solutions
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Location</h2>
              <p className="text-muted-foreground">
                Strategically located at Schiphol Airport, Amsterdam
              </p>
            </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden border-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.8956315570156!2d4.757696876912944!3d52.30783074872731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e1f3b7a9f3f5%3A0x400de5a8d1d6c10!2sAmsterdam%20Airport%20Schiphol!5e0!3m2!1sen!2snl!4v1705234567890!5m2!1sen!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
