// Select DOM elements
const timeButton = document.getElementById('timeButton');
const timeDisplay = document.getElementById('timeDisplay');
const timeList = document.getElementById('timeList');

// Array to store timestamps
const timestamps = [];

// Add click event listener to the button
timeButton.addEventListener('click', function() {
  // Get current time as a string
  const now = new Date();
  const timeString = now.toLocaleTimeString();

  // Update the paragraph with current time
  timeDisplay.textContent = `Current time: ${timeString}`;

  // Add the new time to the array
  timestamps.push(timeString);

  // Clear the list before repopulating
  timeList.innerHTML = '';

  // Generate and append a new <li> for each time in the array
  timestamps.forEach(time => {
    const li = document.createElement('li');
    li.textContent = time;
    timeList.appendChild(li);
  });
});
