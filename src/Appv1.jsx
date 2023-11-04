import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import { MdLightMode } from "react-icons/md";

const initialTasks = [
  { id: 1, title: "Revise React fundamentals", description: "", status: false },
  { id: 2, title: "Make todolist ", description: "", status: false },
  { id: 3, title: "Exercise", description: "", status: false },
];

function App() {
  // STATE
  const [tasks, setTasks] = useState(initialTasks);
  const [lightMode, setLightMode] = useState(false);

  // HANDLER FUNCTIONS
  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  }
  function handleClearTasks() {
    setTasks([]);
  }
  function handleToggleMode() {
    setLightMode((lightMode) => !lightMode);
  }
  //  JSX
  return (
    <div
      className={`flex flex-col gap-4 items-center justify-center h-screen bg-black text-white
    ${lightMode ? "bg-red-200 text-red-900" : "black"}`}
    >
      <button onClick={handleToggleMode}>
        <MdLightMode />
      </button>
      <Form onAddTasks={handleAddTasks} />
      <div>
        <Header tasks={tasks} />
        <TaskList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onToggleTask={handleToggleTask}
        />
      </div>
      <button onClick={handleClearTasks}>Clear Tasks</button>
    </div>
  );
}

export default App;
