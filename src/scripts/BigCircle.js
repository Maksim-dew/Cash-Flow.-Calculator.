
// const oldPass = parseFloat(document.querySelector('.old-pass').value) || 0;

// export function newPass () {
//   const newPass = oldPass * 100;
//   document.querySelector('.new-pass').textContent = newPass;
//   console.info(newPass + 'newPass');
// }

export function sumBusiness () {
const mainBG = document.querySelector(".mainBG");
console.log("mainBG: ", mainBG);
const inputsBusiness = mainBG.querySelectorAll(".input-business");
console.log("inputsBusiness: ", inputsBusiness);

let sumBusiness = 0;
inputsBusiness.forEach((input) => {
  sumBusiness += parseFloat(input.value) || 0;
});

console.log("sumBusiness: ", sumBusiness);

}

