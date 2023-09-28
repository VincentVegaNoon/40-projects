const increaseButton = document.querySelector(".increase");
const decreaseButton = document.querySelector(".decrease");
const resetButton = document.querySelector(".reset");
const result = document.querySelector(".result");

let number = 0;

document.querySelectorAll(".buttons button").forEach((elem) =>
  elem.addEventListener("click", () => {
    if (elem === increaseButton) {
      number++;
      updateNumber();
    } else if (elem === decreaseButton) {
      number--;
      updateNumber();
    } else {
      number = 0;
      updateNumber();
    }
  })
);

const updateNumber = () => {
  result.textContent = number;
  if (number < 0) {
    result.style.color = "red";
  } else if (number > 0) {
    result.style.color = "blue";
  } else {
    result.style.color = "black";
  }
};
