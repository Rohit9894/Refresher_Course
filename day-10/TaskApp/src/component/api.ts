import axios from "axios";
import { Task } from "../type";

export const addTask = async (newTask: Task) => {
  let res = await axios.post("http://localhost:8000/tasks", newTask);
  console.log(res);
};
export const getTask = async () => {
  let res = await axios.get("http://localhost:8000/tasks");
  return res?.data;
};

export const deleteTask = async (id: string) => {
  let res = await axios.delete(`http://localhost:8000/tasks/${id}`);
  return res.data;
};
export const updateTask = async (id: string | null, status: boolean) => {
  let res = await axios.patch(`http://localhost:8000/tasks/${id}`, {
    status: !status,
  });
  return res.data;
};
