import { create } from "zustand";
import { createDarkModeSlice } from "./darkModeSlice";
import { createMobileSlice } from "./mobileSlice";

export const useStore = create((set) => ({
    ...createDarkModeSlice(set),
    ...createMobileSlice(set)
}));
