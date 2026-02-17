import { useState } from "react";
import Form from "./components/Form";

interface Todo {
  id: number;
  name: string;
}

const App = () => {
  const [todo, setTodo] = useState<Todo>({
    id: 1,
    name: "",
  });

  console.log(todo);

  return (
    <div className="flex justify-center">
      <Form todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
