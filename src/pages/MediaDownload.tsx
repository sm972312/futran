import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import MediaHero from "@/components/media/MediaHero";
import MediaContent from "@/components/media/MediaContent";

const MediaDownload: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Futran Media - Resources for Press and Analysts on Pod Transportation
        </title>
        <meta
          name="description"
          content="Access official press releases, high-resolution media assets, and technical documentation on our pod transportation system. Our media hub provides comprehensive resources for journalists, analysts, and stakeholders"
        />
        <meta
          name="keywords"
          content="Futran media, pod transport system, urban mobility, pod transportation media, press kit, media resources, public transportation news, sustainable transit reports, pod taxi, driverless pod taxi, india's first pod taxi, mumbai pod taxi, BKC pod taxi, MMRDA approves pod taxi project, pod taxi mira road, pod taxi in mumbai's BKC, mumbai to gets pod taxi service, pod taxi service to be launched in mira bhayandar, pod taxi in bandra kurla complex, autonomous electric pods, driveless, public transit solutions, sustainable urban mobility, transport infrastructure investment, smart cities, Nutran ESSPods India pvt ltd, futran solutions, futran technologies, eco-friendly pod taxi, pod taxi in mumbai news, futran"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Futran Media - Resources for Press and Analysts on Pod Transportation",
              "url": "https://futrangroup.com/media-download",
              "description": "Access official press releases, high-resolution media assets, and technical documentation on our pod transportation system. Our media hub provides comprehensive resources for journalists, analysts, and stakeholders.",
              "about": {
                "@type": "Thing",
                "name": "Futran media, pod transport system, urban mobility, pod transportation media, press kit, media resources, public transportation news, sustainable transit reports, pod taxi, driverless pod taxi, india's first pod taxi, mumbai pod taxi, BKC pod taxi, MMRDA approves pod taxi project, pod taxi mira road, pod taxi in mumbai's BKC, mumbai to gets pod taxi service, pod taxi service to be launched in mira bhayandar, pod taxi in bandra kurla complex, autonomous electric pods, driveless, public transit solutions, sustainable urban mobility, transport infrastructure investment, smart cities, Nutran ESSPods India pvt ltd, futran solutions, futran technologies, eco-friendly pod taxi, pod taxi in mumbai news, futran"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="bg-white relative overflow-hidden">
        <Navigation />
        <MediaHero />
        <MediaContent />
        <Footer />
      </div>
    </>
  );
};

export default MediaDownload;
