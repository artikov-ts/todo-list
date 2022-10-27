import React, { FC, useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import TodoList from "./Components/TodoList";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [list, setList] = useState<ITask[]>([]);

  return (
    <div className="App">
      <AddTask list={list} setList={setList} />
      <TodoList list={list} setList={setList} />
    </div>
  );
};

export default App;
