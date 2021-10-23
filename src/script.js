function formatDate(timestamp) {
  return "Saturday 04:43 pm";
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "292929ff665169ef5a98dcc8cc29979a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Washington DC&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(displayTemperature);
