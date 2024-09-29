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

  const toggleTodo = (index: number) => {
    setTodos(
      todos.map(
        (todo, i) =>
          i === index ? { ...todo, completed: !todo.completed } : todo // (006c, throws errors)
      )
    );
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
        {todos.length === 0 ? ( // (005a)
          <li>No todos available. Add one above!</li> // (005b)
        ) : (
          todos.map(
            (
              todo,
              index // (004f)
            ) => (
              <li
                onClick={() => toggleTodo(index)} // (006a)
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }} // (006b)
                key={index}
              >
                {todo}
              </li> // (004g)
            )
          )
        )}
        <li>Go shopping</li>
        <li>Clean the house</li>
      </ul>
    </div>
  );
};

export default App;
