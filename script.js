const grid = document.querySelector(".grid");
const gridSize = document.getElementById("grid-size");
const color = document.getElementById("color");
const clearBtn = document.getElementById("clear");
let gridItem;

gridSize.addEventListener("input", () => {
  gridSizeValue = gridSize.value;
  setGridSize(gridSizeValue);
});

const setGridSize = (gridSizeValue = 16) => {
  grid.innerHTML = ""; //Reset the grid by removing existing div items

  // Re-add div items to the grid
  for (let i = 0; i < gridSizeValue ** 2; i++) {
    const div = document.createElement("div");
    div.className = "grid-item";
    div.style.width = `calc(100% / ${gridSizeValue})`; //set each width according to the grid size
    grid.appendChild(div);
  }

  gridItem = document.querySelectorAll(".grid-item");
};

setGridSize();

color.addEventListener("input", () => {
  setColor(color.value);
});

clearBtn.addEventListener("click", () => {
  gridItem.forEach((item) => {
    item.style.backgroundColor = "white";
  });
});

const setColor = (color) => {
  console.log(color);
  console.log(gridItem);
  gridItem.forEach((item) =>
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = color;
    })
  );
};

setColor(color.value);
