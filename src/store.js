import { create } from "zustand";

const useStore = create((set) => ({
  loginde: false,
  setLoginde: (params) => set((state) => ({ loginde: params })),
  userData: null,
  setUserData: (params) => set((state) => ({ userData: params })),
  userId: null,
  setUserId: (params) => set((state) => ({ userId: params })),
}));

export { useStore };
