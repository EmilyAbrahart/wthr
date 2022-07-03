import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { FlexFunc } from '../styles/styles';

const WeatherDayUnit = ({ weather, weatherUnits, day, setActive, active }) => {
  return (
    <WeatherUnit onClick={() => setActive(day)} active={active} day={day}>
      <UnitTitle>{day === 'one' ? 'Today' : moment(weather[day].date).format('dddd')}</UnitTitle>
      <UnitTemp>
        {Math.round(weather[day].temp)}
        {weatherUnits === 'metric' ? <span>&deg;C</span> : <span>&deg;F</span>}
      </UnitTemp>
      <img src={`https://openweathermap.org/img/wn/${weather[day].icon}@2x.png`} alt="" />
    </WeatherUnit>
  );
};

export default WeatherDayUnit;

const WeatherUnit = styled.div`
${FlexFunc('column', 'center', 'space-evenly')}
cursor: ${props => (props.active === props.day ? 'default' : 'pointer')};
background-color: ${props => (props.active === props.day ? props.theme.accentColor : 'none')};
  color: ${props => (props.active === props.day? props.theme.primaryColor : props.theme.accentColor)};
  /* box-shadow: ${props => (props.active === props.day ? 'inset 0 3px 8px #000' : 'none')}; */
  padding: 1rem;
`;

const UnitTitle = styled.div`
  font-weight: bold;
`;
const UnitTemp = styled.div`
  opacity: 70%;
`;
