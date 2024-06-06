import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  type: { type: String, required: true },
  cron: { type: String },
  executeAt: { type: Date },
  status: { type: String, default: "scheduled" },
});

export default model("Task", taskSchema);
