import React, { ChangeEvent, useState } from "react";
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

  //const [priority, setPriority] = useState<Priority>(Priority.Low);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handlePriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // eslint-disable-next-line no-debugger
    debugger;
    const selectedPriority: Priority = e.target.value as Priority;
    setPriority(selectedPriority);
    //onPriorityChange(selectedPriority); // pass to parent or store
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

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // eslint-disable-next-line no-debugger
    debugger;
    //const selectedPriority: Priority = e.target.value as Priority;
    //setPriority(selectedPriority);
    handlePriorityChange(e);
  };

  return (
    <div style={styles.appContainer}>
      <h2 style={styles.heading}>
        Itai TODO App test CI CD works deploying on push Data is saved on
        refresh in store with Zustands persist middleware Cleaner state mgmt no
        useEffect and explicit local storage calls
      </h2>

      {/* <div className="min-h-screen flex items-center justify-center bg-blue-100">
        <h1 className="text-4xl font-bold text-blue-700">
          Tailwind is working! 🚀
        </h1>
      </div> */}

      <div style={styles.inputRow}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter new todo"
          style={styles.input}
          aria-label="New todo input"
        />
        <label htmlFor="priority">Priority:</label>
        <select id="priority" onChange={handleChange}>
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
