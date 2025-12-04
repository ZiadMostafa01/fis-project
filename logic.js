//   const header = document.getElementById("mainHeader");

//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 30) {
//       header.classList.add("scrolled");
//     } else {
//       header.classList.remove("scrolled");
//     }
//   });

const header = document.getElementById("mainHeader");
const mobileBtn = document.getElementById("hamburgerBtn");
const mobileNav = document.getElementById("mobileNav");


window.addEventListener("scroll", () => {
header.classList.toggle("scrolled", window.scrollY > 30);
});


mobileBtn.addEventListener("click", () => {
mobileNav.classList.toggle("open");
});
