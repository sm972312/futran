import React from "react";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

const HeroSection: React.FC = () => {
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
        <source src="/home/landing-page.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 h-full flex flex-col items-center xl:items-start justify-end xl:justify-center pb-4 xl:pb-0 px-[120px] max-md:px-5 text-white">
        <div className="relative self-stretch z-0 min-w-60 w-full my-auto">
          <h1 className="text-white text-[64px] lg:text-[60px] lg:text-[98px] leading-tight uppercase max-md:max-w-full font-proxima text-center lg:text-left">
            <span>Reimagine </span>
            <span className="font-bold italic">Your</span>
            <span> Commute</span>
          </h1>
          <p className="text-[#D9D9D9] text-base md:text-xl leading-[1.6] mt-5 max-w-full md:max-w-xl lg:w-5/12 text-center lg:text-left">
            Our system transforms mobility, offering elevated passenger and
            goods transport to address the challenges of today's urban
            landscape.
          </p>
        </div>
        {/* <img
          src="https://cdn.builder.io/api/v1/image/assets/c005047de17a415eb8db968b06ca783a/22e07a9edfd29f6c6f536b09dbb4029ebb786913?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[30px] md:w-[50px] absolute z-0 shrink-0 right-4 md:right-[33px] bottom-[200px] md:bottom-[420px] hidden lg:block"
          alt="Decoration right"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/c005047de17a415eb8db968b06ca783a/e7e42a4901c507b8c085fb5994d342daa42798df?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[30px] md:w-[50px] absolute z-0 shrink-0 left-4 md:left-[30px] bottom-[200px] md:bottom-[420px] hidden lg:block"
          alt="Decoration left"
        /> */}
        <ScrollIndicator className="absolute z-0  md:right-[88px] bottom-[50px] md:bottom-[100px] left-0 lg:left-auto right-0" />
      </div>
    </div>
  );
};

export default HeroSection;
