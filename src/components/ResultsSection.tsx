import { motion } from "framer-motion";
import { Star } from "lucide-react";

const toppers = [
  { name: "Ananya Sharma", course: "JEE Advanced", result: "AIR 342", img: "" },
  { name: "Rohit Das", course: "NEET UG", result: "680/720", img: "" },
  { name: "Priya Borah", course: "CBSE Class 12", result: "98.4%", img: "" },
  { name: "Arjun Kalita", course: "JEE Main", result: "99.2 Percentile", img: "" },
];

const ResultsSection = () => (
  <section id="results" className="bg-muted py-20">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Our Toppers</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Students who made us proud with their extraordinary results.</p>
      </motion.div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {toppers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 text-center shadow-card"
          >
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
              {t.name.split(" ").map(n => n[0]).join("")}
            </div>
            <h3 className="font-bold text-foreground">{t.name}</h3>
            <p className="text-sm text-muted-foreground">{t.course}</p>
            <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-sm font-bold text-accent">
              <Star className="h-3.5 w-3.5 fill-accent" />
              {t.result}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
