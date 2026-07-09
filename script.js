let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let result = document.querySelector("#result");
let turn0 = true; //X & Y
let cnt = 0;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

//win
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    cnt++;
    if (turn0) {
      //0
      box.innerText = "O";
      box.classList.add("o");
      turn0 = false;
    } else {
      //X
      box.innerText = "X";
      box.classList.add("x");
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    if (
      boxes[pattern[0]].innerText == boxes[pattern[1]].innerText &&
      boxes[pattern[2]].innerText == boxes[pattern[1]].innerText &&
      boxes[pattern[1]].innerText == "O"
    ) {
      boxes[pattern[0]].classList.add("win");
      boxes[pattern[1]].classList.add("win");
      boxes[pattern[2]].classList.add("win");
      console.log("O wins");
      result.innerText = "O Wins!";
      boxes.forEach((box) => {
        box.disabled = true;
      });
      return;
    }
    if (
      boxes[pattern[0]].innerText == boxes[pattern[1]].innerText &&
      boxes[pattern[2]].innerText == boxes[pattern[1]].innerText &&
      boxes[pattern[1]].innerText == "X"
    ) {
      boxes[pattern[0]].classList.add("win");
      boxes[pattern[1]].classList.add("win");
      boxes[pattern[2]].classList.add("win");
      console.log("X wins");
      result.innerText = "X Wins!";
      boxes.forEach((box) => {
        box.disabled = true;
      });
      return;
    }
  }
  //draw
  if (cnt === 9 && result.innerText == "") {
    result.innerText = "Draw!";
  }
};

const resetGame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    box.classList.remove("x", "o");
    box.classList.remove("win");
  });
  turn0 = true;
  result.innerText = "";
  cnt = 0;
};

//reset
resetBtn.addEventListener("click", resetGame);
