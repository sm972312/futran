import React from "react";
// import { Link } from "react-router-dom";
// import { PrimaryButton } from "@/components/ui/PrimaryButton";

const TechIntroSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 xl:py-10 items-center">
      <div className="md:w-1/2 bg-gradient-to-br from-teal-100 xl:block hidden to-teal-200 rounded-xl overflow-hidden">
        <img
          src="/tech/inside-futran.jpg"
          alt="FUTRAN Technology Introduction"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        <div className="flex items-center xl:justify-start justify-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center">
            <img
              src="/lovable-uploads/futran_icon.svg"
              alt="FUTRAN icon"
              className="w-[54px] h-[54px] object-contain"
            />
          </div>
          <h2 className="text-[30px] xl:text-[36px] leading-[150%] tracking-[-2%] font-proxima font-bold text-[#1C3562] align-middle">
            Introduction
          </h2>
        </div>
        <img
          src="/tech/inside-futran.jpg"
          alt="FUTRAN Technology Introduction"
          className="w-full h-full object-cover mix-blend-multiply xl:hidden block"
        />
        <p className="text-[#1A202C] xl:text-[#414042] text-[20px] font-normal leading-[34px] tracking-[0.20px] font-proxima">
          FUTRAN's innovative technology maps urban information, sustainable
          features, and efficiency to create a transformative mobility
          experience. Designed for modern urban challenges, FUTRAN solutions are
          efficient, eco-friendly, and easily scalable for global cities.
        </p>
        {/* <div className="mt-4 text-center xl:text-left">
          <Link to="#">
            <PrimaryButton variant="outline" className="h-[60px] xl:h-auto">
              Learn more
            </PrimaryButton>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default TechIntroSection;
