import type { Dispatch, SetStateAction } from "react";
import type { Todos } from "../types/Todos";
import Input from "./Input";

interface InputProps {
  todo: Todos;
  setTodo: Dispatch<SetStateAction<Todos>>;
  submitTodo: () => void;
}

const Form = ({ todo, setTodo, submitTodo }: InputProps) => {
  const { todoName } = todo;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitTodo();
      }}
    >
      <div className="flex flex-col">
        <label htmlFor="">Todo</label>
        <Input name={"todoName"} value={todoName} setTodo={setTodo} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
