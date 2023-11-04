import React from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import { MdLightMode } from "react-icons/md";
import { TaskProvider, TaskContext } from "./TaskContext";
import { useContext } from "react";

function App() {
const { lightMode, handleToggleMode, handleAddTasks, tasks, handleClearTasks } =
  useContext(TaskContext);
  //  JSX
  return (
    <TaskProvider>
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
          <TaskList tasks={tasks} />
        </div>
        <button onClick={handleClearTasks}>Clear Tasks</button>
      </div>
    </TaskProvider>
  );
}

export default App;
