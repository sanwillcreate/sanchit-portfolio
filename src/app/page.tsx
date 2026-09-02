import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofOfWork from "@/components/ProofOfWork";
import About from "@/components/About";
import Evolution from "@/components/Evolution";
import Currently from "@/components/Currently";
import OpenSource from "@/components/OpenSource";
import RecentlyOnline from "@/components/RecentlyOnline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofOfWork />
        <About />
        <Evolution />
        <Currently />
        <OpenSource />
        <RecentlyOnline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
