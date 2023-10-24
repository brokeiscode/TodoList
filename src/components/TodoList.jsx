import TodoDisplay from "./TodoDisplay";
import TodoContext from "../Context/TodoContext";
import { useContext } from "react";

function TodoList() {
  const { listed: toBeShown } = useContext(TodoContext);
  return (
    <div className="container">
      {toBeShown.map((item) => (
        <TodoDisplay key={item.id} beShown={item} />
      ))}
    </div>
  );
}

export default TodoList;
