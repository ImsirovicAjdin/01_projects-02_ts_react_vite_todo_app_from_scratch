// src/App.tsx
import React from "react";

const App: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>(""); // (002a)

  return (
    <div>
      <h1>My Todo App</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={inputValue} // (002b)
      />
      <button>Add Todo</button>

      <ul>
        <li>Go shopping</li>
        <li>Clean the house</li>
      </ul>
    </div>
  );
};

export default App;
