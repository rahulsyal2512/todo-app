import React from "react";
import styled from "styled-components";
import Todo from "../Todo";

const Container = styled.div`
  max-width: 500px;
  border-radius: 4px;
  margin: 0px auto 40px;
`;

const Title = styled.p`
  text-align: center;
  margin: 20px auto;
  font-size: 31px;
  font-weight: 500;
`;

const WrapperComponent = () => {
  return (
    <Container>
      <Title>Todo App</Title>
      <Todo />
    </Container>
  );
};

export default WrapperComponent;
