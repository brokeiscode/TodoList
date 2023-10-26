import { createContext } from "react";
import { useState } from "react";

// create context
const TodoContext = createContext();

// create provider
export const TodoProvider = ({ children }) => {
  const [listed, setListed] = useState([]);
  const [editText, setEditText] = useState(false);
  const [beenEdited, setBeenEdited] = useState();

  const toBeDoneWork = (addToList) => {
    setListed([addToList, ...listed]);
  };

  const todoDeletedHandler = (toDelete) => {
    if (window.confirm("Are you sure?")) {
      setListed(listed.filter((item) => item.id !== toDelete));
    }
  };

  const editHandler = (toedit) => {
    listed.filter((item) => item.id === toedit && setEditText(!editText));
    listed.filter((item) => item.id === toedit && setBeenEdited(item));
    // console.log(editText);
    // console.log(beenEdited);
  };

  const updateWork = (toupdate) => {
    setListed(
      listed.map((item) =>
        item.id === toupdate.id
          ? { ...item, textTodo: toupdate.textTodo }
          : item
      )
    );
    setEditText(false);
  };

  return (
    <TodoContext.Provider
      value={{
        listed,
        toBeDoneWork,
        todoDeletedHandler,
        editHandler,
        editText,
        beenEdited,
        updateWork,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
