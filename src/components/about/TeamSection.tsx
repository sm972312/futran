import { teamMembers } from "@/utils/staticData";
import React from "react";

const TeamSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[url(/about/who-team.jpg)] xl:bg-cover py-[25px] xl:py-20 px-[120px] max-md:px-5">
      <div className="relative z-10">
        <div className="flex items-center justify-center xl:justify-start gap-3 mb-6 xl:mb-4">
          <div className="w-[32px] xl:w-[54px] h-[32px] xl:h-[54px] rounded-full mt-1 xl:mt-1">
            <img
              src="/lovable-uploads/futran_icon.svg"
              alt="Who - Team icon"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-[30px] xl:text-[36px] leading-[150%] tracking-[-2%] font-proxima font-bold text-white align-middle">
              Who - Team
            </h2>
          </div>
        </div>
        <p className="text-center xl:text-left text-white text-[20px] font-normal leading-[1.5em] tracking-[0.20px] font-proxima">
          As a trusted partner in mobility solutions, we are committed to
          shaping the future of transportation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex mb-12 xl:mb-4
              ${index % 3 === 0 ? "md:justify-start" : ""}
              ${index % 3 === 1 ? "md:justify-center" : ""}
              ${index % 3 === 2 ? "md:justify-end" : ""}
              justify-center`}
            >
              <div className="w-full max-w-[300px]">
                <div className="w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="font-semibold text-white text-[25px] leading-[1.5em] tracking-[0.20px] font-proxima">
                    {member.name}
                  </h3>
                  <p className="text-white text-[20px] font-normal leading-[1.5em] tracking-[0.20px] font-proxima">
                    {member.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
