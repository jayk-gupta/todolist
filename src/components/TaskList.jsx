import { useContext } from "react";
import Task from "./Task";
function TaskList({ tasks }) {
  return (

      <ul className="flex flex-col gap-4">
      {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            desciption={task.description}
            status={task.status}
          />
   
        ))}
      </ul>
 
  );
}
export default TaskList