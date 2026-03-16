import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/landing/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import StatisticsSection from "@/components/landing/StatisticsSection";
import NewsSection from "@/components/landing/NewsSection";
import ProjectsSection from "@/components/landing/ProjectsSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Futran - The Future of Pod Transport and Urban Mobility</title>
        <meta
          name="description"
          content="Futran is redefining public transportation with our autonomous electric pod taxi system. Explore how our next-generation pods offer a sustainable, efficient, and scalable solution for modern urban infrastructure"
        />
        <meta
          name="keywords"
          content="pod transportation system, pod taxi, driverless pod taxi, india's first pod taxi, mumbai pod taxi, BKC pod taxi, MMRDA approves pod taxi project, pod taxi mira road, pod taxi in mumbai's BKC, mumbai to gets pod taxi service, pod taxi service to be launched in mira bhayandar, pod taxi in bandra kurla complex, autonomous electric pods, driveless, public transit solutions, sustainable urban mobility, transport infrastructure investment, smart cities, Nutran ESSPods India pvt ltd, futran solutions, futran technologies, eco-friendly pod taxi, pod taxi in mumbai news, futran"
        />
        <script type="application/ld+json">
          {`
            [
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Futran Group",
                "url": "https://futrangroup.com",
                "about": {
                  "@type": "Thing",
                  "name": "Pod transport system, urban mobility, sustainable transit, autonomous electric pods, driveless"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://futrangroup.com/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Futran Group",
                "legalName": "Nutran ESSPods",
                "url": "https://futrangroup.com",
                "logo": "https://futrangroup.com/path-to-your-logo.png",
                "description": "Futran is redefining public transportation with our autonomous electric pod taxi system. As a Nutran ESSPods initiative, Futran is a leader in autonomous pod transportation committed to developing innovative mobility solutions.",
                "sameAs": [
                  "https://www.linkedin.com/company/futran-group/",
                  "https://www.facebook.com/futrangroup"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Block 2, 73, East Avenue Corporate, Sarabhai Campus, Excel House, Bhailal Amin Marg, near Genda Circle",
                  "addressLocality": "Vadodara",
                  "addressRegion": "Gujarat",
                  "postalCode": "390023",
                  "addressCountry": "IN"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "email": "info@nutran.in"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "About",
                    "url": "https://futrangroup.com/about"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Technologies",
                    "url": "https://futrangroup.com/technologies"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Credentials",
                    "url": "https://futrangroup.com/credentials"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Media & Downloads",
                    "url": "https://futrangroup.com/media-download"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Contact Us",
                    "url": "https://futrangroup.com/contacts"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Futran - The Future of Pod Transport and Urban Mobility",
                "url": "https://futrangroup.com",
                "description": "Futran is redefining public transportation with our autonomous electric pod taxi system. Explore how our next-generation pods offer a sustainable, efficient, and scalable solution for modern urban infrastructure.",
                "about": {
                  "@type": "Thing",
                  "name": "pod transportation system, pod taxi, driverless pod taxi, india's first pod taxi, mumbai pod taxi, BKC pod taxi, MMRDA approves pod taxi project, pod taxi mira road, pod taxi in mumbai's BKC, mumbai to gets pod taxi service, pod taxi service to be launched in mira bhayandar, pod taxi in bandra kurla complex, autonomous electric pods, driveless, public transit solutions, sustainable urban mobility, transport infrastructure investment, smart cities, Nutran ESSPods India pvt ltd, futran solutions, futran technologies, eco-friendly pod taxi, pod taxi in mumbai news, futran"
                }
              }
            ]
          `}
        </script>
      </Helmet>
      <div className="bg-white min-h-[800px] overflow-hidden mx-auto">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <div className="bg-[#1C3562] z-0 flex min-h-[100px] max-md:max-w-full" />
        <StatisticsSection />
        <NewsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
