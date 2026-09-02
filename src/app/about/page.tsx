import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Evolution from "@/components/Evolution";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <About />
        <Evolution />
      </main>

      <Footer />
    </>
  );
}