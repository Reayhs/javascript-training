// MAX DATE 03 07 2021

const api = "https://api.covidtracking.com/v1/us/daily.json";
const input = document.querySelector("#input");

async function getApi() {
  const url = await fetch(api);
  const res = await url.json();
  res.forEach((element) => {
    if (input.value == element.date) {
      document.querySelector(".positive").innerText = `Positive: ${element.positive}`;
      document.querySelector(".negative").innerText = `Negative: ${element.negative}`;
      document.querySelector(".death").innerText = `Death: ${element.death}`;
      document.querySelector(".states").innerText = `States: ${element.states}`
    }
  });
}

function getUrl(e) {
  if (e.keyCode == "13") {
    getApi(input.value);
  }
}

input.addEventListener("keydown", getUrl);


