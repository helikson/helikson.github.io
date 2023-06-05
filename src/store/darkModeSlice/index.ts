import type IDarkModeSlice from "./interface";

export const createDarkModeSlice = (set: (arg0: (state: IDarkModeSlice) => { isDarkMode: boolean }) => void): IDarkModeSlice => ({
    isDarkMode: true,
    toggleDarkMode: () => {
        set((state: IDarkModeSlice) => ({ isDarkMode: !state.isDarkMode }));
    }
});
