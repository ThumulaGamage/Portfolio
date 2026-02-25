import { useState } from "react";
import { Mail, MapPin, Briefcase, Send, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const contactInfo = [
  { icon: Mail, label: "Email", value: "thumuladgamage@gmail.com", href: "mailto:thumuladgamage@gmail.com" },
  { icon: Phone, label: "Phone", value: "+94714149937", href: "tel:+94714149937" },
  { icon: MapPin, label: "Location", value: "Kuliyapitiya, Sri Lanka" },
  { icon: Briefcase, label: "Status", value: "Open to Internship Opportunities" },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <SectionHeading title="Get In Touch" subtitle="Let's build something amazing together!" />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <AnimatedSection delay={0.1}>
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 md:p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  placeholder="Your name"
                  maxLength={100}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  placeholder="your@email.com"
                  maxLength={255}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                  placeholder="Your message..."
                  maxLength={1000}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {sending ? "Sending..." : <><Send size={16} /> Send Message</>}
              </button>
            </form>
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-5">
              {contactInfo.map((c) => (
                <div key={c.label} className="glass-card rounded-xl p-5 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <c.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="font-medium text-sm hover:text-primary transition-colors">{c.value}</a>
                    ) : (
                      <p className="font-medium text-sm">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="glass-card rounded-xl p-6 text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Currently seeking internship opportunities in Software Engineering, Mobile Development, or IoT.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
