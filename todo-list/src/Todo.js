import React from "react";

const Todo = ({todo, handleToggle}) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  }
  
  return (
    <div id={todo.id} key={todo.id + todo.task} onClick={handleClick} className={todo.complete ? 'todo-list__todo todo-list__todo_strike' : 'todo-list__todo'}>
      {todo.task}
    </div>
  )
};

export default Todo;
