function TodoInput() {
  return (
    <div className="create_task">
      <div>
        <label htmlFor="send_task">Write your new task.</label>
        <br />
        <input id="send_task" type="text" minLength={4} maxLength={8} />
      </div>
      <div className="button_send">
        <input type="submit" value="Send Task" />
      </div>
    </div>
  );
}

export default TodoInput;