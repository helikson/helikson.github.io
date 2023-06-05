import React from "react";
import Menu from "./components/Menu";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { useStore } from "./store";

import type IDarkModeSlice from "./store/darkModeSlice/interface";

export default function Example(): JSX.Element {
    const isDarkMode = useStore((state) => (state as IDarkModeSlice).isDarkMode);

    return (
        <div className={isDarkMode ? "dark" : ""}>
            <div className="background">
                <header className="sticky w-full inset-x-0 top-0 left-0 z-50 background">
                    <Menu />
                </header>

                <div className="relative isolate px-6 pt-8 lg:px-8">
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </div>
            </div>
        </div>
    );
}
