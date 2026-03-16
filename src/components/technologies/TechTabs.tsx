import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TechTabsProps } from "@/utils/types";

const TechTabs: React.FC<TechTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-[#1C3562] text-white py-4 h-[119px] flex items-center">
      <div className="mx-auto px-6 sm:px-10 md:px-16 lg:px-[80px] xl:px-[120px]">
        <Tabs
          defaultValue={activeTab}
          className="w-full"
          onValueChange={(value) => setActiveTab(value as "unique" | "shared")}
        >
          <TabsList className="w-full bg-transparent h-auto justify-center flex-nowrap pb-3 gap-6 md:gap-[80px] lg:gap-[120px] xl:gap-[167px]">
            <TabsTrigger
              value="unique"
              className="data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-white data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-white 
          bg-transparent text-white/70 hover:text-white py-0 px-0 rounded-none 
          text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-wrap xl:text-[36px] leading-[1.2em] tracking-[-0.2px] font-proxima font-medium text-center"
            >
              Unique Technologies
            </TabsTrigger>

            <TabsTrigger
              value="shared"
              className="data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-white data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-white 
          bg-transparent text-white/70 hover:text-white py-0 px-0 rounded-none 
          text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-wrap xl:text-[36px] leading-[1.2em] tracking-[-0.2px] font-proxima font-medium text-center"
            >
              Shared Technologies
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default TechTabs;
