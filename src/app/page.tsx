import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { AboutStatement } from "@/components/sections/about-statement";
import { Services } from "@/components/sections/services";
import { WhyStats } from "@/components/sections/why-stats";
import { Comparison } from "@/components/sections/comparison";
import { CasesStrip } from "@/components/sections/cases-strip";
import { FAQs } from "@/components/sections/faqs";
import { CtaBlock } from "@/components/sections/cta-block";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <AboutStatement />
      <Services />
      <WhyStats />
      <CasesStrip />
      <Comparison />
      <FAQs />
      <CtaBlock />
    </>
  );
}
