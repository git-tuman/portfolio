import GitHubIcon from "../assets/github-original.svg";
import TelegramIcon from "../assets/telegram-original.svg";
import HeadHunterIcon from "../assets/hh.svg";
import GmailIcon from "../assets/gmail.svg";
import WhatsAppIcon from "../assets/whatsapp.svg";
import ScreenWivoHero from "../assets/screen-wivo-hero.png";
import ScreenWivoHeroMob from "../assets/screen-wivo-hero-mob.png";
import ScreenWivoApp from "../assets/screen-wivo-app.png";
import ScreenWivoAppMob from "../assets/screen-wivo-app-mob.png";
import type {
  Icon,
  Link,
  Nav,
  PageSwitcherType,
  Project,
  UserProfile,
} from "./types";

import Avatar from "../assets/avatar.jpg";
import Photo1 from "../assets/photo1.jpg";
import Photo2 from "../assets/photo2.jpg";
import Photo3 from "../assets/photo3.jpg";
import Photo4 from "../assets/photo4.jpg";
import Photo5 from "../assets/photo5.jpg";
import Photo6 from "../assets/photo6.jpg";

import JSIcon from "../assets/javascript-original.svg";
import TSIcon from "../assets/typescript-original.svg";
import ReactIcon from "../assets/react-original.svg";
import ReduxIcon from "../assets/redux-original.svg";
import CSSIcon from "../assets/css3-original.svg";
import HTMLIcon from "../assets/html5-original.svg";
import MUIIcon from "../assets/materialui-original.svg";
import AntdIcon from "../assets/antdesign-original.svg";
import SassIcon from "../assets/sass-original.svg";
import GitIcon from "../assets/git-original.svg";
import WebpackIcon from "../assets/webpack-original.svg";
import ViteIcon from "../assets/vitejs-original.svg";
import ESLintIcon from "../assets/eslint-original.svg";
import VSCIcon from "../assets/vscode-original.svg";
import FigmaIcon from "../assets/figma-original.svg";

export const AVATAR = Avatar;

export const HR_MODE_PATCH = "/hr-mode";
export const DEV_MODE_PATCH = "/dev-mode";
export const USER = "user";
export const PET_PROJECTS = "petProjects";
export const PHOTOS = "photos";
export const DEFAULT_HEADER_SECTION = "export const = { ... }";

export const ACTIVE = "active";
export const VISIBLE = "visible";
export const HIDDEN = "hidden";

export const PageSwitcherList: PageSwitcherType[] = [
  { name: "Hr Mode", path: HR_MODE_PATCH },
  { name: "Dev Mode", path: DEV_MODE_PATCH },
];

const DEMO = "демо";
const REPO = "репозиторий";

const contactsList: Link[] = [
  {
    name: "GitHub",
    value: "git-tuman",
    link: "https://github.com/git-tuman",
    icon: GitHubIcon,
  },
  {
    name: "Telegram",
    value: "@tg_tuman",
    link: "https://t.me/tg_tuman",
    icon: TelegramIcon,
  },
  {
    name: "HeadHunter",
    value: "Мое резюме",
    link: "https://hh.ru",
    icon: HeadHunterIcon,
  },
  {
    name: "Gmail",
    value: "kirillvershov5500@gmail.com",
    link: "",
    icon: GmailIcon,
  },
  {
    name: "WhatsApp",
    value: "+79539429464",
    link: "",
    icon: WhatsAppIcon,
  },
];

export const USER_PROFILE: UserProfile = {
  name: "Попондопуло Кирилл",
  details: "24 года, г. Киров",
  message: "Привет, я - Junior Frontend разработчик.",
  stack:
    "JS, TS, React, Redux, RTK, Redux thunk, WebSocket, Rest API, SCSS, HTML5.",
  bio: "Создаю приложения с упором на оптимизацию, адаптивность, чистоту и читаемость кода, люблю автоматизировать рутину и внедрять best practices. Постоянно учусь новому, открыт к интересным задачам и командной работе. На данный момент ищу первую работу где я смогу развиваться во Frontend направлении. В свободное время люблю выбираться на природу в кругу своей компании:)",
  contacts: contactsList,
};

export const PET_PROJECTS_LIST: Project[] = [
  {
    name: "WIVO Bank",
    deploy: {
      name: DEMO,
      value: "https://git-tuman.github.io/wivo-bank",
      link: "https://git-tuman.github.io/wivo-bank",
    },
    repo: {
      name: REPO,
      value: "https://github.com/git-tuman/wivo-bank",
      link: "https://github.com/git-tuman/wivo-bank",
    },
    screenshots: {
      desktop: [ScreenWivoHero, ScreenWivoApp],
      mobile: [ScreenWivoHeroMob, ScreenWivoAppMob],
    },
    description:
      "Одностраничный лендинг, реализованный в рамках тестового задания. Проект выполнен с упором на пиксель-перфект, адаптивную верстку, анимации и быструю загрузку.",
    stack:
      "React 19 + TypeScript, SCSS, Webpack, FSD-архитектура (минимальная реализация: shared + widgets), IntersectionObserver API, Адаптивная верстка, Lazy loading изображений, CSS-анимации (SCSS)",
    details:
      "Адаптивная pixel perfect вёрстка по макету Figma: поддержка мобильных и десктопных экранов (до 1920px), резиновая вёрстка для промежуточных разрешений. Навигация реализована с адаптивным хедером и бургер-меню для мобильных устройств, подсветка навигации активной секции через кастомный хук на IntersectionObserver. Оптимизирована производительность: загрузка страницы ~500мс, ленивая загрузка изображений, минимизация стилей и скриптов, семантическая разметка для SEO. Добавлены анимации переходов и появления элементов на SCSS. Это обеспечивает: удобство и быстрое взаимодействие на любых устройствах, плавный пользовательский опыт, высокую скорость загрузки и хорошее SEO, лёгкость поддержки и масштабирования проекта.",
  },
  {
    name: "WIVO Bank 2",
    deploy: {
      name: DEMO,
      value: "https://git-tuman.github.io/wivo-bank",
      link: "https://git-tuman.github.io/wivo-bank",
    },
    repo: {
      name: REPO,
      value: "https://github.com/git-tuman/wivo-bank",
      link: "https://github.com/git-tuman/wivo-bank",
    },
    screenshots: {
      desktop: [ScreenWivoHero, ScreenWivoApp],
      mobile: [ScreenWivoHeroMob, ScreenWivoAppMob],
    },
    description:
      "Одностраничный лендинг, реализованный в рамках тестового задания. Проект выполнен с упором на пиксель-перфект, адаптивную верстку, анимации и быструю загрузку.",
    stack:
      "React 19 + TypeScript, SCSS, Webpack, FSD-архитектура (минимальная реализация: shared + widgets), IntersectionObserver API, Адаптивная верстка, Lazy loading изображений, CSS-анимации (SCSS)",
    details:
      "Адаптивная pixel perfect вёрстка по макету Figma: поддержка мобильных и десктопных экранов (до 1920px), резиновая вёрстка для промежуточных разрешений. Навигация реализована с адаптивным хедером и бургер-меню для мобильных устройств, подсветка навигации активной секции через кастомный хук на IntersectionObserver. Оптимизирована производительность: загрузка страницы ~500мс, ленивый лоадинг изображений, минимизация стилей и скриптов, семантическая разметка для SEO. Добавлены анимации переходов и появления элементов на SCSS. Это обеспечивает: удобство и быстрое взаимодействие на любых устройствах, плавный пользовательский опыт, высокую скорость загрузки и хорошее SEO, лёгкость поддержки и масштабирования проекта.",
  },
];

export const PHOTOS_LIST = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6];

export const NAVIGATION_LIST: Nav[] = [
  { id: USER, name: "Обо мне" },
  { id: PET_PROJECTS, name: "Пет-проекты" },
  { id: PHOTOS, name: "Мои фото" },
];

export const STACK_ICONS_LIST: Icon[] = [
  {
    icon: JSIcon,
    name: "JavaScript",
    link: "https://ecma-international.org/publications-and-standards/standards/ecma-262/",
  },
  { icon: TSIcon, name: "TypeScript", link: "https://www.typescriptlang.org/" },
  { icon: ReactIcon, name: "React", link: "https://react.dev/" },
  { icon: ReduxIcon, name: "Redux", link: "https://redux.js.org/" },
  {
    icon: HTMLIcon,
    name: "HTML5",
    link: "https://html.spec.whatwg.org/multipage/",
  },
  { icon: CSSIcon, name: "CSS3", link: "https://www.w3.org/Style/CSS/" },
  { icon: SassIcon, name: "SASS", link: "https://sass-lang.com/" },
  { icon: GitIcon, name: "Git", link: "https://git-scm.com/" },
  { icon: WebpackIcon, name: "Webpack", link: "https://webpack.js.org/" },
  { icon: ViteIcon, name: "Vite", link: "https://vite.dev/" },
  { icon: ESLintIcon, name: "ESLint", link: "https://eslint.org/" },
  { icon: MUIIcon, name: "Material UI", link: "https://mui.com/material-ui/" },
  { icon: AntdIcon, name: "Ant Design", link: "https://ant.design/" },
  { icon: FigmaIcon, name: "Figma", link: "https://www.figma.com/" },
  {
    icon: VSCIcon,
    name: "Visual Studio Code",
    link: "https://code.visualstudio.com/",
  },
];

export const SYMBOLS = {
  quote: '"',
  singleQuote: "`",
  openingCurlyBrace: "{",
  closingCurlyBrace: "}",
  openingSquareBracket: "[",
  closingSquareBracket: "]",
  colon: ":",
  semicolon: ";",
  comma: ",",
  equal: "=",
  ellipsis: "...",
};
