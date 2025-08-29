import GitHubIcon from "../assets/github-original.svg";
import TelegramIcon from "../assets/telegram-original.svg";
import GmailIcon from "../assets/gmail.svg";
import WhatsAppIcon from "../assets/whatsapp.svg";
import ScreenWivoHero from "../assets/screen-wivo-hero.png";
import ScreenWivoHeroMob from "../assets/screen-wivo-hero-mob.png";
import ScreenWivoApp from "../assets/screen-wivo-app.png";
import ScreenWivoAppMob from "../assets/screen-wivo-app-mob.png";
import ScreenTMDBMoviesMain from "../assets/screen-tmdb-movies-main.png";
import ScreenTMDBMoviesDetailsMovie from "../assets/screen-tmdb-movies-details-movie.png";
import ScreenTitanicUnfiltered from "../assets/screen-titanic-unfiltered.png";
import ScreenTitanicUnfilteredMob from "../assets/screen-titanic-unfiltered-mob.png";
import ScreenTitanicSurvStat from "../assets/screen-titanic-survival-status.png";
import ScreenTitanicSurvStatMob from "../assets/screen-titanic-survival-status-mob.png";
import ScreenTodoMindbox from "../assets/screen-todo-mindbox.png";
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
    "JavaScript, TypeScript, React, Redux, Redux Toolkit, Redux thunk, WebSocket, HTML, CSS, SASS, WebPack, Vite, Rest API, Material UI, Ant Design, Git, Figma, Feature-Sliced Design.",
  bio: "Создаю приложения с упором на оптимизацию, адаптивность, чистоту и читаемость кода, люблю автоматизировать рутину и внедрять best practices. Постоянно учусь новому, открыт к интересным задачам и командной работе. На данный момент ищу первую работу где я смогу развиваться во Frontend направлении. В свободное время люблю выбираться на природу в кругу своей компании.",
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
      "Одностраничный лендинг, реализованный с упором на пиксель-перфект, адаптивную верстку, анимации и быструю загрузку.",
    stack:
      "TypeScript, React, Webpack, FSD-архитектура, IntersectionObserver API, Адаптивная верстка, Lazy loading изображений, CSS-анимации (SCSS)",
    details:
      "Адаптивная pixel perfect вёрстка по макету Figma: поддержка мобильных и десктопных экранов (до 1920px), резиновая вёрстка для промежуточных разрешений. Навигация реализована с адаптивным хедером и бургер-меню для мобильных устройств, подсветка навигации активной секции через кастомный хук на IntersectionObserver. Оптимизирована производительность: загрузка страницы ~500мс, ленивая загрузка изображений, минимизация стилей и скриптов, семантическая разметка для SEO. Добавлены анимации переходов и появления элементов на SCSS. Это обеспечивает: удобство и быстрое взаимодействие на любых устройствах, плавный пользовательский опыт, высокую скорость загрузки и хорошее SEO, лёгкость поддержки и масштабирования проекта.",
  },
  {
    name: "TMDB Movies",
    deploy: {
      name: DEMO,
      value: "https://git-tuman.github.io/tmdb-movies",
      link: "https://git-tuman.github.io/tmdb-movies",
    },
    repo: {
      name: REPO,
      value: "https://github.com/git-tuman/tmdb-movies",
      link: "https://github.com/git-tuman/tmdb-movies",
    },
    screenshots: {
      desktop: [ScreenTMDBMoviesMain, ScreenTMDBMoviesDetailsMovie],
    },
    description:
      "Многостраничный SPA - аналог Кинопоиска с использованием базы фильмов от TMDB, клиентской маршрутизацией и многостраничной структурой React Router: поддержка вложенных маршрутов, динамических параметров, быстрые переходы без перезагрузки страницы. Проект выполнен в рамках обучения основам фронтенд разработки. P.S.: К сожалению, TMDB прекратил работу в России, поэтому полноценное использование их API возможно только через VPN.",
    stack:
      "TypeScript, React, React Router DOM, Redux, Material UI, Webpack, Lazy loading изображений",
    details:
      "Авторизация реализована в виде заглушки: API-токен подхватывается автоматически без ввода пользователем. Управление глобальным состоянием с помощью Redux. Реализованы пагинация и фильтрация фильмов по нескольким параметрам: названию, популярности/рейтингу, году выпуска и жанру. Динамическая подсветка выбранной страницы пагинации на основе данных из глобального состояния. Сброс фильтров и пагинации к состоянию по умолчанию осуществляется нажатием на кнопку очистки (крестик). Маршрутизация: переход на страницу авторизации по клику на иконку профиля; переход на страницу с подробной информацией о фильме по клику на карточку фильма. Добавление фильмов в избранное по клику на иконку звездочки; цвет иконки динамически меняется в зависимости от ответа API (статус в базе данных). Оптимизация производительности за счёт ленивой загрузки изображений (lazy loading). Это обеспечивает: удобство и быстрое взаимодействие, плавный и отзывчивый пользовательский опыт, высокую скорость загрузки и лёгкость поддержки; благодаря продуманной маршрутизации, управлению состоянием и оптимизациям, приложение остаётся масштабируемым и комфортным в использовании.",
  },
  {
    name: "Titanic passenger list",
    deploy: {
      name: DEMO,
      value: "https://git-tuman.github.io/titanic-passenger-list",
      link: "https://git-tuman.github.io/titanic-passenger-list",
    },
    repo: {
      name: REPO,
      value: "https://github.com/git-tuman/titanic-passenger-list",
      link: "https://github.com/git-tuman/titanic-passenger-list",
    },
    screenshots: {
      desktop: [ScreenTitanicUnfiltered, ScreenTitanicSurvStat],
      mobile: [ScreenTitanicUnfilteredMob, ScreenTitanicSurvStatMob],
    },
    description:
      "Интерактивная таблица пассажиров Титаника, реализованный с упором на быструю загрузку, работу с глобальным стейт менеджером и оптимизацию. Поддерживает ленивую загрузку, фильтрацию по основным параметрам и оптимизированный рендер.",
    stack:
      "React, TypeScript, Redux Toolkit, react-intersection-observer, Webpack",
    details:
      "В роли глобального стейт-менеджера используется Redux Toolkit. Для имитации запроса на сервер применяется createAsyncThunk, где подхватывается список пассажиров из passengers.json. Каждый пассажир обёрнут в React.memo для исключения повторного вычисления элемента при изменении фильтрации. Реализована ленивая загрузка (lazy loading) элементов списка с помощью хука useInView из библиотеки react-intersection-observer: при прокрутке до последнего элемента в списке подгружаются дополнительные 20 пассажиров. Фильтрация пассажиров реализована по имени, полу, возрасту, факту выживания; фильтрация запускается по клику на кнопку SEARCH или по нажатию Enter, а при переключении фильтра на Unfiltered подгружается список без фильтрации. Это обеспечивает: эффективную работу с большими объёмами данных без перегрузки интерфейса, быстрый отклик на действия пользователя, оптимальное использование ресурсов и удобную навигацию по информации.",
  },
  {
    name: "TODO",
    deploy: {
      name: DEMO,
      value: "https://git-tuman.github.io/todo-mindbox",
      link: "https://git-tuman.github.io/todo-mindbox",
    },
    repo: {
      name: REPO,
      value: "https://github.com/git-tuman/todo-mindbox",
      link: "https://github.com/git-tuman/todo-mindbox",
    },
    screenshots: {
      desktop: [ScreenTodoMindbox],
    },
    description:
      "Минималистичное приложение, реализованное в рамках тестового задания, предназначенное для удобного управления списком задач (TODO) с интуитивным интерфейсом и возможностью масштабирования.",
    stack:
      "React, TypeScript, Ant Design, Vite, Vitest + React Testing Library",
    details: `Глобальный стейт менеджер написан на основе useReducer + createContext. Добавление задач из поля ввода по нажатию Enter или по кнопке "+". Количество символов в поле ввода валидируется с помощью логики прописанной во встроенном пропсе rules компонента Form.Item из Ant Design; минимальное количество символов: 5, при попытке ввести меньшее количество - отрисовывается ошибка "Minimum 5 characters!" под полем ввода. Реализована фильтрация задач по спискам: общий, невыполненные задачи, выполненые задачи. Отображение количества оставшихся невыполненых задач. Удаление выполненых задач по клику на кнопку "Clear completed". Управление локальным состоянием через React Hooks; легко масштабируется до Redux/RTK или других решений. Основная функциональность (добавление, удаление, фильтрация задач, переключение статуса) протестирована с помощью Vitest и React Testing Library. Это обеспечивает: мгновенную реакцию интерфейса и комфортную работу с задачами, высокую скорость разработки и запуска, уверенность благодаря строгой типизации и облегчённую дальнейшую масштабируемость проекта.`,
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
