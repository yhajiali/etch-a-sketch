const grid = document.querySelector(".grid");
const gridSize = document.getElementById("grid-size");
const color = document.getElementById("color");
const clearBtn = document.getElementById("clear");

color.addEventListener("input", () => {
  colorChange(color.value);
});

clearBtn.addEventListener("click", () => {
  gridItem.forEach((item) => {
    item.style.backgroundColor = "white";
  });
});

gridSize.addEventListener("input", () => {
  gridSizeValue = gridSize.value;
  changeGridSize(gridSizeValue);
});

const changeGridSize = (gridSizeValue = 16) => {
  grid.innerHTML = "";

  for (let i = 0; i < gridSizeValue ** 2; i++) {
    const div = document.createElement("div");
    div.className = "grid-item";
    div.style.width = `calc(100% / ${gridSizeValue})`;
    grid.appendChild(div);
  }
};

const gridItem = document.querySelectorAll(".grid-item");

const colorChange = (color) => {
  gridItem.forEach((item) =>
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = color;
    })
  );
};

colorChange(color.value);
changeGridSize();
