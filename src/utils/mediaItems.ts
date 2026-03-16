import { FUTRAN_CONFIG } from "@/config/s3Bucket";

export type MediaItem = {
  id: number;
  title: string;
  type: "image" | "video" | "pdf" | "zip";
  src: string;
  thumbnail?: string;
  description?: string;
};

export const mediaItems: MediaItem[] = [
  {
    id: 12,
    title: "Download All Media",
    type: "zip",
    thumbnail: `${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/media-kit/Engineering_Excellence.png`,
    src: `${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/media-kit/media-kit.zip`,
    description: "Learn about our mission.",
  },
  {
    id: 1,
    title: "Brand Brochure",
    type: "pdf",
    src: `${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/media-kit/FUTRAN_Final_brochure_print ready.pdf`,
    thumbnail: `${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/media-kit/brochure_thumbnail.png`,
    description: "Download our official brand brochure.",
  },
  {
    id: 13,
    title: "Media Brief",
    type: "pdf",
    src: `${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/media-kit/Futran_Technology_Media_Brief.pdf`,
    thumbnail: `${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/media-kit/media_brief_thumbnail.png`,
    description: "Download our Brief Media.",
  },
  {
    id: 2,
    title: "Futran Explainer Video",
    type: "video",
    src: `${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/media-kit/Futran_Explainer video_English.mp4`,
    thumbnail: `${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/media-kit/Engineering_Excellence.png`,
    description: "Watch our Futran Explainer Video.",
  },

  {
    id: 3,
    title: "Drone Video",
    type: "video",
    src: `${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/media-kit/drone video_Sept'25.MP4`,
    thumbnail: `${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/media-kit/Hero_Section.jpeg`,
    description: "Watch our Drone Video.",
  },
  {
    id: 11,
    title: "Corridor Video",
    type: "video",
    src: `${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/media-kit/Dhaula Kuan - Manesar Corridor.mp4`,
    thumbnail: `${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/media-kit/Latest_News (1).jpeg`,
    description: "Watch our Corridor Video.",
  },
  {
    id: 4,
    title: "Advanced Technology",
    type: "image",
    src: `${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/media-kit/Advanced_Technology.jpeg`,
    description: "Learn about our advanced technology.",
  },
  {
    id: 5,
    title: "Flexi Transport",
    type: "image",
    src: `${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/media-kit/Flexi_Transport.jpeg`,
    description: "Learn about our flexi transport.",
  },
  {
    id: 6,
    title: "How it works",
    type: "image",
    src: `${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/media-kit/How_it_works.png`,
    description: "Learn how Futran works.",
  },
  {
    id: 7,
    title: "Mission",
    type: "image",
    src: `${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/media-kit/How_Mission.jpeg`,
    description: "Learn about our mission.",
  },
  {
    id: 8,
    title: "Philosophy",
    type: "image",
    src: `${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/media-kit/Why_Philosophy.png`,
    description: "Learn about our philosophy.",
  },
  {
    id: 9,
    title: "Advanced Technology",
    type: "image",
    src: `${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/media-kit/Latest_News (3).png`,
    description: "Learn about our Advanced Technology.",
  },
  {
    id: 10,
    title: "Flexi Transport",
    type: "image",
    src: `${FUTRAN_CONFIG.s3_bucket.uri}/futrangroup/media/media-kit/Latest_News (1).jpeg`,
    description: "Learn about our Flexi Transport.",
  },
];
