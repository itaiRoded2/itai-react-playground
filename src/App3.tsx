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
        TODO App test CI CD works deploying on push
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
    maxWidth: 480,
    margin: "40px auto",
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    marginBottom: 16,
  },
  workflowLinkContainer: {
    textAlign: "center",
    marginBottom: 24,
    fontSize: 14,
    color: "#666",
  },
  link: {
    color: "#007acc",
    textDecoration: "none",
  },
  inputRow: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 24,
  },
  input: {
    flexGrow: 1,
    padding: "8px 12px",
    fontSize: 16,
    border: "1px solid #ccc",
    borderRadius: 4,
  },
  addBtn: {
    padding: "8px 16px",
    marginLeft: 12,
    fontSize: 16,
    cursor: "pointer",
    backgroundColor: "#007acc",
    color: "white",
    border: "none",
    borderRadius: 4,
    transition: "background-color 0.2s ease",
  },
  todoList: {
    listStyle: "none",
    paddingLeft: 0,
    maxHeight: 300,
    overflowY: "auto",
  },
  todoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 12px",
    borderBottom: "1px solid #ddd",
    cursor: "pointer",
    fontSize: 16,
    color: "#222",
    userSelect: "none",
  },
  todoCompleted: {
    textDecoration: "line-through",
    color: "#888",
  },
  deleteBtn: {
    cursor: "pointer",
    border: "none",
    background: "transparent",
    fontSize: 18,
    lineHeight: 1,
    color: "#c00",
    padding: 0,
  },
};

export default App3;
