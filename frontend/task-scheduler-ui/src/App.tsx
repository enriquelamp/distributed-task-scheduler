import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskLog from "./components/TaskLog";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Distributed Task Scheduler</h1>
      <TaskForm />
      <TaskList />
      <TaskLog />
    </div>
  );
};

export default App;
