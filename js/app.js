// ------------------------------------------
// HUMBURGER
// ------------------------------------------
const ham = document.querySelector(".humburger");
const headerManu = document.querySelector(".header_manu__links");
const headerButtons = document.querySelector(".header_manu__btns");

ham.addEventListener("click", function (e) {
  e.stopPropagation();
  ham.classList.toggle("active");
  if (ham.classList.contains("active")) {
    headerManu.style.display = "block";
  } else {
    headerManu.style.display = "none";
  }
});
