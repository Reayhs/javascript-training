let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (mess) {
  document.querySelector(".message").textContent = mess;
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("Numara Girilmedi");
  } else if (guess === secretNumber) {
    displayMessage("Doğru Numara");
    document.querySelector(".number").textContent = secretNumber;

    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Çok yüksek" : "Çok düşük");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Oyunu Kaybettin");
      document.querySelector(".score").textContent = 0;
      document.body.style.backgroundColor = "red"
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
