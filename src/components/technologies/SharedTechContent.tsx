import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const SharedTechContent: React.FC = () => {
  return (
    <>
      <div className="px-4 xl:px-24 flex flex-col md:flex-row gap-3 py-10 xl:py-20 items-center">
        <div className="flex items-center gap-3 xl:hidden block">
          <div className="w-[32px] xl:w-10 h-[32px] xl:h-10 rounded-full flex items-center justify-center flex-shrink-0">
            <img
              src="/lovable-uploads/futran_icon.svg"
              alt="FUTRAN icon"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-[30px] xl:text-[36px] leading-[120%] tracking-[-2%] font-proxima font-bold text-[#1C3562] align-middle">
            Experience the Futran Difference
          </h2>
        </div>
        <div className="md:w-1/2 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl overflow-hidden">
          <img
            src="/tech/inside-futran.jpg"
            alt="FUTRAN Technology Introduction"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 xl:space-y-4">
          <div className="items-center gap-3 mb-4 hidden xl:flex">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <img
                src="/lovable-uploads/futran_icon.svg"
                alt="FUTRAN icon"
                className="w-[54px] h-[54px] object-contain"
              />
            </div>
            <h2 className="text-[36px] leading-[150%] tracking-[-2%] font-proxima font-bold text-[#1C3562] align-middle">
              Experience the Futran Difference
            </h2>
          </div>
          <p className="text-[#1A202C] text-[20px] font-normal leading-[1.5em] tracking-[0.20px] font-proxima">
            Futran is more than a transport solution—it’s a vision for smarter,
            safer, and more sustainable cities. Our innovations provide the
            flexibility, efficiency, and environmental responsibility required
            to meet modern urban demands.
          </p>
          {/* <div className="mt-4 text-center xl:text-left">
            <Link to="#">
              <PrimaryButton variant="outline" className="h-[60px]">
                Learn more
              </PrimaryButton>
            </Link>
          </div> */}
        </div>
      </div>
      <div className="">
        <div className="relative">
          <div className="absolute w-full h-full bg-[#00E300] opacity-[.17]"></div>
          <div className="rounded-xl relative px-[120px] max-md:px-6 py-[21px] xl:py-10">
            <div className="relative">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 justify-center">
                  <div className="rounded-full flex items-center justify-center">
                    <img
                      src="/lovable-uploads/futran_icon.svg"
                      alt="FUTRAN icon"
                      className="w-[54px] h-[54px] object-contain"
                    />
                  </div>
                  <h2 className="text-[30px] xl:text-[48px] leading-[1.2em] tracking-[-0.2px] font-proxima font-[800] text-[#1C3562] align-middle">
                    Shared Technologies
                  </h2>
                </div>

                <p className="text-center mx-auto text-[#1A202C] text-[20px] font-normal leading-[1.5em] tracking-[0.20px] font-proxima mb-[48px]">
                  At Futran, we prioritize the use of off-the-shelf,
                  commercially available technologies from trusted and reputed
                  vendors. This approach ensures significant cost savings,
                  streamlined maintenance, easy future upgrades, shorter lead
                  times, and enhanced safety and reliability. By integrating
                  these established technologies with our proprietary solutions,
                  we deliver a robust and efficient system tailored to modern
                  urban mobility needs. We collaborate with industry-leading
                  vendors to source and integrate shared technologies, ensuring
                  that every component meets the highest standards of quality
                  and performance. Some of these partnerships enable us to stay
                  at the forefront of innovation and reliability.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-6">
                  {[
                    "Most advance fast charging and long-lasting EV batteries",
                    "Electric motors and motor controllers",
                    "Automated, self-driving systems",
                    "Pneumatic and hydraulic systems",
                    "High strength, wear resistant specialized steel",
                    "Intelligent sensing and monitoring devices",
                    "Actuators",
                    "Private 5G communication network",
                    "Video surveillance & PA systems",
                    "High powered HVAC systems",
                    "Access control systems",
                  ].map((text, index) => (
                    <div
                      key={index}
                      className="text-[24px] h-[230px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] relative bg-gradient-to-r from-[#03C04A] to-[#50C9F0] rounded-[20px] p-[1px] overflow-hidden"
                    >
                      <div className="bg-[#F6FCFE] h-full w-full p-6 flex items-center justify-center rounded-[20px] text-center">
                        {text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SharedTechContent;
