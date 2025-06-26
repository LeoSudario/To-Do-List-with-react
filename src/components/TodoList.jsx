import React from 'react'; // Import React
import TodoItem from './TodoItem'; // Import the TodoItem component

function TodoList({ todos, onToggle, onDelete }) { // Receives list and handlers as props
    return (
        <ul className="todo-list">
            {todos.map(todo => ( // Map over todos and render TodoItem for each
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}
export default TodoList; // Export TodoList