import React from "react";

interface ScrollIndicatorProps {
  className?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center	 gap-2 text-sm md:text-base text-white ${className}`}
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/c005047de17a415eb8db968b06ca783a/61f6fabb6f05d006149600fe2a8192ae5409bd87?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-[30px] self-stretch shrink-0 my-auto"
        alt="Scroll icon"
      />
      <div className="self-stretch gap-2 my-auto hidden lg:flex">
        <span className="">Scroll to explore</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/c005047de17a415eb8db968b06ca783a/3674371a120d3e3b41f160345f031d0b7b3416a3?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[14px] md:w-[18px] shrink-0"
          alt="Arrow down"
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;
