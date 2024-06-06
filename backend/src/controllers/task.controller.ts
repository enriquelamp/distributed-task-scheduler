import { Request, Response } from "express";
import * as taskService from "../services/task.service";

export const registerTask = async (req: Request, res: Response) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await taskService.getTasksDue();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
