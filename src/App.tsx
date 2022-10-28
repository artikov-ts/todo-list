import React, { FC } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import TodoList from "./Components/TodoList";
// import { ITask } from "./Interfaces";

import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

const App: FC = () => {
  const list: any = useSelector(selectTodoList);

  // const [list, setList] = useState<ITask[]>([]);
  return (
    <div className="App">
      <AddTask />
      <TodoList list={list} />
    </div>
  );
};

export default App;
