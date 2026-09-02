import SectionLabel from "./SectionLabel";

export default function RecentlyOnline() {
  return (
    <section className=" px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionLabel index="05" label="Recently Online" />
        <h2 className="mt-6 font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Selected posts.
        </h2>

        <div className="mt-12 border border-dashed border-border p-10">
          <p className="font-mono text-sm text-muted-2">
            {/* Drop in real links to X/Reddit/etc. posts as they happen —
                a title, a one-line takeaway, and a link is enough. */}
            No posts pinned yet. Once there&apos;s something worth pointing
            people to, it&apos;ll show up here.
          </p>
        </div>
      </div>
    </section>
  );
}
