// src/App.tsx
import React from "react";

const App: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>(""); // (002a)
  const [todos, setTodos] = React.useState<string[]>([]); // (004a)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // (003b)
  };

  const addTodo = () => {
    if (inputValue.trim() === "") return; // (004c)
    setTodos([...todos, inputValue]); // (004d)
    setInputValue(""); // (004e)
  };

  return (
    <div>
      <h1>My Todo App</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={inputValue} // (002b)
        onChange={handleInputChange} // (003a)
      />
      <button
        onClick={addTodo} // (004b)
      >
        Add Todo
      </button>
      <ul>
        {todos.map(
          (
            todo,
            index // (004f)
          ) => (
            <li key={index}>{todo}</li> // (004g)
          )
        )}
        <li>Go shopping</li>
        <li>Clean the house</li>
      </ul>
    </div>
  );
};

export default App;
