
export function newPass () {
  const oldPassElem = document.querySelector(".new-passBG");
  if(!oldPassElem) {
    return;
  }
const PassElem = oldPassElem.querySelector(".old-pass").value;
const newPass = PassElem * 100;

const newWinPass = 0;

document.querySelector('.output-new-pass').textContent = newPass;
document.querySelector('.output-new-win-pass').textContent = newWinPass;

const WinPass = newWinPass + 50000;
document.querySelector('.output-win-pass').textContent = WinPass;

}

export function sumBusiness(event) {
  // Получаем измененный input
  const input = event.target;
  
  // Считаем сумму всех input с классом input-business
  const mainBG = document.querySelector(".mainBG");
  const inputsBusiness = mainBG.querySelectorAll(".input-business");

  // Получаем текущее значение элемента с классом .output-win-pass
  const winPassElem = document.querySelector('.output-win-pass');
  let winPass = 0;

  if (winPassElem) {
    winPass = parseFloat(winPassElem.value) || 0;
  }

  let sumBusiness = winPass; // Начальная сумма с winPass

  
  inputsBusiness.forEach((input) => {
    sumBusiness += parseFloat(input.value) || 0;
  });

  console.log("sumBusiness: ", sumBusiness);

  // Находим соседний элемент output для текущего input и обновляем его
  const outputElem = input.closest(".column2-field-bc").nextElementSibling.querySelector("output");
  if (outputElem) {
    outputElem.textContent = sumBusiness; // Пример округления до 2 знаков после запятой
  }
}


