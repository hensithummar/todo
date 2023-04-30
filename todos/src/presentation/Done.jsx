import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromDone, addTaskInTodo } from "../redux/todos/todos.actions";

const Done = () => {
  const dispatch = useDispatch();
  const { done } = useSelector((state) => state?.todos);

  const handleDoneTask = (task) => {
    dispatch(removeFromDone(task));
    dispatch(addTaskInTodo(task));
  };
  return (
    <div>
      <p>Done Tasks</p>
      {done?.map((task, index) => {
        const { todoTask, assignedTask } = task;
        return (
          <div key={index} onClick={() => handleDoneTask(task)}>
            <b>{todoTask}</b>
            <p>{assignedTask}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Done;
