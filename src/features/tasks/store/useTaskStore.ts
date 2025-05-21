import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type TaskStore = {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  clearTasks: () => void;
};

export const useTaskStore = create<TaskStore>()(
  devtools(
    persist(
      immer((set) => ({
        tasks: [],
        addTask: (title) =>
          set((state) => {
            state.tasks.push({
              id: crypto.randomUUID(),
              title,
              completed: false,
            });
          }),
        toggleTask: (id) =>
          set((state) => {
            const task = state.tasks.find((t) => t.id === id);
            if (task) task.completed = !task.completed;
          }),
        deleteTask: (id) =>
          set((state) => {
            state.tasks = state.tasks.filter((t) => t.id !== id);
          }),
        clearTasks: () =>
          set((state) => {
            state.tasks = [];
          }),
      })),
      {
        name: "task-storage",
        storage: createJSONStorage(() => sessionStorage),
        // optional migration logic if you change the shape of your data
        migrate: (persistedState, version) => {
          console.log("Migrating from version", version);
          return persistedState;
        },
        version: 1,
      }
    )
  )
);

export default useTaskStore;
