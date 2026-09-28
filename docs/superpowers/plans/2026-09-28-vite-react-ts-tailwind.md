# Vite + React + TypeScript + Tailwind v4 Migration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrar o portfólio de Create React App (JS, CSS Modules) para Vite + React + TypeScript + Tailwind v4, preservando exatamente a aparência e o comportamento.

**Architecture:** Migração em uma branch dedicada. Primeiro o scaffolding do Vite/TS boota o app com `allowJs` ligado (arquivos `.js` antigos coexistem temporariamente). Depois Tailwind substitui os estilos globais e, arquivo a arquivo, converte-se tudo para TS e reescrevem-se os CSS Modules em utilitários Tailwind. Ao final, `allowJs` é desligado, testes migram para Vitest e valida-se dev/build/test + paridade visual.

**Tech Stack:** Vite, @vitejs/plugin-react, TypeScript, Tailwind v4 (@tailwindcss/vite), Vitest + jsdom + Testing Library, React 18, react-i18next, axios, react-icons.

**Spec:** `docs/superpowers/specs/2026-09-28-vite-react-ts-tailwind-migration-design.md`

## Global Constraints

- **Node:** 20 LTS (Vite atual exige Node 18+). `.nvmrc` = `20`.
- **Paridade visual obrigatória:** cores, espaçamentos, fontes e layout devem ficar idênticos ao estado atual. Valores vêm 1:1 dos CSS Modules / `colors.css`.
- **Sem CSS Modules ao final:** nenhum `.module.css` remanescente; estilos via Tailwind ou o `src/styles/index.css` único.
- **Sem `.js`/`.jsx` de produção ao final:** todo código de produção em `.ts`/`.tsx`; `allowJs` desligado no `tsconfig` no fim.
- **Env vars:** apenas `import.meta.env.VITE_*` (nunca `process.env`).
- **Deploy fora de escopo:** sem `gh-pages`, sem `homepage`, `base: '/'`, output em `dist/`.
- **`strict: true`** no TypeScript.

## Review Focus

Comportamentos que a spec implica mas que nenhum teste unitário exercita — verificar manualmente na validação final (Task 15):

- **Fallback de env vars ausentes:** sem `.env`, `config` deve usar os defaults embutidos (ex.: `https://api.github.com`), como hoje. → checar em Task 3.
- **Falha da API do GitHub:** se `getAll()` rejeitar, a seção Repositories não pode quebrar a página inteira. → preservar tratamento atual em Task 12.
- **i18n em 3 idiomas:** troca pt/en/es continua funcionando e formata datas por locale (`formatMonthYear`). → checar em Task 4/15.
- **Scroll reveal:** elementos `[data-reveal]` continuam animando ao entrar na viewport (hook `useReveal` + CSS migrado). → checar em Task 2/6/15.
- **`prefers-reduced-motion`:** anima­ções desligadas quando o usuário pede menos movimento (regra em `app.css`). → preservar no `index.css` em Task 2.

---

## Task 1: Scaffolding Vite + TypeScript (app boota)

**Files:**
- Modify: `package.json`
- Create: `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, `src/vite-env.d.ts`
- Create: `src/main.tsx`
- Move: `public/index.html` → `index.html` (raiz)
- Delete: `src/index.js`, `public/index.html`
- Modify: `.nvmrc`, `.gitignore`

**Interfaces:**
- Produces: entry `src/main.tsx` que importa `./App`, `./i18n`, `./styles`; `import.meta.env` tipado via `ImportMetaEnv`.

- [ ] **Step 1: Reescrever `package.json`**

Remover `react-scripts`, `web-vitals`, `gh-pages`, `web-vitals`, e os blocos `eslintConfig`, `browserslist`, `homepage`. Resultado:

```json
{
  "name": "portfolio",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest"
  },
  "dependencies": {
    "axios": "^1.4.0",
    "i18next": "^23.7.7",
    "i18next-browser-languagedetector": "^7.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-i18next": "^13.5.0",
    "react-icons": "^4.10.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@types/node": "^20.11.0",
    "@vitejs/plugin-react": "^4.3.0",
    "typescript": "^5.4.0",
    "vite": "^5.4.0"
  }
}
```

- [ ] **Step 2: Criar `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": false,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "allowJs": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

> `allowJs: true` é temporário para permitir a coexistência durante a migração; será desligado na Task 13.

- [ ] **Step 3: Criar `tsconfig.node.json`**

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

- [ ] **Step 4: Criar `src/vite-env.d.ts`**

```ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_GITHUB?: string;
  readonly VITE_URL_GITHUB?: string;
  readonly VITE_NAME_GITHUB?: string;
  readonly VITE_URL_WHATSAPP?: string;
  readonly VITE_PHONE_WHATSAPP?: string;
  readonly VITE_URL_LINKEDIN?: string;
  readonly VITE_NAME_LINKEDIN?: string;
  readonly VITE_URL_INSTAGRAM?: string;
  readonly VITE_NAME_INSTAGRAM?: string;
  readonly VITE_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.pdf" {
  const src: string;
  export default src;
}
```

- [ ] **Step 5: Criar `vite.config.ts`** (Tailwind entra na Task 2)

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
});
```

- [ ] **Step 6: Mover `index.html` para a raiz**

Mover `public/index.html` → `index.html` (raiz). Trocar cada `%PUBLIC_URL%/x` por `/x`, remover os comentários do template CRA, e adicionar antes de `</body>`:

```html
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
```

Preservar todo o `<head>` atual (meta SEO/OG, `theme-color`, `<link>` das fontes Google, manifest, apple-touch-icon, `<title>`).

- [ ] **Step 7: Criar `src/main.tsx`** (substitui `src/index.js`)

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import "./styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Depois deletar `src/index.js`.

- [ ] **Step 8: Atualizar `.nvmrc` e `.gitignore`**

`.nvmrc`: conteúdo `20`.
`.gitignore`: trocar a linha `/build` por `/dist`.

- [ ] **Step 9: Instalar dependências**

Run: `nvm use 20 || nvm install 20; rm -rf node_modules package-lock.json && npm install`
Expected: instala sem erros.

- [ ] **Step 10: Verificar dev boota**

Run: `npm run dev` (subir alguns segundos e encerrar)
Expected: Vite sobe em `http://localhost:5173` sem erro de compilação; app renderiza com os estilos antigos (ainda importados via `./styles`).

- [ ] **Step 11: Verificar build**

Run: `npm run build`
Expected: `tsc -b` passa (allowJs) e gera `dist/` sem erros.

- [ ] **Step 12: Commit**

```bash
git add -A
git commit -m "build: scaffold Vite + TypeScript, replace CRA"
```

---

## Task 2: Tailwind v4 + theme (substitui estilos globais)

**Files:**
- Modify: `vite.config.ts`, `package.json` (deps)
- Create: `src/styles/index.css`
- Modify: `src/main.tsx`
- Delete: `src/styles/index.js`, `src/styles/colors.css`, `src/styles/reset.css`, `src/styles/scrolbar.css`, `src/styles/app.css`

**Interfaces:**
- Produces: utilitários de tema (`bg-bg`, `text-text`, `text-accent`, `font-display`, `rounded-[var(--radius)]`, etc.) disponíveis para todos os componentes.

- [ ] **Step 1: Instalar Tailwind v4**

Run: `npm install -D tailwindcss @tailwindcss/vite`

- [ ] **Step 2: Adicionar plugin no `vite.config.ts`**

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
});
```

- [ ] **Step 3: Criar `src/styles/index.css`** (mapeia `colors.css` → `@theme` + base preservada)

```css
@import "tailwindcss";

@theme {
  --color-bg: #0a0f1e;
  --color-bg-elevated: #0d1426;
  --color-surface: #111a2e;
  --color-surface-2: #16213b;
  --color-surface-3: #1c2a47;
  --color-border: rgba(148, 163, 184, 0.14);
  --color-border-strong: rgba(148, 163, 184, 0.3);

  --color-text: #e6edf7;
  --color-text-muted: #93a4c3;
  --color-text-dim: #64748b;

  --color-accent: #2dd4bf;
  --color-accent-2: #38bdf8;
  --color-accent-3: #818cf8;

  --font-display: "Space Grotesk", "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, -apple-system, sans-serif;

  --radius: 16px;
  --radius-sm: 10px;
  --radius-lg: 24px;
}

/* Custom properties sem utilitário direto (usar via bg-[var(--gradient)] etc.) */
:root {
  --accent-soft: rgba(45, 212, 191, 0.12);
  --accent-softer: rgba(45, 212, 191, 0.06);
  --gradient: linear-gradient(120deg, #2dd4bf 0%, #38bdf8 45%, #818cf8 100%);
  --gradient-soft: linear-gradient(120deg, rgba(45, 212, 191, 0.16), rgba(129, 140, 248, 0.16));
  --shadow: 0 24px 50px -24px rgba(2, 6, 23, 0.8);
  --shadow-glow: 0 0 0 1px var(--color-border), 0 20px 40px -24px rgba(45, 212, 191, 0.25);
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
}

@layer base {
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 90px;
  }

  body {
    margin: 0;
    line-height: 1.6;
    font-family: var(--font-body);
    background-color: var(--color-bg);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image:
      radial-gradient(60rem 60rem at 80% -10%, rgba(45, 212, 191, 0.1), transparent 60%),
      radial-gradient(50rem 50rem at 0% 20%, rgba(129, 140, 248, 0.1), transparent 55%);
    background-attachment: fixed;
  }

  a { text-decoration: none; color: inherit; }
  ul { list-style: none; }

  ::selection { background-color: var(--color-accent); color: var(--color-bg); }

  /* scrollbar custom (antigo scrolbar.css) */
  body::-webkit-scrollbar { width: 10px; }
  body::-webkit-scrollbar-track { background: var(--color-bg); }
  body::-webkit-scrollbar-thumb {
    background-color: var(--color-surface-3);
    border-radius: 20px;
    border: 2px solid var(--color-bg);
  }
  body::-webkit-scrollbar-thumb:hover { background-color: var(--color-accent); }

  /* scroll reveal (antigo app.css) */
  [data-reveal] {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);
    will-change: opacity, transform;
  }
  [data-reveal].is-visible { opacity: 1; transform: none; }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    [data-reveal] { opacity: 1; transform: none; transition: none; }
  }
}
```

> A classe utilitária `.app` (width/min-height/overflow-x) do antigo `app.css` migra para Tailwind no JSX de `App` na Task 13 (`w-full min-h-screen overflow-x-hidden text-text`).

- [ ] **Step 4: Trocar o import em `src/main.tsx`**

Trocar `import "./styles";` por `import "./styles/index.css";`.

- [ ] **Step 5: Deletar estilos antigos**

Deletar `src/styles/index.js`, `colors.css`, `reset.css`, `scrolbar.css`, `app.css`.

- [ ] **Step 6: Verificar visual**

Run: `npm run dev`
Expected: fundo escuro com glows, fontes Inter/Space Grotesk, scrollbar custom e cores idênticas ao antes. (Componentes ainda usam seus `.module.css` — ok, seguem funcionando.)

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: set up Tailwind v4 and migrate global styles"
```

---

## Task 3: Env vars + config para TypeScript

**Files:**
- Modify: `.env.example`
- Rename+Modify: `src/config/config.js` → `src/config/config.ts`
- Rename: `src/config/index.js` → `src/config/index.ts`
- Rename+Modify: `src/config/http/github.js` → `src/config/http/github.ts`

**Interfaces:**
- Consumes: `ImportMetaEnv` (Task 1).
- Produces: `github`, `whatsapp`, `linkedin`, `instagram`, `email` tipados; `http` (instância axios) default export.

- [ ] **Step 1: Renomear chaves no `.env.example`**

Trocar todos os prefixos `REACT_APP_` por `VITE_` (mesmos valores). Ex.: `VITE_API_GITHUB=https://api.github.com`, `VITE_NAME_GITHUB=JoseEduardoMartins`, etc.

- [ ] **Step 2: `config.js` → `config.ts`**

```ts
export const github = {
  api: import.meta.env.VITE_API_GITHUB || "https://api.github.com",
  url: import.meta.env.VITE_URL_GITHUB || "https://github.com/",
  name: import.meta.env.VITE_NAME_GITHUB || "JoseEduardoMartins",
};

export const whatsapp = {
  url: import.meta.env.VITE_URL_WHATSAPP || "https://wa.me/",
  phone: import.meta.env.VITE_PHONE_WHATSAPP || "5548991340640",
};

export const linkedin = {
  url: import.meta.env.VITE_URL_LINKEDIN || "https://www.linkedin.com/in/",
  name: import.meta.env.VITE_NAME_LINKEDIN || "jose-eduardo-martins",
};

export const instagram = {
  url: import.meta.env.VITE_URL_INSTAGRAM || "https://www.instagram.com/",
  name: import.meta.env.VITE_NAME_INSTAGRAM || "zeduardoo_",
};

export const email = {
  address: import.meta.env.VITE_EMAIL || "m4rt1ns.jose@gmail.com",
};

const config = { github, whatsapp, linkedin, instagram, email };

export default config;
```

- [ ] **Step 3: `config/index.js` → `index.ts`** (manter re-exports idênticos)

- [ ] **Step 4: `http/github.js` → `github.ts`**

```ts
import axios from "axios";
import { github } from "../config";

const http = axios.create({
  baseURL: github.api,
  headers: { "Content-Type": "application/json" },
});

export default http;
```

- [ ] **Step 5: Verificar build**

Run: `npm run build`
Expected: passa sem erros de tipo.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "refactor: migrate env vars to import.meta.env and config to TS"
```

---

## Task 4: Data, utils, hooks, i18n, asset barrels → TypeScript

**Files:**
- Rename+Modify: `src/data/{experiences,education,skills,socials}.js` → `.ts`
- Rename+Modify: `src/utils/date.js` → `date.ts`
- Rename+Modify: `src/hooks/{useActiveSection,useReveal}.js` → `.ts`
- Rename+Modify: `src/i18n/index.js`, `src/i18n/locales/{index,pt-br,en-us,es}.js` → `.ts`
- Rename: `src/assets/flags/index.js` → `.ts`, `src/assets/resumes/index.js` → `.ts`

**Interfaces:**
- Produces: `Experience`, `Education`, `Skill`/`SkillGroup`, `Social` interfaces; `useReveal(): RefObject<HTMLElement>`; `useActiveSection(...): string`; `formatMonthYear(iso, language): string | null`; `durationInYearsMonths(...): string`.

- [ ] **Step 1: Tipar `data/experiences.ts`**

Adicionar a interface e anotar o array (valores inalterados):

```ts
export interface Experience {
  id: string;
  role: string;
  company: string;
  employment: string;
  start: string;
  end: string | null;
  current: boolean;
  location: string;
  locationType: "remote" | "hybrid" | "onsite";
  domain: string;
  descriptionKey: string;
  stack: string[];
}

const experiences: Experience[] = [ /* ...conteúdo atual inalterado... */ ];

export default experiences;
```

- [ ] **Step 2: Tipar `data/education.ts`, `data/skills.ts`, `data/socials.ts`**

Ler cada arquivo, definir uma interface a partir do shape real de cada objeto e anotar o array/objeto exportado, mantendo os dados inalterados.

- [ ] **Step 3: Tipar `utils/date.ts`**

```ts
export const formatMonthYear = (
  iso: string | null,
  language: string
): string | null => { /* corpo atual inalterado */ };

export interface DurationLabels {
  year: string; years: string; month: string; months: string;
}

export const durationInYearsMonths = (
  startIso: string,
  endIso: string | null,
  labels: DurationLabels
): string => { /* corpo atual inalterado */ };
```

- [ ] **Step 4: Tipar `hooks/useReveal.ts`**

```ts
import { useEffect, useRef } from "react";

interface UseRevealOptions {
  threshold?: number;
  once?: boolean;
}

const useReveal = ({ threshold = 0.15, once = true }: UseRevealOptions = {}) => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add("is-visible");
        if (once) observer.unobserve(node);
      } else if (!once) {
        node.classList.remove("is-visible");
      }
    }, { threshold });
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);
  return ref;
};

export default useReveal;
```

- [ ] **Step 5: Tipar `hooks/useActiveSection.ts`**

Ler o arquivo, anotar parâmetros (lista de ids) e retorno (`string` id ativo). Preservar a lógica.

- [ ] **Step 6: Migrar i18n para TS**

Renomear `i18n/index.js`, `i18n/locales/*.js` para `.ts`. Nos locales, exportar objetos como estão; em `locales/index.ts` opcionalmente `as const`. Em `i18n/index.ts`, manter a init do i18next (os tipos vêm de `react-i18next`).

- [ ] **Step 7: Renomear barrels de assets**

`assets/flags/index.js` → `.ts` e `assets/resumes/index.js` → `.ts` (imports viram URLs string via as declarações `*.svg`/`*.pdf`).

- [ ] **Step 8: Verificar build**

Run: `npm run build`
Expected: passa sem erros de tipo.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "refactor: type data, utils, hooks, i18n and asset barrels"
```

---

## Task 5: Service de repositórios → TypeScript

**Files:**
- Rename+Modify: `src/pages/Home/Repositories/Repositories.service.js` → `.ts`

**Interfaces:**
- Consumes: `http` (Task 3), `github` (Task 3).
- Produces: `getAll(): Promise<Repository[]>` e tipo `Repository` exportado.

- [ ] **Step 1: Tipar o service**

```ts
import { github } from "../../../config/config";
import http from "../../../config/http/github";

export interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  topics?: string[];
}

const getAll = async (): Promise<Repository[]> => {
  const response = await http.get<Repository[]>(`/users/${github.name}/repos`);
  return response.data;
};

export { getAll };
```

> Ajustar os campos de `Repository` aos realmente usados por `Repositories.js`/`Repository.js` ao ler esses componentes na Task 12; adicionar/remover campos conforme o uso real.

- [ ] **Step 2: Verificar build**

Run: `npm run build`
Expected: passa.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "refactor: type GitHub repositories service"
```

---

## Padrão de conversão de componentes (Tasks 6–13)

Cada componente segue o **mesmo procedimento mecânico**. Exemplo canônico com `SectionHeader`:

**Antes** — `SectionHeader.js` + `SectionHeader.module.css`:
```jsx
import style from "./SectionHeader.module.css";
const SectionHeader = ({ index, eyebrow, title }) => (
  <Reveal className={style.header}>
    <div className={style.top}>
      {index && <span className={style.index}>{index}</span>}
      <span className={style.eyebrow}>{eyebrow}</span>
    </div>
    <h2 className={style.title}>{title}</h2>
  </Reveal>
);
```
```css
.header { display:flex; flex-direction:column; gap:8px; margin-bottom:8px; }
.top { display:flex; align-items:center; gap:12px; }
.index { font-family:var(--font-display); font-size:14px; font-weight:600; color:var(--accent); }
.eyebrow { font-size:13px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:var(--text-muted); }
.title { font-family:var(--font-display); font-size:clamp(1.7rem,4vw,2.4rem); font-weight:700; letter-spacing:-.02em; color:var(--text); }
```

**Depois** — `SectionHeader.tsx` (sem `.module.css`):
```tsx
import Reveal from "../Reveal";

interface SectionHeaderProps {
  index?: string;
  eyebrow: string;
  title: string;
}

const SectionHeader = ({ index, eyebrow, title }: SectionHeaderProps) => (
  <Reveal className="flex flex-col gap-2 mb-2">
    <div className="flex items-center gap-3">
      {index && <span className="font-display text-sm font-semibold text-accent">{index}</span>}
      <span className="text-[13px] font-semibold tracking-[0.14em] uppercase text-text-muted">{eyebrow}</span>
    </div>
    <h2 className="font-display text-[clamp(1.7rem,4vw,2.4rem)] font-bold tracking-[-0.02em] text-text">{title}</h2>
  </Reveal>
);

export default SectionHeader;
```

**Regras da tradução:**
- Ler `X.js` **e** `X.module.css`. Traduzir cada classe para utilitários Tailwind **preservando os valores exatos**. Onde não houver utilitário nativo, usar arbitrary values (`text-[13px]`, `tracking-[0.14em]`, `bg-[var(--gradient)]`, `shadow-[var(--shadow)]`, `rounded-[var(--radius)]`).
- Mapa de tokens → utilitário: cores `var(--text)`→`text-text`/`bg-bg`/`border-border` etc.; `var(--font-display)`→`font-display`; radius via `rounded-[var(--radius)]`.
- Converter para `.tsx`, adicionar `interface XProps` a partir das props usadas (e dos `PropTypes` quando existirem), remover `PropTypes`/`defaultProps` (usar defaults nos parâmetros).
- Deletar o `.module.css`.
- Ao terminar cada task: `npm run build` (checa tipos) + conferência visual em `npm run dev`, depois commit.

---

## Task 6: Componentes compartilhados (Reveal, Icon, SectionHeader, Footer)

**Files:**
- Rename+Modify: `Reveal.js`→`.tsx`, `Reveal/index.js`→`.ts`
- Rename+Modify: `Icon.js`→`.tsx`, `Icon/icons.js`→`.ts`, `Icon/index.js`→`.ts`; Delete `Icon.module.css`
- Rename+Modify: `SectionHeader.js`→`.tsx`, `SectionHeader/index.js`→`.ts`; Delete `SectionHeader.module.css`
- Rename+Modify: `Footer.js`→`.tsx`, `Footer/index.js`→`.ts`; Delete `Footer.module.css`

**Interfaces:**
- Consumes: `useReveal` (Task 4).
- Produces: `Reveal` (props `{ children, className? }`), `Icon` (props `{ type?, size?, color?, children }`), `SectionHeader` (`SectionHeaderProps` acima).

- [ ] **Step 1: Converter `Reveal`** para `.tsx` (props `children: ReactNode; className?: string`), usando o ref de `useReveal`. Preservar comportamento.
- [ ] **Step 2: Converter `Icon`** para `.tsx` com `IconProps` (`type?: "link"; size?: "small"|"medium"|"large"; color?: "primary"|"secondary"; children: ReactNode`), `icons.ts` tipando o mapa `Record<string, IconType>` (de `react-icons`). Reescrever as classes do `Icon.module.css` em Tailwind e remover PropTypes. Deletar `Icon.module.css`.
- [ ] **Step 3: Converter `SectionHeader`** conforme o exemplo canônico acima.
- [ ] **Step 4: Converter `Footer`** (ler `Footer.js`+`.module.css`, traduzir p/ Tailwind).
- [ ] **Step 5: Renomear os `index.js`** desses componentes para `index.ts`.
- [ ] **Step 6: Verificar** `npm run build` + visual (rodapé, ícones, headers de seção).
- [ ] **Step 7: Commit** `git add -A && git commit -m "refactor: migrate shared components to TSX + Tailwind"`

---

## Task 7: Componentes de i18n (Translator, Flag, TranslateOptions)

**Files:**
- Rename+Modify: `I18n/Translator.js`→`.tsx`
- Rename+Modify: `I18n/Flag/Flag.js`→`.tsx`, `Flag/index.js`→`.ts`; Delete `Flag.module.css`
- Rename+Modify: `I18n/TranslateOptions/TranslateOptions.js`→`.tsx`, `index.js`→`.ts`; Delete `TranslateOptions.module.css`

- [ ] **Step 1: Converter `Translator`** para `.tsx` (props tipadas; provavelmente um wrapper de `useTranslation`).
- [ ] **Step 2: Converter `Flag`** para `.tsx` + Tailwind; usa as SVGs de `assets/flags` como `src`. Deletar `Flag.module.css`.
- [ ] **Step 3: Converter `TranslateOptions`** para `.tsx` + Tailwind. Deletar `TranslateOptions.module.css`.
- [ ] **Step 4: Verificar** build + troca de idioma (pt/en/es) funcionando no dev.
- [ ] **Step 5: Commit** `git commit -am "refactor: migrate i18n components to TSX + Tailwind"`

---

## Task 8: Header, Menu, Sidebar

**Files:**
- Rename+Modify: `Header/Header.js`→`.tsx`, `Header/index.js`→`.ts`; Delete `Header.module.css`
- Rename+Modify: `Header/Menu/Menu.js`→`.tsx`, `Menu/index.js`→`.ts`; Delete `Menu.module.css`
- Rename+Modify: `Sidebar/Sidebar.js`→`.tsx`, `Sidebar/index.js`→`.ts`; Delete `Sidebar.module.css`

**Interfaces:**
- Consumes: `useActiveSection` (Task 4), `Icon` (Task 6), config socials.

- [ ] **Step 1: Converter `Header`** + `Menu` para `.tsx` + Tailwind (ler cada `.module.css`, traduzir 1:1). Preservar navegação/scroll e destaque da seção ativa. Deletar os `.module.css`.
- [ ] **Step 2: Converter `Sidebar`** para `.tsx` + Tailwind (rail social fixo). Deletar `Sidebar.module.css`.
- [ ] **Step 3: Verificar** build + visual (header fixo, menu, seção ativa, sidebar).
- [ ] **Step 4: Commit** `git commit -am "refactor: migrate Header, Menu and Sidebar to TSX + Tailwind"`

---

## Task 9: Home shell, Introduction, About

**Files:**
- Rename+Modify: `Home/Home.js`→`.tsx`, `Home/index.js`→`.ts`; Delete `Home.module.css`
- Rename+Modify: `Introduction/Introduction.js`→`.tsx`, `index.js`→`.ts`; Delete `Introduction.module.css`
- Rename+Modify: `About/About.js`→`.tsx`, `index.js`→`.ts`; Delete `About.module.css`

- [ ] **Step 1: Converter `Home`** para `.tsx`; o `.home` vira classes Tailwind no container (`w-full flex flex-col items-center`, e o `> section { width:100% }` vira `w-full` nos filhos ou `[&>section]:w-full`). Deletar `Home.module.css`.
- [ ] **Step 2: Converter `Introduction`** para `.tsx` + Tailwind (hero). Deletar `.module.css`.
- [ ] **Step 3: Converter `About`** para `.tsx` + Tailwind. Deletar `.module.css`.
- [ ] **Step 4: Verificar** build + visual (hero e about idênticos).
- [ ] **Step 5: Commit** `git commit -am "refactor: migrate Home shell, Introduction and About to TSX + Tailwind"`

---

## Task 10: Experiences + Experience

**Files:**
- Rename+Modify: `Experiences/Experiences.js`→`.tsx`, `index.js`→`.ts`; Delete `Experiences.module.css`
- Rename+Modify: `Experiences/Experience/Experience.js`→`.tsx`, `index.js`→`.ts`; Delete `Experience.module.css`

**Interfaces:**
- Consumes: `experiences`/`Experience` (Task 4), `formatMonthYear`/`durationInYearsMonths` (Task 4), `SectionHeader` (Task 6).

- [ ] **Step 1: Converter `Experiences`** (lista) para `.tsx` + Tailwind. Deletar `.module.css`.
- [ ] **Step 2: Converter `Experience`** (item) para `.tsx` + Tailwind, tipando props com `Experience`. Deletar `.module.css`.
- [ ] **Step 3: Verificar** build + visual (timeline de experiências, datas por locale).
- [ ] **Step 4: Commit** `git commit -am "refactor: migrate Experiences to TSX + Tailwind"`

---

## Task 11: Skils + Education

**Files:**
- Rename+Modify: `Skils/Skils.js`→`.tsx`, `index.js`→`.ts`; Delete `Skils.module.css`
- Rename+Modify: `Education/Education.js`→`.tsx`, `index.js`→`.ts`; Delete `Education.module.css`

- [ ] **Step 1: Converter `Skils`** para `.tsx` + Tailwind, tipando com os dados de skills. Deletar `.module.css`.
- [ ] **Step 2: Converter `Education`** para `.tsx` + Tailwind, tipando com os dados de education. Deletar `.module.css`.
- [ ] **Step 3: Verificar** build + visual.
- [ ] **Step 4: Commit** `git commit -am "refactor: migrate Skils and Education to TSX + Tailwind"`

---

## Task 12: Repositories + Repository + Contact

**Files:**
- Rename+Modify: `Repositories/Repositories.js`→`.tsx`, `index.js`→`.ts`; Delete `Repositories.module.css`
- Rename+Modify: `Repositories/Repository/Repository.js`→`.tsx`, `index.js`→`.ts`; Delete `Repository.module.css`
- Rename+Modify: `Contact/Contact.js`→`.tsx`, `index.js`→`.ts`; Delete `Contact.module.css`

**Interfaces:**
- Consumes: `getAll`/`Repository` (Task 5).

- [ ] **Step 1: Converter `Repositories`** para `.tsx` + Tailwind. Tipar o estado (`Repository[]`) e **preservar o tratamento de erro atual** (falha da API não quebra a página). Ajustar os campos do tipo `Repository` (Task 5) aos realmente usados aqui. Deletar `.module.css`.
- [ ] **Step 2: Converter `Repository`** (card) para `.tsx` + Tailwind, props tipadas com `Repository`. Deletar `.module.css`.
- [ ] **Step 3: Converter `Contact`** para `.tsx` + Tailwind. Deletar `.module.css`.
- [ ] **Step 4: Verificar** build + visual (grid de repos carrega da API; contato).
- [ ] **Step 5: Commit** `git commit -am "refactor: migrate Repositories and Contact to TSX + Tailwind"`

---

## Task 13: App.tsx + finalizar TypeScript estrito

**Files:**
- Rename+Modify: `src/App.js` → `src/App.tsx`
- Modify: `tsconfig.json`, `package.json`

- [ ] **Step 1: Converter `App`** para `.tsx`; remover `import "./styles"` (já feito no main). O `.app` vira Tailwind:

```tsx
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

const App = () => (
  <div className="w-full min-h-screen overflow-x-hidden text-text">
    <Header />
    <Sidebar />
    <Home />
    <Footer />
  </div>
);

export default App;
```

- [ ] **Step 2: Confirmar que não há mais `.js` de produção**

Run: `find src -name "*.js" -not -name "*.test.js"`
Expected: vazio.

- [ ] **Step 3: Desligar `allowJs` e remover PropTypes**

Em `tsconfig.json`, trocar `"allowJs": true` por `"allowJs": false`. Se `prop-types` constar em `package.json`, remover (`npm uninstall prop-types`).

- [ ] **Step 4: Verificar build estrito**

Run: `npm run build`
Expected: `tsc -b` passa com `strict` e `allowJs:false`.

- [ ] **Step 5: Commit** `git commit -am "refactor: migrate App to TSX and enforce strict TS"`

---

## Task 14: Testes → Vitest

**Files:**
- Modify: `vite.config.ts`, `package.json` (deps)
- Rename+Modify: `src/setupTests.js` → `src/setupTests.ts`
- Rename+Modify: `src/App.test.js` → `src/App.test.tsx`

- [ ] **Step 1: Instalar** `npm install -D vitest jsdom @types/testing-library__jest-dom`
- [ ] **Step 2: Adicionar bloco `test` ao `vite.config.ts`**

```ts
/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts",
    css: true,
  },
});
```

- [ ] **Step 3: `setupTests.js` → `setupTests.ts`**

```ts
import "@testing-library/jest-dom";
```

- [ ] **Step 4: Escrever o teste real** em `src/App.test.tsx` (substitui o "learn react" do CRA)

```tsx
import { render, screen } from "@testing-library/react";
import App from "./App";
import "./i18n";

test("renders the site header navigation", () => {
  render(<App />);
  expect(screen.getByRole("banner")).toBeInTheDocument();
});
```

> Se o `Header` não renderizar um `<header>` (role `banner`), ajustar a asserção para um elemento estável real (ex.: um link de navegação conhecido) após ler `Header.tsx`.

- [ ] **Step 5: Rodar os testes**

Run: `npm run test -- --run`
Expected: PASS.

- [ ] **Step 6: Commit** `git commit -am "test: migrate from Jest (CRA) to Vitest"`

---

## Task 15: Validação final e paridade visual

- [ ] **Step 1: Build limpo** — Run: `npm run build` → Expected: sem erros.
- [ ] **Step 2: Test** — Run: `npm run test -- --run` → Expected: PASS.
- [ ] **Step 3: Preview** — Run: `npm run preview` e abrir no navegador.
- [ ] **Step 4: Checklist visual/funcional (Review Focus):**
  - [ ] Cores, fontes, background glows e scrollbar idênticos ao antes.
  - [ ] Header fixo, seção ativa destacada, scroll suave.
  - [ ] Troca de idioma pt/en/es; datas formatadas por locale.
  - [ ] Scroll reveal anima seções ao entrar na viewport.
  - [ ] `prefers-reduced-motion` desliga animações (testar com DevTools).
  - [ ] Grid de repositórios carrega da API do GitHub; falha da API não quebra a página.
  - [ ] Sidebar social, contato, resumes (PDFs) e flags (SVGs) carregam.
  - [ ] Sem `.js` de produção (`find src -name "*.js" -not -name "*.test.js"` vazio) e sem `.module.css` (`find src -name "*.module.css"` vazio).
- [ ] **Step 5: Commit final se necessário** — ajustes de paridade visual encontrados.

---

## Self-Review (autor)

- **Cobertura da spec:** build tool (T1), Tailwind (T2), env (T3), TS data/hooks/i18n (T4), service (T5), componentes (T6–T13), testes (T14), validação (T15). ✅
- **`allowJs` temporário:** ligado em T1, desligado em T13 — consistente.
- **Tipos entre tasks:** `Experience` (T4) usado em T10; `Repository`/`getAll` (T5) usados em T12; `useReveal`/`Icon`/`SectionHeader` (T4/T6) consumidos adiante — nomes batem.
- **Review Focus:** os 5 comportamentos implícitos têm checagem manual na T15 (não há teste unitário para todos por serem visuais/integração; a suíte Vitest cobre o smoke render).
