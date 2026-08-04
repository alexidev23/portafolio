import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { hero } from "@/lib/portafolio-data";

export default function Hero() {
  return (
    <section id="inicio" className="border-b border-border">
      <div className="section-reveal mx-auto flex max-w-5xl flex-col items-start gap-5 px-4 py-20 sm:px-6 sm:py-28">
        <p className="font-mono text-sm text-muted-foreground">
          <span className="text-emerald-600 dark:text-emerald-400">$</span>{" "}
          {hero.label}
          <span aria-hidden className="text-emerald-600 dark:text-emerald-400 cursor-blink">
            ▌
          </span>
        </p>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          {hero.title}
        </h1>

        <p className="font-mono text-lg text-muted-foreground sm:text-xl">
          {hero.role}
        </p>

        <p className="max-w-xl text-2xl font-bold leading-snug text-foreground sm:text-3xl">
          {hero.headline}
        </p>

        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {hero.subtitle}
        </p>

        <div className="mt-2 flex flex-wrap gap-3">
          {hero.ctas.map((cta) => {
            const isExternal = cta.href.startsWith("http");
            return (
              <a
                key={cta.label}
                href={cta.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={cn(buttonVariants({ variant: cta.variant }), "font-mono")}
              >
                {cta.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
