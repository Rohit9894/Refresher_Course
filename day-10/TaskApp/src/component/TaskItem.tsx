import { Task } from "../type";
import { deleteTask, updateTask } from "./api";
import styles from "./styles/taskitem.module.css";
interface TodoInputProps {
  task: Task;
  handleUpdate: () => void;
}
const TaskItem = ({ task, handleUpdate }: TodoInputProps) => {
  const { id, title, description, status, priority } = task;
  function handleDelete() {
    deleteTask(id!);
    handleUpdate();
  }
  function handleToggle() {
    updateTask(id!, status!);
    handleUpdate();
  }
  return (
    <div className={styles.task}>
      <h1>
        {title}{" "}
        <span style={{ fontSize: "14px", marginLeft: "20px" }}>{priority}</span>
      </h1>
      <h2>{status ? "completed" : "Not-completed"}</h2>
      <p>{description}</p>
      <div className={styles.operation}>
        <button>View Details</button>
        <button onClick={handleToggle}>Toggle</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
