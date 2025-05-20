import { createContext, useEffect } from "react";
import { useState } from "react";

// create context
const TodoContext = createContext();

// create provider
export const TodoProvider = ({ children }) => {
  const fetchedList = localStorage.getItem("todolistLocal");
  const currentList = fetchedList ? JSON.parse(fetchedList) : [];

  const [listed, setListed] = useState(currentList);
  const [editText, setEditText] = useState(false);
  const [beenEdited, setBeenEdited] = useState();
  const [crossed, setCrossed] = useState();

  useEffect(() => {
    localStorage.setItem("todolistLocal", JSON.stringify(listed));
    // console.log(listed);
  }, [listed]);

  const toBeDoneWork = (addToList) => {
    setListed([addToList, ...listed]);
    console.log(listed);
  };

  const todoDeletedHandler = (toDelete) => {
    // if (window.confirm("Are you sure?")) {
    setListed(listed.filter((item) => item.id !== toDelete));
    // }
  };

  const editHandler = (toedit) => {
    listed.filter((item) => item.id === toedit && setEditText(!editText));
    listed.filter((item) => item.id === toedit && setBeenEdited(item));
    // console.log(editText);
    // console.log(beenEdited);
  };

  const todoCrossHandler = (toupdate) => {
    // e.preventDefault();
    setCrossed(!crossed);

    const updateObj = {
      id: toupdate.id,
      textTodo: toupdate.textTodo,
      completed: !toupdate.completed,
    };

    updateObj.completed !== toupdate.completed && updateWork(updateObj);
  };

  const updateWork = (toupdate) => {
    setListed(
      listed.map((item) =>
        item.id === toupdate.id
          ? {
              ...item,
              textTodo: toupdate.textTodo,
              completed: toupdate.completed,
            }
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
        todoCrossHandler,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
