let correct = document.querySelector("#correct");
let wrong = document.querySelector("#wrong");

function correctSound() {
    correct.play()
}
function wrongSound() {
    wrong.play()
}

function makeBubble() {
    let bubble = "";
    for (let i = 0; i <= 500; i++) {
        let run = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${run}</div>`;
    }
    document.querySelector("#panel>section").innerHTML = bubble;
};
makeBubble()

let time = 30;
function runtimer() {
    let timeslap = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#timerValue").innerHTML = time;
        } else {
            clearInterval(timeslap);
            document.querySelector("#panel>section").innerHTML = `<h1 class="text-center">Game over🤚</h1>`;
        }
    }, 1000)
};
runtimer();

let hitrun;
function getNewHit() {
    hitrun = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").innerHTML = hitrun;
}
getNewHit()

let score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#panel>section").addEventListener("click", function (e) {
    if (e.target.className === "bubble") {
        let clickedBubble = Number(e.target.textContent);
        if (clickedBubble === hitrun) {
            correctSound();
            increaseScore();
            makeBubble();
            getNewHit();
        } else {
            wrongSound()
        }
    }
});