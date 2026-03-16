import React from "react";
import StatCard from "@/components/ui/StatCard";

const StatisticsSection: React.FC = () => {
  return (
    <section className="flex flex-col bg-[#DEEFF5] relative z-0 min-h-[720px] w-full overflow-hidden px-[120px] py-[48px] xl:py-[90px] max-md:px-5">
      <img
        src="/home/futranbynoline.png"
        className="absolute right-0 bottom-[25%]"
        alt="Background pattern"
      />
      <div className="flex flex-col md:flex-row gap-8 w-full relative">
        <div className="md:w-4/12 flex justify-center items-center z-10 hidden xl:block">
          <img
            src="/home/futran-by-no.jpg"
            className="w-full max-w-[500px] 
              rounded-[10px] shadow-md"
            alt="Futran pod in operation"
          />
        </div>
        <div className="md:w-8/12 flex flex-col">
          <div className="flex items-center justify-center xl:justify-start gap-4 mb-4">
            <img
              src="/lovable-uploads/futran_icon.svg"
              className="md:w-12 md:h-12 h-[30px] w-[30px]"
              alt="Futran logo"
            />
            <h2 className="font-proxima font-bold text-[30px] leading-[100%] tracking-[0] text-[#1C3562] align-middle">
              FUTRAN{" "}
              <span className="font-proxima font-bold text-[30px]  leading-[100%] tracking-[0]">
                by Numbers
              </span>
            </h2>
          </div>
          <p className="text-[#414042] text-[16px] text-center md:text-left md:text-[20px] font-[400] leading-[] md:leading-[34px] tracking-[0.20px] font-neue md:font-proxima mb-8">
            Futran offers unparalleled speed, efficiency, and environmental
            sustainability. With vehicles operating at speeds of up to 70 km/h,
            the system can handle up to 20,000 passengers per hour per line.
            Powered entirely by renewable energy, Futran reduces emissions and
            contributes to a greener urban environment while generating surplus
            energy for the city.
          </p>
          <div className="md:w-[837px] flex flex-col justify-start items-start md:gap-6 gap-4">
            <div className="w-full md:w-[625px] relative md:inline-flex justify-between items-center flex gap-4">
              <div className="w-[5200px] left-[-1800px] top-[60px] absolute gradient-border block" />
              <StatCard value="0%" label="Time spent in Traffic" />
              <StatCard
                value="100%"
                label="Energy Efficiency"
                className="translate-x-[-1.5em]"
              />
            </div>
            <div className="w-full self-stretch md:pl-52 relative md:inline-flex justify-between items-center flex gap-4">
              <div className="w-[5200px] left-[-1800px] top-[60px] absolute gradient-border block" />
              <StatCard
                value="20"
                label="People Capacity per Pod"
                className="translate-x-[1.5em]"
              />
              <StatCard value="24/7" label="Reliable Operation" />
            </div>
            <div className="w-full md:w-[625px] relative md:inline-flex justify-between items-center flex gap-4">
              <div className="w-[5200px] left-[-1800px] top-[60px] absolute gradient-border block" />
              <StatCard value="60-80" label="KM/h Speed" />
              <StatCard
                value="15000+"
                label="Passengers per Hour, per Line"
                className="translate-x-[-1.5em]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
