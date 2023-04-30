import { useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addTaskInTodo } from "../redux/todos/todos.actions";

const initialState = {
  todoTask: "",
  assignedTask: "",
  type: "todo",
  id: "",
};
const TodoForm = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState(initialState);
  const [error, setError] = useState({});
  const { todoTask, assignedTask } = newTask;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError({ ...error, [name]: handleValidation(name, value) });
    setNewTask({ ...newTask, [name]: value });
  };
  const handleValidation = (name, value) => {
    switch (name) {
      case "todoTask":
        if (!value) {
          return "New task is required";
        } else {
          return "";
        }
      case "assignedTask":
        if (!value) {
          return "Assigned task is required";
        } else {
          return "";
        }
      default:
        return "";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    Object.keys(newTask).forEach((name) => {
      const error = handleValidation(name, newTask[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }
    const clonedNewTask = {
      ...newTask,
      id: uuidv4(),
    };
    dispatch(addTaskInTodo(clonedNewTask));
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
      <p>{error?.todoTask}</p>
      <input
        type="text"
        value={assignedTask}
        name="assignedTask"
        placeholder="Who..."
        onChange={(e) => handleChange(e)}
      />
      <p>{error?.assignedTask}</p>
      <button type="submit">ADD</button>
    </form>
  );
};

export default TodoForm;
