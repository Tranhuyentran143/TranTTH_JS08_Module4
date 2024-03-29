import { useEffect, useRef, useState } from "react";
import { TaskRequest, TaskResponse } from "../models/task.type";
import { createTask, deleteAllTasks, deleteTaskByIdApi, getTasks, updateTask } from "../api/task.api";
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
    const status = statusRef.current?.value;

    const newTask: TaskRequest = {
      task_name: name ?? "",
      status: status ?? "",
    };
    await createTask(newTask);
    fetchTasks();
  };

  const editTask = async () => {
    const name = nameRef.current?.value;
    const status = statusRef.current?.value;

    const newTask: TaskRequest = {
      id: parseInt(idRef.current),
      task_name: name ?? "",
      status: status ?? "",
    };

    await updateTask(newTask);
    fetchTasks();
  };

  const deleteTaskById = async (id: number) => {
    await deleteTaskByIdApi(id);
    fetchTasks();
  };


  const onClickEdit = (task_edit: TaskRequest) => {
    const { id, task_name, status } = task_edit;
    if (typeof id === "number") {
      idRef.current = id.toString();
      if (nameRef.current) nameRef.current.value = task_name;
      if (statusRef.current) statusRef.current.value = status;
    }
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
                onClickEdit={onClickEdit}
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
        <label htmlFor="fstatus">Status:</label>
        <br />
        <input type="text" id="fstatus" name="fstatus" ref={statusRef} />
        <br />
        <br />
        <input type="submit" value="Add to the todo list" style={{fontSize: "20px"}} onClick={createNewTask} /> <br/>
        <input type="submit" value="Edit the todo list" style={{fontSize: "20px"}} onClick={editTask} />
      </div>
    </div>
  );
};

export default Tasks;
