import { create } from "zustand";

export const useBearStore = create(() => ({
  bears: "all",
  // increasePopulation: () => set((state:any) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
}));
