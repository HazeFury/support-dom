const mainSection = document.querySelector(".main_section");
let i = 4;

function createCard() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("box");
  const newParagraph = document.createElement("p");
  newParagraph.innerText = i;
  newDiv.append(newParagraph);
  mainSection.append(newDiv);
  i++;
}

function addCards() {
  for (let i = 4; i < 1000; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    const newParagraph = document.createElement("p");
    newParagraph.innerText = i;
    newDiv.append(newParagraph);
    mainSection.append(newDiv);
  }
}

const array = ["toto", "titi", "tutu", "tata"];

function createToto() {
  array.map((text) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    const newParagraph = document.createElement("p");
    newParagraph.innerText = text;
    newDiv.append(newParagraph);
    mainSection.append(newDiv);
  });
}

const addButton = document.getElementById("add_btn");

// addButton.addEventListener("click", createCard);
// addButton.addEventListener("click", addCards);
addButton.addEventListener("click", createToto);
