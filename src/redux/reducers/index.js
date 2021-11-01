import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const momReducer = combineReducers({
  todoReducer,
});

export default momReducer;
