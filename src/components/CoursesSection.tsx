import { motion } from "framer-motion";
import { FlaskConical, Stethoscope, Trophy, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  { icon: <FlaskConical className="h-7 w-7" />, title: "IIT-JEE", desc: "Comprehensive preparation for JEE Main & Advanced with problem-solving mastery.", tag: "Most Popular" },
  { icon: <Stethoscope className="h-7 w-7" />, title: "NEET UG", desc: "Expert-guided NEET coaching covering Physics, Chemistry & Biology thoroughly." },
  { icon: <Trophy className="h-7 w-7" />, title: "Olympiads", desc: "Specialized training for NSO, IMO, and other national & international olympiads." },
  { icon: <Award className="h-7 w-7" />, title: "NTSE", desc: "Structured coaching for National Talent Search Exam with mock tests & mentoring." },
  { icon: <BookOpen className="h-7 w-7" />, title: "Board Exams", desc: "Score 90%+ in CBSE & State boards with our result-oriented curriculum." },
];

const CoursesSection = () => (
  <section id="courses" className="bg-muted py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Our Courses</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Tailored programs designed for every competitive exam and academic goal.</p>
      </motion.div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-card-hover"
          >
            {c.tag && (
              <span className="absolute -top-3 right-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                {c.tag}
              </span>
            )}
            <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">{c.icon}</div>
            <h3 className="text-lg font-bold text-foreground">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            <Button variant="link" className="mt-4 p-0 text-primary">Learn More →</Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
