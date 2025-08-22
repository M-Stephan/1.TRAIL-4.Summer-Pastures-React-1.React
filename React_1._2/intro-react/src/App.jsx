import './App.css'
import { useState } from "react";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const initialTodos = [];
  /* ["Créer un page statique avec Vite & React.", "Ajouter les inputs et boutons.", "Mettre des checkbox à côté des tâches."];
  */
 
  const [todos, setTodos] = useState(initialTodos);

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <h1 className="title">My Todo App</h1>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </div> 
  );
}

export default App

