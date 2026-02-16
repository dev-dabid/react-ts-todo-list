import type { ChangeEvent } from "react";
import type { Todos } from "../types/Todos";

interface InputProps {
  name: string;
  setTodo: React.Dispatch<React.SetStateAction<Todos>>;
}

const Input = ({ name, setTodo }: InputProps) => {
  const handleChar = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setTodo((preVal) => {
      return { ...preVal, [name]: value };
    });
  };
  return <input type="text" name={name} value={name} onChange={handleChar} />;
};

export default Input;
