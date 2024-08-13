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
}



const inputsExpenses = document.querySelectorAll('input[name="name-expenses"]');
// inputsExpenses.forEach((input) => {
//   input.addEventListener("focus", (event) => {
//     event.target.value = "";
//   });
// });

// Обновление данных при изменении поля
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

  // const mortgageHouse =  parseFloat(document.querySelector(".mortgage-house").value) || 0;
  // const creditEducation= parseFloat(document.querySelector(".credit-for-education").value) || 0;
  // const carLoan = parseFloat(document.querySelector(".car-loan").value) || 0;
  // const creditCardDebt = parseFloat(document.querySelector(".credit-card-debt").value) || 0;
  // const retailDebt = parseFloat(document.querySelector(".retail-debt").value) || 0;
  // const onMortgages = parseFloat(document.querySelector(".on-mortgages").value) || 0;
  // const liabilities = parseFloat(document.querySelector(".liabilities").value) || 0;
  // const bankLoan = parseFloat(document.querySelector(".bank-loan").value) || 0;

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

updateOutput();
buttonDell ();