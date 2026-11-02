import Image from "next/image"

const features = [
  {
    icon: "/images/ShieldCheck.png",
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: "/images/MapTrifold.png",
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: "/images/Headset.png",
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
]

function WhyChooseUs() {
  return (
    <section className="bg-[#e7f2f8] px-4 py-12">
      <div className="mx-auto max-w-5xl border border-dashed border-cyan-500/60 bg-[#f2fafc] px-6 py-10 md:px-10">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            Why Choose Wanderlust
          </h2>
          <p className="mt-2 text-xs text-foreground/60">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="bg-white p-6">
              <Image src={feature.icon} alt="" width={36} height={36} className="size-9" />
              <h3 className="mt-7 font-serif text-xl text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground/55">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export { WhyChooseUs }
