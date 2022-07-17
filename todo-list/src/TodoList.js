import React from "react";

import Todo from "./Todo";

const TodoList = ({todoList, handleToggle, handleFilter}) => {
  return (
    <div className='todo-list'>
      {todoList.map(todo => {
        return (
          <Todo todo={todo} handleToggle={handleToggle} />
        )
      })}
      <button onClick={handleFilter} className='todo-list__clear-button'>Clear Completed Tasks</button>
    </div>
  )
};

export default TodoList;
