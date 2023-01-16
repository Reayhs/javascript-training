const text = document.querySelector(".text");
const button = document.querySelector(".button");

const codesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const randomColorCode = () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += codesArray[Math.floor(Math.random() * codesArray.length)];
  }
  return hexCode;
};

button.addEventListener("click", function () {
  const colorCode = randomColorCode();
  text.innerText = colorCode;
  document.body.style.backgroundColor = colorCode;
});
