import { Request, Response } from "express";
import { TaskService } from "../service/task.service";

export class TaskController {
  static getTask = async (req: Request, res: Response) => {
    const tasks = await TaskService.getTasks();
    res.status(200).json(tasks);
  };

  static getTaskById = async (req: Request, res: Response) => {
    const taskId = +req.params.id;
    const task = await TaskService.getTaskById(taskId);
    res.status(200).json(task);
  };

  static createTask = async (req: Request, res: Response) => {
    const taskData = req.body;
    const newTask = await TaskService.addTask(taskData);
    res.status(201).json(newTask);
  };

  static updateTask = async (req: Request, res: Response) => {
    const taskId = +req.params.id;
    const updatedTaskInfo = req.body;
    updatedTaskInfo.status = true;
    const success = await TaskService.updateTask(taskId, updatedTaskInfo);
    res.status(201).json(success);
  };

  static deleteTask = async (req: Request, res: Response) => {
    const taskId = +req.params.id;
    const success = await TaskService.deleteTask(taskId);
    res.status(200).json(success);
  };
}
