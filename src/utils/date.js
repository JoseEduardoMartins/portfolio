// Localized "Aug 2024" / "ago. 2024" / "ago. 2024" style formatting.
const localeMap = {
    "pt-BR": "pt-BR",
    "en-US": "en-US",
    es: "es-ES",
};

export const formatMonthYear = (iso, language) => {
    if (!iso) return null;
    const locale = localeMap[language] || "pt-BR";
    const [year, month] = iso.split("-");
    const date = new Date(Number(year), month ? Number(month) - 1 : 0, 1);
    const label = new Intl.DateTimeFormat(locale, {
        month: "short",
        year: "numeric",
    }).format(date);
    // Capitalize first letter (pt/es short months are lowercase).
    return label.charAt(0).toUpperCase() + label.slice(1);
};

// Rough duration between two ISO "YYYY-MM" dates (end null = now).
export const durationInYearsMonths = (startIso, endIso, labels) => {
    const [sy, sm] = startIso.split("-").map(Number);
    const end = endIso ? endIso.split("-").map(Number) : null;
    const now = new Date();
    const ey = end ? end[0] : now.getFullYear();
    const em = end ? end[1] : now.getMonth() + 1;

    let months = (ey - sy) * 12 + (em - (sm || 1)) + 1;
    if (months < 1) months = 1;
    const years = Math.floor(months / 12);
    const rem = months % 12;

    const parts = [];
    if (years > 0) parts.push(`${years} ${years > 1 ? labels.years : labels.year}`);
    if (rem > 0) parts.push(`${rem} ${rem > 1 ? labels.months : labels.month}`);
    return parts.join(" ");
};
