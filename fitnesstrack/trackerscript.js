document.getElementById("Go1").addEventListener("click", startGymTimers);
document.getElementById("Go2").addEventListener("click", startRunTimers);
document.getElementById("Go3").addEventListener("click", startCycleTimers);
document.getElementById("Go4").addEventListener("click", startSwimTimers);

function startGymTimers() {
  var durations = [5 * 60, 2 * 60, 5 * 60];
  var exerciseElements = document.querySelectorAll(".gym p");
  var timerElements = document.querySelectorAll(".gym .timer");

  if (exerciseElements.length !== timerElements.length) {
    console.error("Exercise and timer elements count mismatch");
    return;
  }

  startTimer(0, durations, exerciseElements, timerElements);
}

function startRunTimers() {
  var durations = [10*60,3*60 ,10*60];
  var exerciseElements = document.querySelectorAll(".run p");
  var timerElements = document.querySelectorAll(".run .timer");

  if (exerciseElements.length !== timerElements.length) {
    console.error("Exercise and timer elements count mismatch");
    return;
  }

  startTimer(0, durations, exerciseElements, timerElements);
}

function startCycleTimers() {
  var durations = [25*60, 5*60, 25*60];
  var exerciseElements = document.querySelectorAll(".cycle p");
  var timerElements = document.querySelectorAll(".cycle .timer");

  if (exerciseElements.length !== timerElements.length) {
    console.error("Exercise and timer elements count mismatch");
    return;
  }

  startTimer(0, durations, exerciseElements, timerElements);
}

function startSwimTimers() {
  var durations = [6*60, 3*60, 6*60];
  var exerciseElements = document.querySelectorAll(".swim p");
  var timerElements = document.querySelectorAll(".swim .timer");

  if (exerciseElements.length !== timerElements.length) {
    console.error("Exercise and timer elements count mismatch");
    return;
  }

  startTimer(0, durations, exerciseElements, timerElements);
}

function startTimer(index, durations, exerciseElements, timerElements) {
  if (index >= durations.length) {
    return;
  }

  exerciseElements[index].style.opacity = "1";
  timerElements[index].textContent = formatTime(durations[index]);

  var interval = setInterval(function () {
    durations[index]--;
    timerElements[index].textContent = formatTime(durations[index]);

    if (durations[index] <= 0) {
      clearInterval(interval);
      exerciseElements[index].style.opacity = "0.3";
      startTimer(index + 1, durations, exerciseElements, timerElements);
    }
  }, 1000);
}

function formatTime(duration) {
  var minutes = Math.floor(duration / 60);
  var seconds = duration % 60;
  return minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
}
