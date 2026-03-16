import React from "react";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, className }) => {
  return (
    <>
      <div
        className={`shadow-md border-gradient2 rounded-lg p-3 md:p-4 flex flex-col items-center justify-center h-[100px] md:h-[120px] transition-all w-[150px] md:w-[200px] z-10 ${className}`}
      >
        <div className="text-[#1C3562] text-[30px] md:text-[40px] font-extrabold leading-[100%] tracking-[-0.02em] text-center align-middle font-proxima pb-2">
          {value}
        </div>
        <div className="text-[#414042] text-sm md:text-base font-normal tracking-[0.05em] leading-[100%] text-center font-proxima px-2 md:px-4">
          {label}
        </div>
      </div>
    </>
  );
};

export default StatCard;
