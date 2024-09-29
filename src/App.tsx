// src/App.tsx
import React from "react";

const App: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>(""); // (002a)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // (003b)
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
      <button>Add Todo</button>

      <ul>
        <li>Go shopping</li>
        <li>Clean the house</li>
      </ul>
    </div>
  );
};

export default App;
