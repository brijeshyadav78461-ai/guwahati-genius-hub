import { motion } from "framer-motion";
import { Target, Brain, Users, ClipboardCheck } from "lucide-react";

const features = [
  { icon: <Target className="h-6 w-6" />, title: "Academic Excellence", desc: "Curriculum designed by IITians & doctors for conceptual clarity." },
  { icon: <Brain className="h-6 w-6" />, title: "Exam-Focused Prep", desc: "Pattern-based training with 500+ mock tests per year." },
  { icon: <Users className="h-6 w-6" />, title: "Personal Attention", desc: "Small batch sizes with doubt-clearing sessions every day." },
  { icon: <ClipboardCheck className="h-6 w-6" />, title: "Weekly Tests", desc: "Regular assessments with detailed performance analytics." },
];

const FeaturesSection = () => (
  <section className="bg-card py-20">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Why Choose AICI?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">What sets us apart from every other coaching center in Guwahati.</p>
      </motion.div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
              {f.icon}
            </div>
            <h3 className="font-bold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
