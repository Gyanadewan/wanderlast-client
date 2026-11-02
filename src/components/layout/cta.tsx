import { ArrowRightIcon } from "lucide-react"

function Cta() {
  return (
    <section className="relative flex min-h-[320px] items-center justify-center bg-[url('/images/CTA.png')] bg-cover bg-center px-4 py-16 text-white">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-serif text-4xl leading-tight drop-shadow-sm md:text-5xl">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-3 max-w-md text-sm text-white/85">
          Join thousands of travelers who have discovered the world with us
        </p>

        <a
          href="#"
          className="mt-8 inline-flex h-11 items-center gap-2 bg-white px-7 text-xs font-semibold tracking-widest uppercase text-foreground transition-colors hover:bg-white/90"
        >
          Book Your Trip Today
          <ArrowRightIcon className="size-4" />
        </a>
      </div>
    </section>
  )
}

export { Cta }
