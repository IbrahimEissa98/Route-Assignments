// Welcome Page
var welcomeName = document.querySelector("#welcomeName");
welcomeName.innerText = localStorage.getItem("currentUser");
// console.log(currentUser);

var logoutBtn = document.querySelector("#logoutBtn");
logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("currentUser");
  location.href = "index.html";
});

// Loading page
window.addEventListener("load", function () {
  document.querySelector("#loader").classList.add("loader-out");
  setTimeout(removeLoader, 1000);
});
function removeLoader() {
  document.querySelector("#loader").classList.add("d-none");
}
