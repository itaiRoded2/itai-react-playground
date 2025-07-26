import React, { ChangeEvent } from "react";
import "./ItaiReactApp.css";
import { useTodoStore, Todo, Priority } from "../../store/useTodoStore"; // ✅ adjust path as needed

import styles from "./ItaiReactApp.styles";

const ItaiReactApp: React.FC = () => {
  const {
    todos,
    input,
    setInput,
    setPriority,
    addTodo,
    deleteTodo,
    toggleTodo,
  } = useTodoStore();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleDeleteTodo = (e: React.MouseEvent, id: number): void => {
    e.stopPropagation();
    deleteTodo(id);
  };

  const handleKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const handlePriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedPriority: Priority = e.target.value as Priority;
    setPriority(selectedPriority);
  };

  return (
    <div style={styles.appContainer}>
      <h2 style={styles.heading}>
        Itai TODO App test CI CD works deploying on push Data is saved on
        refresh in store with Zustands persist middleware Cleaner state mgmt no
        useEffect and explicit local storage calls
      </h2>

      <div style={styles.inputRow}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Enter new todo"
          style={styles.input}
          aria-label="New todo input"
        />
        <label
          htmlFor="priority"
          className="text-gray-800 font-semibold text-lg tracking-wide mr-1"
          style={{ alignContent: "center" }}
        >
          Priority:
        </label>

        <select
          id="priority"
          onChange={handlePriorityChange}
          className="px-3 py-2 border border-gray-300 rounded-md bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={addTodo} style={styles.addBtn} aria-label="Add todo">
          Add
        </button>
      </div>

      <ul style={styles.todoList}>
        {todos.map((todo: Todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              ...styles.todoItem,
              ...(todo.completed ? styles.todoCompleted : {}),
            }}
          >
            <span>{todo.text}</span>
            <span>{todo.priority}</span>
            <button
              onClick={(e) => handleDeleteTodo(e, todo.id)}
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
