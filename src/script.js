function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "292929ff665169ef5a98dcc8cc29979a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Washington DC&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(displayTemperature);
