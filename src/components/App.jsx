import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { ThemeProvider } from 'styled-components';
import ContentLayout from './ContentLayout';
import { FlexFunc, tablet, darkTheme, lightTheme, Sun, Moon, mobile } from '../styles/styles';

function App() {
  const [weather, setWeather] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [units, setUnits] = useState('metric');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const [active, setActive] = useState('one');
  const [searchCity, setSearchCity] = useState('');
  const [searchCountry, setSearchCountry] = useState('');
  const [missingQuery, setMissingQuery] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [weatherUnits, setWeatherUnits] = useState('');
  const [dark, setDark] = useState(false);

  const getWeather = (e) => {
    e.preventDefault();
    setMissingQuery(false);
    setError('');

    if (searchCity && searchCountry) {
      setIsLoading(true);

      if (units === 'metric') {
        setWeatherUnits('metric');
      } else {
        setWeatherUnits('imperial');
      }
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity},${searchCountry}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=${units}`;

      axios
        .get(url)
        .then((res) => {
          setData(res);
          setFormVisible(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    } else {
      setMissingQuery(true);
      setIsLoading(false);
      setFormVisible(true);
    }
  };

  useEffect(() => {
    if (data) {
      setCity(data.data.city.name);
      setCountry(data.data.city.country);

      setWeather({
        one: {
          date: data.data.list[0].dt_txt,
          general: data.data.list[0].weather[0].main,
          description: data.data.list[0].weather[0].description,
          icon: data.data.list[0].weather[0].icon,
          temp: data.data.list[0].main.temp,
          temp_feel: data.data.list[0].main.feels_like,
          humidity: data.data.list[0].main.humidity,
          wind_speed: data.data.list[0].wind.speed,
        },
        two: {
          date: data.data.list[8].dt_txt,
          general: data.data.list[8].weather[0].main,
          description: data.data.list[8].weather[0].description,
          icon: data.data.list[8].weather[0].icon,
          temp: data.data.list[8].main.temp,
          temp_feel: data.data.list[8].main.feels_like,
          humidity: data.data.list[8].main.humidity,
          wind_speed: data.data.list[8].wind.speed,
        },
        three: {
          date: data.data.list[16].dt_txt,
          general: data.data.list[16].weather[0].main,
          description: data.data.list[16].weather[0].description,
          icon: data.data.list[16].weather[0].icon,
          temp: data.data.list[16].main.temp,
          temp_feel: data.data.list[16].main.feels_like,
          humidity: data.data.list[16].main.humidity,
          wind_speed: data.data.list[16].wind.speed,
        },
        four: {
          date: data.data.list[24].dt_txt,
          general: data.data.list[24].weather[0].main,
          description: data.data.list[24].weather[0].description,
          icon: data.data.list[24].weather[0].icon,
          temp: data.data.list[24].main.temp,
          temp_feel: data.data.list[24].main.feels_like,
          humidity: data.data.list[24].main.humidity,
          wind_speed: data.data.list[24].wind.speed,
        },
        five: {
          date: data.data.list[32].dt_txt,
          general: data.data.list[32].weather[0].main,
          description: data.data.list[32].weather[0].description,
          icon: data.data.list[32].weather[0].icon,
          temp: data.data.list[32].main.temp,
          temp_feel: data.data.list[32].main.feels_like,
          humidity: data.data.list[32].main.humidity,
          wind_speed: data.data.list[32].wind.speed,
        },
      });

      setIsLoading(false);
    }
  }, [data]);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <AppContainer>
        <ThemeButton onClick={() => setDark(!dark)}>{dark ? <Sun /> : <Moon />}</ThemeButton>
        <ContentLayout
          weather={weather}
          city={city}
          country={country}
          getWeather={getWeather}
          setUnits={setUnits}
          units={units}
          isLoading={isLoading}
          active={active}
          setActive={setActive}
          error={error}
          searchCity={searchCity}
          setSearchCity={setSearchCity}
          searchCountry={searchCountry}
          setSearchCountry={setSearchCountry}
          missingQuery={missingQuery}
          formVisible={formVisible}
          setFormVisible={setFormVisible}
          weatherUnits={weatherUnits}
          setWeatherUnits={setWeatherUnits}
          setDark={setDark}
          dark={dark}
        />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  background-position: fixed;
  ${FlexFunc('column', 'center', 'center')};
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  @media ${tablet} {
    max-height: initial;
    height: auto;
    padding-top: 5rem;
  }
`;
const ThemeButton = styled.button`
  color: ${(props) => props.theme.primaryColor};
  background: ${(props) => props.theme.primaryColor};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.accentColor};
  margin: 1rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  position: absolute;
  top: 1rem;
  left: 1rem;
  ${FlexFunc('column', 'center', 'center')};

  svg {
    height: 1.5rem;
    fill: ${(props) => props.theme.accentColor};
  }

  @media ${mobile} {
    top: 0.5rem;
    left: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    svg {
      height: 1rem;
    }
  }

  &:hover {
    background: ${(props) => props.theme.accentColor};
    svg {
      fill: ${(props) => props.theme.primaryColor};
    }
  }
`;
