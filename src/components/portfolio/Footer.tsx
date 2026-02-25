import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/ThumulaGamage", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/thumula-gamage-31a9112bb", label: "LinkedIn" },
  { icon: Mail, href: "mailto:thumuladgamage@gmail.com", label: "Email" },
];

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-heading font-bold text-lg gradient-text">M.G.T.D. Gamage</span>
            <p className="text-muted-foreground text-xs mt-1">© 2026 All rights reserved.</p>
          </div>

          <div className="flex gap-4">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <s.icon size={18} />
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors ml-2"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
