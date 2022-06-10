let menu = document.querySelector("#menu");
let sidebar = document.querySelector(".sidebar");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  sidebar.classList.toggle("active");
};
