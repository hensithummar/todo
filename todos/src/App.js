import React from "react";
import Todo from "./presentation/Todo";
import TodoForm from "./presentation/TodoForm";

const App = () => {
  return (
    <>
      <TodoForm />
      <Todo />
    </>
  );
};

export default App;
