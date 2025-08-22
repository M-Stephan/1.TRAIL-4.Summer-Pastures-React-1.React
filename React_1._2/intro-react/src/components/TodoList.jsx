import TodoItem from "./TodoItem";
import React, { useState } from "react";

function TodoList({ todos }) {
    return (
        <div className="tasks">
          {todos.map((todo, index) => (
             <TodoItem key={index} text={todo} />
          ))}
        </div>
    );
}

export default TodoList;