import { useReducer } from "react";
import { createContext } from "react";

const initialTasks = [
  { id: 1, title: "Revise React fundamentals", description: "", status: false },
  { id: 2, title: "Make todolist ", description: "", status: false },
  { id: 3, title: "Exercise", description: "", status: false },
];

function reducer(state, action) {
  switch (action.type) {
    case "addtask":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "delTask":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "toggleTask":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, status: !task.status } : task
        ),
      };
    case "clearTasks":
      return { ...state, tasks: (state.tasks = []) };
    case "toggleMode":
      return { ...state, lightMode: !state.lightMode };
    default:
      throw new Error("unknown action type");
  }
}
const TaskContext = createContext();
function TaskProvider({ children }) {
  // STATE
  const initialState = { tasks: initialTasks, lightMode: false };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tasks, lightMode } = state;

  // Dispatch function is used to update the state
  // HANDLER FUNCTIONS
  function handleAddTasks(task) {
    dispatch({ type: "addtask", payload: task });
  }

  function handleDeleteTask(id) {
    dispatch({ type: "delTask", payload: id });
  }

  function handleToggleTask(id) {
    dispatch({ type: "toggleTask", payload: id });
  }
  function handleClearTasks() {
    dispatch({ type: "clearTasks" });
  }
  function handleToggleMode() {
    dispatch({ type: "toggleMode" });
  }
  return (
    <TaskContext.Provider
      value={{
        onDeleteTask: handleDeleteTask,
        onToggleTask: handleToggleTask,
        lightMode: lightMode,
        handleClearTasks: handleClearTasks,
        handleAddTasks: handleAddTasks,
       handleToggleMode:handleToggleMode
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskProvider, TaskContext };
