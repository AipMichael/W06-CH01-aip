import momReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const { createStore, applyMiddleware } = require("redux");

const configureStore = (initialValues) => {
  return createStore(
    momReducer,
    initialValues,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default configureStore;
