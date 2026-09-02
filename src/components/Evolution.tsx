import { timeline } from "@/data/timeline";
import SectionLabel from "./SectionLabel";

export default function Evolution() {
  return (
    <section className=" px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionLabel index="02" label="Evolution" />

        <h2 className="mt-6 font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          How I got here.
        </h2>

        <div className="mt-16 border-l border-border pl-8 sm:pl-10">
          {timeline.map((entry, i) => (
            <div key={i} className="relative pb-14 last:pb-0">
              <span className="absolute -left-[calc(2rem+5px)] top-1 h-[9px] w-[9px] rounded-full bg-accent sm:-left-[calc(2.5rem+5px)]" />

              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                {entry.year}
              </span>

              <h3 className="mt-2 font-display text-xl font-medium text-foreground sm:text-2xl">
                {entry.title}
              </h3>

              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}