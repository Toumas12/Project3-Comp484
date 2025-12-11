// Task 1: Verification Log
console.log("Status Manager Started");
// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Write the code here to select the mainTitle and update its innerHTML:
// Example: mainTitle.innerHTML = "New Title";
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
// to add the required 'data-action' attribute.
toggleButton.setAttribute("data-action", "status-toggle");
/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].
function highlightListItems() {
    // Select all <li> elements inside the item list
    const listItems = document.querySelectorAll("#item-list li");

    // Loop and set each item's text color to blue
    listItems.forEach((item) => {
        item.style.color = "blue";
    });
}
highlightListItems();

// Task 8: Dynamic Element Creation
function createTimestamp() {
    const span = document.createElement("span");
    span.innerHTML = " " + new Date().toLocaleTimeString();
    statusOutput.appendChild(span);
}

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
function toggleStatus(e) {
    // Task 6: Prevent default anchor behavior
    e.preventDefault();

    // Task 5: Toggle the .hidden class on the statusOutput div
    statusOutput.classList.toggle("hidden");

    // Task 7 & 8: Check visibility and update title style / create timestamp
    const isVisible = !statusOutput.classList.contains("hidden");

    if (isVisible) {
        // Status is visible
        mainTitle.style.backgroundColor = "yellow";
        createTimestamp(); // Task 8: append a new timestamp
    } else {
        // Status is hidden
        mainTitle.style.backgroundColor = "";
    }
}

// Bind toggleStatus to the toggle button click
toggleButton.addEventListener("click", toggleStatus);

/* ======================================= */
// --- Task 10: Timed Animation ---
function startFlashing() {
    // Avoid creating multiple intervals
    if (intervalId !== null) return;

    intervalId = setInterval(() => {
        controlPanel.classList.toggle("hidden");
    }, 500);
}

function stopFlashing() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }

    // Make sure control panel is visible when stopped
    controlPanel.classList.remove("hidden");
}

// Bind the timer button events
timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);