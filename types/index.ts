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
  prevPrice: string;
  price: string;
  href: string;
  url: StaticImageData | string;
  label: string;
  desc: string;
  tech: {
    link: string;
    label: string;
  };
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
