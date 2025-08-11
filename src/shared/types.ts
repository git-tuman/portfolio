export type PageSwitcherType = {
  name: string;
  path: string;
};

export type Link = {
  name: string;
  value: string;
  link: string;
  icon?: string;
};

export type UserProfile = {
  name: string;
  details: string;
  message: string;
  stack: string;
  bio: string;
  contacts: Link[];
};

export type Screenshots = {
  desktop: string[];
  mobile: string[];
};

export type Project = {
  name: string;
  deploy: Link;
  repo: Link;
  screenshots: Screenshots;
  description: string;
  stack: string;
  details: string;
};

export type Icon = {
  icon: string;
  name: string;
  link: string;
};

export type Nav = {
  id: string;
  name: string;
};
