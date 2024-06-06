import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get("http://localhost:3000/tasks");
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Scheduled Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.type === "recurring"
              ? `Recurring Task - Cron: ${task.cron}`
              : `One-Time Task - Execute At: ${task.executeAt}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
