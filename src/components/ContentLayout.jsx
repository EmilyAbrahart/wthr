import React from 'react';
import styled from 'styled-components';
import { FlexFunc, tablet } from '../styles/styles';
import Form from './Form';
import Weather from './Weather';

const ContentLayout = ({
  getWeather,
  city,
  country,
  weather,
  setUnits,
  units,
  isLoading,
  active,
  setActive,
  error,
  searchCity,
  setSearchCity,
  searchCountry,
  setSearchCountry,
  missingQuery,
  formVisible,
  setFormVisible,
  weatherUnits,
  setWeatherUnits
}) => {
  return (
    <ContentLayoutContainer>
     
      <Form
        getWeather={getWeather}
        setUnits={setUnits}
        units={units}
        searchCity={searchCity}
        searchCountry={searchCountry}
        setSearchCity={setSearchCity}
        setSearchCountry={setSearchCountry}
        formVisible={formVisible}
        setFormVisible={setFormVisible}
        setWeatherUnits={setWeatherUnits}
      />
      <Weather
        weather={weather}
        city={city}
        country={country}
        isLoading={isLoading}
        units={units}
        active={active}
        setActive={setActive}
        error={error}
        missingQuery={missingQuery}
        weatherUnits={weatherUnits}
      />
    </ContentLayoutContainer>
  );
};

export default ContentLayout;

const ContentLayoutContainer = styled.div`
  ${FlexFunc('row', 'center', 'center')}
  width: 80%;
  height: 70%;
  max-height: 70vh;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryTextColor};
  position: relative;

  @media ${tablet} {
    ${FlexFunc('column', 'center', 'center')};
    max-height: initial;
    height: 100%;
    width: 100%;
    max-width: 90%;
  }
`;


