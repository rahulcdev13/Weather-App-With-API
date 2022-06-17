import React, { useEffect, useState } from 'react'
import "./Style.css"

const Weather = () => {
    const [searchValue,setSearchValue] = useState("Pune");

    const Evenetvalue = (event) =>{
        setSearchValue(event.target.value);
    }
    const getWeatherInfo = async()=>{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=fe1b7ab51f89a40908484415ab8bd322`;

             const res = await fetch (url);
             const data = await res.json();   
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getWeatherInfo();
    },[])
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
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={"wi wi-day-sunny"}></i>
                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>25.6°</span>
                    </div>
                    <div className='description'>
                        <div className='weatherCondition'>
                            Sunny
                        </div>
                        <div className='place'>
                            Pune,India
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
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className='extra-info-leftside'>
                                19:20 PM <br />
                                Sunset
                            </p>
                        </div>
                        <div className='two-sided-section'>
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className='extra-info-leftside'>
                                19:20 PM <br />
                                Humidity
                            </p>
                        </div>
                    </div>

                    <div className='weather-extra-info'>
                        <div className='two-sided-section'>
                            <p><i className={"wi wi-rain"}></i></p>
                            <p className='extra-info-leftside'>
                                19:20 PM <br />
                                Pressure
                            </p>
                        </div>
                        <div className='two-sided-section'>
                            <p><i className={"wi wi-strong-wind"}></i></p>
                            <p className='extra-info-leftside'>
                                19:20 PM <br />
                                Speed
                            </p>
                        </div>
                    </div>

                </div>

            </article>

        </>
    )
}

export default Weather 