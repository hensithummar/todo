import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addTaskInDoing,
  addTaskInDone,
  addTaskInTodo,
  removeFromDoing,
  removeFromDone,
  removeFromTodo,
} from "../redux/todos/todos.actions";

const TasklistContainer = () => {
  const dispatch = useDispatch();
  const { todo, doing, done } = useSelector((state) => state?.todos);

  const dropItem = (task) => {
    const { id, type } = task;
    const obj = {
      todo,
      doing,
      done,
    };
    const temp = obj?.[type]?.find((tsk) => {
      return tsk?.id === id;
    });
    switch (type) {
      case "todo":
        handleTodoTask(temp);
        break;
      case "doing":
        handleDoingTask(temp);
        break;
      case "done":
        handleDoneTask(temp);
        break;
      default:
        break;
    }
  };

  const handleTodoTask = (task) => {
    dispatch(removeFromTodo(task));
    dispatch(addTaskInDoing(task));
  };
  const handleDoingTask = (task) => {
    dispatch(removeFromDoing(task));
    dispatch(addTaskInDone(task));
  };
  const handleDoneTask = (task) => {
    dispatch(removeFromDone(task));
    dispatch(addTaskInTodo(task));
  };
  return { handleTodoTask, handleDoingTask, handleDoneTask, dropItem };
};

export default TasklistContainer;
