function updateTime(date) {
  let currentYear = now.getFullYear();
  let currentDay = days[now.getDay()];
  let currentMonth = months[now.getMonth()];
  let currentDate = now.getDate();
  let currentHour = now.getHours();
  let currentMinute = addZero(now.getMinutes());

  if (currentHour >= 12) {
    var timeOfDay = "pm";
  } else {
    var timeOfDay = "am";
  }

  function addZero(x) {
    if (x < 10) {
      x = "0" + x;
    }
    return x;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `${currentDay}, ${currentHour}:${currentMinute}`;
}

function searchCity(city) {
  let apiKey = "292929ff665169ef5a98dcc8cc29979a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#current-city").value;
  searchCity(city);
}

function searchCity(event) {
  event.preventDefault();
  let cityResults = document.querySelector("#current-city");
  let searchInput = document.querySelector("#btn btn-primary");

  cityResults.innerHTML = searchInput.value;
 

function convertToF(event) {
  event.preventDefault();
  let mainTemperature = document.querySelector("#temperature");
  mainTemperature.innerHTML = "68°";
}

function convertToC(event) {
  event.preventDefault();
  let mainTemperature = document.querySelector("#temperature");
  mainTemperature.innerHTML = "23°";
}

let changeTime = document.querySelector("#weather-time-now");
let currentTime = new Date();
changeTime.innerHTML = updateTime(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToF);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToC);

function showTemp(response) {
  let theTemp = Math.round(response.data.main.temp);
  let tempDisplay = document.querySelector("#temperature");
  tempDisplay.innerHTML = `${theTemp}°`;
}

let description = document.querySelector("#today-description");
description.innerHTML = response.data.weather[0].description;

let theWind = Math.round(response.data.wind.speed);
let windDisplay = document.querySelector("#windy");
windDisplay.innerHTML = `Windspeed: ${theWind}`;

function showCity(response) {
  let currentCity = response.data.name;

  let displayCity = document.querySelector("#current-city");
  displayCity.innerHTML = `${currentCity}`;
}


function searchLocation(position) {
  let apiKey = "292929ff665169ef5a98dcc8cc29979a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
    position.coords.latitude
  }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchPosition);


let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentPosition);
}