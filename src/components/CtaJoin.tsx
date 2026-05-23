import { LambdaButtonLink } from "@/components/LambdaButton";
import { GlitchTitle } from "@/components/GlitchTitle";

export function CtaJoin() {
  return (
    <section className="py-24 lg:py-32 bg-cream text-bg">
      <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <GlitchTitle
            text="Join the race to superintelligence"
            variant="dark"
            className="text-[40px] sm:text-[56px] lg:text-[72px] max-w-[760px] leading-[1.05]"
          />
        </div>
        <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 lg:justify-end">
          <LambdaButtonLink variant="purple" href="/sign-up">
            Launch an instance
          </LambdaButtonLink>
          <LambdaButtonLink variant="outlineDark" href="/talk-to-our-team">
            Talk to our team
          </LambdaButtonLink>
        </div>
      </div>
    </section>
  );
}
