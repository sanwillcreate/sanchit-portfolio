"use client";

import { useEffect, useRef, useState } from "react";

type ContributionDay = {
  contributionCount: number;
  date: string;
  weekday: number;
};

type ContributionWeek = {
  contributionDays: ContributionDay[];
};

type GithubActivity = {
  username: string;
  totalContributions: number;
  weeks: ContributionWeek[];
};

export default function OpenSource() {
  const [activity, setActivity] = useState<GithubActivity | null>(null);
  const [error, setError] = useState(false);

  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/github/activity")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch GitHub activity");
        }

        return res.json();
      })
      .then((data) => setActivity(data))
      .catch(() => setError(true));
  }, []);

  // Start the contribution graph at the most recent contributions on mobile
  useEffect(() => {
    if (!activity || !graphRef.current) {
      return;
    }

    if (window.innerWidth < 640) {
      graphRef.current.scrollLeft =
        graphRef.current.scrollWidth - graphRef.current.clientWidth;
    }
  }, [activity]);

  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        {error ? (
          <p className="font-mono text-sm text-muted-2">
            Unable to load GitHub activity.
          </p>
        ) : !activity ? (
          <p className="font-mono text-sm text-muted-2">
            Loading GitHub activity...
          </p>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-end justify-between">
              <div>
                <h2 className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                  GitHub Contributions
                </h2>

                <p className="mt-2 font-mono text-xs text-muted-2">
                  @{activity.username}
                </p>
              </div>

              {/* Desktop GitHub link */}
              <a
                href={`https://github.com/${activity.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  hidden
                  font-mono
                  text-xs
                  text-muted
                  transition-colors
                  hover:text-foreground
                  sm:block
                "
              >
                View GitHub →
              </a>
            </div>

            {/* Mobile GitHub link */}
            <a
              href={`https://github.com/${activity.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-5
                block
                w-fit
                font-mono
                text-xs
                text-muted
                transition-colors
                hover:text-foreground
                sm:hidden
              "
            >
              View GitHub →
            </a>

            {/* Contribution graph */}
            <div className="mt-10">
              {/*
                Only this area scrolls horizontally.
                On mobile, it starts at the most recent contributions.
              */}
              <div
                ref={graphRef}
                className="overflow-x-auto overscroll-x-contain pb-3"
              >
                <div className="w-max min-w-[760px]">
                  {/* Month labels */}
                  <div className="mb-3 flex">
                    {/* Space for weekday labels */}
                    <div className="w-6 shrink-0" />

                    <div className="flex gap-[3px]">
                      {activity.weeks.map((week, index) => {
                        const firstDay = week.contributionDays[0];

                        if (!firstDay) {
                          return null;
                        }

                        const date = new Date(firstDay.date);
                        const isFirstOfMonth = date.getDate() <= 7;

                        return (
                          <div
                            key={index}
                            className="w-[11px] shrink-0"
                          >
                            {isFirstOfMonth ? (
                              <span className="font-mono text-[10px] text-muted-2">
                                {date.toLocaleString("en-US", {
                                  month: "short",
                                })}
                              </span>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Graph */}
                  <div className="flex gap-[3px]">
                    {/* Weekday labels */}
                    <div className="flex w-6 shrink-0 flex-col gap-[3px]">
                      <span className="h-[11px]" />

                      <span className="h-[11px] font-mono text-[8px] text-muted-2">
                        M
                      </span>

                      <span className="h-[11px]" />

                      <span className="h-[11px] font-mono text-[8px] text-muted-2">
                        W
                      </span>

                      <span className="h-[11px]" />

                      <span className="h-[11px] font-mono text-[8px] text-muted-2">
                        F
                      </span>

                      <span className="h-[11px]" />
                    </div>

                    {/* Contribution weeks */}
                    {activity.weeks.map((week, weekIndex) => (
                      <div
                        key={weekIndex}
                        className="flex shrink-0 flex-col gap-[3px]"
                      >
                        {week.contributionDays.map((day) => (
                          <div
                            key={day.date}
                            title={`${day.contributionCount} contribution${
                              day.contributionCount === 1 ? "" : "s"
                            } on ${day.date}`}
                            className={`
                              h-[11px]
                              w-[11px]
                              shrink-0
                              rounded-[2px]
                              transition-all
                              duration-150
                              hover:scale-125
                              ${
                                day.contributionCount === 0
                                  ? "border border-border/40 bg-surface"
                                  : day.contributionCount <= 2
                                    ? "bg-accent/25"
                                    : day.contributionCount <= 5
                                      ? "bg-accent/45"
                                      : day.contributionCount <= 9
                                        ? "bg-accent/70"
                                        : "bg-accent"
                              }
                            `}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between gap-4">
                <p className="font-mono text-xs text-muted-2">
                  {activity.totalContributions.toLocaleString()}{" "}
                  contributions in the last year
                </p>

                <div className="flex shrink-0 items-center gap-2 font-mono text-xs text-muted-2">
                  <span>Less</span>

                  <div className="flex gap-[3px]">
                    <span className="h-[10px] w-[10px] rounded-[2px] border border-border/40 bg-surface" />

                    <span className="h-[10px] w-[10px] rounded-[2px] bg-accent/25" />

                    <span className="h-[10px] w-[10px] rounded-[2px] bg-accent/45" />

                    <span className="h-[10px] w-[10px] rounded-[2px] bg-accent/70" />

                    <span className="h-[10px] w-[10px] rounded-[2px] bg-accent" />
                  </div>

                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}