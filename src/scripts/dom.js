const displayWeatherData = (weatherObj) => {
    console.log(weatherObj);
    const location = document.querySelector(".location");

    location.innerHTML = weatherObj.address
}

export { displayWeatherData }