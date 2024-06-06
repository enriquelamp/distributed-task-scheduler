import express from "express";
import mongoose from "mongoose";
import taskRoutes from "./routes/task.routes";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/tasks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/tasks", taskRoutes);

export default app;
