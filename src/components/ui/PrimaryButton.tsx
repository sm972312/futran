import React from "react";
import { cn } from "@/lib/utils";
import { ArrowIcon } from "@/components/svg-icons";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline";
  size?: "default" | "lg";
  arrow?: boolean;
  isSubmit?: boolean;
  rotate?: boolean;
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  (
    {
      className,
      children,
      variant = "default",
      size = "default",
      arrow = true,
      isSubmit = false,
      rotate = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-start gap-4 relative font-semibold font-proxima transition-all duration-200",
          size === "default" &&
            "min-h-[40px] md:min-h-[48px] px-4 md:px-6 py-2 md:py-3 text-sm md:text-base",
          size === "lg" &&
            "min-h-[48px] md:min-h-[60px] md:max-w-[320px] w-max px-6 md:px-9 py-2.5 md:py-3.5 text-base md:text-xl leading-tight",
          variant === "default" &&
            "bg-[#50C9F0] text-white hover:bg-[#3AB9E0] rounded-full",
          variant === "outline" && "text-[#414042] rounded-[10px]",
          className
        )}
        {...props}
      >
        <span className="relative z-10 md:font-proxima font-[500] font-semibold text-[16px] md:text-[18px] leading-[21px] tracking-[0%] text-right">
          {children}
        </span>
        {arrow && (
          <div className="w-10 h-6 md:h-7 relative">
            <ArrowIcon rotate={rotate} />
          </div>
        )}
        <span className="border-gradient-bg absolute top-0"></span>
      </button>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";

export { PrimaryButton };
