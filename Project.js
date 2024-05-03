// letters
let letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);
// creat elements
let lettersContainer = document.querySelector(".letters");

lettersArray.forEach((letters) => {
  let span = document.createElement("span");
  span.className = "letters-box";
  let spanText = document.createTextNode(letters);
  span.appendChild(spanText);
  lettersContainer.appendChild(span);
});

words = {
  sports: [
    "Tennis",
    "Football",
    "Cricket",
    "volleyball",
    "Basketball",
    "Boxing",
  ],
  food: ["Apple", "Hamburger", "Fish", "pizza", "cake"],
  movies: ["science fiction film", "seven samurai", "in the mood for the love"],
  countries: ["Egypt", "China", "canada", "Australia", "Denemark"],
};
// get random value
let allKeys = Object.keys(words);
let propNum = Math.floor(Math.random() * allKeys.length);
let propName = allKeys[propNum];

let valueName = words[propName];
let valueNum = Math.floor(Math.random() * valueName.length);

// the choseen word
let valueVal = valueName[valueNum];

let category = document.querySelector(".category span");
category.innerHTML = propName;

// letter guess
let letterGuess = document.querySelector(".letters-guess");
let chossen = Array.from(valueVal);
// console.log(chossen);

chossen.forEach((letters) => {
  let emptySpan = document.createElement("span");

  if (letters === " ") {
    emptySpan.className = "with-space";
  }

  letterGuess.appendChild(emptySpan);
});
// choose span
// set wrong attempts
let wrongAttempts = 0;
// choose the draw
let theDraw = document.querySelector(".hangman-draw");
let spans = document.querySelectorAll(".letters-guess span");
// choose letters
document.addEventListener("click", (e) => {
  // status of letter
  let states = false;
  if (e.target.className === "letters-box") {
    e.target.classList.add("clicked");

    let chossenLetter = e.target.innerHTML.toLowerCase();
    let choosenWord = Array.from(valueVal.toLowerCase());
    choosenWord.forEach((finalWord, indexchosen) => {
      if (finalWord == chossenLetter) {
        states = true;
        // console.log(`found at index number ${index}`);
        spans.forEach((span, indexWord) => {
          if (indexWord === indexchosen) {
            span.innerHTML = finalWord;
          }
        });
      }
    });
    if (states !== true) {
      wrongAttempts++;
      //   console.log(wrongAttempts);

      theDraw.classList.add(`wrong-${wrongAttempts}`);

      if (wrongAttempts === 8) {
        GameOver();
        lettersContainer.classList.add("finished");
      }
    }
  }
});

function GameOver() {
  let divv = document.createElement("div");
  let divvText = document.createTextNode(
    ` Game Over , the word is ${valueVal}`
  );
  divv.appendChild(divvText);
  divv.className = "popup";
  document.body.appendChild(divv);
}

function success() {
  let dive = document.createElement("div");
  let diveText = document.createTextNode(` congratulaion, you are succeed `);
  dive.appendChild(diveText);
  dive.className = "popup";
  document.body.appendChild(dive);
}
