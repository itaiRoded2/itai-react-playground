// src/store/useTodoStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  input: string;
  setInput: (text: string) => void;
  addTodo: () => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      todos: [],
      input: "",
      setInput: (text) => set({ input: text }),
      addTodo: () => {
        const { input, todos } = get();
        if (!input.trim()) return;
        set({
          todos: [...todos, { id: Date.now(), text: input, completed: false }],
          input: "",
        });
      },
      deleteTodo: (id) =>
        set({ todos: get().todos.filter((t) => t.id !== id) }),
      toggleTodo: (id) =>
        set({
          todos: get().todos.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
          ),
        }),
    }),
    {
      name: "todo-storage",
    }
  )
);
