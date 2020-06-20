import React, { useState } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import { addTodo, updateTodo } from "../../actions/todoAction";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const Input = styled.input`
  width: 97%;
  border-radius: 4px;
  height: 29px;
  border-color: #e4e4e4;
  padding: 2px 7px;
  margin-bottom: 5px;
`;

const Todo = (props) => {
  const [inputValue, setInputValue] = useState("");

  let handleOnChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  let handleAddTodo = (e) => {
    const { value } = e.target;
    if (e.key === "Enter" && value) {
      props.addTodo(value, uuidv4());
      setInputValue("");
    }
  };

  return (
    <TodoContainer>
      <Input
        placeholder="Enter tasks"
        value={inputValue}
        type="text"
        onChange={handleOnChange}
        onKeyDown={handleAddTodo}
      ></Input>
      <TodoList />
    </TodoContainer>
  );
};

const mapStateToProps = (state) => ({
  todoList: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (value, id) => dispatch(addTodo(value, id)),
  updateTodo: (id) => dispatch(updateTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
