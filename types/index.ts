export type BreadcrumbTypes = {
  title: string;
  href: string;
};

export type BlogType = {
  id: string;
  tags: string[];
  date: string;
  slug: string;
  title: string;
  img?: {
    url: string;
    blurUpThumb?: string;
  };
};
export type BlogItemTypes = {
  slug: string;
  title: string;
  tags: string[];
  date: string;
  img?: {
    url: string;
    blurUpThumb?: string;
  };
};

export type PortfolioItem = {
  id: string;
  label: string;
  titleH1: string;
  desc: string;
  url: string;
  link: string;
  href: string;
  color: string;
  tech: {
    label: string;
    link: string;
  };
  pageSpeedScore: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  effects: {
    title: string;
    desc: string;
    images: {
      img: string;
    }[];
  };
  productDesc: {
    title: string;
    desc: string;
  }[];
  date: string;
  content: string;
};

export type HeightWightTypes = {
  h: number;
  w: number;
};

export type GaleriaTypes = {
  img: {
    id: string;
    url: string;
    blurUpThumb: string;
  };
};
