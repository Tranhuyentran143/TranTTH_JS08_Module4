
const TaskDetail = (props: any) => {
    const task = props.task;
    return (
      <tr>
        <td>{task.id}</td>
        <td>{task.task_name}</td>
        <input type="checkbox" checked = {task.status} onChange={() => {props.editStatus(task.id)}}></input>
        <button
          onClick={() => props.deleteTaskById(task.id)}
          style={{ backgroundColor: "yellow" }}
        >
          Delete
        </button>
      </tr>
    );
  };
  export default TaskDetail;
  