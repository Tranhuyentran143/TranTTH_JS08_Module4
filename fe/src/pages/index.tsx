import { useEffect, useRef, useState } from "react";
import { TaskRequest, TaskResponse, TaskUpdateStatus } from "../models/task.type";
import { createTask, deleteTaskByIdApi, getTasks, updateTask } from "../api/task.api";
import TaskDetail from "./task.component";


const Tasks = () => {
  const [tasks, setTasks] = useState([] as TaskResponse[]);

  const idRef = useRef("");
  const nameRef = useRef<HTMLInputElement>(null);
   const statusRef = useRef<HTMLInputElement>(null);

  const fetchTasks = async () => {
    const listTask = await getTasks();
    setTasks(listTask);
  };
  const createNewTask = async () => {
    const name = nameRef.current?.value;
    const status = statusRef.current?.checked;

    const newTask: TaskRequest = {
      task_name: name ?? "",
      status: !! status,
    };
    await createTask(newTask);
    fetchTasks();
  };

  const editStatus = async (id: number) => {
    const newTask: TaskUpdateStatus = {
        id: id
    }
    await updateTask(newTask)
    fetchTasks();
  }

  const deleteTaskById = async (id: number) => {
    await deleteTaskByIdApi(id);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ background: "pink", textAlign: "center", fontSize: "30px" }}>
      <h4 style={{ color: "red", textAlign: "center", fontSize: "30px" }}>
    TODO LIST     </h4>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
        </thead>
        <tbody>
          {tasks.map((task: TaskResponse) => {
            return (
              <TaskDetail
                key={task.id}
                task={task}
                deleteTaskById={deleteTaskById}
                editStatus={editStatus}
              />
            );
          })}
        </tbody>
      </table>
      <div>
        <label htmlFor="fname">Name:</label>
        <br />
        <input type="text" id="fname" name="fname" ref={nameRef} />
        <br />
        <br />
        <input type="submit" value="Add to the todo list" style={{fontSize: "20px"}} onClick={createNewTask} /> <br/>
      </div>
    </div>
  );
};

export default Tasks;
