import { createStore, combineReducers } from "redux";
// import promiseMiddleware from "redux-promise-middleware";
import reducer from './reducer'

const rootReducer = combineReducers({
  reducer
});

export default createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);