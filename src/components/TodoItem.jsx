import React from 'react';

function TodoItem({ todo, onToggle, onDelete}) {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => onToggle(todo.id)}>{todo.text}</span> 
            <button onClick={() => onDelete(todo.id)}>Excluir</button>
        </li>
    )
} 
export default TodoItem;