import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import CredentialsHero from "@/components/credentials/CredentialsHero";
import CredentialsContent from "@/components/credentials/CredentialsContent";

const Credentials: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Futran Credentials - Our Achievements in Pod Transportation
        </title>
        <meta
          name="description"
          content="Review Futran’s portfolio of validated achievements and industry recognition. Our track record demonstrates a proven commitment to excellence in next-generation pod transportation solutions"
        />
        <meta
          name="keywords"
          content="pod transportation, project credentials, pod taxi, driveless, government partnerships, transport industry recognition, urban transit policy, pod transport, next-generation urban mobility, pod taxi, driverless pod taxi, india's first pod taxi, mumbai pod taxi, BKC pod taxi, MMRDA approves pod taxi project, pod taxi mira road, pod taxi in mumbai's BKC, mumbai to gets pod taxi service, pod taxi service to be launched in mira bhayandar, pod taxi in bandra kurla complex, autonomous electric pods, driveless, public transit solutions, sustainable urban mobility, transport infrastructure investment, smart cities, Nutran ESSPods India pvt ltd, futran solutions, futran technologies, eco-friendly pod taxi, pod taxi in mumbai news, futran"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Futran Credentials - Our Achievements in Pod Transportation",
              "url": "https://futrangroup.com/credentials",
              "description": "Review Futran’s portfolio of validated achievements and industry recognition. Our track record demonstrates a proven commitment to excellence in next-generation pod transportation solutions.",
              "about": {
                "@type": "Thing",
                "name": "pod transportation, project credentials, pod taxi, driveless, government partnerships, transport industry recognition, urban transit policy, pod transport, next-generation urban mobility, pod taxi, driverless pod taxi, india's first pod taxi, mumbai pod taxi, BKC pod taxi, MMRDA approves pod taxi project, pod taxi mira road, pod taxi in mumbai's BKC, mumbai to gets pod taxi service, pod taxi service to be launched in mira bhayandar, pod taxi in bandra kurla complex, autonomous electric pods, driveless, public transit solutions, sustainable urban mobility, transport infrastructure investment, smart cities, Nutran ESSPods India pvt ltd, futran solutions, futran technologies, eco-friendly pod taxi, pod taxi in mumbai news, futran"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="bg-white relative overflow-hidden">
        <Navigation />
        <CredentialsHero />
        <CredentialsContent />
        <Footer />
      </div>
    </>
  );
};

export default Credentials;
