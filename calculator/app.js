const btn = document.querySelectorAll(".btn");
const input = document.querySelector(".input");
const hesapla = document.querySelector(".hesapla")
const temizle = document.querySelector(".temizle")

btn.forEach((element) => {
  if (element.value != "C" && element.value != "=") {
    element.addEventListener("click", yazdir);
  }

});

function yazdir() {
  console.log(this.value);
  input.value += this.value; // input.value = input.value + this.value
}


hesapla.addEventListener("click", () => {
    input.value = eval(input.value)
})

temizle.addEventListener("click", () => {
    input.value = ""
})