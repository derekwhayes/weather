import "../styles/style.css";
import {displayWeatherData} from "./dom.js";

const getWeatherData = async () => {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/kirkland%20il?unitGroup=us&key=AGQMUQ4G92NFY7USK4GUD666K&contentType=json",
  );
  const weatherData = await response.json();
  const weatherObj = processWeatherData(weatherData);
  displayWeatherData(weatherObj);
};

const processWeatherData = (weatherData) => {
  const weatherObj = {
    address: (weatherData.resolvedAddress).slice(0, (weatherData.resolvedAddress).lastIndexOf(',')),
    alerts: weatherData.alerts,
    today: {
      maxTemp: Math.round(weatherData.days[1].feelslikemax),
      minTemp: Math.round(weatherData.days[1].feelslikemin),
      temp: Math.round(weatherData.days[1].feelslike),
      precip: weatherData.days[1].precip,
      snowDepth: weatherData.days[1].snowdepth,
      icon: weatherData.days[1].icon
    },
    day2: {
      date: new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(new Date(weatherData.days[2].datetime)),
      maxTemp: Math.round(weatherData.days[2].feelslikemax),
      minTemp: Math.round(weatherData.days[2].feelslikemin),
      icon: weatherData.days[2].icon
    },
    day3: {
      date: new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(new Date(weatherData.days[3].datetime)),
      maxTemp: Math.round(weatherData.days[3].feelslikemax),
      minTemp: Math.round(weatherData.days[3].feelslikemin),
      icon: weatherData.days[2].icon
    },
    day4: {
      date: new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(new Date(weatherData.days[4].datetime)),
      maxTemp: Math.round(weatherData.days[4].feelslikemax),
      minTemp: Math.round(weatherData.days[4].feelslikemin),
      icon: weatherData.days[2].icon
    }
  }

  return weatherObj;

}

getWeatherData();