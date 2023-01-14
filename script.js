// theme
const icons = [...document.querySelectorAll(".theme-icon i")]

icons.forEach((icon) => {
  if (icon) {
    icon.addEventListener("click", () => {
      document.body.classList.toggle("dark")

      if (document.body.classList.contains("dark")) {
        icon.classList.remove("fas", "fa-moon")
        icon.classList.add("far", "fa-sun")
        icon.style.color = "white"
      } else {
        icon.classList.add("fas", "fa-moon")
        icon.classList.remove("far", "fa-sun")
        icon.style.color = "#222"
      }
    })
  }
})
// Navigation
const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".nav-list")

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open")
})
