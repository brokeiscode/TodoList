import TaskCount from "./components/TaskCount";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./Context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <>
        <TaskCount />
        <TodoForm />
        <TodoList />
      </>
    </TodoProvider>
  );
}

export default App;
