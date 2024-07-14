let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;
let isRunning = false;
let lapTimes = [];

const secondsDisplay = document.getElementById('seconds');
const minutesDisplay = document.getElementById('minutes');
const hoursDisplay = document.getElementById('hours');
const lapTimesDisplay = document.getElementById('lap-times');
const startPauseButton = document.getElementById('startPause');

function startPauseStopwatch() {
    if (!isRunning) {
        isRunning = true;
        intervalId = setInterval(updateTime, 1000);
        startPauseButton.textContent = 'Pause';
    } else {
        isRunning = false;
        clearInterval(intervalId);
        startPauseButton.textContent = 'Continue';
    }
}

function resetStopwatch() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    isRunning = false;
    clearInterval(intervalId);
    updateDisplay();
    lapTimes = [];
    lapTimesDisplay.textContent = '';
    startPauseButton.textContent = 'Start';
}

function updateTime() {
    if (isRunning) {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
        updateDisplay();
    }
}

function updateDisplay() {
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    hoursDisplay.textContent = hours.toString().padStart(2, '0');
}

function addLapTime() {
    const lapTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    lapTimes.push(lapTime);
    lapTimesDisplay.textContent = lapTimes.join('\n');
}

document.getElementById('startPause').addEventListener('click', startPauseStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);
document.getElementById('lap').addEventListener('click', addLapTime);

