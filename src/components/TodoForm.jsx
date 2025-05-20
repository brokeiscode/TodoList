import Card from "./shared/Card";
import MainButton from "./MainButton";
import { useState } from "react";
import { v4 } from "uuid";
import TodoContext from "../Context/TodoContext";
import { useContext } from "react";

function TodoForm() {
  const {
    toBeDoneWork: unDoneWork,
    editText,
    beenEdited,
    updateWork,
  } = useContext(TodoContext);

  const [text, setText] = useState("");

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const sendFormHandler = (e) => {
    e.preventDefault();

    const myObj = {
      id: v4(),
      textTodo: text,
      completed: Boolean(false),
    };

    myObj.textTodo.trim() !== "" && unDoneWork(myObj);
    setText("");
  };

  if (editText === true && text === "") {
    return setText(beenEdited.textTodo);
    // console.log(beenEdited.id);
  }

  const updateFormHandler = (e) => {
    e.preventDefault();

    const updateObj = {
      id: beenEdited.id,
      textTodo: text,
      completed: Boolean(false),
    };

    updateObj.textTodo.trim() !== "" && updateWork(updateObj);

    // console.log(updateObj);
    setText("");
  };

  return (
    <Card addin={false}>
      <form onSubmit={editText ? updateFormHandler : sendFormHandler}>
        <input
          onChange={textHandler}
          type="text"
          value={text}
          placeholder="Enter your Todo"
        />
        <MainButton type="submit">{editText ? "Update" : "Send"}</MainButton>
      </form>
    </Card>
  );
}

export default TodoForm;
