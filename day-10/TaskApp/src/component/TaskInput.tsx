import React, { useState } from "react";
import { Task } from "../type";
import { addTask } from "./api";
import styles from "./styles/taskinput.module.css";
interface TodoInputProps {
  handleUpdate: () => void;
}

const TodoInput = ({ handleUpdate }: TodoInputProps) => {
  const initState = {
    title: "",
    priority: "",
    description: "",
  };

  const [formState, setFormState] = useState<Task>(initState);
  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newTask: Task = {
      ...formState,
      status: false,
    };
    await addTask(newTask);
    handleUpdate();
  }
  const { title, priority, description } = formState;
  return (
    <div className={styles.form}>
      <h1 style={{ textAlign: "center" }}>Task Mangement</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          name={"title"}
          onChange={handleChange}
          value={title}
          type="text"
          required
        />
        <label>Priority</label>
        <select
          onChange={handleChange}
          value={priority}
          name="priority"
          required
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <label>Description</label>
        <textarea
          onChange={handleChange}
          value={description}
          name="description"
          required
        ></textarea>
        <button style={{ marginTop: "20px" }} type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
