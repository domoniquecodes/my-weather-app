function showTemperature(response) {
  let todaysWeather = document.querySelector("#todays-weather-value");
  let todaysWeatherValue = Math.round(response.data.temperature.current);
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = response.data.city;
  todaysWeather.innerHTML = todaysWeatherValue;
}

function citySearch(event) {
  event.preventDefault();
  let searchBar = document.querySelector("#search-bar");
  let city = searchBar.value;

  let apiKey = "b78bba14cabt32e0f423fb4886foc395";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", citySearch);

let currentDate = document.querySelector("#current-day-time");
let currentTime = new Date();
let minutes = currentTime.getMinutes();
let hour = currentTime.getHours();
let day = currentTime.getDay();
let subTime = "AM";

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hour > 12) {
  hour = hour - 12;
  subTime = "PM";
} else if (hour === 12) {
  subTime = "PM";
} else if (hour === 0) {
  hour = 12;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let formattedDay = days[day];

currentDate.innerHTML = `${formattedDay} ${hour}:${minutes} ${subTime}`;
