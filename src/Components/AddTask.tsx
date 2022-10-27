import React, { ChangeEvent, useState } from "react";
import { ITask } from "../Interfaces";

interface Props {
  list: ITask[];
  setList([]): void;
}

const AddTask = ({ list, setList }: Props) => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setList([...list, newTask]);
    setTask("");
    setDeadline(0);
  };

  return (
    <div className="header">
      <div className="input-container">
        <input
          type="text"
          placeholder="Task..."
          name="task"
          value={task}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Set deadline..."
          name="deadline"
          value={deadline}
          onChange={handleChange}
        />
      </div>
      <button onClick={addTask}>Add task</button>
    </div>
  );
};

export default AddTask;