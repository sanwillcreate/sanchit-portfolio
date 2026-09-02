import Navbar from "@/components/Navbar";
import ProofOfWork from "@/components/ProofOfWork";
import Footer from "@/components/Footer";

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <ProofOfWork />
      </main>

      <Footer />
    </>
  );
}