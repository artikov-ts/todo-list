import TodoTask from "./TodoTask";

import { ITask } from "../Interfaces";

interface Props {
  list: ITask[];
  // setList([]): void;
}

const TodoList = ({ list }: Props) => {
  // const completeTask = (taskNameToDelete: string): void => {
  //   setList(
  //     list.filter((task) => {
  //       return task.taskName !== taskNameToDelete;
  //     })
  //   );
  // };
  return (
    <div className="list">
      {list.map((task: ITask, key: number) => {
        return <TodoTask key={key} task={task} />;
      })}
    </div>
  );
};

export default TodoList;
