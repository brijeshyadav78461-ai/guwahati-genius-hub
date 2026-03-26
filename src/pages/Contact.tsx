import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const branches = [
  { name: "Mirza Chowk Branch", address: "Near Mirza Chowk, Guwahati, Assam", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5!2d91.7!3d26.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMirza%20Chowk%2C%20Guwahati!5e0!3m2!1sen!2sin!4v1" },
  { name: "VIP Airport Branch", address: "VIP Road, Near Airport, Guwahati, Assam", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5!2d91.58!3d26.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVIP%20Airport%2C%20Guwahati!5e0!3m2!1sen!2sin!4v1" },
];

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <section className="bg-hero-gradient py-20">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-extrabold text-primary-foreground sm:text-5xl">Contact Us</h1>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">We'd love to hear from you. Reach out for admissions, queries, or a campus visit.</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="container grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
            <div className="mt-6 space-y-5">
              <a href="tel:8471894433" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Phone className="h-5 w-5" /></div>
                <div><p className="font-semibold">8471894433</p><p className="text-xs text-muted-foreground">Primary</p></div>
              </a>
              <a href="tel:7099483837" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Phone className="h-5 w-5" /></div>
                <div><p className="font-semibold">7099483837</p><p className="text-xs text-muted-foreground">Alternate</p></div>
              </a>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Clock className="h-5 w-5" /></div>
                <div><p className="font-semibold text-foreground">Mon – Sat, 8 AM – 7 PM</p><p className="text-xs text-muted-foreground">Office Hours</p></div>
              </div>
            </div>

            <h3 className="mt-10 text-xl font-bold text-foreground">Our Branches</h3>
            <div className="mt-4 space-y-4">
              {branches.map((b) => (
                <div key={b.name} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></div>
                  <div><p className="font-semibold text-foreground">{b.name}</p><p className="text-sm text-muted-foreground">{b.address}</p></div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {sent ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-border bg-muted p-8 text-center">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                  <p className="mt-2 text-muted-foreground">We'll get back to you shortly.</p>
                  <Button onClick={() => setSent(false)} className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">Send Another</Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-card">
                <h2 className="mb-6 text-xl font-bold text-foreground">Send us a Message</h2>
                <div className="space-y-4">
                  <div><Label htmlFor="cname">Name</Label><Input id="cname" required placeholder="Your name" /></div>
                  <div><Label htmlFor="cemail">Email</Label><Input id="cemail" type="email" required placeholder="your@email.com" /></div>
                  <div><Label htmlFor="cphone">Phone</Label><Input id="cphone" type="tel" required placeholder="Phone number" /></div>
                  <div><Label htmlFor="cmsg">Message</Label><Textarea id="cmsg" required placeholder="How can we help?" rows={4} /></div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-5">Send Message</Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-muted py-12">
        <div className="container">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="AICI Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114387.28367791862!2d91.6!3d26.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a95b6ee36d3%3A0x2a5a0358c76ceac5!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
