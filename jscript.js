const gridContainer = document.querySelector("#grid_container");
const gridSizeBtn = document.querySelector("#gridSize");
const colorPicker = document.querySelector("#colorPicker");
const dEffect = document.querySelector("#darken");
const rainbow = document.querySelector("#rainbow");
const clear = document.querySelector("#clear");



function createGrid(size){
    for (let i = 0; i < size; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        gridContainer.appendChild(grid);
    }
}
let gridSize = 16;
createGrid((gridSize * gridSize));



let color = "";
function generateRandomRgbColor(){
    const r = Math.floor(Math.random() * 255); 
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255); 
    const rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb
}
/*function changeBackgroundColor(event) {
    event.target.style.backgroundColor = generateRandomRgbColor();
    event.currentTarget.style.backgroundColor = "";
}*/

//gridContainer.addEventListener("mouseover", changeBackgroundColor);

//using mouseover will change the color of the same grid everytime the mouse reenters.
//this can be solved by either using one color or
//using mouseenter with {once: true} targeting each child of gridContainer
function drawing(color) {
    const grids = document.querySelectorAll(".grid"); //this must stay in the drawing function
    for (const grid of grids) {
        let newHW = 100 / gridSize;

        grid.style.setProperty("width", `${newHW}%`);
        grid.style.setProperty("height", `${newHW}%`);

        grid.addEventListener("mouseenter", (event) => {
            if(color == ""){
                event.target.style.backgroundColor = generateRandomRgbColor();
            }else {
                event.target.style.backgroundColor = color;
            }
        })
    };
}
drawing(color);



colorPicker.addEventListener("input", (event) => {
    //console.log(event.target.value);
    color = event.target.value;
    drawing(color);
})



rainbow.addEventListener("click", (event) => {
    color = "";
    drawing(color);
})



/*dEffect.addEventListener("click", (event) => {
        const grids = document.querySelectorAll(".grid");
        for (const grid of grids) {
            let counter = 0.10;
            grid.addEventListener("mouseenter", (event) => {
                event.target.style.opacity = counter;
                console.log(counter);
                if(counter < 1) {
                    counter += 0.10;
                    //each square takes 10 times to be full colored
                }
        })
        }
    })*/
let isListenerOn = true;
function darkening(num){
    const grids = document.querySelectorAll(".grid");
    for (const grid of grids) {
        let counter = num;
        grid.addEventListener("mouseenter", (event) => {
            event.target.style.opacity = counter;
            //console.log(counter);
            if(counter < 1) {
                counter += 0.10;
                //each square takes 10 times to be full colored
            }
        })
        }
}
function toggleListener(){
    if (isListenerOn) {
        darkening(0.1);
        isListenerOn = false;
        //console.log(isListenerOn)
        dEffect.textContent = "Solid Color"
    } else if (isListenerOn == false) {
        darkening(1)
        isListenerOn = true;
        //console.log(isListenerOn)
        dEffect.textContent = "Darkening Effect"
    }
}
dEffect.addEventListener("click", toggleListener);



gridSizeBtn.addEventListener("click", (event) => {
    gridSize = prompt("Type your grid size: ", "up to 100");
    gridContainer.innerHTML = "";
    createGrid((gridSize * gridSize));
    //console.log(gridSize * gridSize);
    drawing(color); 
})



clear.addEventListener("click", (event) => {
    const grids = document.querySelectorAll(".grid");
    for (const grid of grids) {
        grid.style.backgroundColor = "white";
    }
})