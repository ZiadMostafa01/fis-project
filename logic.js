const header = document.getElementById("mainHeader");
const mobileBtn = document.getElementById("hamburgerBtn");
const mobileNav = document.getElementById("mobileNav");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 30);
});

mobileBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});
