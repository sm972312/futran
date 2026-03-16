import React, { useState } from "react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { CloseIcon } from "@/components/svg-icons";

const HowItWorksSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="flex flex-col relative z-0 min-h-[800px] w-full overflow-hidden justify-center px-[120px] pt-[100px] lg:py-[100px] max-md:max-w-full max-md:px-5">
      <img
        src="/home/how-it-works.jpg"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background"
      />
      <div
        className={`${
          isExpanded ? "w-full relative" : "w-full md:w-[440px]"
        } bg-white opacity-80 rounded-[20px] px-[30px] xl:px-[46px] py-[30px] xl:py-[64px] mb-10 xl:mb-0`}
      >
        <div>
          <div className="w-full">
            {isExpanded ? (
              <div className="flex w-full items-center justify-center mb-4 gap-[12px] md:gap-[22px] text-3xl text-[#414042] font-bold tracking-[-0.6px]">
                <img
                  src="/lovable-uploads/futran_icon.svg"
                  className="aspect-[1] object-contain w-[30px] md:w-[50px] self-stretch shrink-0 my-auto"
                  alt="Futran icon"
                />
                <h2 className="self-stretch my-auto text-[#414042] font-bold font-neue md:font-proxima text-[28px] leading-[1.2em]">
                  How it works: Overview & Advantages
                </h2>
              </div>
            ) : (
              <div className="flex w-full items-center gap-[12px] md:gap-[22px] text-3xl text-[#414042] font-bold tracking-[-0.6px]">
                <img
                  src="/lovable-uploads/futran_icon.svg"
                  className="aspect-[1] object-contain w-[30px] md:w-[100px] self-stretch shrink-0 my-auto"
                  alt="Futran icon"
                />
                <h2 className="self-stretch my-auto text-[#414042] font-bold font-neue md:font-proxima text-[28px] leading-[1.2em]">
                  How it works: <br /> Overview & <br /> Advantages
                </h2>
              </div>
            )}
            <p className="self-stretch gap-2.5 text-[#414042] text-[20px] font-normal leading-[30px] tracking-[0.20px] font-neue md:font-proxima pt-[18px] font-normal">
              Futran reimagines public transportation with its autonomous podcar
              system, which operates on elevated, grade-separated tracks. These
              self-driving vehicles run on-demand, eliminating the need for
              fixed schedules and reducing delays caused by unnecessary stops.
              The elevated design allows Futran to avoid road-level congestion
              entirely, ensuring smooth and uninterrupted transit for
              passengers.
              {isExpanded && (
                <>
                  <br />
                  <br />
                  Safety is central to Futran's design, with advanced crash
                  avoidance systems and decentralized control mechanisms that
                  ensure reliable operations. Unlike traditional transit
                  systems, Futranuses 100% renewable energy, making it an
                  environmentally sustainable solution with zero emissions. This
                  integration of green energy also allows Futran to generate
                  surplus power, which can be shared with the surrounding city.
                  <br />
                  <br />
                  The system is cost-efficient, requiring no subsidies for
                  construction or operation, making it a practical choice for
                  cities aiming to enhance their infrastructure without
                  financial strain. Futran is designed to be scalable, easily
                  expanding to meet the growing demands of urban populations.
                  Its modular tracks and adaptable technology make it compatible
                  with existing city infrastructure, enabling quick and
                  cost-effective deployment. By incorporating cutting-edge
                  technologies like 5G and real-time traffic management, Futran
                  offers unmatched reliability, speed, and convenience, setting
                  a new standard for public transportation systems.
                </>
              )}
            </p>
          </div>
          <div className="w-[221px] max-w-full text-[22px] text-[#414042] font-normal xl:text-right leading-none mt-[20px]">
            <PrimaryButton
              variant="outline"
              size="lg"
              className={`mt-2 xl:max-md:mt-10 ${isExpanded && "hidden"}`}
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              Know more{" "}
            </PrimaryButton>
          </div>
        </div>
        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="bg-[#000000] rounded-full w-[48px] h-[48px] absolute -top-5 -right-5"
          >
            <CloseIcon />
          </button>
        )}
      </div>
    </section>
  );
};

export default HowItWorksSection;
