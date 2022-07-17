import React, { useState } from "react";
import data from './data.json';

import Header from "./Header";
import TodoList from "./TodoList";

import TodoForm from "./TodoForm";

function App() {
  const [ todoList, setTodoList ] = useState(data);
  
  const handleToggle = (id) => {
    let mappedList = todoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
    });
    setTodoList(mappedList);
  }
  
  const handleFilter = () => {
    let filteredList = todoList.filter(task => {
      return !task.complete;
    });
    setTodoList(filteredList);
  }
  
  const addTask = (userInput) => {
    let listCopy = [...todoList];
    
    let taskId = 1;
    while (true) {
      // eslint-disable-next-line no-loop-func
      let sameIdTasks = todoList.filter(task => task.id === taskId);
      
      if (sameIdTasks.length === 0) {
        break;
      }
      
      taskId += 1;
    }
    
    listCopy = [...listCopy, {id: taskId, task: userInput, complete: false}];
    setTodoList(listCopy);
  }
  
  return (
    <div className='app'>
      <Header />
      <TodoList todoList={todoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      <TodoForm addTask={addTask} />
    </div>
  );
}

export default App;
