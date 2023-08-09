import "./weather.scss"
import WeatherSun from "../../assets/svg/weather-sun.svg"
import WeatherCloud from "../../assets/svg/weather-cloud.svg"
import WeatherWint from "../../assets/svg/weather-wint.svg"
import WeatherSunIcon from "../../assets/svg/weather-sun-icon.svg"

function Weather() {

    return (
        <section className="weather-section">
            <div className="container">
                <div className="weather-wrapper">
                    <div className="weather-card">

                        <div className="weather-card_header">
                            <div className="weather-sun">
                                <img className="weather-sun-img" src={WeatherSun} alt="Sun" />
                            </div>
                            <div className="weather-c">
                                <h2 className="weather-c_h2">35°</h2>
                                <h4 className="weather-c_h4">Sunny</h4>
                            </div>
                        </div>

                        <div className="weather-card_hero">
                            <div className="weather-card_wint">
                                <img src={WeatherWint} alt="Icon" />
                                <h4 className="weather-card_wint_h4">16 km/h</h4>
                            </div>
                            <div className="weather-card_cloud">
                                <img src={WeatherCloud} alt="Icon" />
                                <h4 className="weather-card_cloud_h4">83 %</h4>
                            </div>
                            <div className="weather-card_Isun">
                                <img src={WeatherSunIcon} alt="Icon" />
                                <h4 className="weather-card_Isun_h4">2 of 10</h4>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Weather