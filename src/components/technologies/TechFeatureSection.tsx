import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { TechFeatureSectionProps } from "@/utils/types";

const TechFeatureSection: React.FC<TechFeatureSectionProps> = ({
  title,
  features,
  imageUrl,
  imagePosition,
  imageClass = "from-blue-900 to-teal-900",
  variant = "default",
  className = "",
  // startIndex = 0,
  readMore = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (variant === "modern") {
    return (
      <div className="w-full pt-[40px] pb-[20px] xl:pt-0 xl:pb-0 relative">
        <div className="flex flex-col md:flex-row gap-4 xl:gap-14 mx-auto">
          <div className="flex items-center gap-3 block xl:hidden">
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
              <img
                src="/lovable-uploads/futran_icon.svg"
                alt="FUTRAN icon"
                className="w-[54px] h-[54px] object-contain"
              />
            </div>
            <h2
              className={`text-[30px] xl:text-[36px] leading-[1em] tracking-[-0.2px] font-proxima font-bold text-[#1C3562] xl:text-[#1C3562] align-middle ${className}`}
            >
              {title}
            </h2>
          </div>
          <div className="md:w-1/2">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="md:w-1/2 flex flex-col xl:mt-12">
            <div className="flex items-center gap-3 mb-6 hidden xl:flex">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img
                  src="/lovable-uploads/futran_icon.svg"
                  alt="FUTRAN icon"
                  className="w-[54px] h-[54px] object-contain"
                />
              </div>
              <h2
                className={`text-[36px] leading-[1.5em] tracking-[-0.2px] font-proxima font-bold text-[#1C3562] align-middle ${className}`}
              >
                {title}
              </h2>
            </div>
            <ul className="xl:space-y-2 text-left">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-[#1A202C] xl:text-[#414042] text-[20px] font-normal leading-[1.5em] tracking-[0.20px] font-proxima"
                >
                  <span>{index + 1}.</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 xl:mt-8 text-center xl:text-left xl:absolute xl:bottom-0">
              <Link to="#">
                <PrimaryButton variant="outline" className="h-[60px] xl:h-auto">
                  Learn more
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const contentOrder =
    imagePosition === "left"
      ? "flex-col md:flex-row"
      : "flex-col md:flex-row-reverse";

  return (
    <div className={`flex ${contentOrder} gap-4 xl:gap-14 py-6 xl:py-10`}>
      <div className="flex items-center gap-3 block xl:hidden">
        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
          <img
            src="/lovable-uploads/futran_icon.svg"
            alt="FUTRAN icon"
            className="w-[54px] h-[54px] object-contain"
          />
        </div>
        <h2
          className={`text-[30px] xl:text-[36px] leading-[1em] tracking-[-0.2px] font-proxima font-bold text-[#1C3562] xl:text-[#1C3562] align-middle ${className}`}
        >
          {title}
        </h2>
      </div>
      {!isExpanded && (
        <div
          className={`md:w-1/2 bg-gradient-to-br ${imageClass} rounded-xl overflow-hidden`}
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div
        className={`${
          isExpanded ? "w-full" : "md:w-1/2"
        }  flex flex-col xl:justify-between xl:space-y-0 space-y-4 xl:mt-12`}
      >
        <div>
          <div className="flex items-center gap-3 mb-4 hidden xl:flex">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <img
                src="/lovable-uploads/futran_icon.svg"
                alt="FUTRAN icon"
                className="w-[54px] h-[54px] object-contain"
              />
            </div>
            <h2
              className={`text-[30px] xl:text-[36px] leading-[1.5em] tracking-[-0.2px] font-proxima font-bold text-[#1C3562] align-middle ${className}`}
            >
              {title}
            </h2>
          </div>

          {!isExpanded ? (
            <ul className="xl:space-y-2 list-disc pl-4 xl:pl-6">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="text-[#1A202C] xl:text-[#414042] text-[20px] font-normal leading-[1.5em] tracking-[0.20px] font-proxima"
                >
                  {feature}
                </li>
              ))}
            </ul>
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: readMore,
              }}
            />
          )}
        </div>
        <div
          onClick={() => setIsExpanded((prev) => !prev)}
          className={`${
            isExpanded && "pt-10"
          } mt-5 xl:mt-auto text-center xl:text-left`}
        >
          <PrimaryButton
            variant="outline"
            className="h-[60px] xl:h-auto mt-5 xl:mt-auto text-center xl:text-left"
          >
            {isExpanded ? "Show Less" : "Learn more"}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default TechFeatureSection;
