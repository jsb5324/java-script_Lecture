const stageSize = 15;

//스테이지 생성
for(let i=0; i < stageSize*stageSize; i++) {
    const box = document.createElement("div");
    document.querySelector(".grid").appendChild(box);

}

const grid = document.querySelector(".grid");
const stage = document.querySelectorAll(".grid div");
const startBtn = document.querySelectorAll("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const display = document.querySelector("#display");

//생략
let playerLoc = stageSize*(stageSize-2)+7 //202;

function makePlayer() {
    stage[playerLoc].classList.add("player");
 }
 makePlayer()

function movePlayer(e) { }

document.addEventListener("keyup", movePlayer)

function movePlayer(e) {
    stage[playerLoc].classList.remove("player");
    switch (e.keycode) {
        case 37: //왼쪽
            playerLoc--;
            break;
        case 39: //오른쪽
            playerLoc++;
            break;    
    }
    stage[player].classList.add("player");
}

//생략
let invaderLoc;
let gameInterval;

function makeInvader() { }

function moveInvader() { }

interval = setInterval(moveInvader, 1000);