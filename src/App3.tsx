import React, { useState, ChangeEvent } from "react";
import "./App.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App3: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn Redux", completed: false },
    { id: 3, text: "Learn GraphQL", completed: false },
  ]);

  const [input, setInput] = useState<string>("");

  const addTask = () => {
    if (input.trim() === "") return;

    const newTodo: Todo = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const deleteTask = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const toggleTask = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <h2>TODO App</h2>

      <input type="text" value={input} onChange={handleInputChange} />

      <button onClick={addTask} style={styles.addBtn}>
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
          {todos.map((todo, index) => (
            <li
              key={todo.id}
              onClick={() => toggleTask(todo.id)}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "gray" : "black",
              }}
            >
              <span>{todo.text}</span>
              <button
                onClick={() => deleteTask(index)}
                style={{
                  cursor: "pointer",
                  border: "none",
                  background: "transparent",
                  padding: 0,
                  fontSize: "1rem",
                  lineHeight: 1,
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
  addBtn: { padding: "8px 12px" },
};

export default App3;
