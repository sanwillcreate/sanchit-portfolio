import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="px-6 pt-32 pb-24 sm:pt-36 sm:pb-28"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">

        {/* Profile image */}
        <div className="mb-9">
          <div className="relative h-25 w-25 overflow-hidden rounded-full">
            <Image
              src="/images/me.jpg"
              alt="Sanchit"
              fill
              priority
              className="object-cover"
              sizes="80px"
            />
          </div>
        </div>

        {/* Main heading */}
        <h1
          className="
            w-full
    max-w-none
    whitespace-nowrap
    font-display
    text-[1.7rem]
    font-semibold
    leading-tight
    tracking-tight
    text-foreground
    sm:text-6xl
    md:text-7xl
    lg:text-[5.25rem]
          "
        >
          Hi, I'm Sanchit wadhwa
        </h1>

        {/* Secondary line */}
        <p
          className="
            mt-7
            font-body
            text-lg
            font-normal
            leading-[1.45]
            tracking-[-0.015em]
            text-muted
            sm:text-xl
          "
        >
          I build things.
          <br />
          Sometimes useful.
          <br />
          Sometimes weird.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex items-center gap-4">
          <a
            href="#work"
            className="
              inline-flex
              h-11
              items-center
              justify-center
              rounded-xl
              bg-accent
              px-6
              font-sans
              text-sm
              font-medium
              text-background
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:brightness-95
              active:translate-y-0
            "
          >
            View work
          </a>

          <a
            href="#contact"
            className="
              inline-flex
              h-11
              items-center
              justify-center
              rounded-xl
              border
              border-border
              bg-transparent
              px-6
              font-sans
              text-sm
              font-medium
              text-foreground
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-muted
              hover:bg-surface
              active:translate-y-0
            "
          >
            Contact
          </a>
        </div>

      </div>
    </section>
  );
}