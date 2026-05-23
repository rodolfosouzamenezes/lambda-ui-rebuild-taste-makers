export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  heading: string;
  links: NavLink[];
  separator?: NavLink;
};

export type NavMenu = {
  label: string;
  href?: string;
  columns?: NavGroup[];
};

export type AccordionFeature = {
  number: string;
  title: string;
  body: string;
};

export type ProductCard = {
  number: string;
  title: string;
  body: string;
};

export type GpuProduct = {
  number: string;
  label: string;
  description: string;
  image: string;
  alt: string;
};

export type FooterGroup = {
  heading: string;
  subgroups: { label: string; links: NavLink[] }[];
  bottomLinks?: NavLink[];
};
