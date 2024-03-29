import { Router } from "express"
import { TaskController } from "../controller/task.controller";

 const TaskRoute = Router();

TaskRoute.get("/", TaskController.getTask)
TaskRoute.get("/:id", TaskController.getTaskById)
TaskRoute.post("/", TaskController.createTask)
TaskRoute.put("/:id", TaskController.updateTask)
TaskRoute.delete("/:id", TaskController.deleteTask)

export default TaskRoute;
