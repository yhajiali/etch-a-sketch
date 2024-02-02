const grid = document.querySelector(".grid");

for (let i = 0; i < 256; i++) {
  const gridItem = document.createElement("div");
  gridItem.className = "grid-item";
  grid.appendChild(gridItem);
  console.log(i);
}
