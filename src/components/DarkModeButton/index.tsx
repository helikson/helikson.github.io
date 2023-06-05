import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useStore } from "../../store";

import type IDarkModeSlice from "../../store/darkModeSlice/interface";

export default function DarkModeButton(): JSX.Element {
    const isDarkMode = useStore((state) => (state as IDarkModeSlice).isDarkMode);
    const toggleDarkModeDark: () => void = useStore((state) => (state as IDarkModeSlice).toggleDarkMode);

    const Icon = isDarkMode ? MoonIcon : SunIcon;

    return (
        <button onClick={toggleDarkModeDark}>
            <Icon className="w-8 h-8 text--color" />
        </button>
    );
}
