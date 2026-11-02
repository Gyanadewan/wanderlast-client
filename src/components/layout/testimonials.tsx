"use client"

import Image from "next/image"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    quote:
      "\u201cThe Bali Trip Was Absolutely Magical. Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.\u201d",
    name: "Michael Chen",
    location: "Singapore",
    image: "/images/person2.png",
  },
  {
    quote:
      "\u201cSwiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!\u201d",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/images/person1.png",
  },
]

function Testimonials() {
  const [start, setStart] = useState(0)
  const count = testimonials.length
  const visible = [
    testimonials[start % count],
    testimonials[(start + 1) % count],
  ]

  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto max-w-5xl border border-dashed border-cyan-500/60 p-4">
        <div className="flex items-end justify-between px-1 pt-2">
          <div>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              What Travelers Say
            </h2>
            <p className="mt-2 text-xs text-foreground/60">
              Real experiences from our happy travelers
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => setStart((start - 1 + count) % count)}
              className="flex size-9 items-center justify-center rounded-full border border-cyan-500/40 text-foreground/45 transition-colors hover:bg-cyan-50 hover:text-cyan-600"
            >
              <ArrowLeftIcon className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={() => setStart((start + 1) % count)}
              className="flex size-9 items-center justify-center rounded-full border border-cyan-500/40 text-foreground/45 transition-colors hover:bg-cyan-50 hover:text-cyan-600"
            >
              <ArrowRightIcon className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 grid border-cyan-500/60 md:grid-cols-2">
          {visible.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="flex border-cyan-500/60 first:border-b first:border-dashed md:first:border-b-0 md:first:border-r md:first:border-dashed"
            >
              <div className="flex-1 p-6">
                <p className="text-[15px] leading-relaxed text-foreground/80">
                  {testimonial.quote}
                </p>
                <p className="mt-8 text-sm font-medium text-cyan-600">
                  &mdash; {testimonial.name}
                </p>
                <p className="mt-1 text-xs text-foreground/55">
                  {testimonial.location}
                </p>
              </div>
              <div className="relative w-[38%] shrink-0">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  sizes="(min-width: 768px) 20vw, 38vw"
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Testimonials }
