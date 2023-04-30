import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTaskInTodo } from "../redux/todos/todos.actions";

const initialState = {
  todoTask: "",
  assignedTask: "",
  id: "",
};

const TodoFormContainer = () => {
  const [newTask, setNewTask] = useState(initialState);
  const [error, setError] = useState({});
  const dispatch = useDispatch();

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
  return { handleValidation, handleChange, handleSubmit, newTask, error };
};

export default TodoFormContainer;
