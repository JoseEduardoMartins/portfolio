import config from "../config";

const socials = [
    {
        id: "github",
        icon: "github",
        label: "GitHub",
        href: `${config.github.url}${config.github.name}`,
    },
    {
        id: "linkedin",
        icon: "linkedin",
        label: "LinkedIn",
        href: `${config.linkedin.url}${config.linkedin.name}`,
    },
    {
        id: "instagram",
        icon: "instagram",
        label: "Instagram",
        href: `${config.instagram.url}${config.instagram.name}`,
    },
    {
        id: "email",
        icon: "email",
        label: "Email",
        href: `mailto:${config.email.address}`,
    },
];

export default socials;
