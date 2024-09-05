const income = document.querySelector(".income");
// const assets = document.querySelector(".assets");

export function updateOutput() {
  if (window.location.pathname === '/index.html') {
  //недвижка
  const realtyInputs = income.querySelectorAll(".input-realty");
  let sumRealty = 0;
  realtyInputs.forEach((input) => {
    sumRealty += parseFloat(input.value) || 0;
  });

  //бизнес
  const businessInputs = income.querySelectorAll(".input-business");
  let sumBusiness = 0;
  businessInputs.forEach((input) => {
    sumBusiness += parseFloat(input.value) || 0;
  });

  //пассивный доход
  const sumPass = sumRealty + sumBusiness;
  document.querySelector(".output-passive-income").textContent = sumPass;

  //заработок
  const inputIncome =
  parseFloat(document.querySelector(".input-income").value) || 0;

  
  //общий доход
  const totalIconom = sumPass + inputIncome;
  document.querySelector(".output-total-income").textContent = totalIconom;


  //кредит банка
  const bankLoan = parseFloat(document.querySelector(".bank-loan").value) || 0; // Расчет процентов кредита
  const percentagesBank = bankLoan * 0.1;
  document.querySelector(".bank-loan-payment").textContent = percentagesBank;


  const collKids = parseFloat(document.querySelector(".coll-kids").value) || 0; // Кол-во детей

  const expensesСhildrenInput =
    parseFloat(document.querySelector(".expenses-children-input").value) || 0; // Расходы на детей инпут

  document.querySelector(
    ".expenses-children"
  ).textContent = expensesСhildrenInput * collKids; // Расходы на детей

  //общйи расход input
  const expensesWrapper = document.querySelector(".expenses");
  const numberInputs = expensesWrapper.querySelectorAll(".expenses-name");
  let totalIconomTotalConsumptionInput = 0;
  numberInputs.forEach((input) => {
    totalIconomTotalConsumptionInput =
    totalIconomTotalConsumptionInput + parseFloat(input.value || 0);
    //console.log("totalIconomTotalConsumptionInput: ", totalIconomTotalConsumptionInput);
  });

    //общйи расход output
    let totalIconomTotalConsumptionOutput = 0;
    const numberOutput = expensesWrapper.querySelectorAll(".expenses-output");
    totalIconomTotalConsumptionOutput = Array.from(numberOutput).reduce((acc, output) => {
      return acc + (parseFloat(output.value) || 0);
    }, 0);
    console.log("totalIconomTotalConsumptionOutput: ", totalIconomTotalConsumptionOutput);


  const totalIconomConsumption = totalIconomTotalConsumptionInput + totalIconomTotalConsumptionOutput;

  document.querySelector(".total-consumption-output").textContent =
  totalIconomConsumption;



  //денежный поток
  const totalIconommonthlyIncome = totalIconom - totalIconomConsumption;
  document.querySelector(".monthly-income").textContent = totalIconommonthlyIncome;

  // console.log("Денежный поток" + totalIconommonthlyIncome);

  // if (sumPass > totalIconomTotalConsumptionInput) {
  //   console.log("Поздравляю!"); // Тут попап сделать
  // }
}
}

//Перекрытие расходов
export function clearExpenses() {
  const buttonFields = document.querySelectorAll(".button-field-input-js");
  buttonFields.forEach((input) => {
    input.addEventListener("click", () => {
      const inputWithType = input.parentNode.querySelector("input[data-type]");
      console.log("inputWithType:" + inputWithType)
      const dataTypeName = inputWithType.getAttribute("data-type");
      console.log("dataTypeName:" + dataTypeName)
      inputWithType.value = 0;
      document
        .querySelector(".expenses")
        .querySelector("input[data-type=" + dataTypeName + "]").value = 0;
      updateOutput();
    });
  });

  //для кредита банка, т.к. он output
  const buttonField = document.querySelectorAll(".button-field-input-8");
  buttonField.forEach((input) => {
    input.addEventListener("click", () => {
      const outputWithType = input.parentNode.querySelector("input[data-output]");
      console.log("inputWithType:" + outputWithType)
      const dataType = outputWithType.getAttribute("data-output");
      console.log("dataType:" + dataType)
      outputWithType.value = 0;
      document
        .querySelector(".expenses")
        .querySelector("output[data-output=" + dataType + "]").value = 0;
    });
  });
}

//Кнопки очистки Активов
export function clearAssets() {
  const buttonFieldActive = document.querySelectorAll(
    ".button-field-input-active"
  );
  buttonFieldActive.forEach((input) => {
    input.addEventListener("click", () => {
      const column = input.parentNode.querySelector("input[data-type]");
      if (window.location.pathname === '/index.html') {
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
}

export function clearIncome() {
  const buttonIncome = document.querySelectorAll(".button-field-input-income");
  buttonIncome.forEach((input) => {
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
}