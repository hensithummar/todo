import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromDoing, addTaskInDone } from "../redux/todos/todos.actions";

const Doing = () => {
  const dispatch = useDispatch();
  const { doing } = useSelector((state) => state?.todos);

  const handleDoingTask = (task) => {
    dispatch(removeFromDoing(task));
    dispatch(addTaskInDone(task));
  };
  return (
    <div>
      <p>Doing Tasks</p>
      {doing?.map((task, index) => {
        const { todoTask, assignedTask } = task;
        return (
          <div key={index} onClick={() => handleDoingTask(task)}>
            <b>{todoTask}</b>
            <p>{assignedTask}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Doing;
