import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useLoggedInStore = create(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      bearerToken: "",
      setIsLoggedIn: (state) => set({ isLoggedIn: state }),
      setBearerToken: (state) => set({ bearerToken: state }),
    }),
    {
        name: 'isLoggedInStorage',
    }
  )
)