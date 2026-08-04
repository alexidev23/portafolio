import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/portafolio-data";
import type { Project } from "@/lib/portafolio-data";

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="border-b border-border bg-card/50"
    >
      <div className="section-reveal mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="mb-10 font-mono text-xs text-muted-foreground">
          <span className="text-emerald-600 dark:text-emerald-400">03.</span>{" "}
          ~/ proyectos
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={Boolean(project.featured)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured,
}: {
  project: Project;
  featured: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-emerald-600 dark:hover:border-emerald-400",
        featured && "ring-2 ring-emerald-500/30",
      )}
    >
      {featured && (
        <span className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          Featured
        </span>
      )}

      <div className="relative aspect-video w-full overflow-hidden rounded-md">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover grayscale-[15%] transition-[filter] duration-300 group-hover:grayscale-0"
        />
      </div>

      <div className="mt-auto">
        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>

      <ul className="mt-1 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="font-mono text-[10px] text-muted-foreground"
          >
            #{tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex gap-3">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "font-mono text-xs",
          )}
        >
          demo
        </a>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "font-mono text-xs",
          )}
        >
          código
        </a>
      </div>
    </article>
  );
}
