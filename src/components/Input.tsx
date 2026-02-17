import type { ChangeEvent } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Todos } from "../types/Todos";

interface InputValue {
  name: string;
  value: string;
  setTodo: Dispatch<SetStateAction<Todos>>;
}

const Input = ({ name, value, setTodo }: InputValue) => {
  const handleTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTodo((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <input
      className="border border-gray-500 rounded"
      type="text"
      name={name}
      value={value}
      onChange={handleTodo}
    />
  );
};

export default Input;
