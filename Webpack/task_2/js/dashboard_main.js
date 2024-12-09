import $ from "jquery";
import _ from "lodash";
import "../css/main.css";

// Initialize count
let count = 0;

// Function to update counter
function updateCounter() {
  count++;
  $("#count").text(`${count} clicks on the button`);
}

// Document ready function
$(document).ready(function () {
  // Create logo div
  $("body").prepend('<div id="logo"></div>');

  // Create and append paragraphs
  $("body").append("<p>Holberton Dashboard</p>");
  $("body").append("<p>Dashboard data for the students</p>");

  // Create button with debounced click handler
  const debouncedUpdateCounter = _.debounce(updateCounter, 500);
  $("body").append(
    '<button id="clickButton">Click here to get started</button>'
  );
  $("#clickButton").on("click", debouncedUpdateCounter);

  // Create count paragraph next to button
  $("body").append('<p id="count"></p>');

  // Copyright paragraph
  $("body").append("<p>Copyright - Holberton School</p>");
});
