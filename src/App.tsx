// src/App.tsx
import React, { useState } from "react";

const App: React.FC = () => {
  // (1) State to hold the todos
  const [todos, setTodos] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]);
  const [inputValue, setInputValue] = useState("");

  // (2) Function to add a new todo
  const addTodo = () => {
    if (inputValue.trim() === "") return; // Prevent adding empty todos
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue(""); // Clear input after adding
  };

  // (3) Function to toggle a todo's completed status
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>My Todo App</h1>
      {/* (4) Input for adding new todos */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      {/* (5) List of todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
