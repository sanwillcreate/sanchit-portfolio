import SectionLabel from "./SectionLabel";

const currentlyExploring = [
  "AI",
  "Web3",
  "Backend systems",
  "Open source",
  "Developer tools",
];

export default function Currently() {
  return (
    <section id="now" className="border-t border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionLabel index="03" label="Currently" />
        <h2 className="mt-6 font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          What I&apos;m currently exploring.
        </h2>

        <ul className="mt-12 flex flex-wrap gap-3">
          {currentlyExploring.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border px-5 py-2 font-mono text-sm text-muted"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-lg text-sm leading-relaxed text-muted-2">
          {/* EDIT ME — a sentence or two on what "exploring" actually looks
              like right now: a specific rabbit hole, a course, a project
              in progress. */}
          This list shifts. Whatever&apos;s here is what&apos;s currently
          pulling my attention , not a resume of skills.
        </p>
      </div>
    </section>
  );
}
