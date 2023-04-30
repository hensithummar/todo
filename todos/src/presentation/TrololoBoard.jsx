import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import TaskList from "./TaskList.jsx";
import TodoForm from "./TodoForm";

const TrololoBoard = () => {
  const { todo, doing, done } = useSelector((state) => state?.todos);
  let totalItems = 0;

  totalItems += todo.length;
  totalItems += doing.length;
  totalItems += done.length;

  return (
    <Grid
      item
      xs={3}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography sx={{ fontWeight: "bold", fontSize: 50 }}>
        Trololo Board
      </Typography>
      <Box sx={{ my: 1 }}>
        <Typography>There are {totalItems} tasks on board</Typography>
      </Box>
      <Box sx={{ my: 1 }}>
        <Typography sx={{ fontSize: 14, color: "gray" }}>
          Type task text and executer name. Click on card to move to another
          list
        </Typography>
      </Box>
      <Box sx={{ my: 3 }}>
        <TodoForm />
      </Box>
      <TaskList />
    </Grid>
  );
};

export default TrololoBoard;
