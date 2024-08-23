
const income = document.querySelector(".income");

//Кнопки очистки Расходов
const buttonField_1 = document.querySelector(".button-field-input-1");
const buttonField_2 = document.querySelector(".button-field-input-2");
const buttonField_3 = document.querySelector(".button-field-input-3");
const buttonField_4 = document.querySelector(".button-field-input-4");
const buttonField_5 = document.querySelector(".button-field-input-5");
const buttonField_6 = document.querySelector(".button-field-input-6");
const buttonField_7 = document.querySelector(".button-field-input-7");
const buttonField_8 = document.querySelector(".button-field-input-8");

//Кнопки очистки Активов
const buttonFieldActive_1 = document.querySelector(
  ".button-field-input-active-1"
);
const buttonFieldActive_2 = document.querySelector(
  ".button-field-input-active-2"
);
const buttonFieldActive_3 = document.querySelector(
  ".button-field-input-active-3"
);
const buttonFieldActive_4 = document.querySelector(
  ".button-field-input-active-4"
);
const buttonFieldActive_5 = document.querySelector(
  ".button-field-input-active-5"
);
const buttonFieldActive_6 = document.querySelector(
  ".button-field-input-active-6"
);
const buttonFieldActive_7 = document.querySelector(
  ".button-field-input-active-7"
);
const buttonFieldActive_8 = document.querySelector(
  ".button-field-input-active-8"
);
const buttonFieldActive_9 = document.querySelector(
  ".button-field-input-active-9"
);
const buttonFieldActive_10 = document.querySelector(
  ".button-field-input-active-10"
);
const buttonFieldActive_11 = document.querySelector(
  ".button-field-input-active-11"
);
const buttonFieldActive_12 = document.querySelector(
  ".button-field-input-active-12"
);

const buttonFieldInputActive_1 = document.querySelector(
  ".button-field-input-income-1"
);
const buttonFieldInputActive_2 = document.querySelector(
  ".button-field-input-income-2"
);
const buttonFieldInputActive_3 = document.querySelector(
  ".button-field-input-income-3"
);
const buttonFieldInputActive_4 = document.querySelector(
  ".button-field-input-income-4"
);
const buttonFieldInputActive_5 = document.querySelector(
  ".button-field-input-income-5"
);
const buttonFieldInputActive_6 = document.querySelector(
  ".button-field-input-income-6"
);
const buttonFieldInputActive_7 = document.querySelector(
  ".button-field-input-income-7"
);
const buttonFieldInputActive_8 = document.querySelector(
  ".button-field-input-income-8"
);





export function updateOutput() {
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
const expensesСhildrenInput =
parseFloat(document.querySelector(".expenses-children-input").value) || 0; // Расходы на детей инпут

  //кредит банка
  const bankLoan = parseFloat(document.querySelector(".bank-loan").value) || 0; // Расчет процентов кредита
  const percentagesBank = bankLoan*0.1;
  document.querySelector(".bank-loan-payment").textContent = percentagesBank;

  const totalRealty =
    valueRealty1 +
    valueRealty2 +
    valueRealty3 +
    valueRealty4;

  const totalBusiness =
    valueBusiness1 +
    valueBusiness2 +
    valueBusiness3 +
    valueBusiness4;

  const resPass =
    totalRealty +
    totalBusiness;

  //пассивный доход
  document.querySelector(".output-passive-income").textContent = resPass;

  const res = resPass + inputIncome;

  //общий доход
  document.querySelector(".output-total-income").textContent = res;

  const collKids = parseFloat(document.querySelector(".coll-kids").value) || 0; // Кол-во детей

  const expensesСhildrenOutput = document.querySelector(".expenses-children")
  .textContent = expensesСhildrenInput * collKids; // Расходы на детей ДОДЕЛАТЬ 
  

  const resTotalConsumptionInput =
    taxes +
    paymentMortgageHouse +
    paymentEducation +
    paymentCarLoan +
    creditCardPayments +
    retailExpenses +
    therExpenses +
    percentagesBank +
    expensesСhildrenOutput;

  document.querySelector(".total-consumption-output").textContent =
    resTotalConsumptionInput;

  //денежный поток
  const resmonthlyIncome = res - resTotalConsumptionInput;
  document.querySelector(".monthly-income").textContent = resmonthlyIncome;

  console.log("Денежный поток" + resmonthlyIncome);

  if (resPass > resTotalConsumptionInput) {
    console.log("Поздравляю!"); // Тут попап сделать
  }

}

export function clearExpenses() {
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

export function clearAssets() {
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

export function clearIncome () {
  buttonFieldInputActive_1.addEventListener("click", () => {
    document.querySelector(".field-input-description-1").value = " ";
    document.querySelector(".field-input-income-1").value = 0;
    updateOutput();
  });

  buttonFieldInputActive_2.addEventListener("click", () => {
    document.querySelector(".field-input-description-2").value = " ";
    document.querySelector(".field-input-income-2").value = 0;
    updateOutput();
  });

  buttonFieldInputActive_3.addEventListener("click", () => {
    document.querySelector(".field-input-description-3").value = " ";
    document.querySelector(".field-input-income-3").value = 0;
    updateOutput();
  });

  buttonFieldInputActive_4.addEventListener("click", () => {
    document.querySelector(".field-input-description-4").value = " ";
    document.querySelector(".field-input-income-4").value = 0;
    updateOutput();
  });

  buttonFieldInputActive_5.addEventListener("click", () => {
    document.querySelector(".field-input-description-5").value = " ";
    document.querySelector(".field-input-income-5").value = 0;
    updateOutput();
  });

  buttonFieldInputActive_6.addEventListener("click", () => {
    document.querySelector(".field-input-description-6").value = " ";
    document.querySelector(".field-input-income-6").value = 0;
    updateOutput();
  });

  buttonFieldInputActive_7.addEventListener("click", () => {
    document.querySelector(".field-input-description-7").value = " ";
    document.querySelector(".field-input-income-7").value = 0;
    updateOutput();
  });

  buttonFieldInputActive_8.addEventListener("click", () => {
    document.querySelector(".field-input-description-8").value = " ";
    document.querySelector(".field-input-income-8").value = 0;
    updateOutput();
  });
}

clearAssets();

updateOutput();

clearExpenses();

clearIncome ();