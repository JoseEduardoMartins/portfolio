// Trabalhos reais (produtos). Textos (tagline/summary/role) vêm do i18n em
// `works.<id>.*`; stack, componentes e cover são dados fixos aqui.
import { landing } from "../assets/works/infinider";

export interface WorkComponent {
  id: string;
  nameKey: string;
  descKey: string;
  stack: string[];
  link?: string;
  linkLabelKey?: string;
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
  components: WorkComponent[];
  cover: string;
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
    components: [
      {
        id: "backend",
        nameKey: "works.infinider.components.backend.name",
        descKey: "works.infinider.components.backend.desc",
        stack: ["NestJS", "TypeORM", "MySQL", "WebSocket", "RBAC"],
      },
      {
        id: "manager",
        nameKey: "works.infinider.components.manager.name",
        descKey: "works.infinider.components.manager.desc",
        stack: ["React", "React Query", "Vite"],
        link: "https://fast-food-manager-frontend.vercel.app/login",
        linkLabelKey: "works.infinider.components.liveLabel",
      },
      {
        id: "landing",
        nameKey: "works.infinider.components.landing.name",
        descKey: "works.infinider.components.landing.desc",
        stack: ["React", "Vite"],
        link: "https://fast-food-landing-page-frontend.vercel.app/",
        linkLabelKey: "works.infinider.components.liveLabel",
      },
      {
        id: "webOrder",
        nameKey: "works.infinider.components.webOrder.name",
        descKey: "works.infinider.components.webOrder.desc",
        stack: ["React", "React Query"],
        link: "https://fast-food-web-order-frontend.vercel.app/",
        linkLabelKey: "works.infinider.components.liveLabel",
      },
      {
        id: "designSystem",
        nameKey: "works.infinider.components.designSystem.name",
        descKey: "works.infinider.components.designSystem.desc",
        stack: ["Atomic Design", "React", "TypeScript", "Tailwind", "Storybook"],
        link: "https://www.npmjs.com/package/@fast-food/design-system",
        linkLabelKey: "works.infinider.components.npmLabel",
      },
    ],
    cover: landing,
  },
];

export default works;
