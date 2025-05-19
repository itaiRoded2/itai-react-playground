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
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <h2>TODO App test CI CD 3</h2>

      <input type="text" value={input} onChange={handleInputChange} />

      <button onClick={addTodo} style={styles.addBtn}>
        Add
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul style={{ paddingLeft: 0, listStyle: "none" }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => toggleTodo(todo.id)}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "gray" : "black",
              }}
            >
              <span>{todo.text}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent toggle on delete click
                  deleteTodo(todo.id);
                }}
                style={{
                  cursor: "pointer",
                  border: "none",
                  background: "transparent",
                  padding: 0,
                  fontSize: "1rem",
                  lineHeight: 1,
                  marginLeft: "8px",
                }}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  addBtn: { padding: "8px 12px", marginLeft: "8px" },
};

export default App3;
