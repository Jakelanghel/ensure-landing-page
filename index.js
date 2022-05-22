const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");

const openMenu = () => {
  document.querySelector(".nav-list").style.display = "block";
  document.querySelector(".menu-btn-open").style.display = "none";
  document.querySelector(".menu-btn-close").style.display = "block";
};

const closeNav = () => {
  document.querySelector(".nav-list").style.display = "none";
  document.querySelector(".menu-btn-close").style.display = "none";
  document.querySelector(".menu-btn-open").style.display = "block";
};

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeNav);
