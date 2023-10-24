import { useContext } from "react";
import TodoContext from "../Context/TodoContext";

function TaskCount() {
  const { listed: toBeCount } = useContext(TodoContext);
  return (
    <div className="taskcount container">
      <h1>Task Count {toBeCount.length}</h1>
    </div>
  );
}

export default TaskCount;
