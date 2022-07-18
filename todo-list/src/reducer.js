const initialState = [];

function getNextTaskId(todoList) {
  let taskId = 1;
  while (true) {
    // eslint-disable-next-line no-loop-func
    let sameIdTasks = todoList.filter(task => task.id === taskId);
    
    if (sameIdTasks.length === 0) {
      break;
    }
    
    taskId += 1;
  }
  return taskId;
}

function todosReduser(state = initialState, action) {
  switch (action.type) {
    case 'todos/toggleTask': {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        
        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    }
    case 'todos/clearCompleted': {
      return state.filter((todo) => !todo.complete);
    }
    case 'todos/addTask': {
      return [
        ...state,
        {
          id: getNextTaskId(state),
          task: action.payload,
          complete: false,
        }
      ]
    }
    default: {
      return state;
    }
  }
}

export default todosReduser;
