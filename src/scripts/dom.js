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
    const tempNow = document.querySelector(".tempNum");
    const snowDepthNum = document.querySelector(".snow-depth-num");
    const maxTempToday = document.querySelector(".max-temp-num");
    const minTempToday = document.querySelector(".min-temp-num");

    location.innerHTML = weatherObj.address;

    // set to appropriate icon
    iconNow.setAttribute("src", setIcon(weatherObj.today.icon));
    tempNow.textContent = weatherObj.today.temp;
    snowDepthNum.textContent  = weatherObj.today.snowDepth

    
}

const setIcon = (icon) => {
    switch(icon) {
        case "clear-day":
            return clearDay;
        case "clear-night":
            return clearNight;
        case "cloudy":
            return cloudy;
        case "fog":
            return fog;
        case "hail":
            return hail;
        case "partly-cloudy-day":
            return partlyCloudyDay;
        case "partly-cloudy-night":
            return partlyCloudyNight;
        case "rain-snow-showers-day":
            return rainSnowShowersDay;
        case "rain-snow-showers-night":
            return rainSnowShowersNight;
        case "rain-snow":
            return rainSnow;
        case "rain":
            return rain;
        case "showers-day":
            return showersDay;
        case "showers-night":
            return showersNight;
        case "sleet":
            return sleet;
        case "snow-showers-day":
            return snowShowersDay;
        case "snow-showers-night":
            return snowShowersNight;
        case "snow":
            return snow;
        case "thunder-rain":
            return thunderRain;
        case "thunder-showers-day":
            return thunderShowersDay;
        case "thunder-showers-night":
            return thunderShowersNight;
        case "thunder":
            return thunder;
        case "wind":
            return wind;
        default:
            return "undefined";
    }
}

export { displayWeatherData }