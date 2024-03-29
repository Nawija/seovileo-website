import { StaticImageData } from "next/image";

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
  img: {
    url: string;
  };
};
export type BlogItemTypes = {
  slug: string;
  title: string;
  tags: string[];
  date: string;
  img: {
    url: string;
  };
};

export type PortfolioItem = {
  id: string;
  prevPrice: string;
  price: string;
  href: string;
  url: StaticImageData;
  label: string;
  desc: string;
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
