import { useState } from "react";
import type { Todos } from "./types/Todos";
import Form from "./components/Form";

const App = () => {
  const [todo, setTodo] = useState<Todos>({
    id: Date.now(),
    todoName: "",
  });

  const [todoList, setTodoList] = useState<Todos[]>([]);

  const submitTodo = () => {
    if (!todo.todoName.trim()) return;
    setTodoList((prev) => {
      return [...prev, { id: Date.now(), todoName: todo.todoName }];
    });

    setTodo({ id: 0, todoName: "" });
  };

  console.log(todoList);

  return (
    <div className="flex justify-center">
      <Form todo={todo} setTodo={setTodo} submitTodo={submitTodo} />
    </div>
  );
};

export default App;
