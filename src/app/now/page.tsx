import Navbar from "@/components/Navbar";
import Currently from "@/components/Currently";
import Footer from "@/components/Footer";

export default function NowPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <Currently />
      </main>

      <Footer />
    </>
  );
}