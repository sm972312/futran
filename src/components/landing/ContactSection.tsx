import React from "react";
import ContactForm from "@/components/ui/ContactForm";
import { Link } from "react-router-dom";

const ContactSection: React.FC = () => {
  return (
    <section className="w-full bg-white overflow-hidden py-16 md:pb-[177px] px-[120px] max-md:px-5">
      <div className="w-full">
        <div className="flex justify-center xl:justify-start items-center gap-4 mb-4">
          <div className="flex justify-center items-center gap-3">
            <img
              src="lovable-uploads/futran_icon.svg"
              className="w-[30px] h-[30px] md:w-12 md:h-12 object-contain"
              alt="Contact icon"
            />
            <h2 className="text-[36px] font-bold font-neue md:font-proxima  text-[#000000] -tracking-[0.02em]">
              Get in Touch
            </h2>
          </div>
        </div>
        <p className="text-[#414042] md:text-[20px] font-normal md:leading-[34px] tracking-[0.05em] font-neue md:font-proxima text-center md:text-left mb-10">
          Find us on the Map, Call or Email us, Enquire with us to know more!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/contact/map.png"
                className="w-full h-auto rounded-lg"
                alt="Map location"
              />
            </div>

            <div className="space-y-6">
              <div className="flex gap-7 md:gap-4">
                <span className="text-[#414042] w-1/2 text-[20px] font-normal leading-[20px] tracking-[0.01em] font-proxima">
                  Address
                </span>
                <span className="text-[#414042] font-bold text-[20px] tracking-[0.01em] font-proxima">
                  Block 2, 73, East Avenue Corporate, Sarabhai Campus, Excel
                  House, Bhailal Amin Marg, near Genda Circle, Vadodara, Gujarat
                  390023
                </span>
              </div>

              <div className="flex gap-7 md:gap-4">
                <span className="text-[#414042] xl:text-nowrap w-1/5 text-[20px] font-normal leading-[20px] tracking-[0.01em] font-proxima">
                  Google Map
                </span>
                <Link to="https://g.co/kgs/LXXAKck" target="_blank">
                  <span className="text-[#414042] font-bold text-[20px] leading-[20px] tracking-[0.01em] font-proxima">
                    https://g.co/kgs/LXXAKck
                  </span>
                </Link>
              </div>

              {/* <div className="flex gap-7 md:gap-4">
                <span className="text-[#414042] w-1/5 text-[20px] font-normal leading-[20px] tracking-[0.01em] font-proxima">
                  Call
                </span>
                <span className="text-[#414042] font-bold text-[20px] leading-[20px] tracking-[0.01em] font-proxima">
                  +91 989 011 2222
                </span>
              </div> */}

              <div className="flex gap-7 md:gap-4">
                <span className="text-[#414042]  w-1/5 text-[20px] font-normal leading-[20px] tracking-[0.01em] font-proxima">
                  E-mail
                </span>
                <span className="text-[#414042] font-bold text-[20px] leading-[20px] tracking-[0.01em] font-proxima">
                  info@nutran.in
                </span>
              </div>
            </div>
          </div>

          <ContactForm isLandingPage={true} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
