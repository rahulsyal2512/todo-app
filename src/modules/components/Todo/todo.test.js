import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../../constants";
import { v4 as uuidv4 } from "uuid";
import { addTodo, updateTodo, deleteTodo } from "../../actions/todoAction";
import todos from "../../reducers/todoReducer";

describe("Action Testing", () => {
  it("Add a todo action", () => {
    const title = "Add task to the list";
    const id = uuidv4();
    const expectedAction = {
      _id: id,
      type: ADD_TODO,
      title,
    };
    expect(addTodo(title, id)).toEqual(expectedAction);
  });

  it("Update a todo action", () => {
    const id = uuidv4();
    const expectedAction = {
      _id: id,
      type: UPDATE_TODO,
    };
    expect(updateTodo(id)).toEqual(expectedAction);
  });

  it("Delete a todo action", () => {
    const id = uuidv4();
    const expectedAction = {
      _id: id,
      type: DELETE_TODO,
    };
    expect(deleteTodo(id)).toEqual(expectedAction);
  });
});

describe("Reducer Testing", () => {
  it("Add a Todo", () => {
    const id = uuidv4();
    expect(
      todos([], {
        type: ADD_TODO,
        title: "Adding a new task",
        _id: id,
      })
    ).toEqual([
      {
        title: "Adding a new task",
        completed: false,
        _id: id,
      },
    ]);
  });

  it("Update a Todo", () => {
    const id = uuidv4();
    const initialState = [
      {
        title: "Updating a new task",
        _id: id,
        completed: false,
      },
    ];
    expect(
      todos(initialState, {
        type: UPDATE_TODO,
        _id: id,
      })
    ).toEqual([
      {
        title: "Updating a new task",
        _id: id,
        completed: true,
      },
    ]);
  });

  it("Deleting a Todo", () => {
    const id = uuidv4();
    const initialState = [
      {
        title: "Deleting a new task",
        _id: id,
        completed: false,
      },
    ];
    expect(
      todos(initialState, {
        type: DELETE_TODO,
        _id: id,
      })
    ).toEqual([]);
  });
});
