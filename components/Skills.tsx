import { skills } from "@/lib/portafolio-data";

export default function Skills() {
  return (
    <section className="border-b border-border bg-card/50">
      <div className="section-reveal mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <h2 className="mb-6 font-mono text-xs text-muted-foreground">
          <span className="text-emerald-600 dark:text-emerald-400">02.</span>{" "}
          ~/ habilidades
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="flex flex-col gap-3 rounded-lg border border-border bg-background/50 p-4"
            >
              <p className="font-mono text-xs text-foreground">
                <span className="mr-2 text-emerald-600 dark:text-emerald-400">
                  ▸
                </span>
                {group.category}
              </p>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-background px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-emerald-600 hover:text-emerald-600 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
