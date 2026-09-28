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
