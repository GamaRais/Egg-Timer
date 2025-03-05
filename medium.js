//hardboiled egg
const startingMinutes = 6;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('mediumCountdown');

myInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time/60)
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time <= 0) {
        clearInterval(myInterval);
    }
}