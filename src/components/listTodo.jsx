import React from "react";

const ListTodo = ({ todos, onDelete, onChangeStatus }) => {
  const todoStatus = (todo) => {
    return (
      <span style={{cursor:"pointer"}}
        class={`badge badge-${todo.done ? "success" : "danger"}`}
        onClick={() => onChangeStatus(todo.id)}
      >
        {todo.done ? "Completée" : "Non completée"}
      </span>
    );
  };

  return (
    <React.Fragment>
      <h1 className="mt-5 mb-2" >Liste des taches</h1>
      <div className="row mb-5">
        <div className="col-md-10">
          <ul class="list-group">
            {todos.map((todo) => (
              <li style={{display:"flex",justifyContent:"space-between", alignItems:"center" }} class="list-group-item" key={todo.id}>
                <span>
                  <b>{todo.name}:</b> {todo.description} -&nbsp;
                  <a href="#" onClick={() => onDelete(todo.id)}>
                    supprimer
                  </a>
                </span>
                {todoStatus(todo)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListTodo;
