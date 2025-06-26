import React, { useState} from 'react'; // Import React and useState hook
import TodoList from './components/TodoList'; // Import the TodoList component
import './index.css'; // Import global styles

function App() {
  const [todos, setTodos] = useState([]); // State for the list of todos
  const [input, setInput] = useState(''); // State for the input field

  const addTodo = () => { // Function to add a new todo
    if (input.trim() === '') return;       // Do nothing if input is empty
    const newTodo = {
      id: Date.now(),                      // Unique id based on timestamp
      text: input,                         // Text from input
      completed: false                     // Initial completed state
    };
    setTodos([...todos, newTodo]);         // Add new todo to list
    setInput('');                          // Clear input
  };

  const toggleTodo = (id) => { // Function to toggle completed status
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => { // Function to delete a todo
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <h1>To-do List</h1>
      <div className="input-area">
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Adcionar</button>
      </div>
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <p>
        {todos.filter(todo => todo.completed).length} de {todos.length} tarefas concluidas
      </p>
    </div>
  );
}

export default App; // Export App component