

//Constant
const SCREEN_SIZE_16_X_16 = 256;

//UI
let screen = document.querySelector("#screen");

let mouseDown = false;
let isInsideDiv = false;

//TODO: change this to function:
for(let i = 0; i < SCREEN_SIZE_16_X_16; i++){
    let box = document.createElement("div")
    box.setAttribute(`style`,
        `background: blue;
        user-select: none;
        height: 24px;
        width: 24px;
        border: 1px solid;`
    )
    screen.appendChild(box);
}

function changeColor(event, color="green"){
    let target = event.target;
    if(isInsideDiv && mouseDown){
        target.style.background = color;
    }
}

function handleHover(event){
    changeColor(event);
};

//Event listener
screen.addEventListener("drag", (event) => event.preventDefault())
screen.addEventListener("contextmenu", (event) => event.preventDefault());
screen.addEventListener("mouseout", () => (isInsideDiv = false));
document.body.onmouseup = () => (mouseDown = false);
document.body.onmousedown = (event) => {
    (mouseDown = true);
    handleHover(event);
};
screen.addEventListener("mouseover", (event) => {
    (isInsideDiv = true);
    handleHover(event);
});