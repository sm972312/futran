import React from "react";
import { useLocation } from "react-router-dom";
import { LinkedInIcon } from "@/components/svg-icons";
import { FooterProps } from "@/utils/types";
import { FUTRAN_CONFIG } from "@/config/s3Bucket";

const Footer: React.FC<FooterProps> = ({ hideEnquirySection = false }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isTechnologiesPage = location.pathname === "/technologies";
  const isCredentialsPage = location.pathname === "/credentials";
  const isMediaDownloadPage = location.pathname === "/media-download";

  const hideTopSection =
    hideEnquirySection ||
    isLandingPage ||
    isAboutPage ||
    isTechnologiesPage ||
    isCredentialsPage ||
    isMediaDownloadPage;

  return (
    <footer>
      {!hideTopSection && (
        <div className=" bg-[url(/lovable-uploads/frame-138.png)] bg-center bg-cover flex min-h-[280px] w-full items-center justify-between px-[120px] py-[82px] text-white max-md:flex-wrap max-md:px-5 relative">
          <div className="max-w-2xl">
            <p className="font-semibold max-md:max-w-full md:text-[20px] md:leading-[20px] tracking-[0.01em] font-neue md:font-proxima">
              Leave a request and an FUTRAN specialist will contact you at a
              convenient time
            </p>
            <div className="border border-white border-solid w-full mt-6" />
            <h3 className="tracking-[0.4px] mt-6 text-[36px] leading-[36px] font-neue md:font-proxima">
              Make an enquiry
            </h3>
          </div>
          <div className="md:mt-auto mt-[3em]">
            <img
              src="/lovable-uploads/frame.png"
              alt="Arrow"
              className="w-[110px] h-[110px] object-contain"
            />
          </div>
        </div>
      )}

      <div className="bg-black bg-cover w-full overflow-hidden text-white pt-[58px] xl:pt-[80px] pb-[48px] xl:pb-[50px] px-[120px] max-md:max-w-full max-md:px-5 xl:max-md:px-5 relative bg-[url(/lovable-uploads/footer.png)]">
        <div className="w-full max-md:max-w-full">
          <div className="flex flex-col md:flex-row w-full gap-5 justify-between flex-wrap max-md:max-w-full">
            <div className="flex flex-col items-start text-base flex-1 w-[350px] mb-4 xl:mb-10">
              <div className="w-full">
                <img
                  src="/lovable-uploads/logo_futran_footer.svg"
                  className="aspect-[2.46] object-contain w-[100px] lg:w-[138px] max-w-full"
                  alt="Futran logo"
                />
                <p className="mt-[18px] xl:mt-[20px] w-full md:w-[25%] text-left text-[16px] leading-[16px] -tracking-[0.02em] font-proxima font-semibold text-[#D9D9D9]">
                  FUTRAN is the future of public transportation
                </p>
              </div>
              <div className="flex gap-4 mt-8 xl:mt-10">
                <a
                  href="https://www.linkedin.com/company/futran-podcars"
                  target="_blank"
                  className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-7 md:gap-14 flex-1">
              <div className="flex flex-col gap-5 items-start text-left">
                <a
                  href="/about"
                  className="text-[18px] text-[#D9D9D9] font-bold font-neue"
                >
                  About
                </a>

                <p className="text-[#D9D9D9] hover:text-gray-300 text-[16px] -tracking-[0.02em] font-neue md:font-proxima font-[450]">
                  What we do?
                </p>
                <p className="text-[#D9D9D9] hover:text-gray-300 text-[16px] -tracking-[0.02em] font-neue md:font-proxima font-[450] ">
                  Why - Philosophy
                </p>
                <p className="text-[#D9D9D9] hover:text-gray-300 text-[16px] -tracking-[0.02em] font-neue md:font-proxima font-[450] ">
                  How - Mission
                </p>
                <p className="text-[#D9D9D9] hover:text-gray-300 text-[16px] -tracking-[0.02em] font-neue md:font-proxima font-[450] ">
                  Benefits and Advantages
                </p>
                <p className="text-[#D9D9D9] hover:text-gray-300 text-[16px] -tracking-[0.02em] font-neue md:font-proxima font-[450] ">
                  Who - Team
                </p>
              </div>
              <div className="flex flex-col gap-6 items-start text-left">
                <a
                  href="/credentials"
                  className="text-[18px] text-[#D9D9D9] font-bold font-neue mt-2 xl:mt-0"
                >
                  Credentials
                </a>

                <p className="text-[#D9D9D9] hover:text-gray-300 text-[16px]  -tracking-[0.02em] font-neue md:font-proxima font-[450] ">
                  Projects
                </p>
                <p className="text-[#D9D9D9] hover:text-gray-300 text-[16px]  -tracking-[0.02em] font-neue md:font-proxima font-[450] ">
                  Supply Chain Partners
                </p>
                <p className="text-[#D9D9D9] hover:text-gray-300 text-[16px]  -tracking-[0.02em] font-neue md:font-proxima font-[450] ">
                  Certifications
                </p>
                <p className="text-[#D9D9D9] hover:text-gray-300 text-[16px]  -tracking-[0.02em] font-neue md:font-proxima font-[450] ">
                  Production and Manufacturing
                </p>
              </div>
              {/* <div className="flex flex-col gap-6 items-start text-left">
                <p className="text-[18px] text-[#D9D9D9] font-bold font-neue mt-2 xl:mt-0">
                  Media
                </p>

                <a
                  href="#"
                  className="text-[#D9D9D9] hover:text-gray-300 text-[16px]  -tracking-[0.02em] font-neue md:font-proxima font-[450] "
                >
                  Newsroom
                </a>
                <a
                  href="#"
                  className="text-[#D9D9D9] hover:text-gray-300 text-[16px]  -tracking-[0.02em] font-neue md:font-proxima font-[450] "
                >
                  Brochure
                </a>
                <a
                  href="#"
                  className="text-[#D9D9D9] hover:text-gray-300 text-[16px] -tracking-[0.02em] font-neue md:font-proxima xl:font-[450] "
                >
                  Media Gallery
                </a>
              </div> */}
            </div>
          </div>

          <div className="border-t border-[#2c2c2c] w-full my-[36px] xl:my-12" />

          <div className="flex justify-center md:justify-between gap-2 items-center flex-wrap text-sm">
            <div className="text-white text-opacity-80 text-[16px] -tracking-[0.02em] font-neue md:font-proxima xl:font-semibold">
              ©2025 Futran. All rights reserved.
            </div>
            <div className="flex gap-10">
              <a
                href={`${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/policy/browse_wrap_NDA.pdf`}
                target="_blank"
                className="text-[#fff] hover:underline text-[16px]  -tracking-[0.02em] font-neue md:font-proxima font-[450]"
              >
                By using this site, you agree to our Terms and Confidentiality
                Policy.
              </a>
              {/* <a
                href="#"
                className="text-[#fff] hover:underline text-[16px]  -tracking-[0.02em] font-neue md:font-proxima font-[450]"
              >
                Terms & Condition
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
