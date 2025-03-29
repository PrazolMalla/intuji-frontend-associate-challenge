const openButton = document.querySelector(".btn--open");
const closeButton = document.querySelector(".btn--close");
const sidebar = document.querySelector(".sidebar");
openButton.addEventListener("click", () => {
  sidebar.style.left = "0";
});

closeButton.addEventListener("click", () => {
  sidebar.style.left = "-1000px";
});
