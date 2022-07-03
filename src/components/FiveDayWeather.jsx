import React from 'react';
import styled from 'styled-components';
import WeatherDayUnit from './WeatherDayUnit';
import { FlexFunc } from '../styles/styles';

const FiveDayWeather = ({ weather, units, setActive, active }) => {
  return (
    <WeatherContainer>
      <WeatherDayUnit
        weather={weather}
        units={units}
        setActive={setActive}
        day="one"
        active={active}
      />
      <WeatherDayUnit
        weather={weather}
        units={units}
        setActive={setActive}
        day="two"
        active={active}
      />
      <WeatherDayUnit
        weather={weather}
        units={units}
        setActive={setActive}
        day="three"
        active={active}
      />
      <WeatherDayUnit
        weather={weather}
        units={units}
        setActive={setActive}
        day="four"
        active={active}
      />
      <WeatherDayUnit
        weather={weather}
        units={units}
        setActive={setActive}
        day="five"
        active={active}
      />
    </WeatherContainer>
  );
};

export default FiveDayWeather;

const WeatherContainer = styled.div`
  ${FlexFunc('row', 'space-evenly', 'center')}
  flex-wrap: wrap;
  width: 100%;
  padding: 2rem;
`;
