const links = [
  {
    label: "DM me on X",
    href: "https://x.com/i/chat/1886851311452479492-1886851311452479492",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-balance font-display text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-6xl">
          Got something
          <br />
          interesting?
        </h2>

        <p className="mt-4 font-display text-2xl text-accent sm:text-3xl">
          Let&apos;s build.
        </p>

        <div className="mt-12 flex flex-col gap-5">
          {/* Email */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-sm uppercase tracking-widest text-muted-2">
              Mail at
            </span>

            <span className="font-mono text-sm tracking-wide text-muted">
              buildwsan@gmail.com
            </span>
          </div>

          {/* X */}
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-fit
                font-mono
                text-sm
                uppercase
                tracking-widest
                text-muted
                transition-colors
                hover:text-accent
              "
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}