import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import todosReducer from './reducer'

const composedEnhancer = composeWithDevTools(
  applyMiddleware()
)

const store = createStore(todosReducer, composedEnhancer);

export default store;
