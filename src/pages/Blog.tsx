import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import BlogHero from "@/components/blog/BlogHero"; 
import BlogsListSection from "@/components/blog/BlogsListSection"; 
import { aboutSections } from "@/utils/staticData";

const Blog: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Futran - Pioneering the Future of Pod Transit</title>
        <meta
          name="description"
          content="Blog | As a Nutran ESSPods initiative, Futran is a leader in autonomous pod transportation. We are committed to developing innovative mobility solutions that address urban challenges and drive economic growth with our pod technology"
        />
        <meta
          name="keywords"
          content="autonomous pod technology, pod taxi, driverless pod taxi, india's first pod taxi, mumbai pod taxi, BKC pod taxi, MMRDA approves pod taxi project, pod taxi mira road, pod taxi in mumbai's BKC, mumbai to gets pod taxi service, pod taxi service to be launched in mira bhayandar, pod taxi in bandra kurla complex, autonomous electric pods, driveless, public transit solutions, sustainable urban mobility, transport infrastructure investment, smart cities, Nutran ESSPods India pvt ltd, futran solutions, futran technologies, eco-friendly pod taxi, pod taxi in mumbai news, pod transit solutions, Nutran EV, sustainable urban development, strategic partnerships, futran"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Futran - Pioneering the Future of Pod Transit",
              "url": "https://futrangroup.com/blog",
              "description": "As a Nutran ESSPods initiative, Futran is a leader in autonomous pod transportation. We are committed to developing innovative mobility solutions that address urban challenges and drive economic growth with our pod technology.",
              "blog": {
                "@type": "Thing",
                "name": "autonomous pod technology, pod taxi, driverless pod taxi, india's first pod taxi, mumbai pod taxi, BKC pod taxi, MMRDA approves pod taxi project, pod taxi mira road, pod taxi in mumbai's BKC, mumbai to gets pod taxi service, pod taxi service to be launched in mira bhayandar, pod taxi in bandra kurla complex, autonomous electric pods, driveless, public transit solutions, sustainable urban mobility, transport infrastructure investment, smart cities, Nutran ESSPods India pvt ltd, futran solutions, futran technologies, eco-friendly pod taxi, pod taxi in mumbai news, pod transit solutions, Nutran ESSPods, sustainable urban development, strategic partnerships, futran"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="bg-white relative overflow-visible">
        <Navigation />
        <BlogHero />
        <BlogsListSection/>
       
        <Footer />
      </div>
    </>
  );
};

export default Blog;
