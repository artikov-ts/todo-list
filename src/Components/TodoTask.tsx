import { useDispatch } from "react-redux";
import { removeTask } from "../features/todoSlice";

interface Props {
  task: any;
}

const TodoTask = ({ task }: Props) => {
  const dispatch = useDispatch();

  const handleRemove = (taskToRemove: string) => {
    dispatch(removeTask(taskToRemove));
  };

  return (
    <div className="task">
      <div className="content">
        <span>{task.task}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          handleRemove(task.task);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
