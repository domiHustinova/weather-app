import styled from "styled-components/macro";

export const Wrapper = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.backgroundWeatherGradient};
  color: ${({ theme }) => theme.textWeather};
`;

export const CityTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  margin: 0 0 20px 0;
`;

export const InnerTopWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const Section = styled.div`
  flex: 0 0 50%;
  text-align: center;
`;

export const IconSection = styled(Section)`
  font-size: 64px;
`;

export const SectionTitle = styled.h3`
  font-size: 13px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  padding: 0 0 5px 0;
  margin: 0 0 5px 0;
`;

export const SectionValue = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
`;

export const SectionTempValue = styled.span`
  font-size: 64px;
  font-weight: 800;
  line-height: 1;
`;

export const SectionTempUnit = styled(SectionTempValue)`
  font-size: 24px;
`;

export const SectionTempDescription = styled.div`
  margin-top: 5px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
`;
