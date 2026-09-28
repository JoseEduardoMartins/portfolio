# Migração para Vite + React + TypeScript + Tailwind v4

**Data:** 2026-09-28
**Status:** Aprovado para planejamento

## Objetivo

Modernizar a stack do portfólio (app React existente) migrando de Create React
App (`react-scripts`, JavaScript, CSS Modules) para **Vite + React + TypeScript +
Tailwind v4**, preservando exatamente a aparência e o comportamento atuais. É uma
migração de infraestrutura/tooling, não uma redesenhada de produto.

### Sucesso é

- `npm run dev` sobe o app no Vite sem erros.
- `npm run build` compila TypeScript e gera build de produção em `dist/`.
- `npm run test` roda a suíte no Vitest e passa.
- A UI renderizada é visualmente idêntica à atual (mesmas cores, espaçamentos,
  fontes, layout, i18n em pt/en/es, seção de repositórios do GitHub).
- Nenhum arquivo `.js`/`.jsx` de produção nem `.module.css` remanescente.

## Decisões (confirmadas com o usuário)

- **TypeScript:** converter todos os arquivos agora (`.js` → `.tsx`/`.ts`).
- **Tailwind:** v4 (CSS-first, `@tailwindcss/vite`), **substituindo** os CSS
  Modules — não coexistência.
- **Testes:** migrar de `react-scripts test` (Jest) para **Vitest** + jsdom +
  Testing Library.
- **Deploy:** **removido por agora** (sem `gh-pages`, sem `homepage`, `base: '/'`).
  Só dev/build/preview locais.
- **Execução:** branch dedicada `feature/vite-react-ts-tailwind`, migração em um
  fluxo único, validada ao final.

## Estado atual (levantado no código)

- CRA com `react-scripts` 5.0.1, React 18.
- 63 arquivos `.js`; 18 arquivos `.module.css` + estilos globais em
  `src/styles/` (`colors.css`, `reset.css`, `scrolbar.css`, `app.css`,
  agregados por `src/styles/index.js`).
- `process.env.REACT_APP_*` usado **apenas** em `src/config/config.js`.
- i18n via `react-i18next` com locales pt-br/en-us/es.
- Serviço de repositórios via `axios` (`src/config/http/github.js`,
  `src/pages/Home/Repositories/Repositories.service.js`).
- `public/`: `index.html` (com `%PUBLIC_URL%` e fontes Google), `favicon.ico`,
  `logo192.png`, `logo512.png`, `manifest.json`, `robots.txt`.
- `.nvmrc` = `16.17.0`.

## Design

### 1. Build tool (CRA → Vite)

**`package.json`:**
- Remover: `react-scripts`, `web-vitals`, `gh-pages`, blocos `eslintConfig`,
  `browserslist`, `homepage`.
- Adicionar (dev): `vite`, `@vitejs/plugin-react`, `typescript`,
  `@types/react`, `@types/react-dom`, `@types/node`.
- Scripts:
  - `dev`: `vite`
  - `build`: `tsc -b && vite build`
  - `preview`: `vite preview`
  - `test`: `vitest`
- Manter `type` / dependências de runtime existentes (react, react-dom,
  i18next, react-i18next, react-icons, axios).

**`index.html`:** mover de `public/` para a raiz do projeto. Trocar
`%PUBLIC_URL%/x` por `/x` (assets seguem em `public/` e são servidos da raiz).
Preservar `<head>` atual (meta tags SEO/OG, theme-color, fontes Google,
manifest, apple-touch-icon, título). Adicionar antes de `</body>`:
`<script type="module" src="/src/main.tsx"></script>`.

**`vite.config.ts`:** plugins `@vitejs/plugin-react` e `@tailwindcss/vite`;
`base: '/'`; bloco `test` do Vitest (ver seção 5).

**`.nvmrc`:** `20` (LTS; Vite atual requer Node 18+).

**`.gitignore`:** trocar `/build` por `/dist`.

### 2. TypeScript

**Config:**
- `tsconfig.json`: target moderno, `module: ESNext`, `moduleResolution: bundler`,
  `jsx: react-jsx`, `strict: true`, `noEmit: true`, `isolatedModules: true`,
  incluindo `src`.
- `tsconfig.node.json`: para o `vite.config.ts`.
- `src/vite-env.d.ts`: `/// <reference types="vite/client" />`, interface
  `ImportMetaEnv` com as chaves `VITE_*`, e declarações de módulo para `*.svg`
  e `*.pdf` (importados como URL string).

**Conversão de arquivos:**
- Componentes/páginas (contêm JSX): `.js` → `.tsx`.
- Sem JSX (data, hooks, config, i18n, utils, services, index barrels): `.js` →
  `.ts`.
- Tipar:
  - Dados: interfaces para `experiences`, `education`, `skills`, `socials`.
  - Hooks: assinatura/retorno de `useActiveSection`, `useReveal`.
  - Componentes: `props` tipadas (incl. `children` onde aplicável).
  - GitHub: tipo `Repository` para a resposta da API e retorno do service.
  - Ícones: props do componente `Icon` e mapa `icons`.
- Barrels `index.js` → `index.ts` mantendo os re-exports.

### 3. Variáveis de ambiente

- `src/config/config.ts`: `process.env.REACT_APP_X` → `import.meta.env.VITE_X`.
- `.env.example`: renomear todas as chaves `REACT_APP_*` → `VITE_*`
  (mesmos valores).
- Tipar as chaves em `ImportMetaEnv` (seção 2).

### 4. Tailwind v4 (substitui CSS Modules)

- Instalar `tailwindcss` + `@tailwindcss/vite`; registrar plugin no
  `vite.config.ts`.
- Criar `src/styles/index.css` — importado uma vez em `main.tsx` — contendo:
  - `@import "tailwindcss";`
  - Bloco `@theme` mapeando os tokens de `colors.css` para o design system do
    Tailwind:
    - Cores → `--color-bg`, `--color-bg-elevated`, `--color-surface`,
      `--color-surface-2`, `--color-surface-3`, `--color-border`,
      `--color-border-strong`, `--color-text`, `--color-text-muted`,
      `--color-text-dim`, `--color-accent`, `--color-accent-2`,
      `--color-accent-3` (viram utilitários `bg-*`, `text-*`, `border-*`).
    - Fontes → `--font-display`, `--font-body`.
    - Radius → `--radius`, `--radius-sm`, `--radius-lg`.
  - Custom properties para o que não tem utilitário direto (gradientes,
    sombras, easing, cores com alpha), consumidas via `bg-[var(--gradient)]`
    ou `@utility` quando repetitivo.
  - Regras base preservadas de `reset.css`/`scrolbar.css`/`app.css` que o
    preflight do Tailwind não cobre (ex.: scrollbar customizada, `html/body`
    base). O reset do Tailwind (preflight) substitui o `reset.css` genérico.
- Remover `src/styles/index.js`, `colors.css`, `reset.css`, `scrolbar.css`,
  `app.css` (após migrar o conteúdo relevante).
- **Reescrever os 18 componentes com CSS Module:** para cada um, traduzir as
  classes `style.xxx` para utilitários Tailwind equivalentes no JSX,
  **preservando os valores atuais** (cor, espaçamento, tamanho, etc.), e
  remover o `.module.css` correspondente.

### 5. Testes (Jest → Vitest)

- Instalar (dev): `vitest`, `jsdom`. (`@testing-library/*` já presentes.)
- Bloco `test` no `vite.config.ts`: `environment: 'jsdom'`, `globals: true`,
  `setupFiles: './src/setupTests.ts'`, `css: true`.
- `src/setupTests.ts`: `import '@testing-library/jest-dom'`.
- `App.test.js` → `App.test.tsx`: substituir o teste legado de CRA
  ("learn react") por uma asserção real do app atual (ex.: renderiza sem
  crashar / presença de uma seção conhecida).

## Ordem de execução sugerida

1. Branch `feature/vite-react-ts-tailwind`.
2. Scaffolding do Vite + TS (config, `index.html` raiz, `main.tsx`,
   `vite-env.d.ts`, `.nvmrc`, `.gitignore`, `package.json`).
3. Instalar dependências e garantir que `dev` sobe (ainda com estilos antigos
   importados temporariamente, se ajudar).
4. Setup do Tailwind v4 + `src/styles/index.css` com o `@theme` mapeado.
5. Migrar env vars.
6. Converter arquivos não-visuais para `.ts` (data, hooks, config, i18n, utils,
   services, barrels) e tipar.
7. Converter componentes para `.tsx`, reescrevendo estilos em Tailwind e
   removendo `.module.css`, seção por seção.
8. Migrar testes para Vitest.
9. Validação final: `dev`, `build`, `test` e conferência visual da UI.

## Riscos / atenção

- **Paridade visual:** maior risco. Mitigar migrando componente a componente e
  comparando com o estado atual; os valores de token vêm 1:1 do `colors.css`.
- **Preflight do Tailwind** pode alterar defaults (margens, listas, botões).
  Conferir após ativar.
- **Fontes Google:** mantidas via `<link>` no `index.html` (não mover para
  import npm).
- **Node 16 → 20:** ambiente local precisa do Node 20 para rodar o Vite.

## Fora de escopo

- Redesign visual ou mudança de conteúdo.
- Reconfigurar/retomar deploy (GitHub Pages) — adiado.
- Adicionar roteamento, novas libs ou features.
- ESLint/Prettier novos (a config antiga do CRA é removida; setup de lint pode
  ser tarefa futura).
