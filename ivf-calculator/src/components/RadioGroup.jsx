// src/components/RadioGroup.jsx
import React from "react";
import styled from "styled-components";

const RadioGroup = ({ label, options, name }) => {
  return (
    <Container>
      <label>{label}</label>
      <div>
        {options.map((option, idx) => (
          <div key={idx}>
            <input type="radio" id={option} name={name} value={option} />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 16px;

  label {
    display: block;
    margin-bottom: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export default RadioGroup;
