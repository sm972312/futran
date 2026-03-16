import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const CredentialsContent: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="pt-[40px] xl:py-14 px-[24px] xl:px-[74px]">
        <div className="flex items-center gap-2 justify-center xl:justify-start xl:mb-4">
          <img
            src="/lovable-uploads/futran_icon.svg"
            alt={`icon`}
            className="w-[54px] h-[54px] object-contain"
          />
          <h2 className="text-[#1C3562] font-bold text-[36px] leading-[150%] tracking-[-0.2px] font-proxima align-middle">
            Projects
          </h2>
        </div>
        <p className="text-center xl:text-left text-[#1A202C] xl:text-[#414042] text-[20px] font-normal leading-[25px] tracking-[0.20px] font-proxima mb-[53px] xl:mb-8">
          Stay tuned! Futran is finalizing documentation on several
          transformative projects. Soon, you’ll be able to explore our
          innovative ventures that are setting new global standards in public
          transportation.
        </p>

        <Tabs defaultValue="tab1" className="mb-12">
          <TabsList className="lg:grid grid-cols-1 md:grid-cols-2 gap-4 bg-transparent p-0 h-auto hidden">
            <TabsTrigger
              value="tab1"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#03C04A] data-[state=active]:to-[#50C9F0] 
                        data-[state=active]:text-[#414042] border border-gray-200 rounded-md py-4 px-6 
                        data-[state=inactive]:bg-white data-[state=inactive]:text-[#969493] h-auto text-[20px] font-bold leading-[1.5em] tracking-[-0.2px] font-proxima"
            >
              Ongoing Projects
            </TabsTrigger>
            <TabsTrigger
              value="tab2"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#03C04A] data-[state=active]:to-[#50C9F0] 
                        data-[state=active]:text-[#414042] border-gradient rounded-md py-4 px-6 
                        data-[state=inactive]:bg-white data-[state=inactive]:text-[#969493] h-auto text-[20px] font-bold leading-[1.5em] tracking-[-0.2px] font-proxima"
              disabled
            >
              Completed Projects
            </TabsTrigger>
          </TabsList>

          <TabsList className="lg:hidden bg-taransparent w-full">
            <div className="relative w-full">
              <Carousel opts={{ loop: true }} className="relative">
                <CarouselPrevious className="absolute left-3 z-10 bg-taransparent hover:bg-taransparent" />
                <CarouselContent className="flex ">
                  <CarouselItem>
                    <TabsTrigger
                      value="tab1"
                      className="text-[20px] -mr-5 rounded-[10px] h-[45px] font-semibold w-full hover:text-white bg-gradient-to-r from-[#09C057] via-[#23A680] to-[#49C8E2] text-[#414042]"
                    >
                      Ongoing Projects
                    </TabsTrigger>
                  </CarouselItem>
                  <CarouselItem>
                    <TabsTrigger
                      value="tab2"
                      className="text-[20px] -mr-5 rounded-[10px] h-[45px] font-semibold w-full hover:text-white bg-gradient-to-r from-[#09C057] via-[#23A680] to-[#49C8E2] text-[#414042]"
                      disabled
                    >
                      Completed Projects
                    </TabsTrigger>
                  </CarouselItem>
                </CarouselContent>
                <CarouselNext className="absolute right-3 z-10 bg-taransparent hover:bg-taransparent" />
              </Carousel>
            </div>
          </TabsList>

          <TabsContent value="tab1">
            <div className="grid grid-cols-1 stretch md:grid-cols-12 gap-16 xl:gap-14 mt-4 xl:mt-20">
              <div className="md:col-span-5">
                <div className="rounded-md h-[385px] xl:h-[680px] overflow-hidden">
                  <img
                    src="/credential/ongoing-projects.png"
                    alt="Project background"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-7 xl:max-h-[680px] xl:overflow-y-scroll no-scrollbar">
                <h3 className="text-[#1C3562] text-[30px] font-bold leading-[1.5em] font-proxima mb-4 hidden xl:block">
                  India and South Africa
                </h3>
                <div className="flex flex-col xl:space-y-10 xl:mt-8">
                  <div className="xl:flex gap-10">
                    <img
                      src="/credential/p-1.png"
                      alt="FUTRAN passenger pod"
                      className="w-full xl:w-[300px] h-[262px] xl:h-[216px] object-cover rounded-[20px]"
                    />
                    <div>
                      <p className="text-color[#1A202C] mt-[27px] mb-[27px] text-[20px] font-normal leading-[1.5em] tracking-[-0.2px] font-proxima xl:mt-0 xl:mb-2 xl:w-6/12">
                        These T-shaped pillars will form the backbone of the
                        elevated track system, marking a major step toward
                        realizing our vision for seamless and efficient urban
                        mobility.
                      </p>
                    </div>
                  </div>
                  <h3 className="text-[#1C3562] text-[30px] font-bold leading-[1.5em] font-proxima mb-8 xl:hidden block">
                    India and South Africa
                  </h3>
                  <div className="xl:flex gap-10 mt-[10px] xl:mt-[48px]">
                    <img
                      src="/credential/p-2.png"
                      alt="FUTRAN infrastructure"
                      className="w-full xl:w-[300px] h-[262px] xl:h-[216px] object-cover rounded-[20px]"
                    />
                    <div>
                      <p className="text-color[#1A202C] mt-[27px] mb-[27px] text-[20px] font-normal leading-[1.5em] tracking-[-0.2px] font-proxima xl:mt-0 xl:mb-2 xl:w-6/12">
                        Ever since 2014 extensive testing was done on various
                        track structures, starting with the steel track
                        structure in Beestekraal, South Africa.
                      </p>
                    </div>
                  </div>
                  <div className="xl:flex items-start gap-10 mt-[10px] xl:mt-[48px]">
                    <img
                      src="/credential/p-3.png"
                      alt="FUTRAN infrastructure"
                      className="w-full xl:w-[300px] h-auto object-cover rounded-tl-[20px]"
                    />
                    <div>
                      <p className="text-color[#1A202C] mt-[27px] mb-[27px] text-[20px] font-normal leading-[1.5em] tracking-[-0.2px] font-proxima xl:mt-0 xl:mb-2 xl:w-6/12">
                        As part of our ongoing development, we recently hosted a
                        special event on-site to mark a key milestone in the
                        project's progress.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tab2">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 xl:gap-14 mt-4 xl:mt-20 xl:px-4">
              <div className="md:col-span-5">
                <div className="rounded-md h-[385px] xl:h-[640px] overflow-hidden">
                  <img
                    src="/lovable-uploads/5b0059bd-fef0-4c28-98da-36db774d6786.png"
                    alt="Project background"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-7">
                <h3 className="text-[#1C3562] text-[30px] font-bold leading-[1.5em] font-proxima xl:mb-4">
                  Project 2
                </h3>
                <div className="flex flex-col xl:space-y-10 xl:mt-8">
                  <div className="xl:flex gap-10 mt-[48px]">
                    <img
                      src="/lovable-uploads/5e6255db-8635-4f76-88c8-354ae8332097.png"
                      alt="FUTRAN passenger pod"
                      className="w-[300px] h-[262px] xl:h-[216px] object-cover rounded-md"
                    />
                    <div>
                      <p className="text-color[#1A202C] mt-[27px] mb-[27px] text-[20px] font-normal leading-[1.5em] tracking-[-0.2px] font-proxima xl:mt-0 xl:mb-2 xl:w-6/12">
                        Project 2 description text goes here...
                      </p>
                      <PrimaryButton
                        variant="outline"
                        size="lg"
                        className="xl:mt-12 xl:max-md:mt-10 h-[60px] xl:h-auto text-[#1A202C] flex justify-center xl:justify-start w-[208px] xl:w-auto font-semibold"
                        arrow={false}
                      >
                        Learn More
                      </PrimaryButton>
                    </div>
                  </div>

                  <div className="xl:flex gap-10 mt-[48px]">
                    <img
                      src="/lovable-uploads/a9cc70d0-2372-44ef-b0ba-bd2bf4d805b8.png"
                      alt="FUTRAN infrastructure"
                      className="w-[300px] h-[262px] xl:h-[216px] object-cover rounded-md"
                    />
                    <div>
                      <p className="text-color[#1A202C] mt-[27px] mb-[27px] text-[20px] font-normal leading-[1.5em] tracking-[-0.2px] font-proxima xl:mt-0 xl:mb-2 xl:w-6/12">
                        Project 2 description text goes here...
                      </p>
                      <PrimaryButton
                        variant="outline"
                        size="lg"
                        className="xl:mt-12 xl:max-md:mt-10 h-[60px] xl:h-auto text-[#1A202C] flex justify-center xl:justify-start w-[208px] xl:w-auto font-semibold"
                        arrow={false}
                      >
                        Learn More
                      </PrimaryButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tab3">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 xl:gap-14 mt-4 xl:mt-20 xl:px-4">
              <div className="md:col-span-5">
                <div className="rounded-md h-[385px] xl:h-[640px] overflow-hidden">
                  <img
                    src="/lovable-uploads/5b0059bd-fef0-4c28-98da-36db774d6786.png"
                    alt="Project background"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-7">
                <h3 className="text-[#1C3562] text-[30px] font-bold leading-[1.5em] font-proxima xl:mb-4">
                  Project 3
                </h3>

                <div className="flex flex-col space-y-10 xl:mt-8">
                  <div className="xl:flex gap-10 mt-[48px]">
                    <img
                      src="/lovable-uploads/5e6255db-8635-4f76-88c8-354ae8332097.png"
                      alt="FUTRAN passenger pod"
                      className="w-[300px] h-[262px] xl:h-[216px] object-cover rounded-md"
                    />
                    <div>
                      <p className="text-color[#1A202C] mt-[27px] mb-[27px] text-[20px] font-normal leading-[1.5em] tracking-[-0.2px] font-proxima xl:mt-0 xl:mb-2 xl:w-6/12">
                        Project 3 description text goes here...
                      </p>
                      <PrimaryButton
                        variant="outline"
                        size="lg"
                        className="xl:mt-12 xl:max-md:mt-10 h-[60px] xl:h-auto text-[#1A202C] flex justify-center xl:justify-start w-[208px] xl:w-auto font-semibold"
                        arrow={false}
                      >
                        Learn More
                      </PrimaryButton>
                    </div>
                  </div>

                  <div className="xl:flex gap-10 mt-[48px]">
                    <img
                      src="/lovable-uploads/5e6255db-8635-4f76-88c8-354ae8332097.png"
                      alt="FUTRAN infrastructure"
                      className="w-[300px] h-[262px] xl:h-[216px] object-cover rounded-md"
                    />
                    <div>
                      <p className="text-color[#1A202C] mt-[27px] mb-[27px] text-[20px] font-normal leading-[1.5em] tracking-[-0.2px] font-proxima xl:mt-0 xl:mb-2 xl:w-6/12">
                        Project 3 description text goes here...
                      </p>
                      <PrimaryButton
                        variant="outline"
                        size="lg"
                        className="xl:mt-12 xl:max-md:mt-10 h-[60px] xl:h-auto text-[#1A202C] flex justify-center xl:justify-start w-[208px] xl:w-auto font-semibold"
                        arrow={false}
                      >
                        Learn More
                      </PrimaryButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="py-6 xl:py-14 px-6 xl:px-[74px] relative">
        <div className="absolute inset-0 bg-[#50C9F0] opacity-10 pointer-events-none z-0" />

        <div className="w-full flex justify-start">
          <div className="flex items-center gap-3 xl:gap-4 mb-4 xl:text-left">
            <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center">
              <img
                src="/lovable-uploads/futran_icon.svg"
                alt="icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-[#1C3562] font-bold text-[30px] xl:text-[36px] leading-[120%] xl:leading-[150%] tracking-[-0.2px] font-proxima">
              Supply Chain Partners
            </h2>
          </div>
        </div>

        <p className="text-center xl:text-left text-[#1A202C] xl:text-[#414042] text-[18px] xl:text-[20px] font-normal leading-[30px] xl:leading-[34px] tracking-[0.2px] font-proxima mb-6 xl:mb-8 mx-auto xl:mx-0">
          At Futran, we pride ourselves on working with a robust and reliable
          supply chain to ensure the timely, cost-effective, and high-quality
          delivery of our transportation systems.
        </p>

        <div className="w-full flex flex-col md:flex-row gap-6 mb-[40px] xl:mb-[96px]">
          <div className="w-full xl:w-1/2 overflow-hidden rounded-md">
            <img
              src="/credential/supply-chain.png"
              alt="Supply chain partner"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-[#1A202C] xl:text-[#1A202C] font-proxima xl:w-1/2">
            <h3 className="text-[25px] xl:text-[36px] leading-[30px] xl:leading-[50px] mb-4">
              Our primary supply chain partner, {""}
              <Link
                to="https://excelsource.co.in/"
                target="_blank"
                className="text-[#03C04A]"
              >
                Excelsource
              </Link>
              , plays a crucial role in making this possible.
            </h3>
            <div className="xl:max-w-[600px]">
              <p className="text-[16px] xl:text-[22px] leading-[32px] mb-4">
                Excelsource brings unparalleled reach and expertise, backed by a
                global vendor base of over 3,500 registered suppliers. Their
                expansive network enables us to source premium components, adapt
                to regional requirements, and maintain supply chain resilience
                across international projects.
                <br />
                <br />
                Together, we ensure every Futran deployment is supported by a
                world-class procurement and logistics framework—driving
                efficiency, scalability, and innovation from the ground up.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-6">
          <div className="w-full xl:w-1/2 overflow-hidden rounded-md">
            <img
              src="/credential/supply-chain-2.png"
              alt="Supply chain partner"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-[#1A202C] xl:text-[#1A202C] font-proxima xl:w-1/2">
            <h3 className="text-[25px] xl:text-[36px] font-normal leading-[30px] xl:leading-[50px] mb-4">
              Engineering Consulting Partner {""} <br />
              <Link
                to="https://www.nkindia.in/"
                target="_blank"
                className="text-[#03C04A]"
              >
                Nippon Koei India Pvt. Ltd.
              </Link>
            </h3>
            <div className="xl:max-w-[600px]">
              <p className="text-[16px] xl:text-[22px] leading-[32px] mb-4">
                Nippon Koei India Pvt. Ltd. (NK India) is an ISO 9001:2015,
                14001:2015, 27001:2022 & 45001:2018 certified company and is a
                wholly owned subsidiary of Integrated Design & Engineering
                Holdings Co., Ltd. of Japan (ID&E). NK India, headquartered in
                New Delhi, focuses on projects in India and other developing
                countries. Formed in 2008, it is managed and staffed with highly
                experienced Professionals with significant overseas consulting
                experience. NK India has more than 100.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-5 xl:py-14 xl:px-[74px]">
        <div className="flex items-center gap-3 justify-center xl:justify-start mb-6 xl:mb-4">
          <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center flex-shrink-0">
            <img
              src="/lovable-uploads/futran_icon.svg"
              alt={`icon`}
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-[#1C3562] font-bold text-[28px] xl:text-[36px] leading-[150%] tracking-[-0.2px] font-proxima">
            Certifications
          </h2>
        </div>

        <p className="text-center xl:text-left text-[#1A202C] xl:text-[#414042] text-[18px] xl:text-[20px] leading-[32px] xl:leading-[34px] tracking-[0.2px] font-proxima mb-8 max-w-4xl mx-auto xl:mx-0">
          Safety and reliability are core pillars of the Futran system. That’s
          why we’ve partnered with TÜV Rheinland, a globally recognized
          authority in safety, quality, and certification standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-[#1A202C] xl:text-[#414042] font-proxima">
            <h3 className="text-[25px] xl:text-[36px] font-normal leading-[30px] xl:leading-[50px] mb-4">
              As Futran’s official certification partner,{" "}
              <Link
                to="https://www.tuv.com/singapore/en/"
                target="_blank"
                className="text-[#03C04A]"
              >
                TÜV Rheinland
              </Link>{" "}
              is involved in every stage of system deployment—from design
              validation to final project approval.
            </h3>
            <p className="text-[16px] xl:text-[18px] leading-[28px] mb-4">
              Their independent oversight ensures our solutions meet the highest
              international safety standards, instilling confidence in
              stakeholders, regulators, and end-users alike.
            </p>
            <p className="text-[16px] xl:text-[18px] leading-[28px]">
              With TÜV Rheinland by our side, Futran guarantees compliance,
              consistency, and trust across all global projects.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-full max-w-[550px] border rounded-md">
              <img
                src="/credential/certifications.png"
                alt="TÜV Rheinland Certification"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="xl:pt-[40px] xl:pb-[80px] px-5 xl:px-[74px]">
        <div className="flex items-center gap-3 justify-center xl:justify-start xl:mb-4">
          <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center flex-shrink-0">
            <img
              src="/lovable-uploads/futran_icon.svg"
              alt={`icon`}
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-[#1C3562] font-bold text-[30px] xl:text-[36px] leading-[120%] xl:leading-[150%] tracking-[-0.2px] font-proxima align-middle">
            Production and Manufacturing
          </h2>
        </div>
        <p className="text-center xl:text-left text-[#1A202C] xl:text-[#414042] text-[18px] xl:text-[20px] leading-[32px] xl:leading-[34px] tracking-[0.2px] font-proxima mb-8 mx-auto xl:mx-0">
          Our systems are manufactured using a modular approach that prioritizes
          local sourcing, quality control, and rapid scalability. Full insights
          and facility overviews will be added shortly.
        </p>
        <div className="mb-[48px] xl:mb-0">
          <div className="w-full overflow-hidden rounded-md mt-[12px] xl:mt-[0px] hidden xl:block">
            <img
              src="/credential/production-and-mnufacturing.png"
              alt="Production facility"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full overflow-hidden rounded-md mt-[12px] xl:mt-[0px] block xl:hidden">
            <img
              src="/lovable-uploads/image-108.png"
              alt="Production facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CredentialsContent;
