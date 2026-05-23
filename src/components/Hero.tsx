import { LambdaButtonLink } from "@/components/LambdaButton";
import { HeroStreaks } from "@/components/HeroStreaks";
import { GlitchTitle } from "@/components/GlitchTitle";

export function Hero() {
  return (
    <section
      id="section-home-hero"
      className="relative overflow-hidden bg-bg pt-[101px]"
      style={{ minHeight: "820px" }}
    >
      {/* Canvas streak background */}
      <div className="absolute inset-0">
        <HeroStreaks />
        {/* Subtle vignette over the top + bottom */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(11,11,11,0.55)_100%)]" />
      </div>

      <div className="relative container-page flex flex-col items-center justify-center text-center gap-6 lg:gap-8 py-12 lg:py-16">
        <p className="font-sans text-[18px] lg:text-[22px] font-semibold text-fg">
          Supercomputers for training and inference
        </p>
        <GlitchTitle
          text="The Superintelligence Cloud"
          className="text-[48px] sm:text-[72px] md:text-[92px] lg:text-[108px] max-w-[1100px] leading-[0.98]"
        />
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <LambdaButtonLink variant="outlineCream" href="/sign-up">
            Launch GPU instance
          </LambdaButtonLink>
          <LambdaButtonLink variant="purple" href="/talk-to-our-team">
            Talk to our team
          </LambdaButtonLink>
        </div>
      </div>
    </section>
  );
}
