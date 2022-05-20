const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");

const openMenu = () => {
  document.querySelector(".nav-list").style.display = "block";
  document.querySelector(".menu-btn-open").style.display = "none";
  document.querySelector(".menu-btn-close").style.display = "block";
  //   document.querySelector("main").classList.add("nav-open");
};

const closeNav = () => {
  document.querySelector(".nav-list").style.display = "none";
  document.querySelector(".menu-btn-close").style.display = "none";
  document.querySelector(".menu-btn-open").style.display = "block";
  //   document.querySelector("main").classList.remove("nav-open");
};

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeNav);
