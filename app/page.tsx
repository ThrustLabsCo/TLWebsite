import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ScrollSequence from "@/components/ScrollSequence";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ScrollSequence />
      <Services />
      <Work />
      <Process />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
