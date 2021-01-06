let createDiv = document.createElement("div");

let buttonFor = document.createElement("button");
let buttonBack = document.createElement("button");

buttonFor.innerText = "Hello";
buttonBack.innerText = "Hello";
buttonBack.className = "btn";
buttonFor.className = "btn";

createDiv.style.width = "400px";
createDiv.style.height = "400px";
createDiv.style.background = "black";

createDiv.className = "hello";
createDiv.id = "hey";

document.body.appendChild(createDiv);
document.body.appendChild(buttonBack);
document.body.appendChild(buttonFor);

const selectBtn = document.querySelectorAll(".btn");

selectBtn[0].style.padding = "50px";
selectBtn[1].style.padding = "50px";
