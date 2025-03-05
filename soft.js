//hardboiled egg
const startingMinutes = 0.05;
let time = startingMinutes * 60;
var audio = new Audio('audio/Neon_Guts.MP3')

const countdownEl = document.getElementById('softCountdown');

myInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time/60)
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    if (time <= 0) {
        clearInterval(myInterval);
        audio.play();
        audio.volume = 0.07;
    }
    time--;
}