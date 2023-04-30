import React from "react";
import { useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { Box, Typography } from "@mui/material";
import TasklistContainer from "../container/tasklist.container";
import TodoCard from "./TodoCard";

const TaskList = () => {
  const { todo, doing, done } = useSelector((state) => state?.todos);
  const { handleTodoTask, handleDoingTask, handleDoneTask, dropItem } =
    TasklistContainer();
  const [{ isOver }, drop] = useDrop({
    accept: "task",
    drop: (task) => {
      dropItem(task);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const Tasks = ({ task, handleTask, type }) => {
    const { todoTask, assignedTask, id } = task;
    const [{ isDragging }, drag] = useDrag({
      item: { id, type },
      type: "task",
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    });

    return (
      <Box
        key={id}
        ref={drag}
        onClick={() => handleTask(task)}
        id={task?.id}
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "5px",
          padding: "10px",
          margin: "10px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          cursor: "move",
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        <Typography
          sx={{ marginBottom: "5px", fontWeight: "bold", color: "#000000" }}
        >
          {todoTask}
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "#808080" }}>
          {assignedTask}
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ display: "flex" }} ref={drop}>
      <TodoCard bgcolor="#e9e9e9" title="Todo Tasks" totalTask={todo?.length}>
        {todo?.map((task, index) => {
          return (
            <Tasks
              task={task}
              handleTask={handleTodoTask}
              type="todo"
              key={index}
            />
          );
        })}
      </TodoCard>
      <TodoCard bgcolor="#FEEAE6" title="Doing task" totalTask={doing?.length}>
        {doing?.map((task, index) => {
          return (
            <Tasks
              task={task}
              handleTask={handleDoingTask}
              type="doing"
              key={index}
            />
          );
        })}
      </TodoCard>
      <TodoCard bgcolor="#40e0d029" title="Done task" totalTask={done?.length}>
        {done?.map((task, index) => {
          return (
            <Tasks
              task={task}
              handleTask={handleDoneTask}
              type="done"
              key={index}
            />
          );
        })}
      </TodoCard>
    </Box>
  );
};

export default TaskList;
