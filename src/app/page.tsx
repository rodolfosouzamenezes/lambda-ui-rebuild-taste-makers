import { Header } from "@/components/Header";
import { AgentTerminal } from "@/components/AgentTerminal";
import { Hero } from "@/components/Hero";
import { BuiltForAI } from "@/components/BuiltForAI";
import { Supercomputers } from "@/components/Supercomputers";
import { Secure } from "@/components/Secure";
import { Engines } from "@/components/Engines";
import { CtaJoin } from "@/components/CtaJoin";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <AgentTerminal />
      <main id="main-content" className="bg-bg">
        <Hero />
        <BuiltForAI />
        <Supercomputers />
        <Secure />
        <Engines />
        <CtaJoin />
        <Footer />
      </main>
    </>
  );
}
