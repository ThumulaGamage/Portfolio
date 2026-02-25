import { GraduationCap, Briefcase, Telescope, Lightbulb, Users, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import profileImg from "@/assets/profile.png";

const highlights = [
  { icon: GraduationCap, text: "Computer Engineering Student" },
  { icon: Briefcase, text: "Seeking Internship Opportunities" },
  { icon: Telescope, text: "Currently Learning: ML, Deep Learning, Generative AI" },
  { icon: Lightbulb, text: "Passion: Building Real-World Solutions" },
  { icon: Users, text: "Experience: Team Leadership & Solo Projects" },
  { icon: Mail, text: "22eng092@sjp.ac.lk" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="container mx-auto">
        <SectionHeading title="About Me" subtitle="Get to know me and my journey" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.1}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <img
                src={profileImg}
                alt="Thumula Gamage"
                className="relative rounded-2xl w-full aspect-square object-cover shadow-xl"
                loading="lazy"
              />
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection delay={0.2}>
              <p className="text-muted-foreground leading-relaxed">
                I'm M.G.T.D. Gamage, a passionate Computer Engineering student at the University of Sri Jayewardenepura, 
                driven by a mission to create technology solutions that make a real difference in people's lives. 
                I specialize in full-stack development with strong proficiency in the MERN stack, mobile development 
                using Flutter and React Native, and IoT systems integration.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="glass-card rounded-xl p-5">
                <h3 className="font-heading font-semibold text-lg mb-2 flex items-center gap-2">
                  <GraduationCap size={20} className="text-primary" />
                  Education
                </h3>
                <p className="font-medium">B.Sc. in Computer Engineering</p>
                <p className="text-muted-foreground text-sm">University of Sri Jayewardenepura, Faculty of Engineering</p>
                <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                  <span>Reg: EN108900</span>
                  <span>Index: 22/ENG/092</span>
                  <span className="text-accent font-medium">Currently Pursuing</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <div key={h.text} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <h.icon size={18} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{h.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
