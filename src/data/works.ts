// Trabalhos reais (produtos). Textos (tagline/summary/role) vêm do i18n em
// `works.<id>.*`; stack, componentes e cover são dados fixos aqui.
import { landing as infiniderCover } from "../assets/works/infinider";
import { landing as chavettaCover } from "../assets/works/chavetta";
import { landing as teamManagerCover } from "../assets/works/team-manager";
import { landing as kesiaCover } from "../assets/works/kesia";

export interface WorkComponent {
  id: string;
  nameKey: string;
  descKey: string;
  // Chips fixos (ex.: stack técnica, usada pelo Infinider) ou, para chips que
  // precisam de tradução, uma chave i18n que resolve um array de strings.
  stack?: string[];
  tagsKey?: string;
  link?: string;
  linkLabelKey?: string;
}

export interface Work {
  id: string;
  name: string;
  route: string;
  year: string;
  typeKey: string;
  liveUrl?: string;
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
    typeKey: "works.type",
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
    cover: infiniderCover,
  },
  {
    id: "chavetta",
    name: "Chavetta",
    route: "/work/chavetta",
    year: "2025",
    typeKey: "works.type",
    liveUrl: "https://property-manager-frontend-eight.vercel.app/",
    taglineKey: "works.chavetta.tagline",
    summaryKey: "works.chavetta.summary",
    roleKey: "works.chavetta.role",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "Zod",
      "REST API",
    ],
    components: [
      {
        id: "listings",
        nameKey: "works.chavetta.components.listings.name",
        descKey: "works.chavetta.components.listings.desc",
        tagsKey: "works.chavetta.components.listings.tags",
      },
      {
        id: "crm",
        nameKey: "works.chavetta.components.crm.name",
        descKey: "works.chavetta.components.crm.desc",
        tagsKey: "works.chavetta.components.crm.tags",
      },
      {
        id: "agenda",
        nameKey: "works.chavetta.components.agenda.name",
        descKey: "works.chavetta.components.agenda.desc",
        tagsKey: "works.chavetta.components.agenda.tags",
      },
      {
        id: "finance",
        nameKey: "works.chavetta.components.finance.name",
        descKey: "works.chavetta.components.finance.desc",
        tagsKey: "works.chavetta.components.finance.tags",
      },
      {
        id: "rent",
        nameKey: "works.chavetta.components.rent.name",
        descKey: "works.chavetta.components.rent.desc",
        tagsKey: "works.chavetta.components.rent.tags",
      },
      {
        id: "marketing",
        nameKey: "works.chavetta.components.marketing.name",
        descKey: "works.chavetta.components.marketing.desc",
        tagsKey: "works.chavetta.components.marketing.tags",
      },
    ],
    cover: chavettaCover,
  },
  {
    id: "team-manager",
    name: "Kit de Gestão de Equipes",
    route: "/work/team-manager",
    year: "2025",
    typeKey: "works.type",
    liveUrl: "https://team-manager-frontend-sigma.vercel.app/",
    taglineKey: "works.teamManager.tagline",
    summaryKey: "works.teamManager.summary",
    roleKey: "works.teamManager.role",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "RBAC",
      "Multi-tenant",
      "Relatórios PDF",
    ],
    components: [
      {
        id: "organization",
        nameKey: "works.teamManager.components.organization.name",
        descKey: "works.teamManager.components.organization.desc",
        tagsKey: "works.teamManager.components.organization.tags",
      },
      {
        id: "routine",
        nameKey: "works.teamManager.components.routine.name",
        descKey: "works.teamManager.components.routine.desc",
        tagsKey: "works.teamManager.components.routine.tags",
      },
      {
        id: "people",
        nameKey: "works.teamManager.components.people.name",
        descKey: "works.teamManager.components.people.desc",
        tagsKey: "works.teamManager.components.people.tags",
      },
      {
        id: "performance",
        nameKey: "works.teamManager.components.performance.name",
        descKey: "works.teamManager.components.performance.desc",
        tagsKey: "works.teamManager.components.performance.tags",
      },
      {
        id: "tracking",
        nameKey: "works.teamManager.components.tracking.name",
        descKey: "works.teamManager.components.tracking.desc",
        tagsKey: "works.teamManager.components.tracking.tags",
      },
    ],
    cover: teamManagerCover,
  },
  {
    id: "kesia",
    name: "Portfólio · Kesia Silva",
    route: "/work/kesia",
    year: "2025",
    typeKey: "works.typeClient",
    liveUrl: "https://portfolio-kesia-silva.vercel.app/",
    taglineKey: "works.kesia.tagline",
    summaryKey: "works.kesia.summary",
    roleKey: "works.kesia.role",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "i18next",
      "Responsivo",
    ],
    components: [
      {
        id: "hero",
        nameKey: "works.kesia.components.hero.name",
        descKey: "works.kesia.components.hero.desc",
        tagsKey: "works.kesia.components.hero.tags",
      },
      {
        id: "projects",
        nameKey: "works.kesia.components.projects.name",
        descKey: "works.kesia.components.projects.desc",
        tagsKey: "works.kesia.components.projects.tags",
      },
      {
        id: "journey",
        nameKey: "works.kesia.components.journey.name",
        descKey: "works.kesia.components.journey.desc",
        tagsKey: "works.kesia.components.journey.tags",
      },
      {
        id: "contact",
        nameKey: "works.kesia.components.contact.name",
        descKey: "works.kesia.components.contact.desc",
        tagsKey: "works.kesia.components.contact.tags",
      },
    ],
    cover: kesiaCover,
  },
];

export default works;
