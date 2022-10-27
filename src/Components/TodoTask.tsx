import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task?: ITask;
}

const TodoTask = (task: Props) => {
  return <div>TodoTask</div>;
};

export default TodoTask;
