let container = document.createElement("div");
let createDiv = document.createElement("div");

let buttonFor = document.createElement("button");
let buttonBack = document.createElement("button");

buttonFor.innerText = "Hello";
buttonBack.innerText = "Hello";
buttonBack.className = "btn";
buttonFor.className = "btn";

createDiv.style.width = "0%";
createDiv.style.height = "400px";
createDiv.style.background = "black";

createDiv.className = "hello";
createDiv.id = "hey";
container.id = "main-container";

let main = document.querySelector("#main-container");
let blackBox = document.querySelector("#hey");

main.appendChild(blackBox);
document.body.appendChild(container);
document.body.appendChild(createDiv);
document.body.appendChild(buttonBack);
document.body.appendChild(buttonFor);

const selectBtn = document.querySelectorAll(".btn");

selectBtn[0].style.padding = "50px";
selectBtn[1].style.padding = "50px";

buttonFor.addEventListener("click", () => {
  createDiv.style.transition = "all 1s ease-out";
  if (createDiv.style.width == "0%") {
    createDiv.style.width = "100%";
  } else if (createDiv.style.width == "100%") {
    createDiv.style.width = "20%";
    createDiv.style.marginLeft = "auto";
  } else if (createDiv.style.width == "20%") {
    createDiv.style.width = "20%";
    createDiv.style.marginLeft = "auto";
  }
});
buttonBack.addEventListener("click", () => {
  createDiv.style.transition = "all 0.5s ease-out";
  createDiv.style.width = "0%";
});
