//Global Variables
let totalSeconds = 0;
let timerInterval = null;

function startTimer() {
  if (timerInterval) return;

  if (totalSeconds === 0) {
    const h = parseInt(document.getElementById("hours").value) || 0;
    const m = parseInt(document.getElementById("minutes").value) || 0;
    const s = parseInt(document.getElementById("seconds").value) || 0;

    totalSeconds = h * 3600 + m * 60 + s;

    if (totalSeconds <= 0) {
      alert("Please enter a valid time.");
      return;
    }
  }

  timerInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Time's up!");
      return;
    }

    totalSeconds--;
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  totalSeconds = 0;
  updateDisplay();
  document.getElementById("hours").value = "";
  document.getElementById("minutes").value = "";
  document.getElementById("seconds").value = "";
}

function updateDisplay() {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  document.getElementById("timeDisplay").textContent =
    String(h).padStart(2, "0") +
    ":" +
    String(m).padStart(2, "0") +
    ":" +
    String(s).padStart(2, "0");
}
