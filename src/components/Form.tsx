import type { Todos } from "../types/Todos";
import Input from "./Input";

interface FormProps {
  todos: Todos;
  setter: React.Dispatch<React.SetStateAction<Todos>>;
}

const Form = ({ todos, setter }: FormProps) => {
  const { name } = todos;
  return (
    <form className="flex flex-col gap-1" action="">
      <div className="flex flex-col">
        <label htmlFor="">To Do</label>
        <Input name={name} setTodo={setter} />
      </div>
      <button>Add</button>
    </form>
  );
};

export default Form;
