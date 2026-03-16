import React from "react";
import ContactForm from "@/components/ui/ContactForm";
import { Link } from "react-router-dom";

const ContactsContent: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <section className="w-full mx-auto py-[48px] xl:py-16 px-5 md:px-[120px]">
        <div className="items-center">
          <div className="xl:space-y-6">
            <div className="flex items-center gap-2 justify-center xl:justify-start">
              <img
                src="/lovable-uploads/futran_icon.svg"
                alt={`icon`}
                className="w-[54px] h-[54px] object-contain"
              />
              <h2 className="text-[#1C3562] font-bold text-[36px] leading-[150%] tracking-[-0.2px] font-proxima align-middle">
                Enquiries
              </h2>
            </div>
            <p className="text-center xl:text-left text-[#1A202C] xl:text-[#414042] text-[20px] font-normal leading-[34px] tracking-[0.20px] font-proxima mb-[48px] xl:mb-8">
              Leave a request and an FUTRAN specialist will contact you at a
              convenient time
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="w-full mx-auto xl:py-16 px-5 md:px-[120px]">
        <div className="flex items-center gap-2 justify-center xl:justify-start mb-[24px]">
          <img
            src="/lovable-uploads/futran_icon.svg"
            alt={`icon`}
            className="w-[54px] h-[54px] object-contain"
          />
          <h2 className="text-[#1C3562] font-bold text-[30px] xl:text-[36px] leading-[150%] tracking-[-0.2px] font-proxima align-middle">
            Location
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] xl:gap-10">
          <div className="relative rounded-xl overflow-hidden h-[254px] xl:h-[428px]">
            <img
              src="/contact/map.png"
              alt="Map location"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 mb-[24px]">
            <div className="flex md:gap-4">
              <span className="text-[#414042] w-1/4 text-[20px] font-normal leading-[1.5em] tracking-[0.01em] font-proxima">
                Address
              </span>
              <span className="w-3/4 font-bold text-[20px] tracking-[0.01em] font-proxima">
                Block 2, 73, East Avenue Corporate, Sarabhai Campus, Excel
                House, Bhailal Amin Marg, near Genda Circle, Vadodara, Gujarat
                390023
              </span>
            </div>
            <div className="flex md:gap-4 justify-between">
              <span className="text-[#414042] w-1/4 text-[20px] font-normal leading-[1.5em] tracking-[0.01em] font-proxima">
                Google Map
              </span>
              <span className="w-3/4 font-bold text-[20px] leading-[1.2em] tracking-[0.01em] font-proxima">
                <Link to="https://g.co/kgs/LXXAKck" target="_blank">
                  https://g.co/kgs/LXXAKck
                </Link>
              </span>
            </div>
            {/* <div className="flex md:gap-4 justify-between">
              <span className="text-[#414042] w-1/4 text-[20px] font-normal leading-[1.5em] tracking-[0.01em] font-proxima">
                Call
              </span>
              <span className="w-3/4 font-bold text-[20px] leading-[1.2em] tracking-[0.01em] font-proxima">
                +91 989 011 2222
              </span>
            </div> */}
            <div className="flex md:gap-4">
              <span className="text-[#414042] w-1/4 text-[20px] font-normal leading-[1.5em] tracking-[0.01em] font-proxima">
                E-mail
              </span>
              <span className="w-3/4 font-bold text-[20px] leading-[1.2em] tracking-[0.01em] font-proxima">
                info@nutran.in
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsContent;
