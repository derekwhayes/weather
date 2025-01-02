import snow from "../images/snow.png";

const displayWeatherData = (weatherObj) => {
    console.log(weatherObj);
    const location = document.querySelector(".location");
    const iconNow = document.querySelector(".icon-now");

    location.innerHTML = weatherObj.address

    // set to appropriate icon
    iconNow.setAttribute("src", setIcon(weatherObj.today.icon));
}

const setIcon = (icon) => {
    switch(icon) {
        case "snow":
            return snow;
    }
}

export { displayWeatherData }