import React from "react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const ProjectsSection: React.FC = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <>
      <div className="absolute w-full h-full bg-[#00E300] opacity-5"></div>
      <section className="flex flex-col relative w-full overflow-hidden py-16 px-[120px] bg-[url('/lovable-uploads/bg-line.png')] min-h-[600px] max-md:px-5">
        <div className="w-full">
          <div className="flex justify-center xl:justify-start items-center gap-4 mb-4">
            <img
              src="/lovable-uploads/futran_icon.svg"
              className="w-[30px] h-[30px] md:h-12 md:w-12 object-contain"
              alt="Current Projects icon"
            />
            <h2 className="text-[36px] font-neue md:font-proxima  font-bold text-[#1C3562] -tracking-[0.02em]">
              Current Projects
            </h2>
          </div>

          <p className="text-[#414042] md:text-[20px] font-normal md:leading-[34px] tracking-5pct font-neue md:font-proxima text-center md:text-left mb-10 ">
            India is hub of the global FUTRAN Supply chain and one of the most
            important and vibrant markets for FUTRAN.
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#00DF00] to-[#005D93] text-white py-4 px-6 rounded-lg flex items-center mb-6 lg:hidden ">
                <h3 className="text-xl font-semibold flex-1 text-center">
                  Ongoing Projects
                </h3>
              </div>

              <Carousel
                plugins={[plugin.current]}
                opts={{
                  loop: true,
                }}
              >
                <CarouselContent>
                  <CarouselItem>
                    <img
                      src="/home/ongoingproject-1.png"
                      className="w-full h-full max-h-[575px] object-cover rounded-xl"
                      alt="Construction site with workers in yellow helmets"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="/home/ongoingproject-2.png"
                      className="w-full h-full max-h-[575px] object-cover rounded-xl"
                      alt="Construction site with workers in yellow helmets"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="bg-gradient-to-r from-[#00DF00] to-[#005D93] text-white py-4 px-6 h-[90px] rounded-lg flex items-center mb-6 lg:flex hidden">
                <h3 className="text-xl lg:text-[36px] font-semibold flex-1 text-center">
                  Ongoing Projects
                </h3>
              </div>
              <div className="bg-white/70 backdrop-blur-[24px] rounded-lg  px-[40px] md:pl-[53px] py-[43px] flex-1 flex flex-col md:gap-[40px]">
                <div className="flex items-center gap-3">
                  <div className="text-[#1C3562]">
                    <img
                      src="/lovable-uploads/icn_Location.png"
                      width="36"
                      height="36"
                      className="transform -translate-x-1"
                    />
                  </div>
                  <h4 className="font-proxima font-black text-[20px] md:text-[25px] md:leading-[38px] tracking-[0%] uppercase text-[#414042]">
                    VADODARA, Gujarat, India
                  </h4>
                </div>
                <p className="font-neue md:font-proxima font-normal md:text-[20px] leading-[28px] tracking-[0.01em] text-[#414042] mb-4">
                  Explore our cutting-edge projects currently underway. From
                  smart urban transit networks to renewable energy-integrated
                  systems, Futran is actively redefining infrastructure across
                  continents. View progress updates, behind-the-scenes images,
                  and insights into what makes each deployment unique.
                </p>
                <PrimaryButton
                  variant="outline"
                  size="lg"
                  className="bg-transparent"
                >
                  Explore more
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
