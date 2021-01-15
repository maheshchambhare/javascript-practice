let container = document.createElement("div");
let createDiv = document.createElement("div");

let buttonFor = document.createElement("button");
let buttonBack = document.createElement("button");

buttonFor.innerText = "Front";
buttonBack.innerText = "Back";
buttonBack.className = "btn";
buttonFor.className = "btn";

createDiv.style.width = "0%";
createDiv.style.height = "400px";
createDiv.style.background = "black";

createDiv.className = "hello";
createDiv.id = "hey";
container.id = "main-container";

document.body.appendChild(container);
document.body.appendChild(createDiv);
document.body.appendChild(buttonBack);
document.body.appendChild(buttonFor);

const selectBtn = document.querySelectorAll(".btn");

selectBtn[0].style.marginTop = "50px";
selectBtn[1].style.marginTop = "50px";
selectBtn[0].style.paddingTop = "5px";
selectBtn[0].style.paddingBottom = "5px";
selectBtn[0].style.paddingLeft = "20px";
selectBtn[0].style.paddingRight = "20px";
selectBtn[1].style.paddingTop = "5px";
selectBtn[1].style.paddingBottom = "5px";
selectBtn[1].style.paddingLeft = "20px";
selectBtn[1].style.paddingRight = "20px";

buttonFor.addEventListener("click", () => {
  createDiv.style.transition = "all 1s ease-out";
  if (createDiv.style.width == "0%") {
    createDiv.style.width = "100%";
  } else if (createDiv.style.width == "100%") {
    createDiv.style.width = "20%";
    createDiv.style.marginLeft = "auto";
    createDiv.style.marginRight = "0%";
  } else if (createDiv.style.width == "20%") {
    createDiv.style.width = "100%";
    createDiv.style.marginLeft = "auto";
    createDiv.style.marginRight = "0%";
  }
});
buttonBack.addEventListener("click", () => {
  createDiv.style.transition = "all 1s ease-out";
  if (createDiv.style.width == "100%") {
    createDiv.style.width = "20%";
    createDiv.style.marginLeft = "0%";
    createDiv.style.marginRight = "auto";
  } else if (createDiv.style.width == "20%") {
    createDiv.style.width = "0%";
    createDiv.style.marginLeft = "0%";
    createDiv.style.marginRight = "auto";
  }
});
