import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import ContactsHero from "@/components/contacts/ContactsHero";
import ContactsContent from "@/components/contacts/ContactsContent";

const Contacts: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact Futran - Connect with Urban Mobility & Pod Transport Experts
        </title>
        <meta
          name="description"
          content="Engage with the Futran team to discuss investment opportunities, government collaboration, or media inquiries. Our experts are available to provide detailed information on our pod transport system"
        />
        <meta
          name="keywords"
          content="contact Futran, pod transport system, pod taxi, driveless, investor relations, government liaison, media inquiries, strategic partnerships, autonomous electric pods, pod taxi, driverless pod taxi, india's first pod taxi, mumbai pod taxi, BKC pod taxi, MMRDA approves pod taxi project, pod taxi mira road, pod taxi in mumbai's BKC, mumbai to gets pod taxi service, pod taxi service to be launched in mira bhayandar, pod taxi in bandra kurla complex, autonomous electric pods, driveless, public transit solutions, sustainable urban mobility, transport infrastructure investment, smart cities, Nutran ESSPods India pvt ltd, futran solutions, futran technologies, eco-friendly pod taxi, pod taxi in mumbai news, futran"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Contact Futran - Connect with Urban Mobility & Pod Transport Experts",
              "url": "https://futrangroup.com/contacts",
              "description": "Engage with the Futran team to discuss investment opportunities, government collaboration, or media inquiries. Our experts are available to provide detailed information on our pod transport system.",
              "about": {
                "@type": "Thing",
                "name": "contact Futran, pod transport system, pod taxi, driveless, investor relations, government liaison, media inquiries, strategic partnerships, autonomous electric pods, pod taxi, driverless pod taxi, india's first pod taxi, mumbai pod taxi, BKC pod taxi, MMRDA approves pod taxi project, pod taxi mira road, pod taxi in mumbai's BKC, mumbai to gets pod taxi service, pod taxi service to be launched in mira bhayandar, pod taxi in bandra kurla complex, autonomous electric pods, driveless, public transit solutions, sustainable urban mobility, transport infrastructure investment, smart cities, Nutran ESSPods India pvt ltd, futran solutions, futran technologies, eco-friendly pod taxi, pod taxi in mumbai news, futran"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="bg-white relative overflow-hidden">
        <Navigation />
        <ContactsHero />
        <ContactsContent />
        <Footer hideEnquirySection={true} />
      </div>
    </>
  );
};

export default Contacts;
