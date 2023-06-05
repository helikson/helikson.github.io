import React, { useId } from "react";
import { useStore } from "../../store";

import type IMobileSlice from "../../store/mobileSlice/interface";

const sectionsList = [
    { href: "#", description: "Sobre" },
    { href: "#skills", description: "Skills" },
    { href: "#projects", description: "Projetos" },
    { href: "#contact", description: "Contato" }
];

export default function Sections(): JSX.Element {
    const mobileMenuOpen = useStore((state) => (state as IMobileSlice).mobileMenuOpen);
    const toggleMobileMenu = useStore((state) => (state as IMobileSlice).toggleMobileMenu);

    const classItems = mobileMenuOpen ? "Menu__item--mobile" : "Menu__item";

    const handleClick = (): void => {
        if (mobileMenuOpen) {
            toggleMobileMenu();
        }
    };

    return (
        <>
            {sectionsList.map(({ href, description }) => (
                <a key={useId()} href={href} onClick={handleClick} className={classItems}>
                    {description}
                </a>
            ))}
        </>
    );
}
