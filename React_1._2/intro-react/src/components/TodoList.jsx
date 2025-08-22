import TodoItem from "./TodoItem";
import React, { useState } from "react";

function TodoList() {
    const initialTodos = ["Créer un page statique avec Vite & React.", "Ajouter les inputs et boutons.", "Mettre des checkbox à côté des tâches."];
    const [todos, setTodos] = useState(initialTodos);
    return (
        <div className="tasks">
          {todos.map((todo) => (
             <TodoItem text={todo} />
          ))}
        <p className="footer"><i>Exercices for React track.</i></p>
        </div>
    );
}

export default TodoList;