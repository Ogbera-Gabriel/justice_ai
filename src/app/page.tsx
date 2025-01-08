import About from "@/components/About";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import Community from "@/components/Community";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AnalyticsDashboard />
      <About />
      <Features />
      <Tokenomics />
      <Roadmap />
      <Community />
      <Footer />
    </main>
  )
}

