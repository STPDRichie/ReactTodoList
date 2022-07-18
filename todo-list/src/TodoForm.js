import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const [ userInput, setUserInput ] = useState('');
  
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'todos/addTask', payload: userInput });
    setUserInput('');
  }
  
  return (
    <form onSubmit={handleSubmit} className='add-task'>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder='Enter new task...'
        className='add-task__input'
      />
      <button className='add-task__submit-button'>Submit</button>
    </form>
  )
};

export default TodoForm;
