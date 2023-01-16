const icon = document.querySelector(".fa-bars")
const searchIcon = document.querySelector(".fa-magnifying-glass")
const ulWrapper = document.querySelector(".ul-wrapper")
const input = document.querySelector(".input")


icon.addEventListener("click" , () => {
   ulWrapper.classList.toggle("active")
})


searchIcon.addEventListener("click" , () => {
    input.classList.toggle("active")
 })
