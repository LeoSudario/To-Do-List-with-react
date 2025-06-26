import React from 'react'; // Import React

function TodoItem({ todo, onToggle, onDelete }) { // Receives todo and handlers as props
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}> {/* Apply 'completed' class if done */}
            <span onClick={() => onToggle(todo.id)}>{todo.text}</span>  {/* Text, toggles on click */}
            <button onClick={() => onDelete(todo.id)}>Excluir</button>  {/* Delete button */}
        </li>
    )
}
export default TodoItem; // Export TodoItem 