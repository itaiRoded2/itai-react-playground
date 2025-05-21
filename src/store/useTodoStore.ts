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

const STORAGE_KEY = "todo-storage";

export const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      todos: [],
      input: "",
      setInput: (text: string) => set({ input: text }),
      addTodo: () => {
        const { input, todos } = get();
        if (!input.trim()) return;

        const newTodo: Todo = {
          id: Date.now(),
          text: input.trim(),
          completed: false,
        };

        set({
          todos: [...todos, newTodo],
          input: "",
        });
      },
      deleteTodo: (id: number) =>
        set({ todos: get().todos.filter((todo) => todo.id !== id) }),
      toggleTodo: (id: number) =>
        set({
          todos: get().todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }),
    }),
    {
      name: STORAGE_KEY,
    }
  )
);
