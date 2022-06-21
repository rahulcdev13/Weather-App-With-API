import React, { useEffect, useState } from 'react'
import "./Style.css"
import WeatherCard from './WeatherCard';

const Weather = () => {
    const [searchValue, setSearchValue] = useState("Pune");
    const [tempInfo, setInfoTemp] = useState({});

    const Evenetvalue = (event) => {
        setSearchValue(event.target.value);
    }
    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=fe1b7ab51f89a40908484415ab8bd322`;
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myNewWeather = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset
            };
            setInfoTemp(myNewWeather);
            console.log("data is here ",myNewWeather);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input
                        type="search"
                        id="search"
                        placeholder='Search..'
                        autoFocus
                        className='searchTerm'
                        value={searchValue}
                        onChange={Evenetvalue}

                    />
                    <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
                </div>
            </div>

            {/* Our weather Card */}
            <WeatherCard tempInfo={tempInfo} />

        </>
    )
}

export default Weather 