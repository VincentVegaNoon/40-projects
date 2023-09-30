const hamburgerToggle = document.querySelector(".nav_toggle");
const bookmarks = document.querySelector(".bookmarks");
hamburgerToggle.addEventListener("click", () => {
  bookmarks.classList.toggle("active");
  //   bookmarks.style.display = "flex";
});
