import React, { useState } from "react";
import TodoTask from "./TodoTask";

import { ITask } from "../Interfaces";

interface Props {
  list: ITask[];
  setList([]): void;
}

const TodoList = ({ list, setList }: Props) => {
  const completeTask = (taskNameToDelete: string): void => {
    setList(
      list.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };
  return (
    <div className="list">
      {list.map((task: ITask, key: number) => {
        return <TodoTask key={key} task={task} completeTask={completeTask} />;
      })}
    </div>
  );
};

export default TodoList;
