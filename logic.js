const header = document.getElementById("mainHeader");
const mobileBtn = document.getElementById("hamburgerBtn");
const mobileNav = document.getElementById("mobileNav");
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 30);
});

mobileBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
