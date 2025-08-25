import TodoItem from "./TodoItem";
import React, { useRef } from "react";

export default function TodoInput({ onAddTodo }) {
  const inputRef = useRef();
  
  function clickHandler() {
    const value = inputRef.current.value.trim();
    if (value.length > 0) {
      onAddTodo(value);
      inputRef.current.value = ""; // reset champ input
    }  
  }

  return (
    <div className="create_task">
      <div>
        <label htmlFor="send_task">Write your new task.</label>
        <br />
        <input ref={inputRef} id="send_task" type="text" minLength={2} maxLength={250} />
      </div>
      <div className="button_send">
        <button onClick={clickHandler} className="submit">Send Task</button>      
      </div>
    </div>
  );
}