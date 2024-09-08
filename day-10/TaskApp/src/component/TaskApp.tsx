import { useEffect, useState } from "react";
import TodoInput from "./TaskInput";
import { Todo } from "../type";

import { getTask } from "./api";
import TaskItem from "./TaskItem";

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [change, setChange] = useState<boolean>(false);
  useEffect(() => {
    getTask().then((res) => setTodos(res));
  }, [change]);
  const handleUpdate = () => {
    setChange((prev) => !prev);
  };
  return (
    <div>
      <TodoInput handleUpdate={handleUpdate} />
      {todos.map((el) => {
        return <TaskItem key={el.id} task={el} handleUpdate={handleUpdate} />;
      })}
    </div>
  );
};

export default TodoApp;
