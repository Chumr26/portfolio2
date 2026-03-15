import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router';

const scrollByPath = new Map<string, number>();

export function useRouteScrollMemory() {
    const location = useLocation();
    const pathKey = location.pathname;
    const lastKnownScrollRef = useRef(0);

    useLayoutEffect(() => {
        const savedScroll = scrollByPath.get(pathKey);
        const html = document.documentElement;
        const body = document.body;
        const previousHtmlBehavior = html.style.scrollBehavior;
        const previousBodyBehavior = body.style.scrollBehavior;

        html.style.scrollBehavior = 'auto';
        body.style.scrollBehavior = 'auto';

        const restoredScroll = savedScroll ?? 0;
        window.scrollTo(0, restoredScroll);
        lastKnownScrollRef.current = restoredScroll;

        html.style.scrollBehavior = previousHtmlBehavior;
        body.style.scrollBehavior = previousBodyBehavior;
    }, [pathKey]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.location.pathname !== pathKey) {
                return;
            }

            const currentScroll = window.scrollY;
            lastKnownScrollRef.current = currentScroll;
            scrollByPath.set(pathKey, currentScroll);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            scrollByPath.set(pathKey, lastKnownScrollRef.current);
        };
    }, [pathKey]);
}