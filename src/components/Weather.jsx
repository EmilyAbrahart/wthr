import React from 'react';
import styled from 'styled-components';
import OneDayWeather from './OneDayWeather';
import FiveDayWeather from './FiveDayWeather';
import { FlexFunc, mobile } from '../styles/styles';

const Weather = ({
  city,
  country,
  weather,
  isLoading,
  weatherUnits,
  active,
  setActive,
  error,
  missingQuery,
}) => {
  return (
    // isLoading ? show spinner : error ? show error : weather ? show components : null
    // this ensures that the correct information is displayed at the correct time.

    <Container>
      {isLoading ? (
        <SpinnerDiv>
          <div className="lds-spinner">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </SpinnerDiv>
      ) : missingQuery ? (
        <div>Please enter a city and country.</div>
      ) : error ? (
        <div>No results found for that location.</div>
      ) : weather ? (
        <WeatherContainer>
          <OneDayWeather
            weather={weather}
            weatherUnits={weatherUnits}
            active={active}
            city={city}
            country={country}
          />
          <FiveDayWeather weather={weather} weatherUnits={weatherUnits} setActive={setActive} active={active} />
        </WeatherContainer>
      ) : null}
    </Container>
  );
};

export default Weather;

const Container = styled.div`
  ${FlexFunc('row', 'space-evenly', 'center')}
  max-height: 80vh;
  height: 100%;
  max-width: 100%;
  transition: all 0.5s linear;
  @media ${mobile} {
    ${FlexFunc('column', 'flex-start', 'center')};
    max-height: initial;
    height: auto;
    max-width: 100vh;
  }
`;

const WeatherContainer = styled.div`
  ${FlexFunc('column', 'center', 'center')}
  height: 100%;
  width: 100%;
`;

const SpinnerDiv = styled.div`
  .lds-spinner {
    color: official;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-spinner div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
  }
  .lds-spinner div:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #fff;
  }
  .lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  .lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  .lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  .lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  .lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  .lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  .lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  .lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  .lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  .lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  .lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  .lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
