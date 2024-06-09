let boxes = document.querySelectorAll(".box");
let reset  = document.querySelector(".button");
let newGame = document.querySelector(".new_game");
let message = document.querySelector(".msgContainer");
let msg = document.querySelector(".win")
let turn0 = true; 
let count = 0;

const winPattern = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],
];

const resetGame = () =>{
    let turn0  = true;
    enableBoxes();
 message.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
          gameDraw();
        }
    }
    );
});

const checkWinner = () =>{
    for (let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Val);
                return true;
            }
        }

    }
};


const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };

const showWinner  = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
 message.classList.remove("hide");
 disableBoxes();
};

const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

  const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    message.classList.remove("hide");
    disableBoxes();
  };
  

  newGame.addEventListener("click", resetGame);
  reset.addEventListener("click",resetGame);