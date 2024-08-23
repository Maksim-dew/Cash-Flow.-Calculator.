import "./styles/index.css";

import {updateOutput, clearExpenses, clearAssets, clearIncome} from "./scripts/smallCircle.js"
import {newPass} from "./scripts/BigCircle.js"


const inputsExpenses = document.querySelectorAll('input[name="name-expenses"]');
inputsExpenses.forEach((input) => {
  input.addEventListener("change", updateOutput);
});

const inputs = document.querySelectorAll('input[type="number"]');
inputs.forEach((input) => {
  input.addEventListener("input", updateOutput);
});


clearAssets();

updateOutput();

clearExpenses();

clearIncome ();

newPass ();