import React, { useState } from "react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const AboutSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="flex min-h-[564px] w-full flex-col overflow-hidden items-stretch pt-[30px] pb-[86px] px-[120px] max-md:max-w-full max-md:px-5">
      <div className="self-center flex gap-[10px] md:gap-[30px] text-5xl text-[#414042] font-extrabold tracking-[-0.96px] flex-nowrap md:flex-wrap max-md:max-w-full max-md:text-[40px] items-center">
        <h2 className="max-md:max-w-full font-proxima font-black text-[33px] md:text-[48px] mt-8 flex gap-4">
          The FUTRAN System
        </h2>
      </div>
      <div className="flex w-full flex-col items-center text-[#414042] font-normal mt-[34px] max-md:max-w-full">
        <div className="max-w-full w-[1272px] text-center">
          <h3 className="text-[20px] md:text-3xl font-[500] md:font-semibold text-[#414042] max-md:max-w-full font-neue md:font-proxima">
            The Smarter, Greener and Safer Way to move the World forward
          </h3>
          <p className="text-[#414042] text-[16px] md:text-[20px]  leading-[26px] md:leading-[34px] tracking-[0.20px] font-neue md:font-proxima  font-[500] md:font-semibold  mt-[47px] max-md:max-w-full max-md:mt-10">
            Futran is the future of public transportation.{" "}
            <b>Quick, easy, personalised, green and affordable.</b>
            <br />
            <br />
            While human innovation and technology have advanced at an incredible
            pace over the past century, public transportation has struggled to
            keep up. As urban populations expand and the middle class grows,
            managing the flow of people and vehicles on shared ground-level
            infrastructure has become increasingly challenging.
            {isExpanded && (
              <>
                <br />
                <br />
                Futran offers a transformative solution:{" "}
                <b>automated, self-driving, self-steering podcars</b> that
                operate on elevated, grade-separated tracks above roadways.
                These vehicles run on-demand rather than on{" "}
                <b>fixed schedules, bypassing stations</b>
                where they are not needed. Even during peak traffic, they
                maintain speeds of up to <b>70 km/h,</b> ensuring faster,
                hassle-free trips at <b>highly affordable rates.</b> Designed
                for cost efficiency, the system is sustainable for private
                sector investment and can operate profitably under
                Public-Private Partnership (PPP) agreements.
                <br />
                <br />
                After 15 years of rigorous development and testing, the Futran
                System is poised for commercial deployment starting in 2025,
                beginning in India and expanding globally. Its revolutionary
                on-demand functionality can seamlessly integrate into any urban
                environment, promising safer, faster, and more efficient public
                transportation at a fraction of the cost of traditional systems.
                <br />
                What truly sets Futran apart is its environmental impact.
                Powered entirely by renewable energy, the system not only
                minimizes its carbon footprint but also has the potential to
                generate surplus energy for the city. Futran is not just a
                transportation system—it's a smarter, greener way to move the
                world forward.
              </>
            )}
          </p>
        </div>
        <PrimaryButton
          variant="outline"
          size="lg"
          className="mt-12 max-md:mt-10"
          onClick={() => setIsExpanded((prev) => !prev)}
          rotate={isExpanded ? true : false}
        >
          {isExpanded ? "See Less" : "Read Our Story"}
        </PrimaryButton>
      </div>
    </section>
  );
};

export default AboutSection;
