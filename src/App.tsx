import { useState, type ChangeEvent } from "react";
import type { Todos } from "./types/Todos";
import Form from "./components/Form";

const App = () => {
  const [todo, setTodo] = useState<Todos>({
    id: Date.now(),
    todoName: "",
    isChecked: true,
  });

  const [todoList, setTodoList] = useState<Todos[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const submitTodo = () => {
    if (!todo.todoName.trim()) return;
    setTodoList((prev) => {
      return [
        ...prev,
        { id: Date.now(), todoName: todo.todoName, isChecked: false },
      ];
    });

    setTodo({ id: 0, todoName: "" });
  };

  const setChecked = (id: number, checkVal: boolean) => {
    console.log(checkVal);
    setIsChecked((prev) => !prev);
    setTodoList((prev): Todos[] => {
      return prev.map((item) => {
        return item.id === id ? { ...item, isChecked: checkVal } : item;
      });
    });
  };

  return (
    <div className="flex justify-center flex-col max-w-50">
      <Form todo={todo} setTodo={setTodo} submitTodo={submitTodo} />
      <div className="flex flex-col">
        {todoList.map((todo) => {
          return (
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.isChecked}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setChecked(todo.id, e.target.checked)
                }
              />
              <p className={`${todo.isChecked ? "line-through" : ""}`}>
                {todo.todoName}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
