const api = "https://api.openweathermap.org/data/2.5/";
const key = "f7561d95f15925e0d16fefaf8ea215a5";

const searchBar = document.querySelector(".searchBar");

function setQuery(e) {
  if (e.keyCode == "13") {
    getApi(searchBar.value);
  }
}

async function getApi(cityName) {
  let query = `${api}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
  let url = await fetch(query);
  let res = await url.json();
  console.log(res)
  create(res);
}

function create(data) {
  let city = document.querySelector(".city");
  city.innerText = `${data.name}, ${data.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(data.main.temp)}°C`;

  let desc = document.querySelector(".desc");
  desc.innerText = `${data.weather[0].description}`;

  let minmax = document.querySelector(".minmax");
  minmax.innerText = `${Math.round(data.main.temp_min)}°C / ${Math.round(
    data.main.temp_max
  )}°C  `;
}

searchBar.addEventListener("keypress", setQuery);
