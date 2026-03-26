import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import directorImg from "@/assets/director-rajesh.jpg";

const About = () => (
  <div>
    {/* Hero */}
    <section className="bg-hero-gradient py-20">
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-extrabold text-primary-foreground sm:text-5xl">About AICI Coaching Center</h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">
            Empowering students across Assam since 2015 with quality education and a passion for academic excellence.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="bg-card py-16">
      <div className="container grid gap-8 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border border-border bg-card p-8 shadow-card">
          <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary"><Eye className="h-6 w-6" /></div>
          <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            To be the most trusted and result-oriented coaching institute in Northeast India, nurturing future leaders in science, technology, and medicine.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border border-border bg-card p-8 shadow-card">
          <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary"><Target className="h-6 w-6" /></div>
          <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            To provide affordable, high-quality coaching that transforms every student's potential into performance through personalized mentoring and innovative teaching methods.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Director */}
    <section className="bg-muted py-16">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center gap-8 md:flex-row">
          <img src={directorImg} alt="Director Rajesh" loading="lazy" width={512} height={640} className="h-80 w-64 rounded-2xl object-cover shadow-card" />
          <div className="max-w-xl">
            <div className="mb-2 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Heart className="mr-1 h-3 w-3" /> Founder & Director
            </div>
            <h2 className="text-3xl font-bold text-foreground">Rajesh</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With over 15 years of experience in education, Rajesh founded AICI Coaching Center with a vision to bring
              world-class competitive exam preparation to Guwahati. A passionate educator and mentor, he has personally
              guided hundreds of students to crack JEE and NEET with top ranks.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              His student-first approach and commitment to academic excellence have made AICI one of the most respected
              coaching centers in Assam.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default About;
