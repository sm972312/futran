import React from "react";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const ContactsHero: React.FC = () => {
  return (
    <section className="w-full h-screen bg-black relative overflow-hidden">
      <img
        src="/lovable-uploads/contact_bg.png"
        alt="Network Map"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* <div className="relative z-10 h-full flex flex-col items-center xl:items-start justify-center pb-4 xl:pb-0 px-[120px] max-md:px-5 text-white block xl:hidden">
        <h1 className="leading-[1.2em] text-center xl:text-left font-normal xl:font-normal uppercase max-md:max-w-full text-[64px] font-proxima xl:mb-2">
          <span className="italic font-bold">LOREM IPSUM</span>
        </h1>
        <p className="text-[#D9D9D9] text-[px] font-medium xl:font-normal xl:text-xl text-center xl:text-left leading-[22px] xl:leading-[34px] mt-[10px] xl:mt-5 max-md:max-w-full lg:w-5/12">
          LOREM IPSUM
        </p>
        <PrimaryButton
          variant="outline"
          size="lg"
          className="mt-4 md:mt-10 xl:absolute xl:bottom-[110px] h-[54px] h-auto left-auto text-white"
          arrow={false}
        >
          Learn More
        </PrimaryButton>
        <ScrollIndicator className="absolute bottom-[40px]" />
      </div> */}
      <ScrollIndicator className="absolute right-[88px] bottom-[100px] hidden xl:flex" />
    </section>
  );
};

export default ContactsHero;
