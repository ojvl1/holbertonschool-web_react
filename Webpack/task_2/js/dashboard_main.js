import $ from "jquery";
import _ from "lodash";

let count = 0;

function updateCounter() {
  count++;
  $("#count").text(`${count} clicks on the button`);
}

$(document).ready(function () {
  $("body").append("<p>Holberton Dashboard</p>");
  $("body").append("<p>Dashboard data for the students</p>");

  const debouncedUpdateCounter = _.debounce(updateCounter, 500);
  $("body").append(
    '<button id="clickButton">Click here to get started</button>'
  );
  $("#clickButton").on("click", debouncedUpdateCounter);

  $("body").append('<p id="count"></p>');

  $("body").append("<p>Copyright - Holberton School</p>");
});
