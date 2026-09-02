export default function About() {
  return (
    <section
      id="about"
      className=" px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 flex items-center gap-4">

          <h2 className="font-sans text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            WHO AM I?
          </h2>
        </div>


        {/* Main statement */}
        <p
          className="
            max-w-3xl
            font-display
            text-3xl
            font-medium
            leading-[1.12]
            tracking-[-0.03em]
            text-foreground
            sm:text-4xl
            md:text-5xl
          "
        >
          I&apos;m not really an{" "}
          <span className="text-muted">AI developer</span>, a{" "}
          <span className="text-muted">Web3 developer</span>, or a{" "}
          <span className="text-muted">fullstack developer</span>.
          <br />
          I&apos;m someone who likes{" "}
          <span className="text-foreground">
            building things.
          </span>
        </p>

        {/* Short personal description */}
        <p
          className="
            mt-10
            max-w-xl
            font-body
            text-base
            leading-[1.7]
            text-muted
            sm:text-lg
          "
        >
          I like following questions wherever they lead. I think everyone
          should have a little bug inside them that keeps asking{" "}
          <span className="text-foreground">“what if?”</span>
          {" "}  - the curiosity to explore, learn something new, and build
          something just to see if you can.
        </p>

      </div>
    </section>
  );
}