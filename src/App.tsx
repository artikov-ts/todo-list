import React, { FC } from "react";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          <input type="text" placeholder="Task..." />
          <input type="number" placeholder="Set deadline..." />
        </div>
        <button>Add task</button>
      </div>
      <div className="list">list</div>
    </div>
  );
};

export default App;
