import React, { useState } from "react";
import { useEffect } from "react";


const WeatherCard = ({ tempInfo }) => {

  const [weatherState, setWeatherState] = useState("");

  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset
  } = tempInfo;

  let sec = sunset;
  let date = new Date(sec * 100);
  // let ampm = 12 ? 'pm' : 'am';
  // console.log(ampm);
  let timestr = `${date.getHours()}:${date.getMinutes()}`;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
          case "Wind":
          setWeatherState("wi-windy");
          break;
          case "Mist":
          setWeatherState("wi-dust");
          break;
          

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }

  }, [weathermood])

  return (
    <>
      <article className='widget'>
        <div className='weatherIcon'>
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className='weatherInfo'>
          <div className='temperature'>
            <span>{temp}&#x2103;</span>
          </div>
          <div className='description'>
            <div className='weatherCondition'>
              {weathermood}
            </div>
            <div className='place'>
              {name},{country}
            </div>
          </div>
        </div>
        <div className='date'>
          {new Date().toLocaleString()}
        </div>

        {/* our four colomn section */}
        <div className='extra-temp'>

          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p><i className='wi wi-day-sunny'></i></p>
              <p className='extra-info-leftside'>
                {timestr} PM<br />
                Sunset
              </p>
            </div>
            <div className='two-sided-section'>
              <p><i className={"wi wi-humidity"}></i></p>
              <p className='extra-info-leftside'>
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className='weather-extra-info'>
            <div className='two-sided-section'>
              <p><i className={"wi wi-rain"}></i></p>
              <p className='extra-info-leftside'>
                {pressure} <br />
                Pressure
              </p>
            </div>
            <div className='two-sided-section'>
              <p><i className={"wi wi-strong-wind"}></i></p>
              <p className='extra-info-leftside'>
                {speed}<br />
                Speed
              </p>
            </div>
          </div>

        </div>

      </article>
    </>
  )
}
export default WeatherCard