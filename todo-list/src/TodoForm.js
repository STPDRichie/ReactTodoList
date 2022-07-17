import React, { useState } from "react";

const TodoForm = ({addTask}) => {
  const [ userInput, setUserInput ] = useState('');
  
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  }
  
  return (
    <form onSubmit={handleSubmit} className='add-task'>
      <input value={userInput} type="text" onChange={handleChange} placeholder='Enter new task...' className='add-task__input'/>
      <button className='add-task__submit-button'>Submit</button>
    </form>
  )
};

export default TodoForm;
