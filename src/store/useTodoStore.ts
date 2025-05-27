// src/store/useTodoStore.ts
import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: Priority;
}

export enum Priority {
  Low = "low",
  Medium = "medium",
  High = "high",
}

interface TodoState {
  todos: Todo[];
  input: string;
  priority: Priority;
  setInput: (text: string) => void;
  setPriority: (priorityAsText: string) => void;
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
      priority: Priority.Low,
      setInput: (text: string) => set({ input: text }),
      setPriority: (priorityAsText: string) =>
        set({ priority: priorityAsText as Priority }),
      addTodo: () => {
        const { input, todos, priority } = get();
        if (!input.trim()) {
          //alert("Please enter a text.");
          toast.error("Please enter a task description.");

          return;
        }
        if (!priority) return;

        const newTodo: Todo = {
          id: Date.now(),
          text: input.trim(),
          completed: false,
          priority: priority.trim() as Priority,
        };

        set({
          todos: [...todos, newTodo],
          input: "",
          priority: Priority.Low,
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
