import { ArrowRightIcon } from "lucide-react"

const searchFields = [
  { label: "Location", value: "Address, City or Zip" },
  { label: "Date/Duration", value: "Anytime · 5 days" },
  { label: "Budget", value: "$0 - $3000" },
  { label: "People", value: "1 - 10" },
]

function Banner() {
  return (
    <section className="relative flex min-h-[560px] flex-1 flex-col bg-[url('/images/Banner.png')] bg-cover bg-center text-white">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="font-serif text-5xl leading-tight drop-shadow-sm md:text-6xl">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mt-4 max-w-md text-sm text-white/85">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="#"
            className="inline-flex h-10 items-center gap-2 bg-cyan-500 px-7 text-xs font-semibold tracking-widest uppercase text-white transition-colors hover:bg-cyan-600"
          >
            Explore Now
            <ArrowRightIcon className="size-4" />
          </a>
          <a
            href="#"
            className="inline-flex h-10 items-center bg-white/30 px-7 text-xs font-semibold tracking-widest uppercase text-white backdrop-blur-sm transition-colors hover:bg-white/40"
          >
            View Destination
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 border-t border-white/25 md:grid-cols-5">
        {searchFields.map((field) => (
          <div
            key={field.label}
            className="border-r border-white/25 bg-white/20 px-5 py-3 backdrop-blur-[2px]"
          >
            <p className="text-sm font-medium">{field.label}</p>
            <p className="text-xs text-white/80">{field.value}</p>
          </div>
        ))}
        <button
          type="button"
          className="w-full bg-cyan-500 py-3 text-sm font-medium transition-colors hover:bg-cyan-600 md:col-span-1"
        >
          Search
        </button>
      </div>
    </section>
  )
}

export { Banner }
