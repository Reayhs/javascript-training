const api =
  "https://v6.exchangerate-api.com/v6/add656f9085b800369c87348/latest/TRY";

async function getApi() {
  let url = await fetch(api);
  let res = await url.json();
  const TRY = res.conversion_rates.TRY;
  const EUR = TRY / res.conversion_rates.EUR;
  const USD = TRY / res.conversion_rates.USD;
  const GBP = TRY / res.conversion_rates.GBP;
  setData(EUR, USD, GBP);
}

function setData(item1, item2, item3) {
  document.querySelector(".dolar").textContent = item1.toString().slice(0, 6);
  document.querySelector(".euro").textContent = item2.toString().slice(0, 6);
  document.querySelector(".sterlin").textContent = item3.toString().slice(0, 6);
}

getApi();

// function getData() {
//   fetch(api)
//     .then((res) => res.json())
//     .then((data) => {
//       const TRY = data.conversion_rates.TRY;
//       const EUR = TRY / data.conversion_rates.EUR;
//       const USD = TRY / data.conversion_rates.USD;
//       const GBP = TRY / data.conversion_rates.GBP;

//       setData(EUR, USD, GBP);
//     })
//     .catch((err) => console.log(err));
// }

// const setData = (item1, item2, item3) => {
//   document.querySelector(".dolar").textContent = item1.toString().slice(0, 6);
//   document.querySelector(".euro").textContent = item2.toString().slice(0, 6);
//   document.querySelector(".sterlin").textContent = item3.toString().slice(0, 6);
// };

// getData();
