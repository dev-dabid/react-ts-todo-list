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
      className="flex items-center"
      onSubmit={(e) => {
        e.preventDefault();
        submitTodo();
      }}
    >
      <div className="flex flex-col">
        <label htmlFor="">Todo</label>
        <div className="flex gap-3">
          <Input name={"todoName"} value={todoName} setTodo={setTodo} />
          <div>
            <button className="bg-amber-400" type="submit">
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
