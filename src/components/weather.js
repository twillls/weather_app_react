import React from 'react';
import { Card } from 'semantic-ui-react';

const options = { hour: "2-digit", minute: "2-digit"}

const CardExampleCard = ({weatherData}) => (
  <Card>
    <Card.Content>
      <Card.Header className="header">{weatherData.name}</Card.Header>
      <p>Temperture: {weatherData.main.temp}&deg;C</p>
      <p>Feels like: {weatherData.main.feels_like}&deg;C</p>
      <p>Humidity: {weatherData.main.humidity}</p>
      <p>Max Temp: {weatherData.main.temp_max}&deg;C</p>
      <p>Min Temp: {weatherData.main.temp_min}&deg;C</p>
      <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-ca', options)}</p>
      <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-ca', options)}</p>
      <p>Description: {weatherData.weather[0].description}</p>
      <p>Wind: {weatherData.wind.speed}</p>
    </Card.Content>
  </Card>
)

export default CardExampleCard;