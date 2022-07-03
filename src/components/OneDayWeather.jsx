import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { FlexFunc, mobile } from '../styles/styles';

const OneDayWeather = ({ weather, weatherUnits, active, city, country }) => {
  return (
    <OneDayWeatherContainer>
      <BannerContainer>
        <Title>
          <h3>{active === 'one' ? 'Today' : moment(weather[active].date).format('dddd')}</h3>
          <p>
            {city}, {country}
          </p>
        </Title>
        <Main>
          {weather[active].icon && (
            <Image>
              <img
                src={`https://openweathermap.org/img/wn/${weather[active].icon}@2x.png`}
                alt=""
              />
            </Image>
          )}
          {weather[active].temp && (
            <Temp>
              {Math.round(weather[active].temp)}
              {weatherUnits === 'metric' ? <span>&deg;C</span> : <span>&deg;F</span>}
            </Temp>
          )}
          <Details>
            {weather[active].temp_feel && (
              <div>
                Feels Like: {Math.round(weather[active].temp_feel)}
                {weatherUnits === 'metric' ? <span>&deg;C</span> : <span>&deg;F</span>}
              </div>
            )}
            {weather[active].humidity && (
              <div>Humidity: {Math.round(weather[active].humidity)}% </div>
            )}
            {weather[active].wind_speed && (
              <div>
                Wind: {Math.round(weather[active].wind_speed)}
                {weatherUnits === 'metric' ? 'm/s' : 'mph'}
              </div>
            )}
          </Details>
        </Main>
      </BannerContainer>
    </OneDayWeatherContainer>
  );
};

export default OneDayWeather;

const OneDayWeatherContainer = styled.div`
  ${FlexFunc('row', 'center', 'center')}
  height: 100%;
  width: 80%;
  padding: 2rem;
  position: relative;
  @media ${mobile} {
    ${FlexFunc('column', 'space-evenly', 'center')};
    max-height: initial;
    height: auto;
    width: 100%;
  }
`;

const Title = styled.div`
  ${FlexFunc('row', 'flex-start', 'baseline')}
  height: 100%;
  letter-spacing: 0.2rem;
  h3 {
    padding-right: 1rem;
  }
  p {
    opacity: 70%;
  }
`;

const Main = styled.div`
  ${FlexFunc('row', 'space-between', 'center')}
  width: 100%;
  @media ${mobile} {
    ${FlexFunc('column', 'space-evenly', 'center')};
  }
`;

const Temp = styled.div`
  font-size: 5rem;
`;

const Details = styled.div`
  ${FlexFunc('column', 'space-evenly', 'flex-end')}
  div {
    padding: 1rem 0;
    letter-spacing: 0.2rem;
  }
  @media ${mobile} {
    text-align: center;
    align-items: center;
  }
`;

const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.div`
  ${FlexFunc('column', 'center', 'center')}
`;
