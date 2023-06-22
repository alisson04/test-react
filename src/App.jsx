import { useState } from 'react'

import "./App.css";
import Todo from './components/Todo';
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
      { id: 1, text: "Create x and y", isComplete: false },
      { id: 2, text: "Create x and y", isComplete: false },
      { id: 3, text: "Create x and y", isComplete: false },
  ])

    const addTodo = (text) => {
      const newTodos = [...todos, {
          id: Math.floor(Math.random() * 1000),
          text,
          isComplete: false
      }
      ]

        setTodos(newTodos);
    }

    const removeTodo = (id) => {
        const newTodos = [...todos];
        const filteredTodos = newTodos.filter((todo) =>
            todo.id !== id ? todo : null
        );
        setTodos(filteredTodos);
    }

  return (
    <div className="app">
        <h1 className="text-red-500">test</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
        </button>

        <div className="todo-list">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
          ))}
        </div>

        <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
