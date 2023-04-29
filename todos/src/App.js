import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { addTaskInTodo, increaseCounter } from "./redux/todos/todos.actions";
import { useState } from "react";

const initialState = {
  todoTask: "",
  assignedTask: "",
  type: "todo",
};
function App() {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState(initialState);
  const { todoTask, assignedTask } = newTask;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  console.log("newTask", newTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTaskInTodo(newTask));
    setNewTask(initialState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoTask}
        name="todoTask"
        placeholder="New Task"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        value={assignedTask}
        name="assignedTask"
        placeholder="Who..."
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">ADD</button>
    </form>
  );
}

export default App;
