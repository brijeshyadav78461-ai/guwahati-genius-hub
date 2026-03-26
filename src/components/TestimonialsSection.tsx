import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mrs. Kavita Devi",
    role: "Parent of Ananya (JEE 2024)",
    text: "AICI transformed our daughter's preparation. The faculty's dedication and weekly tests helped her secure AIR 342 in JEE Advanced.",
  },
  {
    name: "Rohit Das",
    role: "NEET 2024 – 680/720",
    text: "The personal attention I received at AICI was unmatched. Doubt-clearing sessions and daily practice made all the difference.",
  },
  {
    name: "Mr. Biren Kalita",
    role: "Parent of Arjun (JEE Main 2024)",
    text: "We explored many coaching options in Guwahati, but AICI's result-oriented approach and caring environment stood out.",
  },
];

const TestimonialsSection = () => (
  <section className="bg-card py-20">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">What Parents & Students Say</h2>
      </motion.div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <Quote className="mb-3 h-6 w-6 text-primary/40" />
            <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
            <div className="mt-4 border-t border-border pt-4">
              <p className="font-bold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
