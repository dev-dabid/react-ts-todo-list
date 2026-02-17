import type { ChangeEvent } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Todos } from "../types/Todos";

interface InputValue {
  name: string;
  setTodo: Dispatch<SetStateAction<Todos>>;
}

const Input = ({ name, setTodo }: InputValue) => {
  const handleTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setTodo((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <input
      className="border border-gray-500 rounded"
      type="text"
      name={name}
      onChange={handleTodo}
    />
  );
};

export default Input;
