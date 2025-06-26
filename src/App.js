import React, { useState} from 'react';
import TodoList from './components/TodoList';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (input.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: input, completed: false};
      setTodos([...todos, newTodo]);
      setInput('');
    };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <h1>To-do List</h1>
      <div className="input-area">
        <input type="text" placeholder="Digite uma tarefa" value={input} onChange={(e) => setInput(e.target.value)}></input>
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
   )
  }


export default App;
