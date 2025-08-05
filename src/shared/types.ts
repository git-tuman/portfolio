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

export type Project = {
  name: string;
  deploy: Link;
  repo: Link;
  screenshots: {
    desktop: string[];
    mobile: string[];
  };
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
