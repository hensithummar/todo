import {
  INCREMENT,
  DECREMENT,
  ADDTASKINTODO,
  ADDTASKINDOING,
  REMOVEFROMTODO,
  REMOVEFROMDOING,
  ADDTASKINDONE,
  REMOVEFROMDONE,
} from "./todos.types";

const INITIAL_STATE = {
  todo: [],
  doing: [],
  done: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDTASKINTODO:
      return {
        ...state,
        todo: [...state?.todo, { ...action.payload }],
      };
    case REMOVEFROMTODO:
      return {
        ...state,
        todo: action?.payload,
      };
    case ADDTASKINDOING:
      return {
        ...state,
        doing: [...state?.doing, { ...action.payload }],
      };
    case REMOVEFROMDOING:
      return {
        ...state,
        doing: action?.payload,
      };
    case ADDTASKINDONE:
      return {
        ...state,
        done: [...state?.done, { ...action.payload }],
      };
    case REMOVEFROMDONE:
      return {
        ...state,
        done: action?.payload,
      };
    default:
      return state;
  }
};

export default reducer;
