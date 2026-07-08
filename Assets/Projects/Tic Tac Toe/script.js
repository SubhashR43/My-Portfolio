// get access of elements
let contain = document.querySelector(".container");
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let newBtn = document.querySelector(".new-btn");
let msgContain = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true;

// Winning petterns array 
const checkWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Turn clicking function
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "#ff6868";
      turnO = false;
    }
    else {
      box.innerText = "X"
      box.style.color = "#7a2c2c";
      turnO = true;
    }
    box.disabled = true;
    
    checkWiner ();
  });
});

// checkWiner pattern function
const checkWiner = () => {
  for (let pattern of checkWin) {
    let poss1 = boxes[pattern[0]].innerText;
    let poss2 = boxes[pattern[1]].innerText;
    let poss3 = boxes[pattern[2]].innerText;
    
    if (poss1 != "" && poss2 != "" && poss3 != "") {
      if (poss1 === poss2 && poss2 === poss3) {
        console.log("winner", poss1);
        showWinner(poss1);
      }
    }
  }
};

// Winer content showing option
let showWinner = (winner) => {
  msg.innerText = `Congratulation Winner is "${winner}"`;
  msgContain.classList.remove("hide");
  disableBoxes();
};

// disable boxes function after win 
let disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
}

// Restart enable function
let enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}

// Reset button function
let resetBtn = () => {
  let turnO = true;
  enableBoxes();
  msgContain.classList.add("hide");
}

//Reset Button JS
newBtn.addEventListener("click",resetBtn);
reset.addEventListener("click",resetBtn);