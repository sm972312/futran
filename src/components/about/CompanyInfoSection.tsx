import React from "react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const CompanyInfoSection: React.FC = () => {
  return (
    <div className="py-[48px] py-20 px-[120px] max-md:px-5 overflow-x-hidden">
      <div className="w-full flex items-center xl:justify-start justify-center gap-3 mb-2 xl:mb-8">
        <div className="w-[32px] xl:w-[54px] h-[32px] xl:h-[54px] rounded-full">
          <img
            src="/lovable-uploads/futran_icon.svg"
            alt="Company Info icon"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-[30px] xl:text-[36px] leading-[1.5em] tracking-[-2%] font-proxima font-bold text-[#1C3562] align-middle">
          Company Info
        </h2>
      </div>
      <div className="flex xl:block flex-col-reverse">
        <p className="xl:mb-10 w-full text-[#1A202C] xl:text-[#414042] text-[20px] font-normal leading-[1.5em] tracking-[0.20px] font-proxima">
          FUTRAN offers a range of unprecedented benefits that address the needs
          of modern urban transportation. The system is on-demand, high-speed
          and reliable. It takes commuters where and when needed, FUTRAN
          transport pods are electrically driven, environment-friendly travel
          companion, ensuring a seamless travel experience even during peak
          hours.
        </p>
        <div className="w-full xl:h-[500px] my-3 bg-gray-200 rounded-[20px] overflow-hidden">
          <img
            src="/about/company-info.png"
            alt="FUTRAN Office"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="text-center xl:hidden">
        <PrimaryButton
          variant="outline"
          size="lg"
          className="mt-4 w-[202px]"
          arrow={true}
        >
          Learn More
        </PrimaryButton>
      </div>
    </div>
  );
};

export default CompanyInfoSection;
