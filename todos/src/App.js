import { Box } from "@mui/material";
import React from "react";
import Doing from "./presentation/Doing";
import Done from "./presentation/Done";
import Todo from "./presentation/Todo";
import TodoForm from "./presentation/TodoForm";

const App = () => {
  return (
    <>
      <TodoForm />
      <Box sx={{ display: "flex" }}>
        <Todo />
        <Doing />
        <Done />
      </Box>
    </>
  );
};

export default App;
