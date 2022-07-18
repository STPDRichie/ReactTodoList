import React from "react";
import { useSelector, useDispatch } from "react-redux";

const selectTodoById = (state, todoId) => {
  return state.find((todo) => todo.id === todoId);
};

const Todo = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id));
  
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch({ type: 'todos/toggleTask', payload: todo.id });
  }
  
  return (
    <div
      id={todo.id}
      key={todo.id + todo.task}
      onClick={handleClick}
      className={todo.complete ?
        'todo-list__todo todo-list__todo_strike' :
        'todo-list__todo'}
    >
      {todo.task}
    </div>
  )
};

export default Todo;
