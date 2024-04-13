let correct = document.querySelector("#correct");
let wrong = document.querySelector("#wrong");
const startBtn = document.querySelector(".startBtn");
const playGround = document.querySelector("#panel.d-none");
const infoBox = document.querySelector(".infoBox");
startBtn.addEventListener("click", () => {
  if (playGround) {
    infoBox.classList.add("d-none");
    playGround.classList.remove("d-none");
    time = 5;
    document.querySelector("#timerValue").innerHTML = time;
    score = 0;
    document.querySelector("#scoreVal").textContent = score;
    makeBubble();
    getNewHit();
    runtimer();
  }
});
function goback() {
  playGround.classList.add("d-none");
  infoBox.classList.remove("d-none");
  return;
}
function correctSound() {
  correct.play();
}
function wrongSound() {
  wrong.play();
}
function makeBubble() {
  let bubble = "";
  for (let i = 0; i <= 250; i++) {
    let run = Math.floor(Math.random() * 10);
    bubble += `<div class="bubble">${run}</div>`;
  }
  document.querySelector("#panel>section").innerHTML = bubble;
}

let time = 5;
const bubbleContainer = document.querySelector("#panel>section");
document.querySelector("#timerValue").innerHTML = time;
function runtimer() {
  let timeslap = setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector("#timerValue").innerHTML = time;
    } else {
      clearInterval(timeslap);
      bubbleContainer.innerHTML = `<h1 class="text-center">Game over🤚</h1>`;
      const restartBtn = document.createElement("h2");
      const exit = document.createElement("h2");
      restartBtn.setAttribute("class", "restart");
      exit.setAttribute("class", "exit");
      restartBtn.innerText = "Re-start";
      exit.innerText = "Exit";
      bubbleContainer.appendChild(restartBtn);
      bubbleContainer.appendChild(exit);
      exit.addEventListener("click", goback);
      restartBtn.addEventListener("click", restartGame);
    }
  }, 1000);
}

function restartGame() {
  time = 5;
  document.querySelector("#timerValue").innerHTML = time;
  score = 0;
  document.querySelector("#scoreVal").textContent = score;
  makeBubble();
  getNewHit();
  runtimer();
}
let hitrun;
function getNewHit() {
  hitrun = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").innerHTML = hitrun;
}

let score = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}
function incresaeTime() {
  time += 2;
}
function decresaeTimeAndScrore() {
  time -= 2;
  score -= 10;
  if (score > 0 && time > 0) {
    document.querySelector("#timerValue").textContent = time;
    document.querySelector("#scoreVal").textContent = score;
  }
}
document
  .querySelector("#panel>section")
  .addEventListener("click", function (e) {
    if (e.target.className === "bubble") {
      let clickedBubble = Number(e.target.textContent);
      if (clickedBubble === hitrun) {
        e.target.classList.add("right");
        correctSound();
        increaseScore();
        makeBubble();
        getNewHit();
        incresaeTime();
      } else {
        e.target.classList.add("worng");
        wrongSound();
        decresaeTimeAndScrore();
      }
    }
  });
