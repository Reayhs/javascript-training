async function api() {
  // const res = await ((await fetch("https://restcountries.com/v3.1/all"))).json()
  // getCountry(res)
  const url = await fetch("https://restcountries.com/v3.1/all");
  const res = await url.json();
  getCountry(res);
}

// function getCountry(element) {
//   for (let data of element) {
//   }
// }

function getCountry(element) {
  element.forEach((data) => {
    let countryName = data.name.common;
    let countryCapital = data.capital;
    let countryFlags = data.flags.png;
    let countryPopulation = data.population;
    create(countryName, countryCapital, countryFlags, countryPopulation);
  });
}

function create(name, capital, flag, population) {
  let li = document.createElement("li");
  document.querySelector("ul").appendChild(li);
  li.innerHTML = `
<h1>${name}</h1>
<h2>${capital}</h2>
<img src="${flag}">
<h2>Population: ${population}</h2>
`;
}

api();
