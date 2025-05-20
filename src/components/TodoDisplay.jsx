import Card from "./shared/Card";
import SecondaryButton from "./shared/SecondaryButton";
import TodoContext from "../Context/TodoContext";
import { useContext } from "react";
import { AiOutlineEdit } from "react-icons/ai";

function TodoDisplay({ beShown }) {
  const {
    todoDeletedHandler: deletedHandler,
    todoCrossHandler: doneHandler,
    editHandler,
  } = useContext(TodoContext);

  return (
    <Card addin={true}>
      <span className={beShown.completed ? "todoh3" : undefined}>
        {beShown.textTodo}
      </span>
      <div className="btnDiv">
        <span onClick={() => editHandler(beShown.id)}>
          <AiOutlineEdit
            style={{ marginRight: "10px", fontSize: "20px", cursor: "pointer" }}
          />
        </span>
        <SecondaryButton onClick={() => doneHandler(beShown)} btnClass={"done"}>
          Done
        </SecondaryButton>
        <SecondaryButton
          onClick={() => deletedHandler(beShown.id)}
          btnClass={"deleted"}
        >
          Delete
        </SecondaryButton>
      </div>
    </Card>
  );
}

export default TodoDisplay;
