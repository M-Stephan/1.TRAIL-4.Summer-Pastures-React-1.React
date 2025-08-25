import TodoItem from "./TodoItem";
import React, { useState } from "react";

function TodoList({ todos }) {
    return (
        <div className="tasks">
          {todos.map((todo) => (
             <TodoItem key={todo.id} text={todo.text} completed={todo.completed}/>
          ))}
        </div>
    );
}

export default TodoList;