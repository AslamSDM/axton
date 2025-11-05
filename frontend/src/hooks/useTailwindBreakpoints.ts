"use client";
import { useEffect, useState } from "react";

export function useTailwindBreakpoints() {
    const [breakpoints, setBreakpoints] = useState({
        isBelowSm: false,
        isBelowMd: false,
        isBelowLg: false,
        isBelowXl: false,
        isBelow2xl: false,
    });

    useEffect(() => {
        const queries = {
            isBelowSm: window.matchMedia("(max-width: 639px)"),
            isBelowMd: window.matchMedia("(max-width: 767px)"),
            isBelowLg: window.matchMedia("(max-width: 1023px)"),
            isBelowXl: window.matchMedia("(max-width: 1279px)"),
            isBelow2xl: window.matchMedia("(max-width: 1535px)"),
        };

        const update = () => {
            setBreakpoints({
                isBelowSm: queries.isBelowSm.matches,
                isBelowMd: queries.isBelowMd.matches,
                isBelowLg: queries.isBelowLg.matches,
                isBelowXl: queries.isBelowXl.matches,
                isBelow2xl: queries.isBelow2xl.matches,
            });
        };

        Object.values(queries).forEach((q) =>
            q.addEventListener("change", update)
        );

        update(); // set initial

        return () =>
            Object.values(queries).forEach((q) =>
                q.removeEventListener("change", update)
            );
    }, []);

    return breakpoints;
}
