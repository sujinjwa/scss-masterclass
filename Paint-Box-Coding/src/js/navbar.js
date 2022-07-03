const btn = document.querySelector(".navbar__toogleBtn");
const nav = document.querySelector("header>nav");
const icon = document.querySelector("button>i");

function openNavBar() {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
  if (btn.classList.contains("active")) {
    icon.className = "fa-solid fa-x fa-xl";
  } else {
    icon.className = "fa-solid fa-bars fa-xl";
  }
}

btn.addEventListener("click", openNavBar);
