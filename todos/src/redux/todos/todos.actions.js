import { INCREMENT, DECREMENT, ADDTASKINTODO } from "./todos.types";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const addTaskInTodo = (task) => {
  return {
    type: ADDTASKINTODO,
    payload: task,
  };
};
