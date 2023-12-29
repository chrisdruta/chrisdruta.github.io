import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://chris-does-cod.ing", // replace this with your deployed domain
  author: "Chris Druta",
  desc: "Chris' personal portfolio website.",
  title: "chris does coding",
  ogImage: undefined,
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/chrisdruta",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/chris-druta",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:chris@gmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "SoundCloud",
    href: "https://soundcloud.com/user-776216628",
    linkTitle: `${SITE.title} on SoundCloud`,
    active: true,
  }
];
