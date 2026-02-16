import type { Todos } from "./types/Todos";
import { useState } from "react";
import Form from "./components/Form";

const App = () => {
  const [todos, setTodos] = useState<Todos>({
    id: 0,
    name: "",
  });

  console.log(todos);

  return (
    <div className="flex justify-center items-center min-h-200">
      <Form todos={todos} setter={setTodos} />
    </div>
  );
};

export default App;
