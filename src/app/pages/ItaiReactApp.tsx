import React, { ChangeEvent } from "react";
import "./ItaiReactApp.css";
import { useTodoStore } from "../../store/useTodoStore"; // ✅ adjust path as needed

import styles from "./ItaiReactApp.styles";

const ItaiReactApp: React.FC = () => {
  const { todos, input, setInput, addTodo, deleteTodo, toggleTodo } =
    useTodoStore();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div style={styles.appContainer}>
      <h2 style={styles.heading}>
        Itai TODO App test CI CD works deploying on push Data is saved on
        refresh in store with Zustand’s persist middleware! Cleaner state mgmt,
        no useEffect and explicit local storage calls
      </h2>

      {/* <div className="min-h-screen flex items-center justify-center bg-blue-100">
        <h1 className="text-4xl font-bold text-blue-700">
          Tailwind is working! 🚀
        </h1>
      </div> */}

      <div style={styles.workflowLinkContainer}>
        <span>See workflow:</span>
        <a
          href="https://github.com/itaiRoded2/itai-build-todo-app/actions"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          GitHub Actions
        </a>
        <span>|</span>
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

export default ItaiReactApp;
