import { create } from "zustand";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoState = {
  todos: Todo[];
  input: string;
  setInput: (value: string) => void;
  addTodo: () => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void; // ✅ include this
  loadFromLocalStorage: () => void;
  saveToLocalStorage: () => void;
  fetchTodosFromApi: () => Promise<void>;
};

export const useTodoStore = create<TodoState>((set, get) => ({
  todos: [],
  input: "",

  setInput: (value: string) => set({ input: value }),

  addTodo: () => {
    const input = get().input.trim();
    if (!input) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    const updated = [...get().todos, newTodo];
    set({ todos: updated, input: "" });
    get().saveToLocalStorage();
  },

  deleteTodo: (id: number) => {
    const updated = get().todos.filter((todo) => todo.id !== id);
    set({ todos: updated });
    get().saveToLocalStorage();
  },

  loadFromLocalStorage: () => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      try {
        const parsed: Todo[] = JSON.parse(saved);
        set({ todos: parsed });
      } catch (e) {
        console.error("Failed to parse todos from localStorage", e);
      }
    }
  },

  saveToLocalStorage: () => {
    localStorage.setItem("todos", JSON.stringify(get().todos));
  },

  fetchTodosFromApi: async () => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=3"
      );
      const data = await res.json();
      const formatted = data.map((d: any) => ({ id: d.id, text: d.title }));
      set({ todos: formatted });
    } catch (err) {
      console.error("Failed to fetch todos:", err);
    }
  },
  toggleTodo: (id: number) => {
    const updated = get().todos.map((todo: Todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    set({ todos: updated });
    get().saveToLocalStorage();
  },
}));
