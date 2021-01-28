import React from "react";
import styled from "styled-components";
import { CITIES } from "../../services/consts";

const QuickOptionsWrapper = styled.div`
  width: 350px;
  margin: 10px auto;
  display: flex;
  border-radius: 10px;
  border: 5px solid ${({ theme }) => theme.quickOptionsBorder};
  box-shadow: 0 3px 15px ${({ theme }) => theme.quickOptionsShadow};
`;

const QuickOptionsButton = styled.button`
  flex: 1 1 auto;
  padding: 10px;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 400;
  background: ${({ theme }) => theme.buttonBackground}
    ${({ theme }) => theme.buttonBackgroundGradientLight};
  color: ${({ theme }) => theme.buttonText};
  border: 0;
  outline: 0;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background: ${({ theme }) => theme.buttonBackground}
      ${({ theme }) => theme.buttonBackgroundGradientDark};
  }

  &:first-child {
    border-radius: 5px 0 0 5px;
  }

  &:not(:first-child) {
    border-left: 1px solid ${({ theme }) => theme.buttonBorder};
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
  }
`;

const QuickOptions = ({ onClick }) => (
  <QuickOptionsWrapper>
    {CITIES.map((city) => (
      <QuickOptionsButton key={city.name} onClick={() => onClick(city)}>
        {city.name}
      </QuickOptionsButton>
    ))}
  </QuickOptionsWrapper>
);

export default QuickOptions;
