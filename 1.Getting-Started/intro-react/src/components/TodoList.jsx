import TodoItem from "./TodoItem";

function TodoList() {
    return (
        <div id="tasks">
            <TodoItem text="Créer un page statique avec Vite & React."/>
            <TodoItem text="Ajouter les inputs et boutons." />
            <TodoItem text="Mettre des checkbox à côté des tâches." />
        </div>
    );
}

export default TodoList;