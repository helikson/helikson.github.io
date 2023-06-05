import type IMobileSlice from "./interface";

export const createMobileSlice = (set: (arg0: (state: IMobileSlice) => { mobileMenuOpen: boolean }) => void): IMobileSlice => ({
    mobileMenuOpen: false,
    toggleMobileMenu: () => {
        set((state: IMobileSlice) => ({ mobileMenuOpen: !state.mobileMenuOpen }));
    }
});
