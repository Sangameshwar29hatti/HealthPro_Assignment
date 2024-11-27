// src/components/InputScreen.jsx
import React from "react";
import styled from "styled-components";
import Slider from "./Slider";
import RadioGroup from "./RadioGroup";
import { useNavigate } from "react-router-dom";

const InputScreen = () => {
  const navigate = useNavigate();

  const handleCalculate = () => {
    navigate("/result");
  };

  return (
    <Container>
      <h1>IVF Success Calculator</h1>
      <form>
        <Slider label="Age" min={18} max={50} />
        <RadioGroup
          label="Previous Pregnancy"
          options={["Yes", "No"]}
          name="pregnancy"
        />
        <Button onClick={handleCalculate}>Calculate</Button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
  max-width: 500px;
  margin: auto;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 20px;
  width: 100%;
`;

export default InputScreen;
