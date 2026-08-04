import Image from "next/image";
import { about } from "@/lib/portafolio-data";

export default function About() {
  return (
    <section id="sobre-mi" className="border-b border-border bg-card/50">
      <div className="section-reveal mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="mb-10 font-mono text-xs text-muted-foreground">
          <span className="text-emerald-600 dark:text-emerald-400">05.</span>{" "}
          ~/ sobre mí
        </h2>

        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start">
          <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-lg border-2 border-emerald-600/20 transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/foto5.avif"
              alt="Foto de Alexis Escobar"
              fill
              sizes="192px"
              className="object-cover object-top"
            />
          </div>

          <div className="flex flex-col gap-4 max-w-2xl">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {about.bio}
            </p>

            <p className="font-mono text-xs">
              <span className="text-emerald-600 dark:text-emerald-400">$</span>{" "}
              formación:{" "}
              <span className="text-foreground">{about.education}</span>
              <span className="text-muted-foreground">
                {" "}
                ({about.certifications.institution})
              </span>
            </p>

            <p className="font-mono text-xs">
              <span className="text-emerald-600 dark:text-emerald-400">$</span>{" "}
              certificaciones:{" "}
              <span className="text-foreground">
                {about.certifications.items.join(", ")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
