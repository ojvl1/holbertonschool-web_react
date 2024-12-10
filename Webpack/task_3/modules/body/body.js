import $ from "jquery";
import _ from "lodash";
import "./body.css";

let count = 0;

const $button = $("<button>Count clicks</button>");
const $countDisplay = $("<p>0 clicks</p>");

$button.on(
  "click",
  _.debounce(() => {
    count++;
    $countDisplay.text(`${count} clicks`);
  }, 300)
);

$("body").append($button, $countDisplay);
