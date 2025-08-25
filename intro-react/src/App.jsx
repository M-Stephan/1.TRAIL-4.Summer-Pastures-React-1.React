import './App.css'
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const initialTodos = [];
  /* ["Créer un page statique avec Vite & React.", "Ajouter les inputs et boutons.", "Mettre des checkbox à côté des tâches."];
  */
 
  const LSKEY = "MyTodoApp";

  const [todos, setTodos] = useState(() => {
    const savedTodos = window.localStorage.getItem(LSKEY + ".todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  function addTodo(newTodo) {
    setTodos([...todos, { id: uuidv4(), text: newTodo, completed: false }]);
  }

  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <div>
        <h1 className="main_title">My Todo App</h1>
      </div>
      <div>
        <TodoInput onAddTodo={addTodo} />
        <TodoList todos={todos} />
      </div> 
    </div>
  );
}

export default App

