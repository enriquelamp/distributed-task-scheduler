import React, { useState } from "react";
import axios from "axios";

const TaskForm: React.FC = () => {
  const [type, setType] = useState("one-time");
  const [cron, setCron] = useState("");
  const [executeAt, setExecuteAt] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const task = { type, cron, executeAt };
    try {
      await axios.post("http://localhost:3000/tasks", task);
      alert("Task scheduled successfully");
    } catch (error) {
      alert("Error scheduling task");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="one-time">One-Time</option>
          <option value="recurring">Recurring</option>
        </select>
      </div>
      {type === "recurring" && (
        <div>
          <label>Cron Expression:</label>
          <input
            type="text"
            value={cron}
            onChange={(e) => setCron(e.target.value)}
          />
        </div>
      )}
      {type === "one-time" && (
        <div>
          <label>Execute At:</label>
          <input
            type="datetime-local"
            value={executeAt}
            onChange={(e) => setExecuteAt(e.target.value)}
          />
        </div>
      )}
      <button type="submit">Schedule Task</button>
    </form>
  );
};

export default TaskForm;
