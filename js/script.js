"use strict";
const navEl = document.querySelector(".header__nav--mobile");
const menuBtn = document.querySelector(".menuBtn");
const bodyEl = document.querySelector("body");
// Opening Nav
const closeOpenNav = () => {
  if (navEl.classList.contains("openedMenu")) {
    bodyEl.classList.remove("no-scroll");
    navEl.classList.remove("openedMenu");
    menuBtn.classList.remove("open");
  } else {
    bodyEl.classList.add("no-scroll");
    navEl.classList.add("openedMenu");
    menuBtn.classList.add("open");
  }
};
menuBtn.addEventListener("click", closeOpenNav);
// Closeing NAv When any link is clicked
navEl.addEventListener("click", (event) => {
  if (event.target.tagName === "A") closeOpenNav();
});
