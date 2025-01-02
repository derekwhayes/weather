import clearDay from "../images/clear-day.png";
import clearNight from "../images/clear-night.png";
import cloudy from "../images/cloudy.png";
import fog from "../images/fog.png";
import hail from "../images/hail.png";
import partlyCloudyDay from "../images/partly-cloudy-day.png";
import partlyCloudyNight from "../images/partly-cloudy-night.png";
import rainSnowShowersDay from "../images/rain-snow-showers-day.png";
import rainSnowShowersNight from "../images/rain-snow-showers-night.png";
import rainSnow from "../images/rain-snow.png";
import rain from "../images/rain.png";
import showersDay from "../images/showers-day.png";
import showersNight from "../images/showers-night.png";
import sleet from "../images/sleet.png";
import snowShowersDay from "../images/snow-showers-day.png";
import snowShowersNight from "../images/snow-showers-night.png";
import snow from "../images/snow.png";
import thunderRain from "../images/thunder-rain.png";
import thunderShowersDay from "../images/thunder-showers-day.png";
import thunderShowersNight from "../images/thunder-showers-night.png";
import thunder from "../images/thunder.png";
import wind from "../images/wind.png";

const displayWeatherData = (weatherObj) => {
    console.log(weatherObj);
    const location = document.querySelector(".location");
    const iconNow = document.querySelector(".icon-now");
    const tempNow = document.querySelector(".tempNum")

    location.innerHTML = weatherObj.address

    // set to appropriate icon
    iconNow.setAttribute("src", setIcon(weatherObj.today.icon));

    tempNow.textContent = weatherObj.today.temp
}

const setIcon = (icon) => {
    switch(icon) {
        case "snow":
            return snow;
    }
}

export { displayWeatherData }