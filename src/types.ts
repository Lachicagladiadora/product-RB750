export type Brand = {
  brand: string;
  logo: string;
  url: string;
  twStyles: string;
};

export type RedirectPage = { label: string; href: string };

export type Price = RedirectPage;
export type Solution = RedirectPage;
export type Support = RedirectPage;
export type Contact = RedirectPage;

export type TechnicalSpecifications = { label: string; value: string }[];
export type PerformanceResults = {
  ipFirewall: string;
  conntrack: string;
  modo: string;
  mbps1: string;
  fps1: string;
  mbps2: string;
  fps2: string;
  mbps3: string;
  fps3: string;
};

export type ProductData = {
  name: string;
  price: string;
  images: string[];
  applications: string[];
  superiorPerformance: string[];
  advantages: string[];
  download: RedirectPage[];
  technicalSpecifications: TechnicalSpecifications;
  performanceResults: PerformanceResults[];
};

export type SuggestedProduct = {
  name: string;
  description: string;
  url: string;
  image: string;
};
