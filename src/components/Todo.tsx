import { useState } from "react";

interface TodoItem {
  id: number;
  text: string;
}

function generateId(): number {
  return Math.floor(Math.random() * 1000); // Increased range for unique IDs
}

export function Todo() {
  const [todo, setTodo] = useState<TodoItem[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSubmit = ()=> {
    // if (input.trim() === "") return; // Avoid adding empty todos
    setTodo((todo) => [
      ...todo,
      {
        text: input,
        id: generateId(),
      },
    ]);
    setInput("");
  };

  const removeTodo = (id: number): void => {
    setTodo((prevTodo) => prevTodo.filter((t) => t.id !== id));
  };

  return (
    <div className="bg-gray-400 rounded-md h-80 w-60 flex items-center justify-center flex-col p-4">
      <input
        type="text"
        placeholder="Enter your todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 mb-2 border rounded-md"
      />

      <div className="flex items-center justify-center bg-blue-500 mt-2 p-2 rounded-md">
        <button onClick={handleSubmit} className="text-white font-bold">
          Submit
        </button>
      </div>

      <ul className="bg-red-500 text-white border-2 rounded-md w-full mt-4 p-2">
        {todo.map((todoItem) => (
          <li key={todoItem.id} className="flex justify-between items-center p-2">
            <span>{todoItem.text}</span>
            <button
              onClick={() => removeTodo(todoItem.id)}
              className="px-2 py-1 rounded-md bg-blue-500 text-white"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
