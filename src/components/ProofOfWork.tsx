"use client";

import { useState } from "react";
import { filters, projects, type ProjectCategory } from "@/data/projects";
import SectionLabel from "./SectionLabel";
import { GlareCard } from "./ui/glare-card";

type FilterValue = (typeof filters)[number];

export default function ProofOfWork() {
  const [active, setActive] = useState<FilterValue>("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) =>
          p.categories.includes(active as ProjectCategory)
        );

  return (
    <section id="work" className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="text-center">
          <SectionLabel index="01" label="Proof of Work" />

          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Things I&apos;ve built.
          </h2>
        </div>

        {/* Filters */}
        <div className="mt-7 flex justify-center">
          <div className="flex flex-wrap justify-center gap-1 rounded-xl border border-border bg-surface p-1">
            {filters.map((filter) => {
              const isActive = filter === active;

              return (
                <button
                  key={filter}
                  onClick={() => setActive(filter)}
                  className={`
                    rounded-lg
                    px-4 py-2
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-wider
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted hover:text-foreground"
                    }
                  `}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {visible.map((project, i) => (
            <GlareCard
              key={project.slug}
              className="group !h-auto !min-h-[310px] !w-full rounded-xl border border-border bg-background"
            >
              <div className="flex h-full min-h-[310px] flex-col p-6">

                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span
                    className="
                      flex h-8 w-8
                      items-center justify-center
                      rounded-md
                      border border-border
                      bg-surface
                      font-mono
                      text-[10px]
                      text-muted
                    "
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="font-mono text-[10px] text-muted-2">
                    {project.year}
                  </span>
                </div>

                {/* Project info */}
                <div className="mt-5">
                  <h3
                    className="
                      font-display
                      text-xl
                      font-medium
                      tracking-tight
                      text-foreground
                      transition-colors
                      group-hover:text-accent
                    "
                  >
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>

                {/* Stack */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-md
                        border border-border
                        px-2 py-1
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-wide
                        text-muted
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto pt-6 flex gap-2">
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="
                        rounded-md
                        border border-border
                        bg-foreground
                        px-3 py-1.5
                        text-xs
                        font-medium
                        text-background
                        transition-all
                        duration-200
                        hover:opacity-80
                      "
                    >
                      Website
                    </a>
                  )}

                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="
                        rounded-md
                        border border-border
                        px-3 py-1.5
                        text-xs
                        font-medium
                        text-foreground
                        transition-all
                        duration-200
                        hover:border-muted-2
                        hover:bg-background
                      "
                    >
                      Source
                    </a>
                  )}
                </div>
              </div>
            </GlareCard>
          ))}

          {visible.length === 0 && (
            <p className="col-span-full py-10 text-center font-mono text-sm text-muted-2">
              Nothing filed under this category yet.
            </p>
          )}
        </div>

      </div>
    </section>
  );
}