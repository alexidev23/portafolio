import { experience } from "@/lib/portafolio-data";

export default function Experience() {
  return (
    <section id="experiencia" className="border-b border-border bg-card/50">
      <div className="section-reveal mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="mb-10 font-mono text-xs text-muted-foreground">
          <span className="text-emerald-600 dark:text-emerald-400">04.</span>{" "}
          ~/ experiencia
        </h2>

        <ol className="relative border-l border-border pl-6">
          {experience.map((job, i) => (
            <li
              key={`${job.role}-${job.company}-${i}`}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute left-[calc(-1.25rem-4px)] top-0 block h-2.5 w-2.5 rounded-sm border border-border bg-emerald-600/20 before:absolute before:inset-0 before:rounded-sm before:bg-emerald-600/30" />

              <h3 className="font-mono text-sm text-foreground">
                {job.role} · {job.company}
              </h3>
              <p className="font-mono text-xs text-muted-foreground">
                {job.period} · {job.location}
              </p>

              <ul className="mt-2 space-y-1 text-sm text-muted-foreground marker:text-emerald-600/70">
                {job.points.map((point, j) => (
                  <li key={`${i}-${j}`}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
