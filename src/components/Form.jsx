import { useState } from "react";

function Form({ onAddTasks }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return;
    const newTask = {
      title,
      description: "",
      id: Date.now(),
    };
    onAddTasks(newTask);
    setTitle("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form">
        <h3>What task you need to do?</h3>
        <input
          className="text-gray-900"
          type="text"
          placeholder="Add task..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button className="p-2">Add</button>
      </div>
    </form>
  );
}
export default Form