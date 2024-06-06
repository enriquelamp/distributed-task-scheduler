import { Router } from "express";
import * as taskController from "../controllers/task.controller";

const router = Router();

router.post("/", taskController.registerTask);
router.get("/", taskController.getAllTasks);

export default router;
