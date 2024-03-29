import axios from "axios";
import { TaskRequest, TaskResponse, TaskUpdateStatus } from "../models/task.type";

const HOST_API = process.env.HOST_API || "http://localhost:8080";

export const getTasks = async (): Promise<TaskResponse[]> => {
  try {
    const response = await axios.get(`${HOST_API}/api/v1/tasks`);
    return response.data;
  } catch (err) {
    return [];
  }
};

export const getTaskById = async (
  id: number
): Promise<TaskResponse[] | null> => {
  const response = await axios.get(`${HOST_API}/api/v1/tasks/${id}`);
  return response.data;
};

export const createTask = async (
  newTask: TaskRequest
): Promise<TaskResponse | null> => {
  try {
    const response = await axios.post(`${HOST_API}/api/v1/tasks`, newTask);
    return response.data;
  } catch (err) {
    return null;
  }
};

export const updateTask = async (
  updateTask: TaskUpdateStatus
): Promise<TaskResponse | null> => {
  try {
    const response = await axios.put(
      `${HOST_API}/api/v1/tasks/${updateTask.id}`,
      updateTask
    );
    return response.data;
  } catch (err) {
    return null;
  }
};

export const deleteTaskByIdApi = async (id: number) => {
  try {
    await axios.delete(`${HOST_API}/api/v1/tasks/${id}`);
  } catch {
    alert("Task is not exist");
  }
};

export const deleteAllTasks = async () => {
  await axios.delete(`${HOST_API}/api/v1/tasks`);
};
