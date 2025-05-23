import React, { ChangeEvent } from "react";
import { useTodoStore } from "../../store/useTodoStore";
import styles from "./ItaiReactApp.styles";

const TodoApp: React.FC = () => {
  const { todos, input, setInput, addTodo, deleteTodo, toggleTodo } =
    useTodoStore();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div style={styles.appContainer}>
      <h2 style={styles.heading}>
        Itai TODO App test CI CD works deploying on push Data is saved on
        refresh in store with Zustands persist middleware Cleaner state mgmt no
        useEffect and explicit local storage calls
      </h2>

      <div style={styles.workflowLinkContainer}>
        <span>See workflow:</span>
        <a
          href="https://github.com/itaiRoded2/itai-react-playground/actions"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          GitHub Actions
        </a>
        <span>|</span>
        <a
          href="https://itairoded2.github.io/itai-react-playground/"
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

export default TodoApp;
