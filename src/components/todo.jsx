import React, { useState } from "react";
import CreateTodo from "./createTodo";
import ListTodo from "./listTodo";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);

  const handleCreate = (todo) => {
    let done = false;
    setTodos([...todos, { id,done, ...todo }]);
    setId(id + 1);
  };

  const handleDelete = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);
    setTodos(newList);
  };

  const handleChangeStatus = id => {
    const index = todos.findIndex(todo => todo.id === id);
    let newList = [...todos];
    newList[index].done = !newList[index].done;
    setTodos(newList);

}

  return (
    <div className="container">
      <ListTodo todos={todos} onDelete={handleDelete} onChangeStatus={handleChangeStatus} />
      <CreateTodo onCreate={handleCreate} />
    </div>
  );
};

export default Todo;
