import React from "react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { marketTrends } from "@/utils/staticData";

const MediaContent: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-10 xl:py-14 px-5 md:px-[120px]">
        <div className="flex items-center gap-2 justify-center xl:justify-start xl:mb-4">
          <img
            src="/lovable-uploads/futran_icon.svg"
            alt={`icon`}
            className="w-[54px] h-[54px] object-contain"
          />
          <h2 className="text-[#1C3562] font-bold text-[36px] leading-[150%] tracking-[-0.2px] font-proxima align-middle">
            Futran News
          </h2>
        </div>
        <p className="text-center xl:text-left text-[#1A202C] xl:text-[#414042] text-[20px] font-normal leading-[34px] tracking-[0.20px] font-proxima xl:mb-8">
          Explore our dedicated newsroom for in-depth articles,
          behind-the-scenes innovations, and expert insights. From press
          releases to blog posts, get an inside look at how Futran is
          transforming cities around the world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <div className="rounded-[20px] h-[183.69px] xl:h-[230px] overflow-hidden relative">
              <img
                src="/media/media-1.png"
                alt="Futran News"
                className="w-full h-full object-cover"
              />
            </div>
            <PrimaryButton
              variant="outline"
              className="text-[#414042] mt-6 justify-center border-[#03C04A] hover:bg-[#03C04A] hover:bg-gradient-to-r from-[#09C057] via-[#23A680] to-[#49C8E2]"
              arrow={false}
            >
              Technology Features
            </PrimaryButton>
            <p className="text-[#1A202C] text-[20px] font-normal leading-[1.5em] tracking-[-0.2px] font-proxima my-3 xl:my-4">
              Pod taxis to link Mira-Bhayander-Ghodbunder road similar to
              Vadodara project
            </p>
          </div>
          <div>
            <div className="rounded-[20px] h-[183.69px] xl:h-[230px] overflow-hidden relative">
              <img
                src="/media/media-2.png"
                alt="Futran News"
                className="w-full h-full object-cover"
              />
            </div>
            <PrimaryButton
              variant="outline"
              className="text-[#414042] mt-6 justify-center border-[#03C04A] hover:bg-[#03C04A] hover:bg-gradient-to-r from-[#09C057] via-[#23A680] to-[#49C8E2]"
              arrow={false}
            >
              Press Announcements
            </PrimaryButton>
            <p className="text-[#1A202C] text-[20px] font-normal leading-[1.5em] tracking-[-0.2px] font-proxima my-3 xl:my-4">
              Pod taxis to link Mira-Bhayander-Ghodbunder road similar to
              Vadodara project
            </p>
          </div>
          <div>
            <div className="rounded-[20px] h-[183.69px] xl:h-[230px] overflow-hidden relative">
              <img
                src="/media/media-3.png"
                alt="Futran News"
                className="w-full h-full object-cover"
              />
            </div>
            <PrimaryButton
              variant="outline"
              className="text-[#414042] mt-6 justify-center border-[#03C04A] hover:bg-[#03C04A] hover:bg-gradient-to-r from-[#09C057] via-[#23A680] to-[#49C8E2]"
              arrow={false}
            >
              Project Spotlights
            </PrimaryButton>
            <p className="text-[#1A202C] text-[20px] font-normal leading-[1.5em] tracking-[-0.2px] font-proxima my-3 xl:my-4">
              Pod taxis to link Mira-Bhayander-Ghodbunder road similar to
              Vadodara project
            </p>
          </div>
          <div>
            <div className="rounded-[20px] h-[183.69px] xl:h-[230px] overflow-hidden relative">
              <img
                src="/media/media-4.png"
                alt="Futran News"
                className="w-full h-full object-cover"
              />
            </div>
            <PrimaryButton
              variant="outline"
              className="text-[#414042] mt-6 justify-center border-[#03C04A] hover:bg-[#03C04A] hover:bg-gradient-to-r from-[#09C057] via-[#23A680] to-[#49C8E2]"
              arrow={false}
            >
              Media Coverage
            </PrimaryButton>
            <p className="text-[#1A202C] text-[20px] font-normal leading-[1.5em] tracking-[-0.2px] font-proxima my-3 xl:my-4">
              Pod taxis to link Mira-Bhayander-Ghodbunder road similar to
              Vadodara project
            </p>
          </div>
        </div>
      </section>
      <section className="py-[29px] xl:py-14 px-5 md:px-[120px] bg-cover bg-center">
        <div className="xl:mb-4 gap-2 flex items-center justify-center xl:justify-start">
          <img
            src="/lovable-uploads/futran_icon.svg"
            alt={`icon`}
            className="w-[54px] h-[54px] object-contain"
          />
          <h2 className="text-[#1C3562] font-bold text-[36px] leading-[150%] tracking-[-0.2px] font-proxima align-middle">
            Market Trends
          </h2>
        </div>
        <p className="text-center xl:text-left text-[#1A202C] xl:text-[#414042] text-[20px] font-normal leading-[34px] tracking-[0.20px] font-proxima mb-6 xl:mb-8">
          Stay informed with curated insights into transportation trends, green
          technology, and urban innovation. Learn how Futran aligns with the
          global shift toward smart cities and climate-conscious infrastructure
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 xl:gap-6">
          {marketTrends?.map((items, i) => (
            <div key={i} className="xl:mb-6">
              <div className="rounded-md overflow-hidden relative">
                <img
                  src={items?.image}
                  alt="Market trend"
                  className="w-full h-full object-cover h-[330px]"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[48px] xl:pb-14 px-5 md:px-[120px]">
        <div className="mb-[24px] xl:mb-6 gap-2 flex items-center justify-center xl:justify-start">
          <img
            src="/lovable-uploads/futran_icon.svg"
            alt={`icon`}
            className="w-[54px] h-[54px] object-contain"
          />
          <h2 className="text-[#1C3562] font-bold text-[30px] xl:text-[36px] leading-[150%] tracking-[-0.2px] font-proxima align-middle">
            Brochure
          </h2>
        </div>
        <img
          src="/media/coming-soon.png"
          alt={`icon`}
          className="w-full xl:h-[418px]"
        />
      </section>
    </div>
  );
};

export default MediaContent;
