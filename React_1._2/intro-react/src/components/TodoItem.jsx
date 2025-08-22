export default function TodoItem({ text }) {
    return (
        <div className="task">
            <h3>{text}</h3>
            <p className="checkbox"><input type="checkbox"/> Finish</p>
        </div>
    );
}