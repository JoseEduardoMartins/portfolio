import { useEffect, useRef } from "react";

/**
 * Adds an "is-visible" class the first time the element scrolls into view,
 * driving the [data-reveal] transition defined in app.css.
 */
interface UseRevealOptions {
    threshold?: number;
    once?: boolean;
}

const useReveal = ({ threshold = 0.15, once = true }: UseRevealOptions = {}) => {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    node.classList.add("is-visible");
                    if (once) observer.unobserve(node);
                } else if (!once) {
                    node.classList.remove("is-visible");
                }
            },
            { threshold }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold, once]);

    return ref;
};

export default useReveal;
