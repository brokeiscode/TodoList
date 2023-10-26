import Card from "./shared/Card";
import SecondaryButton from "./shared/SecondaryButton";
import TodoContext from "../Context/TodoContext";
import { useContext, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";

function TodoDisplay({ beShown }) {
  const { todoDeletedHandler: deletedHandler, editHandler } =
    useContext(TodoContext);

  const [crossed, setCrossed] = useState(false);

  const doneHandler = () => {
    setCrossed(!crossed);
  };

  return (
    <Card addin={true}>
      <h3 className={crossed ? "todoh3" : undefined}>{beShown.textTodo}</h3>
      <div className="btnDiv">
        <span onClick={() => editHandler(beShown.id)}>
          <AiOutlineEdit
            style={{ marginRight: "10px", fontSize: "20px", cursor: "pointer" }}
          />
        </span>
        <SecondaryButton
          onClick={() => doneHandler(beShown.id)}
          btnClass={"done"}
        >
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
