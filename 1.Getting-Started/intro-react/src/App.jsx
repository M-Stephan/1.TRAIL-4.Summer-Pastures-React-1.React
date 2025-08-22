import './App.css'
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  return (
    <>
      <div>
        <h1 className="title">My Todo App</h1>
        <TodoInput />
        <TodoList />
      </div>
    </>
  )
}

export default App
