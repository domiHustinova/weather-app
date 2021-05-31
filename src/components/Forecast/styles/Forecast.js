import styled from "styled-components/macro";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundForecast};
`;

export const DayWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.borderForecast};
  padding: 15px 30px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textForecast};

  &:hover {
    background-color: ${({ theme }) => theme.backgroundForecastHover};
  }
`;

export const Date = styled.div`
  flex: 1;
  font-size: 14px;
`;

export const Icon = styled.div`
  flex: 0 0 30px;
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.iconForecast};
`;

export const Temp = styled.div`
  flex: 0 0 70px;
  text-align: right;
`;
