import { dbConfig } from "../config/db.config"
import { Task } from "../entity/task.enity";

export class TaskService {
    private static taskRepo = dbConfig.getRepository(Task)
    static getTasks = async () => {
        return await this.taskRepo.find();
    };

    static getTaskById = async (id: number) => {
        return await this.taskRepo.findOneBy({
            id,
        });
    }

    static addTask = async (taskData: Task) => {
        const newTask = this.taskRepo.create(taskData);
        return await this.taskRepo.save(newTask);
      };
    

    static updateTask = async (id: number, updated: Task ) => {
        const task = await this.getTaskById(id)
        this.taskRepo.merge(task, updated);
        return await this.taskRepo.save(task);
    };
    
    static deleteTask = async (id: number) => {
        return await this.taskRepo.delete(id);
    };

}
