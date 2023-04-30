import {
  ADDTASKINTODO,
  ADDTASKINDOING,
  REMOVEFROMTODO,
  REMOVEFROMDOING,
  ADDTASKINDONE,
  REMOVEFROMDONE,
} from "./todos.types";

export const addTaskInTodo = (task) => {
  return {
    type: ADDTASKINTODO,
    payload: task,
  };
};

export const removeFromTodo = (task) => async (dispatch, getState) => {
  const { id } = task;
  const { todo } = getState().todos;
  const clonedTodo = todo.filter((task) => {
    return task?.id !== id;
  });
  dispatch({
    type: REMOVEFROMTODO,
    payload: clonedTodo,
  });
};

export const addTaskInDoing = (task) => {
  return {
    type: ADDTASKINDOING,
    payload: task,
  };
};

export const removeFromDoing = (task) => async (dispatch, getState) => {
  const { id } = task;
  const { doing } = getState().todos;
  const clonedDoing = doing.filter((task) => {
    return task?.id !== id;
  });
  dispatch({
    type: REMOVEFROMDOING,
    payload: clonedDoing,
  });
};

export const addTaskInDone = (task) => {
  return {
    type: ADDTASKINDONE,
    payload: task,
  };
};

export const removeFromDone = (task) => async (dispatch, getState) => {
  const { id } = task;
  const { done } = getState().todos;
  const clonedDone = done.filter((task) => {
    return task?.id !== id;
  });
  dispatch({
    type: REMOVEFROMDONE,
    payload: clonedDone,
  });
};
