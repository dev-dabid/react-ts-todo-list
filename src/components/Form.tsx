import type { Dispatch, SetStateAction } from "react";
import type { Todos } from "../types/Todos";
import Input from "./Input";

interface InputProps {
  todo: Todos;
  setTodo: Dispatch<SetStateAction<Todos>>;
}

const Form = ({ todo, setTodo }: InputProps) => {
  const { name } = todo;

  return (
    <form action="">
      <div className="flex flex-col">
        <label htmlFor="">Todo</label>
        <Input name={name} setTodo={setTodo} />
      </div>
    </form>
  );
};

export default Form;
