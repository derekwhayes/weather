import "../styles/style.css";


const getWeatherData = async () => {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/kirkland%20il?unitGroup=us&key=AGQMUQ4G92NFY7USK4GUD666K&contentType=json",
  );
  const weatherData = await response.json();
  const weatherObj = processWeatherData(weatherData);
  console.log(weatherObj);
  // displayWeatherData(weatherData);
};

const processWeatherData = (weatherData) => {
  const getDay = (dayNum) => {
    // const d = new Date(weatherData.days[dayNum].datetime);
    // console.log(d);
    // return d.getDay();
    
    return new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(new Date(weatherData.days[dayNum].datetime))
  }

  const weatherObj = {
    address: weatherData.resolvedAddress,
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

const displayWeatherData = (weatherData) => {
  const tHead = document.querySelector("thead");
  const currentTemp = document.querySelector(".temp");
  const currentFeelsLike = document.querySelector(".feels-like");
  const currentConditions = document.querySelector(".conditions");

  tHead.innerText = weatherData.resolvedAddress;
  currentTemp.innerText = weatherData.currentConditions.temp;
  currentFeelsLike.innerText = weatherData.currentConditions.feelslike;
  currentConditions.innerText = weatherData.currentConditions.conditions;

  if (weatherData.currentConditions.snowdepth > 0) {

  }
};

getWeatherData();
