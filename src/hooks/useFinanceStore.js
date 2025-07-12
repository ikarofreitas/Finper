// store/financeStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFinanceStore = create(
  persist(
    (set) => ({
      transactions: [],
      addTransaction: (newTransaction) =>
        set((state) => ({
          transactions: [
            ...state.transactions,
            { ...newTransaction, id: Date.now() },
          ],
        })),
      deleteTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((t) => t.id !== id),
        })),
      toggleDone: (id) =>
        set((state) => ({
          transactions: state.transactions.map((t) =>
            t.id === id ? { ...t, done: !t.done } : t
          ),
        })),
    }),
    {
      name: 'finance-storage', // chave no localStorage
    }
  )
);
