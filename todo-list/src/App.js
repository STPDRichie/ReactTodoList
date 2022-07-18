import React from "react";

import Header from "./Header";
import TodoList from "./TodoList";

import TodoForm from "./TodoForm";

function App() {
  
  return (
    <div className='app'>
      <Header />
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
