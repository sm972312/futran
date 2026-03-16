import React from "react";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const CredentialsHero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/lovable-uploads/credetials-page.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 h-full flex flex-col items-center xl:items-start justify-end xl:justify-center pb-4 xl:pb-0 px-[120px] max-md:px-5 text-white">
        <h1 className="leading-[1.2em] text-center xl:text-left font-normal uppercase max-md:max-w-full text-[34px] xl:text-[98px] font-proxima xl:mb-2">
          <span className="font-bold italic">ENGINEERING</span> THE
          <br />
          FUTURE OF MOBILITY
        </h1>

        <p className="text-[#D9D9D9] text-[16px] font-medium xl:font-normal xl:text-xl text-center xl:text-left leading-[22px] xl:leading-[34px] mt-[10px] xl:mt-5 max-md:max-w-full lg:w-5/12">
          Innovative Sustainable Transit Solutions
          <br />
          Transforming Mobility with Innovation & Efficiency
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
          className="mt-4 md:mt-10 xl:absolute xl:bottom-[110px] h-[54px] h-auto left-auto text-white"
          arrow={false}
        >
          Learn More
        </PrimaryButton> */}
        <ScrollIndicator className="xl:absolute z-0 right-[88px] bottom-[110px] mt-[90px] mb-[40px] xl:mt-4 xl:mb-0" />
      </div>
    </div>
  );
};

export default CredentialsHero;
