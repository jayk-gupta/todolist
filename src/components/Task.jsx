import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import {TaskContext} from "../TaskContext";

function Task({ id, title, description, status }) {
  const { onDeleteTask, onToggleTask } =
    useContext(TaskContext);
  return (
    <div>
      <div className="flex gap-2">
        <h3 style={status ? { textDecoration: "line-through" } : {}}>
          {title}
        </h3>
        <input
          className=""
          type="checkbox"
          value={status}
          onChange={() => onToggleTask(id)}
        />
        <button onClick={() => onDeleteTask(id)}>
          <RxCross1 />
        </button>
      </div>
    </div>
  );
}
export default Task;
