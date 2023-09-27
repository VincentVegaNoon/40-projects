const button = document.querySelector(".Color_Changer");
const h1 = document.querySelector(".Displayed_Color");
const wrapper = document.querySelector(".wrapper");
const colorFlipper = document.querySelector(".Color_Flipper");
const simpleHex = document.querySelector(".Simple_Hex");

let mode = colorFlipper;

colorFlipperFunc = () => {
  const arrOfColors = ["red", "blue", "green", "yellow", "orange"];
  let color = arrOfColors[Math.floor(Math.random() * arrOfColors.length)];
  applyColor(color);
};
simpleHexFunc = () => {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }
  applyColor(hexColor);
};

applyColor = (color) => {
  wrapper.style.backgroundColor = `${color}`;
  h1.innerHTML = `Background Color: <span>${color}</span>`;
  document.querySelector(".Displayed_Color span").style.color = color;
};

document.querySelectorAll("li").forEach((elem) => {
  elem.addEventListener("click", () => {
    document.querySelectorAll("li").forEach((elem) => {
      elem.classList.remove("chosen");
    });
    mode = elem;
    elem.classList.toggle("chosen");
  });
});

button.addEventListener("click", () => {
  if (mode === colorFlipper) {
    colorFlipperFunc();
  } else {
    simpleHexFunc();
  }
});
