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
