import { Banner } from "@/components/layout/banner";
import { Navbar } from "@/components/layout/navbar";
import { Testimonials } from "@/components/layout/testimonials";
import { WhyChooseUs } from "@/components/layout/why-choose-us";
import { Cta } from "@/components/layout/cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col">
        <Banner />
        <WhyChooseUs />
        <Testimonials />
        <Cta />
      </main>
    </>
  );
}
