import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateTodo, deleteTodo } from "../../actions/todoAction";
import { keyFrame } from "../../common/keyFrame";

const DeleteIcon = styled.img`
  width: 15px;
  text-align: right;
  margin-right: 15px;
  cursor: pointer;
  display: none;
`;
const List = styled.div`
  background: #f9f9f9;
  border-radius: 55px;
  width: 100%;
  height: 45px;
  box-shadow: 4px 6px 11px -5px grey;
  margin: 4px 0px 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${keyFrame} 0.6s ease-in-out 0s;

  p {
    padding: 10px 18px;
    margin: 10px 0px;
  }

  &:hover ${DeleteIcon} {
    display: block;
  }
`;
const Checkbox = styled.img`
  width: 12px;
  cursor: pointer;
`;

const LeftSection = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

const TodoList = (props) => {
  let handleTaskDone = (task) => {
    props.updateTodo(task._id);
  };

  let renderCheckbox = (completed) => {
    return completed ? (
      <Checkbox src="https://res.cloudinary.com/dssa0shmr/image/upload/v1592336347/correct_gnrirw.png" />
    ) : (
      <Checkbox src="https://res.cloudinary.com/dssa0shmr/image/upload/v1592336920/circle_2_m9zpvc.png" />
    );
  };

  let handleDeleteTodo = (task) => {
    props.deleteTodo(task._id);
  };

  return props.todoList.map((todo) => {
    const { completed } = todo;
    return (
      <List key={todo._id}>
        <LeftSection>
          <div onClick={() => handleTaskDone(todo)}>
            {renderCheckbox(completed)}
          </div>
          <p
            style={{
              textDecoration: completed ? "line-through" : "none",
              color: completed ? "grey" : "black",
            }}
          >
            {todo.title}
          </p>
        </LeftSection>
        <DeleteIcon
          onClick={() => handleDeleteTodo(todo)}
          src="https://res.cloudinary.com/dssa0shmr/image/upload/v1592336093/criss-cross_dyrxqa.png"
        ></DeleteIcon>
      </List>
    );
  });
};

const mapStateToProps = (state) => ({
  todoList: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  updateTodo: (id) => dispatch(updateTodo(id)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
