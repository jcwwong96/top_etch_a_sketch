const gridContainer = document.querySelector("#grid_container");

function  createGrid(size){
    for (let i = 0; i < size; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        gridContainer.appendChild(grid);
    }
}

const smallGrid = 16 * 16

createGrid(smallGrid)

//only generates light shade
function generateRandomRgbColor(){
    const r = Math.floor(Math.random() * 31) + 200; //number starts from 200 and up to only 230 to avoid near white color
    const g = Math.floor(Math.random() * 31) + 200;
    const b = Math.floor(Math.random() * 31) + 200; 
    const rgb = `rgb(${r}, ${g}, ${b}`;
    return rgb
}

/*function changeBackgroundColor(event) {
    event.target.style.backgroundColor = generateRandomRgbColor();
    event.currentTarget.style.backgroundColor = "";
}*/

//gridContainer.addEventListener("mouseover", changeBackgroundColor);

//using mouseover will change the color of the same grid everytime the mouse reenters.
//this can be solved by either using one color or
//using mouseenter targeting each child of gridContainer

const grids = document.querySelectorAll(".grid");

for (const grid of grids) {
    grid.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = generateRandomRgbColor();
    }, {once: true})
};
