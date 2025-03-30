const openButton = document.querySelector(".btn--open");
const closeButton = document.querySelector(".btn--close");
const sidebar = document.querySelector(".sidebar");
openButton.addEventListener("click", () => {
  sidebar.classList.add("sidebar-active");
});

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-active");
});
