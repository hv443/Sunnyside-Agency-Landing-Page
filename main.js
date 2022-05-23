const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.querySelector(".m-menu");
const desktopNav = document.querySelectorAll(".desktop-nav li");
const mobileNav = document.querySelectorAll(".m-menu li");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("display");
  mobileMenu.classList.toggle("mobile-menu");
});

desktopNav.forEach((element) => {
  element.addEventListener("click", function clicked() {
    desktopNav.forEach((e) => {
      e.classList.remove("active");
    });
    this.classList.add("active");
  });
});

mobileNav.forEach((element) => {
  element.addEventListener("click", function Mclicked() {
    mobileNav.forEach((e) => {
      e.classList.remove("m-active");
    });
    this.classList.add("m-active");
    console.log("ho");
  });
});
