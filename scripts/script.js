// Set the target date for the countdown (20th February 2025)
var targetDate = new Date("2025/02/20 00:00:00"); // You can change the time if needed

// Function to update the countdown display
function updateCountdown() {
  // Get the current date and time
  var currentDate = new Date();
  
  // Calculate the difference between the target date and the current date in milliseconds
  var timeDifference = targetDate - currentDate;
  
  // If the countdown is finished, stop the interval
  if (timeDifference <= 0) {
    clearInterval(countdownInterval); // Stop the countdown
    console.log("Countdown Finished!");
    // Optionally, you can display a message when the countdown finishes
    return;
  }

  // Convert the time difference from milliseconds to seconds
  var totalSeconds = Math.floor(timeDifference / 1000);

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(totalSeconds / (24 * 60 * 60));
  var hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  var minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  var seconds = totalSeconds % 60;

  // Update the DOM elements with the new values
  daysElement.querySelector('.number').textContent = days;
  hoursElement.querySelector('.number').textContent = hours;
  minutesElement.querySelector('.number').textContent = minutes;
  secondsElement.querySelector('.number').textContent = seconds;
}

// DOM elements to display countdown
var daysElement = document.getElementById('days');
var hoursElement = document.getElementById('hours');
var minutesElement = document.getElementById('minutes');
var secondsElement = document.getElementById('seconds');

// Start the countdown when the page loads
var countdownInterval = setInterval(updateCountdown, 1000); // Update every second


document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('.header-nav-wrap').classList.toggle('show');
});
