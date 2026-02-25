import { X, ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-border"
        >
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-heading font-bold text-xl md:text-2xl mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">{project.role}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusColor}`}>{project.status}</span>
                </div>
              </div>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Close">
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <div className="flex gap-3 mb-6">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:brightness-110 transition-all">
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors">
                  <Github size={14} /> GitHub
                </a>
              )}
            </div>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">{t}</span>
              ))}
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6">{project.description}</p>

            {/* Features */}
            <div className="mb-6">
              <h4 className="font-heading font-semibold mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contributions */}
            <div>
              <h4 className="font-heading font-semibold mb-3">My Contributions</h4>
              <ul className="space-y-2">
                {project.contributions.map((c) => (
                  <li key={c} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
