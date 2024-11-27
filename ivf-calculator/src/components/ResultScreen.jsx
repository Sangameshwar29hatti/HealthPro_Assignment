// src/components/ResultScreen.jsx
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ResultScreen = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Estimated Success Rate</h1>
      <p>Your IVF success rate is 72%.</p>
      <Button onClick={() => navigate("/")}>Back</Button>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  margin: auto;
  padding: 16px;
  max-width: 500px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 20px;
`;

export default ResultScreen;
