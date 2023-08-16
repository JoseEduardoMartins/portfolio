export const github = {
  api: process.env.REACT_APP_API_GITHUB || '',
  url: process.env.REACT_APP_URL_GITHUB || '',
  name: process.env.REACT_APP_NAME_GITHUB || '',
};

export const whatsapp = {
  url: process.env.REACT_APP_URL_WHATSAPP || '',
  phone: process.env.REACT_APP_PHONE_WHATSAPP || '',
};

export const linkedin = {
  url: process.env.REACT_APP_URL_LINKEDIN || '',
  name: process.env.REACT_APP_NAME_LINKEDIN || '',
};

export const instagram = {
  url: process.env.REACT_APP_URL_INSTAGRAM || '',
  name: process.env.REACT_APP_NAME_INSTAGRAM || '',
};

const config = {
    github,
    whatsapp,
    linkedin,
    instagram
};

export default config;