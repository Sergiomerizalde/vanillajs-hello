/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

let who = ["The dog", "The snake", "The kid", "My mother"];
let action = ["ate", "destroyed", "peed", "broke"];
let what = ["my homework", "my keys", "my car", "the food"];
let when = [
  "in the morning",
  "before leaving the house",
  "during lunch",
  "right on time"
];

function onLoad() {
  let who_i = Math.floor(Math.random() * who.length);
  let action_i = Math.floor(Math.random() * action.length);
  let what_i = Math.floor(Math.random() * what.length);
  let when_i = Math.floor(Math.random() * when.length);

  document.write(
    who[who_i] +
      " " +
      action[action_i] +
      " " +
      what[what_i] +
      " " +
      when[when_i]
  );
}

onLoad();
