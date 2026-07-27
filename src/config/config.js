export const github = {
  api: process.env.REACT_APP_API_GITHUB || 'https://api.github.com',
  url: process.env.REACT_APP_URL_GITHUB || 'https://github.com/',
  name: process.env.REACT_APP_NAME_GITHUB || 'JoseEduardoMartins',
};

export const whatsapp = {
  url: process.env.REACT_APP_URL_WHATSAPP || 'https://wa.me/',
  phone: process.env.REACT_APP_PHONE_WHATSAPP || '5548991340640',
};

export const linkedin = {
  url: process.env.REACT_APP_URL_LINKEDIN || 'https://www.linkedin.com/in/',
  name: process.env.REACT_APP_NAME_LINKEDIN || 'jose-eduardo-martins',
};

export const instagram = {
  url: process.env.REACT_APP_URL_INSTAGRAM || 'https://www.instagram.com/',
  name: process.env.REACT_APP_NAME_INSTAGRAM || 'zeduardoo_',
};

export const email = {
  address: process.env.REACT_APP_EMAIL || 'm4rt1ns.jose@gmail.com',
};

const config = {
    github,
    whatsapp,
    linkedin,
    instagram,
    email,
};

export default config;
