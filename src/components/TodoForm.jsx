import { useState } from "react";

const Todo = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();

      addTodo(value);
    }

    return (
        <div className="todo-form">
            <h2>Create task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setValue(e.target.value)} />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default Todo