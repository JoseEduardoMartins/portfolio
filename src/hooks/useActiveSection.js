import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently in view, for nav highlighting.
 */
const useActiveSection = (ids) => {
    const [active, setActive] = useState(ids[0]);

    useEffect(() => {
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [ids]);

    return active;
};

export default useActiveSection;
