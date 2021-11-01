import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const momReducer = combineReducers({
  todos: todoReducer,
});

export default momReducer;
