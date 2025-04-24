import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AppState {
  counter: number;
  message: string;
  increment: () => void;
  decrement: () => void;
  setMessage: (message: string) => void;
  reset: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      counter: 0,
      message: 'Bienvenue dans l\'application !',
      increment: () => set((state) => ({ counter: state.counter + 1 })),
      decrement: () => set((state) => ({ counter: state.counter - 1 })),
      setMessage: (message: string) => set({ message }),
      reset: () => set({ counter: 0, message: 'Bienvenue dans l\'application !' }),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);