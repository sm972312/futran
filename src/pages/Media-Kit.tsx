import AboutHero from "@/components/about/AboutHero";
import Footer from "@/components/landing/Footer";
import Navigation from "@/components/landing/Navigation";
import MediaCard from "@/components/media-kit/MediaCard";
import { mediaItems } from "@/utils/mediaItems";
import React from "react";
import { Helmet } from "react-helmet-async";

const MediaKit: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Futran Media Kit | Futran Group - Brand Assets, Media Brief, Videos &
          Brochures
        </title>
        <meta
          name="description"
          content="Download Futran’s official media kit – including brand brochures, explainer videos, drone footage, and high-quality images showcasing our autonomous pod transit technology and vision for sustainable urban mobility."
        />
        <meta
          name="keywords"
          content="Futran media kit, Media brief pdf, Futran brochure, Futran videos, Futran drone video, Futran explainer video, Futran corridor video, Futran brand assets, autonomous pod transit, pod taxi media, pod taxi images, pod taxi videos, Nutran ESSPods, Futran Group, Futran technologies, smart city mobility, urban transport innovation, sustainable public transit, autonomous transport India, pod taxi Mumbai, Futran brand resources"
        />
        <meta
          property="og:title"
          content="Futran Media Kit - Brand Assets, Videos & Brochures | Futran Group"
        />
        <meta
          property="og:description"
          content="Access official Futran media – videos, images, and brochures that highlight our innovation in autonomous pod transit and sustainable mobility solutions."
        />
        <meta
          property="og:image"
          content="https://futrangroup.com/assets/media-kit-thumbnail.jpg"
        />
        <meta property="og:url" content="https://futrangroup.com/media-kit" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Futran Media Kit - Brand Assets, Videos & Brochures"
        />
        <meta
          name="twitter:description"
          content="Download Futran’s official media kit – videos, brochures, and images showcasing our autonomous pod transit innovations."
        />
        <meta
          name="twitter:image"
          content="https://futrangroup.com/assets/media-kit-thumbnail.jpg"
        />

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Futran Media Kit",
        "url": "https://futrangroup.com/media-kit",
        "description": "Download Futran’s official media kit – including brand brochures, explainer videos, drone footage, and high-quality images showcasing our autonomous pod transit technology.",
        "publisher": {
          "@type": "Organization",
          "name": "Futran Group",
          "url": "https://futrangroup.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://futrangroup.com/assets/logo.png"
          }
        },
        "hasPart": [
          {
            "@type": "MediaObject",
            "name": "Brand Brochure",
            "contentUrl": "https://futrangroup.com/media-kit/FUTRAN_Final_brochure.pdf",
            "encodingFormat": "application/pdf"
          },
          {
            "@type": "VideoObject",
            "name": "Futran Explainer Video",
            "contentUrl": "https://futrangroup.com/media-kit/Futran_Explainer_video.mp4",
            "thumbnailUrl": "https://futrangroup.com/media-kit/Engineering_Excellence.png",
            "description": "An overview of Futran's autonomous pod transit system."
          },
          {
            "@type": "VideoObject",
            "name": "Drone Video",
            "contentUrl": "https://futrangroup.com/media-kit/drone_video.mp4",
            "description": "Aerial view of Futran’s autonomous transit infrastructure."
          }
        ],
        "about": {
          "@type": "Thing",
          "name": "autonomous pod transit, Futran Group, Nutran ESSPods, sustainable mobility, pod taxi, smart city transport"
        }
      }
    `}
        </script>
      </Helmet>

      <div className="bg-white relative overflow-visible">
        <Navigation />
        <AboutHero />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-6">
          <div className=" mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              Media Kit
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {" "}
              {mediaItems.map((item) => (
                <MediaCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MediaKit;
