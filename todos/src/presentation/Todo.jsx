import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskInDoing, removeFromTodo } from "../redux/todos/todos.actions";

const Todo = () => {
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state?.todos);
  console.log("todo", todo);

  const handleTodoTask = (task) => {
    dispatch(removeFromTodo(task));
    dispatch(addTaskInDoing(task));
  };

  const dragStart = (evt) => {
    let element = evt.currentTarget;
    element.classList.add("dragged");
    evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = "move";
  };
  return (
    <div>
      <p>Todo Tasks</p>
      {todo?.map((task, index) => {
        const { todoTask, assignedTask } = task;
        return (
          <div
            key={index}
            onClick={() => handleTodoTask(task)}
            draggable
            onDragStart={(e) => dragStart(e)}
          >
            <b>{todoTask}</b>
            <p>{assignedTask}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
