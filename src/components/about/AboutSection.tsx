import React, { useState } from "react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { AboutSectionProps } from "@/utils/types";

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  content,
  imageSrc,
  imageAlt,
  reversed = false,
  readMore = true,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-[24px] xl:py-16 px-4 md:px-16 lg:px-24 mx-auto overflow-x-hidden">
      <div
        className={`flex flex-col ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        } gap-4 xl:gap-12 items-center`}
      >
        <div className="flex items-center gap-3 xl:hidden">
          <div className="w-10 h-10 rounded-full flex items-center justify-center">
            <img
              src="/lovable-uploads/futran_icon.svg"
              alt={`${title} icon`}
              className="w-[54px] h-[54px] object-contain"
            />
          </div>
          <h2 className="text-[30px] leading-[150%] tracking-[-2%] font-proxima font-bold text-[#1C3562] align-middle">
            {title}
          </h2>
        </div>
        {!isExpanded && (
          <div className="md:w-1/2">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        )}
        <div className={`${isExpanded ? "w-full" : "md:w-1/2"}  space-y-4`}>
          <div className="flex items-center gap-3 hidden xl:flex">
            <div className="w-12 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="/lovable-uploads/futran_icon.svg"
                alt={`${title} icon`}
                className="w-[54px] h-[54px] object-contain"
              />
            </div>
            <h2 className="text-[36px] leading-[150%] tracking-[-2%] font-proxima font-bold text-[#1C3562] align-middle">
              {title}
            </h2>
          </div>
          <p
            className="text-[#1A202C] xl:text-[#414042] text-[20px] font-normal leading-[34px] tracking-[0.20px] font-proxima"
            dangerouslySetInnerHTML={{
              __html: isExpanded ? content : content.split(/<[^>]*>/)[0],
            }}
          />
          {readMore && (
            <PrimaryButton
              onClick={() => setIsExpanded((prev) => !prev)}
              variant="outline"
              className="h-[60px] xl:h-auto"
            >
              {isExpanded ? "Show Less" : "Learn more"}
            </PrimaryButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
