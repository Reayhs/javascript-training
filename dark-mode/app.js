const icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
  icon.classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
