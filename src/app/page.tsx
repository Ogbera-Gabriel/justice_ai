import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </main>
  )
}

