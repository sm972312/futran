//////////////// LandingPage Types ////////////////

export interface FooterProps {
  hideEnquirySection?: boolean;
}

export interface NewsModalProps {
  latestNews: {
    Image: string;
    Category: string;
    Date: string;
    Title: string;
    ImageClassName: string;
    Link: string;
    Content: string;
  }[];
  openedIndex: number;
  handleClose: (value: number | null) => void;
}

//////////////// AboutPage Types ////////////////

export interface AboutSectionProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  readMore?: boolean;
}

export interface TeamMember {
  name: string;
  position: string;
  email: string;
  imageSrc: string;
}


//////////////// TechnologyPage Types ////////////////

export interface TechFeatureSectionProps {
  title: string;
  features: string[];
  imageUrl: string;
  imagePosition: "left" | "right";
  imageClass?: string;
  variant?: "default" | "modern";
  className?: string;
  startIndex?: number;
  readMore: string;
}

export interface TechTabsProps {
  activeTab: "unique" | "shared";
  setActiveTab: (value: "unique" | "shared") => void;
} 