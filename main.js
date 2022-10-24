const hamburger = document.querySelector(".hamburger");
const mobile = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  mobile.classList.toggle("active");
});
