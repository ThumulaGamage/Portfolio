import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Search, ArrowUpDown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import ProjectModal from "./ProjectModal";
import { projects, type Project } from "@/data/projects";

const filters = ["All", "Web", "Mobile", "IoT", "Team"];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "tech">("default");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    let result = filter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (sortBy === "tech") {
      result = [...result].sort((a, b) => b.technologies.length - a.technologies.length);
    }

    return result;
  }, [filter, search, sortBy]);

  return (
    <section id="projects" className="section-padding section-alt">
      <div className="container mx-auto">
        <SectionHeading title="Featured Projects" subtitle="A selection of projects I've worked on" />

        {/* Controls */}
        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === f
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10 max-w-lg mx-auto">
            <div className="relative flex-1 w-full">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-card border border-border text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                maxLength={100}
              />
            </div>
            <button
              onClick={() => setSortBy(sortBy === "default" ? "tech" : "default")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all whitespace-nowrap"
            >
              <ArrowUpDown size={14} />
              {sortBy === "default" ? "Sort by Tech" : "Default Order"}
            </button>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => setSelected(project)}
                className="glass-card rounded-xl overflow-hidden cursor-pointer group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Gradient header */}
                <div className="h-40 bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                  <span className="font-heading font-bold text-base text-foreground/50 px-4 text-center relative z-10">
                    {project.title}
                  </span>
                  {/* Status badge */}
                  <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-semibold ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-semibold text-sm group-hover:text-primary transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    {project.liveUrl && (
                      <ExternalLink size={14} className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                  <p className="text-muted-foreground text-xs mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-primary/10 text-primary">
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-muted text-muted-foreground">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 pt-3 border-t border-border/50">
                    <span className="text-[11px] text-muted-foreground">{project.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground mt-10"
          >
            No projects found matching your criteria.
          </motion.p>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
