import React from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Items from "./Sections";
import DarkModeButton from "../DarkModeButton";
import Logotype from "../Logotype";
import { useStore } from "../../store";

import type IDarkModeSlice from "../../store/darkModeSlice/interface";
import type IMobileSlice from "../../store/mobileSlice/interface";

export default function MobileMenu(): JSX.Element {
    const isDarkMode = useStore((state) => (state as IDarkModeSlice).isDarkMode);
    const mobileMenuOpen = useStore((state) => (state as IMobileSlice).mobileMenuOpen);
    const toggleMobileMenu = useStore((state) => (state as IMobileSlice).toggleMobileMenu);

    return (
        <>
            <div className="flex md:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text--color"
                    onClick={toggleMobileMenu}
                >
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>

            <Dialog as="div" className={`md:hidden ${isDarkMode ? "dark" : ""}`} open={mobileMenuOpen} onClose={toggleMobileMenu}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Logotype />

                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text--color"
                            onClick={toggleMobileMenu}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Items />
                            </div>

                            <div className="py-6">
                                <DarkModeButton />
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </>
    );
}
