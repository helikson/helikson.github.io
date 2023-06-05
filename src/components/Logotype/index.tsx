import React from "react";
import { BoltIcon } from "@heroicons/react/24/outline";
import { useStore } from "../../store";

import type IMobileSlice from "../../store/mobileSlice/interface";

export default function Logotype(): JSX.Element {
    const mobileMenuOpen = useStore((state) => (state as IMobileSlice).mobileMenuOpen);
    const toggleMobileMenu = useStore((state) => (state as IMobileSlice).toggleMobileMenu);

    return (
        <a
            href="#"
            className="-m-1.5 p-1.5"
            onClick={mobileMenuOpen ? toggleMobileMenu : () => {}}
        >
            <div className="text--color flex items-center">
                <BoltIcon className="h-8 w-auto" />
                <span className="pl-3">Helikson Rufino</span>
            </div>
        </a>
    );
}
