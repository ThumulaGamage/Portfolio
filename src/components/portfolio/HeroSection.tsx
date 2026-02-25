import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useCountUp } from "@/hooks/useCountUp";
import Particles from "./Particles";
import profileImg from "@/assets/profile.png";
import { useRef } from "react";

const statsData = [
  { value: 7, suffix: "+", label: "Projects Completed" },
  { value: 2, suffix: "", label: "Leadership Roles" },
  { value: 6, suffix: "+", label: "Languages" },
];

const socials = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:22eng092@sjp.ac.lk", label: "Email" },
];

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 1800);
  return (
    <div ref={ref} className="glass-card-dark rounded-xl p-5 text-center">
      <div className="text-3xl font-bold text-accent font-heading">
        {count}{suffix}
      </div>
      <div className="text-primary-foreground/60 text-sm mt-1">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const typed = useTypingEffect([
    "Full-Stack Web Developer",
    "Mobile App Developer",
    "IoT System Designer",
    "Building Real-World Solutions",
  ]);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated shifting gradient */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 hero-gradient" />

      {/* Floating blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/5 w-72 h-72 rounded-full bg-accent/15 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -25, 15, 0], y: [0, 25, -10, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 20, -10, 0], y: [0, -15, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-accent/10 blur-[80px]"
        />
      </div>

      {/* Particles */}
      <Particles count={25} />

      <motion.div style={{ opacity }} className="relative z-10 container mx-auto px-4 py-20 mt-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-accent font-medium mb-3 text-sm tracking-widest uppercase"
            >
              Welcome to my portfolio
            </motion.p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
              Hi, I'm{" "}
              <span className="text-accent">Thumula Gamage</span>
            </h1>
            <div className="h-8 mb-6">
              <span className="text-primary-foreground/80 text-lg md:text-xl font-light">
                {typed}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-primary-foreground/70 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Computer Engineering Student | Passionate about creating technology solutions that make a real difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-glow px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium shadow-lg shadow-accent/25"
              >
                View My Work
              </button>
              <a
                href="#"
                className="btn-glow-outline px-6 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-medium flex items-center gap-2 transition-all"
              >
                <Download size={16} /> Download CV
              </a>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-glow-outline px-6 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-medium transition-all"
              >
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-3 rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:text-accent hover:border-accent/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-accent/20"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo with spinning gradient border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            className="flex-shrink-0"
          >
            <div className="gradient-border-spin">
              <img
                src={profileImg}
                alt="Thumula Gamage"
                className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover bg-secondary"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats with counter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto"
        >
          {statsData.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="text-primary-foreground/40" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
