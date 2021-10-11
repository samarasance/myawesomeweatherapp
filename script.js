let apiKey = "292929ff665169ef5a98dcc8cc29979a";

function updateTime(date) {
  let currentHour = date.getHours();
  let currentMinute = date.getMinutes();
  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
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
  let currentDay = days[dayIndex];

  return `${currentDay}, ${currentHour}:${currentMinute}`;
}

function searchCity(event) {
  event.preventDefault();
  let cityResults = document.querySelector("#city");
  let searchInput = document.querySelector("#btn btn-primary");

  cityResults.innerHTML = searchInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

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
  tempDisplay.innerHTML = `${theTemp}°`

  let description = document.querySelector("#today-description");
  description.innerHTML = response.data.weather[0].description;
