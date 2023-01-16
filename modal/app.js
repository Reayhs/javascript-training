const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};


btnsOpenModal.forEach((item) => {
    item.addEventListener("click", openModal);
  });


btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);




document.addEventListener("keydown" ,(e) => {
    if(e.key == "Escape" && !modal.classList.contains("hidden"))
    closeModal()
})