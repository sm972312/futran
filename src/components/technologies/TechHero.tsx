import React from "react";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const TechHero: React.FC = () => {
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
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/lovable-uploads/technology-page.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 h-full flex flex-col items-center xl:items-start justify-end xl:justify-center pb-4 xl:pb-0 px-[120px] max-md:px-5 text-white">
        <h1 className="leading-[1.2em] xl:leading-[1em] text-center xl:text-left font-normal uppercase max-md:max-w-full text-white text-[40px] xl:text-[98px] font-proxima xl:mb-2">
          SMARTER, GREENER, {""}
          <span className="italic font-extrabold">MORE</span> EFFICIENT
        </h1>
        <p className="text-[#ffffff] text-[16px] font-medium xl:font-normal xl:text-xl text-center xl:text-left leading-[22px] xl:leading-[34px] mt-[10px] xl:mt-5 max-md:max-w-full lg:w-5/12">
          We're redefining urban mobility with smarter, scalable technologies
          that make the experience of modern travel as safe, fast, and friendly
          as possible.
        </p>
        {/* <div className="hidden xl:block">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/c005047de17a415eb8db968b06ca783a/22e07a9edfd29f6c6f536b09dbb4029ebb786913?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[50px] absolute z-0 shrink-0 h-[50px] right-[33px] bottom-[420px]"
            alt="Decoration right"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/c005047de17a415eb8db968b06ca783a/e7e42a4901c507b8c085fb5994d342daa42798df?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[50px] absolute z-0 shrink-0 h-[50px] left-[30px] bottom-[420px]"
            alt="Decoration left"
          />
        </div> */}
        {/* <PrimaryButton
          variant="outline"
          size="lg"
          className="mt-4 md:mt-10 xl:absolute xl:bottom-[110px] h-[54px] h-auto left-auto text-[#ffffff]"
          arrow={false}
        >
          Learn More
        </PrimaryButton> */}
        <ScrollIndicator className="xl:absolute z-0 right-[88px] bottom-[110px] mt-16 xl:mt-4" />
      </div>
    </div>
  );
};

export default TechHero;
