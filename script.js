const grid = document.querySelector(".grid");
const gridSize = document.getElementById("grid-size");
const color = document.getElementById("color");
let gridSizeValue = 16;

// gridSize.addEventListener("input", () => {
//   gridSizeValue = gridSize.value;
// });

color.addEventListener("input", () => {
  colorChange(color.value);
});

for (let i = 0; i < gridSizeValue ** 2; i++) {
  const div = document.createElement("div");
  div.className = "grid-item";
  grid.appendChild(div);
}

const gridItem = document.querySelectorAll(".grid-item");

const colorChange = (color) => {
  gridItem.forEach((item) =>
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = color;
    })
  );
};

colorChange(color.value);
