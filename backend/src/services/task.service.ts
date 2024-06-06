import Task from "../models/task.model";

export const createTask = async (taskData) => {
  const task = new Task(taskData);
  await task.save();
  return task;
};

export const getTasksDue = async () => {
  const now = new Date();
  const tasks = await Task.find({
    executeAt: { $lte: now },
    status: "scheduled",
  });
  return tasks;
};

export const updateTaskStatus = async (taskId, status) => {
  await Task.findByIdAndUpdate(taskId, { status });
};
