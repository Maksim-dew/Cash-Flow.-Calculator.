import "./styles/index.css";
import {updateOutput, clearExpenses} from "./scripts/smallCircle.js"
import {sumBusiness, newPass} from "./scripts/BigCircle.js"

// Бизнес БК
const mainBG = document.querySelector(".mainBG");
if (mainBG) {
const inputsBusiness = mainBG.querySelectorAll(".input-business");
// Добавляем слушатели событий на изменение input
inputsBusiness.forEach((input) => {
  input.addEventListener("input", sumBusiness); // Отслеживаем изменения только для того input, который изменился
});
}

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
  
function setData(data = {}, field = 'JSON') {
  localStorage.setItem(field, JSON.stringify(data));
}

function getData(field = 'JSON') {

  const localDataText = localStorage.getItem(field);

  if (!localDataText) {
    return {};
  }

  const localDataJSON = JSON.parse(localDataText.toString());

  Object.keys(localDataJSON).forEach(key  => {
    if (document.getElementById(`${key}-output`) && localDataJSON[key]) {
      document.getElementById(`${key}-output`).value = localDataJSON[key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  
  getData();

  clearExpenses();
  clearExpenses('output', '.button-field-input-8');

  //Кнопки очистки Активов
  document.querySelectorAll(
    ".button-field-input-active"
  ).forEach((input) => {
    input.addEventListener("click", () => {
      const column = input.parentNode.querySelector("input[data-type]");
      const assets = document.querySelector(".assets");
      if(assets) {
      const column_1 = column.getAttribute("data-type");
      document
        .querySelector(".assets")
        .querySelector("input[data-type=" + column_1 + "]").value = 0;

      const fieldContainer = input.closest(".field");
      const column_2 = fieldContainer.querySelector("input[data-type_2]");
      column_2.value = 0;

      const column_3 = fieldContainer.querySelector("input[data-type_3]");
      column_3.value = 0;
      }
      updateOutput();
    });
  });

  document.querySelectorAll(".button-field-input-income").forEach((input) => {
    input.addEventListener("click", () => {
      const inputIncome = input.parentNode.querySelector("input[data-type]");
      console.log("inputIncome: ", inputIncome);
      inputIncome.value = 0;

      const NameIncome = input.closest(".field");
      console.log("fieldContainer: ", NameIncome);
      const columnName = NameIncome.querySelector("input[data-type]");
      columnName.value = "";
      updateOutput();
    });
  });

  document.querySelectorAll('.field-input').forEach(input => {
    input.addEventListener('focus', () => {
      input.value = '';
    });
  });

  document.querySelector('.button-footer').addEventListener('click', () => {
    setData({
      profession: document.getElementById('profession-input').value,
      player: document.getElementById('player-input').value,
      auditor: document.getElementById('auditor-input').value,
      passiveIncome: parseFloat(document.getElementById('passive-income-output').value || 0)
    });
  });

  newPass ();
});