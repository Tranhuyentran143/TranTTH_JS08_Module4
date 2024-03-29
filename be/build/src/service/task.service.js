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
exports.TaskService = void 0;
const db_config_1 = require("../config/db.config");
const task_enity_1 = require("../entity/task.enity");
class TaskService {
}
exports.TaskService = TaskService;
_a = TaskService;
TaskService.taskRepo = db_config_1.dbConfig.getRepository(task_enity_1.Task);
TaskService.getTask = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield _a.taskRepo.find();
});
TaskService.getTaskById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield _a.taskRepo.findOneBy({
        id,
    });
});
TaskService.getTaskByQuery = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield _a.taskRepo.findOneBy(query);
});
TaskService.createTask = (taskData) => __awaiter(void 0, void 0, void 0, function* () {
    const newTask = _a.taskRepo.create(taskData);
    return yield _a.taskRepo.save(newTask);
});
TaskService.updateTask = (id, updated) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield _a.getTaskById(id);
    _a.taskRepo.merge(task, updated);
    return yield _a.taskRepo.save(task);
});
TaskService.deleteTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield _a.taskRepo.delete(id);
});
