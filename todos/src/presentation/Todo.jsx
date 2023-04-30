import React from "react";
import { useSelector } from "react-redux";

const Todo = () => {
  const { todo } = useSelector((state) => state?.todos);
  console.log("todo", todo);
  return (
    <div>
      <p>Todo Tasks</p>
      {todo?.map((task, index) => {
        const { todoTask, assignedTask } = task;
        return (
          <React.Fragment key={index}>
            <b>{todoTask}</b>
            <p>{assignedTask}</p>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Todo;
