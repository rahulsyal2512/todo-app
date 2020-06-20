import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../constants";

const getTodoFromStorage = JSON.parse(localStorage.getItem("todo"));

const state = getTodoFromStorage || [];

const todos = (initialState = state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...initialState,
        {
          _id: action._id,
          title: action.title,
          completed: false,
        },
      ];
    case UPDATE_TODO:
      return initialState.map((todo) => {
        return todo._id === action._id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    case DELETE_TODO:
      return initialState.filter((todo) => !(todo._id === action._id));
    default:
      return initialState;
  }
};

export default todos;
