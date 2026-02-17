import { useState } from "react";
import type { Todos } from "./types/Todos";
import Form from "./components/Form";

const App = () => {
  const [todo, setTodo] = useState<Todos>({
    id: 1,
    todoName: "",
    todoTitle: "",
  });

  console.log(todo);

  return (
    <div className="flex justify-center">
      <Form todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
