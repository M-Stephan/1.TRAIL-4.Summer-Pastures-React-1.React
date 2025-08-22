function TodoItem({ text }) {
    return (
        <div className="task">
            <h2>{text}</h2>
            <p><input type="checkbox"/> Finish</p>
        </div>
    );
}

export default TodoItem;