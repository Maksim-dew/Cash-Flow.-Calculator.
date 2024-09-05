import "./styles/index.css";

import {updateOutput, clearExpenses, clearAssets, clearIncome} from "./scripts/smallCircle.js"
import {sumBusiness} from "./scripts/BigCircle.js"

//Бизнес БК

  const mainBG = document.querySelector(".mainBG");
  const inputsBusiness = mainBG.querySelectorAll(".input-business");
  inputsBusiness.forEach((input) => {
    input.addEventListener("click", sumBusiness);
  });



//kids
const inputsExpenses = document.querySelectorAll('input[name="name-expenses"]');
inputsExpenses.forEach((input) => {
  input.addEventListener("change", updateOutput);
});

const inputs = document.querySelectorAll('input[type="number"]');
inputs.forEach((input) => {
  input.addEventListener("input", updateOutput);
});

const inputText = document.querySelectorAll('input[type="text"]');
inputText.forEach((input) => {
  input.addEventListener("change", updateOutput);
});

function inputClear() {
  const inputFields = document.querySelectorAll('.field-input');
  inputFields.forEach(input => {
    input.addEventListener('focus', () => {
      input.value = '';
    });
  });
  }

  
function setData () {
  
  const profession = document.getElementById('profession-input').value;
  const player = document.getElementById('player-input').value;
  const auditor = document.getElementById('auditor-input').value;
  // const passiv = document.getElementById('output-passive-income').value;

  
// console.log('passiveIncome', String(passiv));
// console.log("localStorage: ", String(passiv));

localStorage.setItem('profession', profession);
localStorage.setItem('player', player);
localStorage.setItem('auditor', auditor);

}

const buttonFooter =  document.querySelector('.button-footer');
buttonFooter.addEventListener('click', setData)

function loadData() {

  const profession = localStorage.getItem('profession');
  const player = localStorage.getItem('player');
  const auditor = localStorage.getItem('auditor');

  // const storedPassiveIncome = localStorage.getItem('passiveIncome');
  // document.getElementById('output-passive-income').textContent = storedPassiveIncome;

  document.getElementById('profession-output').textContent = profession;
  document.getElementById('player-output').textContent = player;
  document.getElementById('auditor-output').textContent = auditor;
}


  clearAssets();
  updateOutput();
  clearExpenses();
  clearIncome();
  inputClear();

  loadData();
