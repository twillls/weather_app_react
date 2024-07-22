import React from 'react';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

const options = { hour: "numeric", minute: "numeric"};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const CardExampleCard = ({weatherData}) => (
  <Card className="weather-card">
    <Card.Content>
      <Card.Header className="weather-card--header">
        <h2>{weatherData.name}</h2>
        <p>{moment().format('dddd')}, {moment().format('LL')}</p>
      </Card.Header>
      <p>{capitalizeFirstLetter(weatherData.weather[0].description)}</p>
      <div className="weather-card--section temps">
        <p>Currently {Math.round(weatherData.main.temp)}&deg;C</p>
        <p>Feels like {Math.round(weatherData.main.feels_like)}&deg;C</p>
      </div>
      <div className="weather-card--section specs">
        <p>{weatherData.main.humidity}% Humidity</p>
        <p>Wind is {weatherData.wind.speed} m/s</p>
      </div>
      <div className="weather-card--section sun">
        <p>Sunrise at {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-ca', options)}</p>
        <p>Sunset at {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-ca', options)}</p>
      </div>
    </Card.Content>
  </Card>
)

export default CardExampleCard;