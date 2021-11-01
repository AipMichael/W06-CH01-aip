import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const momReducer = combineReducers({
  tasks: todoReducer,
});

export default momReducer;
