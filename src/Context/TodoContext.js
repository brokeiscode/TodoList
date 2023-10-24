import { createContext } from "react";
import { useState } from "react";

// create context
const TodoContext = createContext();

// create provider
export const TodoProvider = ({ children }) => {
  const [listed, setListed] = useState([]);

  const toBeDoneWork = (addToList) => {
    setListed([addToList, ...listed]);
  };

  const todoDeletedHandler = (toDelete) => {
    if (window.confirm("Are you sure?")) {
      setListed(listed.filter((item) => item.id !== toDelete));
    }
  };

  return (
    <TodoContext.Provider value={{ listed, toBeDoneWork, todoDeletedHandler }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
