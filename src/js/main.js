import "../scss/style.scss";
const openMenu = document.querySelector(".main-header__button");
const menu = document.querySelector(".main-header__list");
const closeMenu = document.querySelector(".main-header__cross");
openMenu.addEventListener("click", () => {
  menu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("open");
});
