import { motion } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-students.jpg";

const HeroSection = ({ onBookDemo }: { onBookDemo: () => void }) => (
  <section className="relative overflow-hidden bg-hero-gradient">
    {/* Background image overlay */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Students at AICI Coaching"
        className="h-full w-full object-cover opacity-20"
      />
    </div>
    <div className="container relative z-10 flex min-h-[85vh] flex-col items-center justify-center py-20 text-center md:min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
          🎓 Admissions Open 2026–27
        </span>
        <h1 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight text-primary-foreground sm:text-5xl md:text-6xl">
          AICI Coaching Center - Guwahati{" "}
          <span className="text-accent">Trusted Results</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
          Admissions Open for Class 6th to 12th, JEE, NEET, Olympiads — Join
          Guwahati's most trusted coaching center.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            onClick={onBookDemo}
            className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 shadow-lg"
          >
            <CalendarCheck className="h-5 w-5" />
            Book Free Demo Class
          </Button>
          <a href="tel:8471894433">
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </Button>
          </a>
        </div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {[
          { num: "1500+", label: "Students" },
          { num: "95%", label: "Result Rate" },
          { num: "50+", label: "Faculty" },
          { num: "8+", label: "Years" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl bg-primary-foreground/10 px-4 py-4 backdrop-blur-sm"
          >
            <div className="text-2xl font-extrabold text-primary-foreground">
              {s.num}
            </div>
            <div className="text-xs text-primary-foreground/70">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
