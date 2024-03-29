"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const task_service_1 = require("../service/task.service");
class TaskController {
}
exports.TaskController = TaskController;
_a = TaskController;
TaskController.getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield task_service_1.TaskService.getTask();
    res.status(200).json(tasks);
});
TaskController.getTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskId = +req.params.id;
    const task = yield task_service_1.TaskService.getTaskById(taskId);
    res.status(200).json(task);
});
TaskController.createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskData = req.body;
    const newTask = yield task_service_1.TaskService.createTask(taskData);
    res.status(201).json(newTask);
});
TaskController.updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskId = +req.params.id;
    const updatedTaskInfo = req.body;
    const success = yield task_service_1.TaskService.updateTask(taskId, updatedTaskInfo);
    res.status(201).json(success);
});
TaskController.deleteTask = (req, res) => {
    const taskId = +req.params.id;
    const success = task_service_1.TaskService.deleteTask(taskId);
    res.status(200).json(success);
};
