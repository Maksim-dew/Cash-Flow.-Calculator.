export function updateOutput() {
  const income = document.querySelector(".income");
  if (!income) {
    return;
  }
  
  let sumRealty = 0;
  let sumBusiness = 0;

  //недвижка
  const realtyInputs = income.querySelectorAll(".input-realty");
  if (realtyInputs && realtyInputs.length) {
    realtyInputs.forEach((input) => {
      sumRealty += parseFloat(input.value) || 0;
    });
  }

  //бизнес
  const businessInputs = income.querySelectorAll(".input-business");
  if (businessInputs && businessInputs.length) {
    businessInputs.forEach((input) => {
      sumBusiness += parseFloat(input.value) || 0;
    });
  }

  //пассивный доход
  const sumPass = sumRealty + sumBusiness;
  console.log('sumPass: ', sumPass)
  document.querySelector(".passive-income-output").textContent = sumPass;

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

//Перекрытие расходов
export function clearExpenses(type = 'input', buttonFieldsClass = '.button-field-input-js') {
  const buttonFields = document.querySelectorAll(buttonFieldsClass);
  buttonFields.forEach((input) => {
    input.addEventListener("click", () => {
      const inputWithType = input.parentNode.querySelector("input[data-type]");
      const dataTypeName = inputWithType.getAttribute("data-type");
      inputWithType.value = 0;
      document
        .querySelector(".expenses")
        .querySelector(type + "[data-type=" + dataTypeName + "]").value = 0;
      updateOutput();
    });
  });
}