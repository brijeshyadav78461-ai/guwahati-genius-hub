import { motion } from "framer-motion";
import { CalendarCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = ({ onBookDemo }: { onBookDemo: () => void }) => (
  <section className="bg-hero-gradient py-16">
    <div className="container text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-extrabold text-primary-foreground sm:text-4xl">
          Limited Seats Available – Enroll Now!
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-primary-foreground/70">
          Don't miss this opportunity. Secure your child's future with Guwahati's top coaching center.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" onClick={onBookDemo} className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base">
            <CalendarCheck className="h-5 w-5" /> Book Free Demo
          </Button>
          <a href="tel:8471894433">
            <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base">
              Call Us <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
