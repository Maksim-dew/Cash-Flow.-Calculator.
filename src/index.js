import "./styles/index.css";

const income = document.querySelector(".income");

const btn = document.querySelector(".button");

// document.addEventListener('DOMContentLoaded', (event) => {
//   const input = document.getElementById(`.input-realty-`);

//   if (input) {
//     input.addEventListener("click", (evt) => {
//       const inputValue = parseFloat(input.value) || 0; // Преобразование значения в число
//       if (inputValue === 0) {
//         input.value = ''; // Очистка инпута
//         console.log(inputValue);
//       }
//     });
//   } else {
//     console.error('Element with class .input-realty-1 not found.');
//   }
// });

function updateOutput() {
  //недвижка
  const valueRealty1 =
    parseFloat(income.querySelector(".input-realty-1").value) || 0;
  const valueRealty2 =
    parseFloat(income.querySelector(".input-realty-2").value) || 0;
  const valueRealty3 =
    parseFloat(income.querySelector(".input-realty-3").value) || 0;
  const valueRealty4 =
    parseFloat(income.querySelector(".input-realty-4").value) || 0;

  //бизнес
  const valueBusiness1 =
    parseFloat(income.querySelector(".input-business-1").value) || 0;
  const valueBusiness2 =
    parseFloat(income.querySelector(".input-business-2").value) || 0;
  const valueBusiness3 =
    parseFloat(income.querySelector(".input-business-3").value) || 0;
  const valueBusiness4 =
    parseFloat(income.querySelector(".input-business-4").value) || 0;

  //заработок
  const inputIncome =
    parseFloat(document.querySelector(".input-income").value) || 0;
  const totalRealty = valueRealty1 + valueRealty2 + valueRealty3 + valueRealty4;
  const totalBusiness =
    valueBusiness1 + valueBusiness2 + valueBusiness3 + valueBusiness4;
  const resPass = totalRealty + totalBusiness;

  //пассивный доход
  document.querySelector(".output-passive-income").textContent = resPass;

  const res = resPass + inputIncome;
  //общий доход
  document.querySelector(".output-total-income").textContent = res;


  //общйи рассход
  const taxes = parseFloat(document.querySelector(".taxes").value) || 0; // Налоги
  const paymentMortgageHouse =
    parseFloat(document.querySelector(".payment-mortgage-house").value) || 0; // Оплата закладной на дом
  const paymentEducation =
    parseFloat(document.querySelector(".payment-education").value) || 0; // Оплата образования
  const paymentCarLoan =
    parseFloat(document.querySelector(".payment-car-loan").value) || 0; // Оплата кредита на авто
  const creditCardPayments =
    parseFloat(document.querySelector(".credit-card-payments").value) || 0; // Выплаты по кредитке
  const retailExpenses =
    parseFloat(document.querySelector(".retail-expenses").value) || 0; // Розничные расходы
  const therExpenses =
    parseFloat(document.querySelector(".other-expenses").value) || 0; // Другие расходы
  const expensesChildren =
    parseFloat(document.querySelector(".expenses-children").value) || 0; // Расходы на детей
  const bankLoanPayment =
    parseFloat(document.querySelector(".bank-loan-payment").value) || 0; // Оплата кредита банка
  const expensesСhildrenInput =
    parseFloat(document.querySelector(".expenses-children-input").value) || 0; // Расходы на детей инпут

  // const collKids = parseFloat(document.querySelector(".coll-kids").value) || 0; // Кол-во детей
  // console.log(collKids + "collKids");
  const expensesСhildrenOutput = document.querySelector(".expenses-children").textContent = expensesСhildrenInput ; // Расходы на детей ДОДЕЛАТЬ * collKids
  
  const resTotalConsumptionInput =
    taxes +
    paymentMortgageHouse +
    paymentEducation +
    paymentCarLoan +
    creditCardPayments +
    retailExpenses +
    therExpenses +
    expensesChildren +
    bankLoanPayment +
    expensesСhildrenOutput;

  document.querySelector(".total-consumption-output").textContent =
    resTotalConsumptionInput;

  //денежный поток
  const resmonthlyIncome = res - resTotalConsumptionInput;
  document.querySelector(".monthly-income").textContent = resmonthlyIncome;
  console.log("Денежный поток" + resmonthlyIncome);

  //кредит банка
  const bankLoan =
    parseFloat(document.querySelector(".bank-loan").value) || 0; // Расчет процентов кредита

  // const percentagesBank = bankLoan;

  document.querySelector(".bank-loan-payment").textContent = bankLoan;
  
}



const inputsExpenses = document.querySelectorAll('input[name="name-expenses"]');
inputsExpenses.forEach((input) => {
  input.addEventListener("change", updateOutput);
});

const inputs = document.querySelectorAll('input[type="number"]');
inputs.forEach((input) => {
  input.addEventListener("input", updateOutput);
});

function buttonDell () {
  const buttonField_1 = document.querySelector(".button-field-input-1");
  const buttonField_2 = document.querySelector(".button-field-input-2");
  const buttonField_3 = document.querySelector(".button-field-input-3");
  const buttonField_4 = document.querySelector(".button-field-input-4");
  const buttonField_5 = document.querySelector(".button-field-input-5");
  const buttonField_6 = document.querySelector(".button-field-input-6");
  const buttonField_7 = document.querySelector(".button-field-input-7");
  const buttonField_8 = document.querySelector(".button-field-input-8");

  //Закладная на дом
  buttonField_1.addEventListener("click", () => {
    document.querySelector(".mortgage-house").value = 0;
    document.querySelector(".payment-mortgage-house").value = 0;
    updateOutput();
  });

  // Кредит на образование
  buttonField_2.addEventListener("click", () => {
    document.querySelector(".payment-education").value = 0;
    document.querySelector(".credit-for-education").value = 0;
    updateOutput();
  });

  // Кредит на авто
  buttonField_3.addEventListener("click", () => {
    document.querySelector(".payment-car-loan").value = 0;
    document.querySelector(".car-loan").value = 0;
    updateOutput();
  });

  // КДолг по кредитке
  buttonField_4.addEventListener("click", () => {
    document.querySelector(".credit-card-payments").value = 0;
    document.querySelector(".credit-card-debt").value = 0;
    updateOutput();
  });

  // Розничный долг
  buttonField_5.addEventListener("click", () => {
    document.querySelector(".retail-expenses").value = 0;
    document.querySelector(".retail-debt").value = 0;
    updateOutput();
  });

  // Оплата кредита банка
  buttonField_8.addEventListener("click", () => {
    document.querySelector(".bank-loan-payment").value = 0;
    document.querySelector(".bank-loan").value = 0;
    updateOutput();
  });
  
}

function clear () {
  const buttonFieldActive_1 = document.querySelector(".button-field-input-active-1");
  const buttonFieldActive_2 = document.querySelector(".button-field-input-active-2");
  const buttonFieldActive_3 = document.querySelector(".button-field-input-active-3");
  const buttonFieldActive_4 = document.querySelector(".button-field-input-active-4");
  const buttonFieldActive_5 = document.querySelector(".button-field-input-active-5");
  const buttonFieldActive_6 = document.querySelector(".button-field-input-active-6");
  const buttonFieldActive_7 = document.querySelector(".button-field-input-active-7");
  const buttonFieldActive_8 = document.querySelector(".button-field-input-active-8");
  const buttonFieldActive_9 = document.querySelector(".button-field-input-active-9");
  const buttonFieldActive_10 = document.querySelector(".button-field-input-active-10");
  const buttonFieldActive_11 = document.querySelector(".button-field-input-active-11");
  const buttonFieldActive_12 = document.querySelector(".button-field-input-active-12");

  buttonFieldActive_1.addEventListener("click", () => {
    document.querySelector(".stocks-1").value = " ";
    document.querySelector(".number-shares-1").value = " ";
    document.querySelector(".price-1").value = " ";
    updateOutput();
  });

  buttonFieldActive_2.addEventListener("click", () => {
    document.querySelector(".stocks-2").value = "";
    document.querySelector(".number-shares-2").value = "";
    document.querySelector(".price-2").value = "";
    updateOutput();
  });

  buttonFieldActive_3.addEventListener("click", () => {
    document.querySelector(".stocks-3").value = "";
    document.querySelector(".number-shares-3").value = "";
    document.querySelector(".price-3").value = "";
    updateOutput();
  });

  buttonFieldActive_4.addEventListener("click", () => {
    document.querySelector(".stocks-4").value = "";
    document.querySelector(".number-shares-4").value = "";
    document.querySelector(".price-4").value = "";
    updateOutput();
  });

  //

  buttonFieldActive_5.addEventListener("click", () => {
    document.querySelector(".realty-1").value = "";
    document.querySelector(".first-installment-realty-1").value = "";
    document.querySelector(".first-installment-price-1").value = "";
    updateOutput();
  });

  buttonFieldActive_6.addEventListener("click", () => {
    document.querySelector(".realty-2").value = "";
    document.querySelector(".first-installment-realty-2").value = "";
    document.querySelector(".first-installment-price-2").value = "";
    updateOutput();
  });

  buttonFieldActive_7.addEventListener("click", () => {
    document.querySelector(".realty-3").value = "";
    document.querySelector(".first-installment-realty-3").value = "";
    document.querySelector(".first-installment-price-3").value = "";
    updateOutput();
  });

  buttonFieldActive_8.addEventListener("click", () => {
    document.querySelector(".realty-4").value = "";
    document.querySelector(".first-installment-realty-4").value = "";
    document.querySelector(".first-installment-price-4").value = "";
    updateOutput();
  });

  //

  buttonFieldActive_9.addEventListener("click", () => {
    document.querySelector(".business-1").value = "";
    document.querySelector(".first-installment-business-1").value = "";
    document.querySelector(".first-installment-business-price-1").value = "";
    updateOutput();
  });

  buttonFieldActive_10.addEventListener("click", () => {
    document.querySelector(".business-2").value = "";
    document.querySelector(".first-installment-business-2").value = "";
    document.querySelector(".first-installment-business-price-2").value = "";
    updateOutput();
  });

  buttonFieldActive_11.addEventListener("click", () => {
    document.querySelector(".business-3").value = "";
    document.querySelector(".first-installment-business-3").value = "";
    document.querySelector(".first-installment-business-price-3").value = "";
    updateOutput();
  });

  buttonFieldActive_12.addEventListener("click", () => {
    document.querySelector(".business-4").value = "";
    document.querySelector(".first-installment-business-4").value = "";
    document.querySelector(".first-installment-business-price-4").value = "";
    updateOutput();
  });

}

clear ();
updateOutput();
buttonDell ();