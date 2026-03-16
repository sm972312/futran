import React from "react";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const AboutHero: React.FC = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-[#0A2540] to-[#0F4C75] overflow-hidden">
      <div className="absolute inset-0 z-10">
        <img
          src="/lovable-uploads/hero_bg_overly.png"
          alt="FUTRAN Transportation System"
          className="w-full h-full"
        />
      </div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/lovable-uploads/about-page.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 h-full flex flex-col items-center xl:items-start justify-end xl:justify-center pb-4 xl:pb-0 px-[120px] max-md:px-5 text-white">
        <h1 className="leading-[1.2em] text-center xl:text-left font-normal uppercase max-md:max-w-full text-[28px] sm:text-[40px] md:text-[98px] lg:text-[40px] xl:text-[98px] font-proxima xl:mb-2 break-words">
          NEXT-GENERATION{" "}
          <span className="italic font-bold">TRANSPORTATION</span> SYSTEM
        </h1>

        <p className="text-[#D9D9D9] text-[16px] font-medium xl:font-normal xl:text-xl text-center xl:text-left leading-[22px] xl:leading-[34px] mt-[10px] xl:mt-5 max-md:max-w-full lg:w-5/12">
          Seamlessly integrating with current infrastructure to expand transit
          networks and support growing urban commuting needs quickly and
          efficiently.
        </p>

        {/* <img
          src="https://cdn.builder.io/api/v1/image/assets/c005047de17a415eb8db968b06ca783a/22e07a9edfd29f6c6f536b09dbb4029ebb786913?placeholderIfAbsent=true"
          className="hidden xl:block aspect-[1] object-contain w-[50px] absolute z-0 shrink-0 h-[50px] right-[33px] bottom-[420px]"
          alt="Decoration right"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/c005047de17a415eb8db968b06ca783a/e7e42a4901c507b8c085fb5994d342daa42798df?placeholderIfAbsent=true"
          className="hidden xl:block aspect-[1] object-contain w-[50px] absolute z-0 shrink-0 h-[50px] left-[30px] bottom-[420px]"
          alt="Decoration left"
        /> */}

        {/* <PrimaryButton
          variant="outline"
          size="lg"
          className="mt-4 md:mt-10 xl:absolute xl:bottom-[90px] h-[54px] h-auto left-auto text-white"
          arrow={false}
        >
          Learn More
        </PrimaryButton> */}

        <ScrollIndicator className="xl:absolute z-0 right-[88px] bottom-[110px] mt-4" />
      </div>
    </div>
  );
};

export default AboutHero;
