import React from "react";
import TechFeatureSection from "@/components/technologies/TechFeatureSection";
import {
  advancedFeatures,
  engineeringFeatures,
  managementFeatures,
  MoreAdvancedFeatures,
  moreEngineeringFeatures,
  MoreManagementFeatures,
  MoreSustainabilityFeatures,
  MoreTransportFeatures,
  sustainabilityFeatures,
  transportFeatures,
} from "@/utils/staticData";

const ProprietaryTechSection: React.FC = () => {
  return (
    <>
      <div className="absolute w-full h-full bg-[#00E300] opacity-5"></div>
      <div className="py-[21px] xl:py-10 w-full">
        <div className="  md:px-16 lg:px-24 mx-auto px-6">
          <div className="flex items-center gap-3 mb-[30px] xl:mb-6 justify-center">
            <div className="w-[32px] h-[32px] xl:w-[54px] xl:h-[54px] rounded-full flex items-center justify-center flex-shrink-0">
              <img
                src="/lovable-uploads/futran_icon.svg"
                alt="FUTRAN icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-[30px] xl:text-[48px] leading-[1.2em] tracking-[-0.2px] font-proxima font-[800] text-[#1C3562] align-middle">
              FUTRAN Proprietary Technologies
            </h2>
          </div>
          <p className="text-center max-w-3xl mx-auto text-[#414042] text-[24px] xl:text-[30px] font-semibold xl:font-[450] leading-[1.2em] font-neue mb-[30px] xl:mb-8">
            Revolutionizing Urban Transport with the Futran System
          </p>
          <p className="text-center mx-auto text-[#1A202C] xl:text-[#414042] text-[20px] font-normal leading-[1.5em] tracking-[0.20px] font-proxima xl:mb-8">
            The Futran System is redefining urban mobility with groundbreaking
            technologies designed for safety, efficiency, and sustainability.{" "}
            <br className="hidden xl:block" />
            Each innovation has been meticulously developed to meet the demands
            of modern cities while keeping costs low and operations
            eco-friendly.
          </p>

          <TechFeatureSection
            title="Advanced Technology Features"
            features={advancedFeatures}
            imageUrl="/tech/advanced-tech.jpg"
            imagePosition="left"
            // startIndex={0}
            readMore={MoreAdvancedFeatures}
          />

          <TechFeatureSection
            title="Smart Management Systems"
            features={managementFeatures}
            imageUrl="/tech/smart-managnment.jpg"
            imagePosition="right"
            // startIndex={advancedFeatures.length}
            readMore={MoreManagementFeatures}
          />

          <TechFeatureSection
            title="Flexible Transport Solutions"
            features={transportFeatures}
            imageUrl="/tech/flexi-transport.jpg"
            imagePosition="left"
            imageClass="from-blue-900 to-green-900"
            // startIndex={advancedFeatures.length + managementFeatures.length}
            readMore={MoreTransportFeatures}
          />

          <TechFeatureSection
            title="Engineering Excellence"
            features={engineeringFeatures}
            imageUrl="/tech/engi-excellence.jpg"
            imagePosition="right"
            imageClass="from-blue-900 to-green-900"
            // startIndex={
            //   advancedFeatures.length +
            //   managementFeatures.length +
            //   transportFeatures.length
            // }
            readMore={moreEngineeringFeatures}
          />

          <TechFeatureSection
            title="Sustainability and Future-Ready Energy"
            features={sustainabilityFeatures}
            imageUrl="/tech/sustainability.jpg"
            imagePosition="left"
            imageClass="from-blue-900 to-green-900"
            // startIndex={
            //   advancedFeatures.length +
            //   managementFeatures.length +
            //   transportFeatures.length +
            //   engineeringFeatures.length
            // }
            readMore={MoreSustainabilityFeatures}
          />
        </div>
      </div>
    </>
  );
};

export default ProprietaryTechSection;
