// import { useState, useEffect, useRef } from "react"


// import "./weather.scss"
// import WeatherSun from "../../assets/svg/weather-sun.svg"
// import WeatherCloud from "../../assets/svg/weather-cloud.svg"
// import WeatherWint from "../../assets/svg/weather-wint.svg"
// import WeatherSunIcon from "../../assets/svg/weather-sun-icon.svg"
// import axios from "axios"


// function Weather() {
//     const [data, setGetData] = useState([])

//     useEffect(() => {
//         axios('https://api.openweathermap.org/data/2.5/weather?q=andijon&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c')
//             .then((res) => setGetData(res.data))
//     }, [])


//     return (
//         <section className="weather-section">
//             <div className="container">
//                 <div className="weather-wrapper">

//                     {
//                         data?.map((item) => {
//                             <div className="weather-card">

//                                 <div className="weather-card_header">
//                                     <div className="weather-sun">
//                                         <img className="weather-sun-img" src={WeatherSun} alt="Sun" />
//                                     </div>
//                                     <div className="weather-c">
//                                         <h2 className="weather-c_h2">35°</h2>
//                                         <h4 className="weather-c_h4">Sunny</h4>
//                                     </div>
//                                 </div>

//                                 <div className="weather-card_hero">
//                                     <div className="weather-card_wint">
//                                         <img src={WeatherWint} alt="Icon" />
//                                         <h4 className="weather-card_wint_h4">16 km/h</h4>
//                                     </div>
//                                     <div className="weather-card_cloud">
//                                         <img src={WeatherCloud} alt="Icon" />
//                                         <h4 className="weather-card_cloud_h4">83 %</h4>
//                                     </div>
//                                     <div className="weather-card_Isun">
//                                         <img src={WeatherSunIcon} alt="Icon" />
//                                         <h4 className="weather-card_Isun_h4">2 of 10</h4>
//                                     </div>

//                                 </div>
//                             </div>
//                         })
//                     }
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Weather

import React, { useState, useEffect, useRef } from "react";
import "./weather.scss";
import WeatherSun from "../../assets/svg/weather-sun.svg";
import WeatherCloud from "../../assets/svg/weather-cloud.svg";
import WeatherWint from "../../assets/svg/weather-wint.svg";
import WeatherSunIcon from "../../assets/svg/weather-sun-icon.svg";
import axios from "axios";

function Weather() {
    const [data, setData] = useState([]);
    const time = new Date().getHours();
    const card = useRef()

    useEffect(() => {
        axios('https://api.openweathermap.org/data/2.5/weather?q=andijon&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c')
            .then((res) => setData([res.data]))
        }, []);

       useEffect(() => {
        if (time >= 19 || time <= 5) {
            card.current?.classList.add('card-dark')
        } else {
            card.current?.classList.remove('card-dark')
        }
       }, [])

    return (
        <section className="weather-section">
            <div className="container">
                <div className="weather-wrapper">
                    {
                        data.map((item) => (
                            <div className="weather-card" ref={card} key={item.id}>
                                <div className="weather-card_header">
                                    <div className="weather-sun">
                                        <img className="weather-sun-img" src={WeatherSun} alt="Sun" />
                                    </div>
                                    <div className="weather-c">
                                        <h2 className="weather-c_h2 c_h2-dark">{item.main.temp}°</h2>
                                        <h4 className="weather-c_h4 c_h4-dark">{item.weather[0].description}</h4>
                                    </div>
                                </div>
                                <div className="weather-card_hero">
                                    <div className="weather-card_wint">
                                        <img className="weather-wint_icon" src={WeatherWint} alt="Icon" />
                                        <h4 className="weather-card_wint_h4">{item.wind.speed} km/h</h4>
                                    </div>
                                    <div className="weather-card_cloud">
                                        <img src={WeatherCloud} alt="Icon" />
                                        <h4 className="weather-card_cloud_h4">{item.clouds.all} %</h4>
                                    </div>
                                    <div className="weather-card_Isun">
                                        <img src={WeatherSunIcon} alt="Icon" />
                                        <h4 className="weather-card_Isun_h4">2 of 10</h4>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                </div>
            </div>
        </section>
    )
}

export default Weather