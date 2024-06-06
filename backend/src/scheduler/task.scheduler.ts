import cron from "cron";
import * as taskService from "../services/task.service";

const CronJob = cron.CronJob;

const executeTask = async (task) => {
  console.log(`Executing task with ID: ${task._id}`);
  await taskService.updateTaskStatus(task._id, "executed");
  // Log execution time or perform actual task here
};

const startScheduler = () => {
  new CronJob(
    "* * * * * *",
    async () => {
      const tasks = await taskService.getTasksDue();
      for (const task of tasks) {
        executeTask(task);
      }
    },
    null,
    true,
    "UTC"
  );
};

export default startScheduler;
