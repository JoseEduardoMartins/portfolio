// Trabalhos reais (produtos). Textos (tagline/summary/role) vêm do i18n em
// `works.<id>.*`; stack, links e imagens são dados fixos aqui.
import { landing, managerLogin } from "../assets/works/infinider";

export interface WorkImage {
  src: string;
  captionKey: string;
}

export interface Work {
  id: string;
  name: string;
  route: string;
  year: string;
  taglineKey: string;
  summaryKey: string;
  roleKey: string;
  stack: string[];
  links: {
    landing?: string;
    manager?: string;
    webOrder?: string;
  };
  cover: string;
  gallery: WorkImage[];
}

const works: Work[] = [
  {
    id: "infinider",
    name: "Infinider",
    route: "/work/infinider",
    year: "2024",
    taglineKey: "works.infinider.tagline",
    summaryKey: "works.infinider.summary",
    roleKey: "works.infinider.role",
    stack: [
      "React",
      "TypeScript",
      "NestJS",
      "TypeORM",
      "MySQL",
      "WebSocket",
      "React Query",
      "Vite",
      "Design System",
    ],
    links: {
      landing: "https://fast-food-landing-page-frontend.vercel.app/",
      manager: "https://fast-food-manager-frontend.vercel.app/login",
      webOrder: "https://fast-food-web-order-frontend.vercel.app/",
    },
    cover: landing,
    gallery: [
      { src: landing, captionKey: "works.infinider.gallery.landing" },
      { src: managerLogin, captionKey: "works.infinider.gallery.manager" },
    ],
  },
];

export default works;
