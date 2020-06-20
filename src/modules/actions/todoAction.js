import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../constants";

export const addTodo = (title, id) => ({
  type: ADD_TODO,
  _id: id,
  title,
});

export const updateTodo = (_id) => ({
  type: UPDATE_TODO,
  _id,
});

export const deleteTodo = (_id) => ({
  type: DELETE_TODO,
  _id,
});
