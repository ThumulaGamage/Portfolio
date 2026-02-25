import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import CircularProgress from "./CircularProgress";

interface Skill {
  name: string;
  level: number;
  tier: "Advanced" | "Intermediate" | "Learning";
}

interface Category {
  label: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    label: "Languages",
    skills: [
      { name: "JavaScript / TypeScript", level: 85, tier: "Advanced" },
      { name: "Python", level: 70, tier: "Intermediate" },
      { name: "Dart", level: 75, tier: "Intermediate" },
      { name: "Java", level: 60, tier: "Intermediate" },
      { name: "C++", level: 55, tier: "Intermediate" },
    ],
  },
  {
    label: "Frontend & Mobile",
    skills: [
      { name: "React & React Native", level: 85, tier: "Advanced" },
      { name: "Flutter", level: 80, tier: "Advanced" },
      { name: "HTML5 / CSS3", level: 90, tier: "Advanced" },
      { name: "Tailwind CSS", level: 85, tier: "Advanced" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js & Express.js", level: 80, tier: "Advanced" },
      { name: "RESTful APIs", level: 85, tier: "Advanced" },
      { name: "Firebase", level: 75, tier: "Intermediate" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "MongoDB", level: 80, tier: "Advanced" },
      { name: "MySQL", level: 75, tier: "Intermediate" },
      { name: "Firebase Firestore", level: 70, tier: "Intermediate" },
    ],
  },
  {
    label: "IoT & Hardware",
    skills: [
      { name: "ESP32", level: 75, tier: "Intermediate" },
      { name: "Arduino", level: 70, tier: "Intermediate" },
      { name: "Sensor Integration", level: 70, tier: "Intermediate" },
      { name: "Bluetooth LE", level: 65, tier: "Intermediate" },
    ],
  },
  {
    label: "AI & Tools",
    skills: [
      { name: "NLP / spaCy", level: 45, tier: "Learning" },
      { name: "Git & GitHub", level: 85, tier: "Advanced" },
      { name: "VS Code / Postman", level: 90, tier: "Advanced" },
      { name: "Figma", level: 60, tier: "Intermediate" },
    ],
  },
];

export default function SkillsSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <SectionHeading title="Technical Expertise" subtitle="Technologies and tools I work with" />

        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c, i) => (
              <button
                key={c.label}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === i
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-[1.02]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto"
          >
            {categories[active].skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <CircularProgress
                  value={skill.level}
                  label={skill.name}
                  tier={skill.tier}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
