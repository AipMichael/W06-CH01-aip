import actionTypes from "../actions/actionType";

const todoReducer = (kitten, action) => {
  let newTodo; // las funciones las aplico a newGentlemen: modifico gentlemen y lo asigno a newGentlmen

  switch (action.type) {
    // le paso los nombres de las funciones por cases
    // dentro pongo lo que quiero que haga la función
    // default: throw error o que envie el estado tal cual
    case actionTypes.load:
      newTodo = [...action.kitten];
      break;
    case actionTypes.create:
      newTodo = [...kitten, action.kitty];
      break;
    case actionTypes.delete:
      newTodo = kitten.filter((kitty) => kitty.id !== action.id);
      break;
    default:
  }

  return newTodo;
};

export default todoReducer;
