import React, { ChangeEvent, useEffect } from "react";
import "./App.css";
import { useTodoStore } from "./store/useTodoStore"; // ✅ adjust path as needed

const App3: React.FC = () => {
  const {
    todos,
    input,
    setInput,
    addTodo,
    deleteTodo,
    toggleTodo,
    loadFromLocalStorage,
  } = useTodoStore();

  useEffect(() => {
    loadFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div style={styles.appContainer}>
      <h2 style={styles.heading}>
        TODO App test CI CD works deploying on push Data is saved on refresh in
        store!
      </h2>

      <div style={styles.workflowLinkContainer}>
        See workflow:{" "}
        <a
          href="https://github.com/itaiRoded2/itai-build-todo-app/actions"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          GitHub Actions
        </a>
        Online
        <a
          href="https://itairoded2.github.io/itai-build-todo-app/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Online
        </a>
      </div>

      <div style={styles.inputRow}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter new todo"
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.addBtn}>
          Add
        </button>
      </div>

      <ul style={styles.todoList}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              ...styles.todoItem,
              ...(todo.completed ? styles.todoCompleted : {}),
            }}
          >
            <span>{todo.text}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
              style={styles.deleteBtn}
              aria-label={`Delete todo ${todo.text}`}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  appContainer: {
    maxWidth: 600,
    margin: "40px auto",
    padding: "32px",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
  },
  heading: {
    textAlign: "center",
    color: "#1a1a1a",
    marginBottom: "24px",
    fontSize: "28px",
    fontWeight: "600",
  },
  workflowLinkContainer: {
    textAlign: "center",
    marginBottom: "32px",
    fontSize: "14px",
    color: "#666",
    display: "flex",
    justifyContent: "center",
    gap: "16px",
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "500",
  },
  inputRow: {
    display: "flex",
    gap: "12px",
    marginBottom: "32px",
  },
  input: {
    flexGrow: 1,
    padding: "12px 16px",
    fontSize: "16px",
    border: "2px solid #e5e7eb",
    borderRadius: "8px",
  },
  addBtn: {
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "500",
  },
  todoList: {
    listStyle: "none",
    paddingLeft: 0,
    maxHeight: "400px",
    overflowY: "auto",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
  },
  todoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    borderBottom: "1px solid #e5e7eb",
    cursor: "pointer",
    fontSize: "16px",
    color: "#1a1a1a",
    userSelect: "none",
  },
  todoCompleted: {
    textDecoration: "line-through",
    color: "#9ca3af",
    backgroundColor: "#f9fafb",
  },
  deleteBtn: {
    cursor: "pointer",
    border: "none",
    background: "transparent",
    fontSize: "18px",
    lineHeight: 1,
    color: "#ef4444",
    padding: "4px",
    borderRadius: "4px",
  },
};

export default App3;
