const TaskDetail = (props: any) => {
    const task = props.task;
    return (
      <tr>
        <td>{task.id}</td>
        <td>{task.task_name}</td>
        <td >{task.status}</td>
        <button
          onClick={() => props.deleteTaskById(task.id)}
          style={{ backgroundColor: "yellow" }}
        >
          Delete
        </button>
        <button
          onClick={() => props.onClickEdit(props.task)}
          style={{ backgroundColor: "yellow" }}
        >
          Edit
        </button>
      </tr>
    );
  };
  export default TaskDetail;
  