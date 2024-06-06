import app from "./app";
import startScheduler from "./scheduler/task.scheduler";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

startScheduler();
