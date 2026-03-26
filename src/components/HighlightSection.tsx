import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Class 6th–10th",
    subtitle: "Foundation Courses",
    desc: "Build a strong academic foundation with CBSE & State board coaching, Olympiad prep, and conceptual learning.",
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Class 11th, 12th & Droppers",
    subtitle: "Yearlong Courses",
    desc: "Intensive preparation for JEE, NEET and Board exams with expert faculty and daily practice tests.",
  },
];

const HighlightSection = () => (
  <section className="bg-card py-16">
    <div className="container">
      <div className="grid gap-6 md:grid-cols-2">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:shadow-card-hover"
          >
            <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">{h.icon}</div>
            <h3 className="text-xl font-bold text-foreground">{h.title}</h3>
            <p className="mt-1 text-sm font-medium text-primary">{h.subtitle}</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HighlightSection;
