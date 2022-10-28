import React, { ChangeEvent, useState } from "react";
// import { ITask } from "../Interfaces";

import { useDispatch } from "react-redux";
import { saveTask } from "../features/todoSlice";

// interface Props {
//   list: ITask[];
//   // setList([]): void;
// }

const AddTask = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);

  const dispatch = useDispatch();

  const addTodoTask = () => {
    console.log(`adding ${task} and ${deadline}`);
    dispatch(
      saveTask({
        task: task,
        deadline: deadline,
      })
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  // const addTask = (): void => {
  //   const newTask = { taskName: task, deadline: deadline };
  //   setList([...list, newTask]);
  //   setTask("");
  //   setDeadline(0);
  // };

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
      <button onClick={addTodoTask}>Add task</button>
    </div>
  );
};

export default AddTask;
