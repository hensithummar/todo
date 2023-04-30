import { INCREMENT, DECREMENT, ADDTASKINTODO } from "./todos.types";

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

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default reducer;
