import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskLog: React.FC = () => {
  const [executedTasks, setExecutedTasks] = useState([]);

  useEffect(() => {
    const fetchExecutedTasks = async () => {
      const response = await axios.get("http://localhost:3000/tasks/executed");
      setExecutedTasks(response.data);
    };
    fetchExecutedTasks();
  }, []);

  return (
    <div>
      <h2>Executed Tasks</h2>
      <ul>
        {executedTasks.map((task) => (
          <li key={task._id}>
            Task ID: {task._id}, Executed At: {task.executedAt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskLog;
