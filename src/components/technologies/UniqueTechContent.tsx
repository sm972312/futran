import React from "react";
import ProprietaryTechSection from "@/components/technologies/ProprietaryTechSection";
import TechIntroSection from "@/components/technologies/TechIntroSection";

const UniqueTechContent: React.FC = () => {
  return (
    <div className="w-full relative">
      <div className="w-full bg-white py-[69px] xl:py-10">
        <div className="px-4 md:px-16 lg:px-24 mx-auto">
          <TechIntroSection />
        </div>
      </div>
      <div className="relative">
        <img
          src="/lovable-uploads/image-113.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10">
          <ProprietaryTechSection />
        </div>
      </div>
    </div>
  );
};

export default UniqueTechContent;
