import "../styles/style.css";


const getWeatherData = async () => {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/kirkland%20il?unitGroup=us&key=AGQMUQ4G92NFY7USK4GUD666K&contentType=json",
  );
  const weatherData = await response.json();
  displayWeatherData(weatherData);
};

const displayWeatherData = (weatherData) => {
  const tHead = document.querySelector("thead");
  const currentTemp = document.querySelector(".temp");
  const currentFeelsLike = document.querySelector(".feels-like");
  const currentConditions = document.querySelector(".conditions");

  tHead.innerText = weatherData.resolvedAddress;
  currentTemp.innerText = weatherData.currentConditions.temp;
  currentFeelsLike.innerText = weatherData.currentConditions.feelslike;
  currentConditions.innerText = weatherData.currentConditions.conditions;
};

getWeatherData();
