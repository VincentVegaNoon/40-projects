const openModal = document.querySelector(".open_modal");
const modal = document.querySelector(".modal");
const wrapper = document.querySelector(".wrapper");
const closeModal = document.querySelector(".close_modal");

openModal.addEventListener("click", () => {
  wrapper.classList.add("active");
  modal.style.display = "flex";
});
closeModal.addEventListener("click", () => {
  wrapper.classList.remove("active");
  modal.style.display = "none";
});
