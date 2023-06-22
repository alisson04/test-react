import React from "react";

const Todo = ({ todo, removeTodo }) => {

    const handleDelete = (e) => {
        e.preventDefault();

        removeTodo(todo.id);
    }

    return (
        <div className="todo">
            <div className="content">
                <p>{ todo.text }</p>
            </div>
            <div>
                <button>Completar</button>
                <button onClick={handleDelete}>x</button>
            </div>
        </div>
    )
}

export default Todo