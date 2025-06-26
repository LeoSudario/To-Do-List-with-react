import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span>{todo.text}</span>
            <button onClick={() => onToggle(todo.id)}>
                {todo.completed ? 'Desfazer' : 'Completar'}
            </button>
            <button onClick={() => onDelete(todo.id)}>Excluir</button>
        </li>
    );
}
export default TodoItem;