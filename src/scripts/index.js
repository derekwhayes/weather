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
      maxTemp: Math.round(weatherData.days[0].feelslikemax),
      minTemp: Math.round(weatherData.days[0].feelslikemin),
      temp: Math.round(weatherData.currentConditions.feelslike),
      precip: weatherData.days[0].precip,
      precipType: weatherData.days[0].preciptype,
      snowDepth: weatherData.days[0].snowdepth,
      icon: weatherData.currentConditions.icon
    },
    day2: {
      date: new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(new Date(weatherData.days[1].datetime)),
      maxTemp: Math.round(weatherData.days[1].feelslikemax),
      minTemp: Math.round(weatherData.days[1].feelslikemin),
      precip: weatherData.days[1].precip,
      precipType: weatherData.days[1].preciptype,
      icon: weatherData.days[1].icon
    },
    day3: {
      date: new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(new Date(weatherData.days[2].datetime)),
      maxTemp: Math.round(weatherData.days[2].feelslikemax),
      minTemp: Math.round(weatherData.days[2].feelslikemin),
      precip: weatherData.days[2].precip,
      precipType: weatherData.days[2].preciptype,
      icon: weatherData.days[2].icon
    },
    day4: {
      date: new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(new Date(weatherData.days[3].datetime)),
      maxTemp: Math.round(weatherData.days[3].feelslikemax),
      minTemp: Math.round(weatherData.days[3].feelslikemin),
      precip: weatherData.days[3].precip,
      precipType: weatherData.days[3].preciptype,
      icon: weatherData.days[3].icon
    }
  }

  return weatherObj;

}

getWeatherData();