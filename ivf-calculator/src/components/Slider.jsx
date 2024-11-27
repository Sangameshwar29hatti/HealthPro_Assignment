// src/components/Slider.jsx
import React from "react";
import styled from "styled-components";

const Slider = ({ label, min, max }) => {
  return (
    <Container>
      <label>{label}</label>
      <input type="range" min={min} max={max} />
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 16px;

  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
  }
`;

export default Slider;
