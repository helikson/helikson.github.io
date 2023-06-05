import React from "react";
import MobileMenu from "./MobileMenu";
import Items from "./Sections";
import Logotype from "../Logotype";
import DarkModeButton from "../DarkModeButton";

export default function Menu(): JSX.Element {
    return (
        <nav className="flex items-center justify-between p-6 md:px-8" aria-label="Global">
            <div className="flex md:flex-1">
                <Logotype />
            </div>

            <MobileMenu />

            <div className="hidden md:flex md:gap-x-12">
                <Items />

                <DarkModeButton />
            </div>
        </nav>
    );
}
