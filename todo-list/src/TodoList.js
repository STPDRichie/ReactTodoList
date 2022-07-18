import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import Todo from "./Todo";

const selectTodoIds = (state) => state.map((todo) => todo.id);

const TodoList = () => {
  const todoIds = useSelector(selectTodoIds, shallowEqual);
  
  const dispatch = useDispatch();
  
  const clearCompleted = () => {
    dispatch({ type: 'todos/clearCompleted' });
  }
  
  return (
    <div className='todo-list'>
      {
        todoIds.map(todoId => {
          return (
            <Todo key={todoId} id={todoId} />
          )
        })
      }
      <button onClick={clearCompleted} className='todo-list__clear-button'>Clear Completed Tasks</button>
    </div>
  )
};

export default TodoList;
