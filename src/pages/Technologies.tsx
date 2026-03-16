import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import TechHero from "@/components/technologies/TechHero";
import TechTabs from "@/components/technologies/TechTabs";
import UniqueTechContent from "@/components/technologies/UniqueTechContent";
import SharedTechContent from "@/components/technologies/SharedTechContent";

const Technologies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"unique" | "shared">("unique");
  return (
    <>
      <Helmet>
        <title>
          Futran Technologies - The Foundation of Modern Pod Transportation
        </title>
        <meta
          name="description"
          content="Discover the core engineering behind Futran's autonomous electric pods. Our proprietary technology is designed for unmatched safety, operational efficiency, and seamless integration of our pods into existing transit networks"
        />
        <meta
          name="keywords"
          content="autonomous electric pods, pod technology, transport engineering, integrated transit systems, operational efficiency, pod taxi, driverless pod taxi, india's first pod taxi, mumbai pod taxi, BKC pod taxi, MMRDA approves pod taxi project, pod taxi mira road, pod taxi in mumbai's BKC, mumbai to gets pod taxi service, pod taxi service to be launched in mira bhayandar, pod taxi in bandra kurla complex, autonomous electric pods, driveless, public transit solutions, sustainable urban mobility, transport infrastructure investment, smart cities, Nutran ESSPods India pvt ltd, futran solutions, futran technologies, eco-friendly pod taxi, pod taxi in mumbai news, futran"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Futran Technologies - The Foundation of Modern Pod Transportation",
              "url": "https://futrangroup.com/technologies",
              "description": "Discover the core engineering behind Futran's autonomous electric pods. Our proprietary technology is designed for unmatched safety, operational efficiency, and seamless integration of our pods into existing transit networks.",
              "about": {
                "@type": "Thing",
                "name": "autonomous electric pods, pod technology, transport engineering, integrated transit systems, operational efficiency, pod taxi, driverless pod taxi, india's first pod taxi, mumbai pod taxi, BKC pod taxi, MMRDA approves pod taxi project, pod taxi mira road, pod taxi in mumbai's BKC, mumbai to gets pod taxi service, pod taxi service to be launched in mira bhayandar, pod taxi in bandra kurla complex, autonomous electric pods, driveless, public transit solutions, sustainable urban mobility, transport infrastructure investment, smart cities, Nutran ESSPods India pvt ltd, futran solutions, futran technologies, eco-friendly pod taxi, pod taxi in mumbai news, futran"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="bg-white relative overflow-hidden">
        <Navigation />
        <TechHero />
        <TechTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as "unique" | "shared")}
        >
          <TabsContent value="unique" className="mt-0">
            <UniqueTechContent />
          </TabsContent>
          <TabsContent value="shared" className="mt-0">
            <SharedTechContent />
          </TabsContent>
        </Tabs>
        <Footer />
      </div>
    </>
  );
};

export default Technologies;
