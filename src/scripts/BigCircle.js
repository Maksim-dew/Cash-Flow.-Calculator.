
const oldPass = parseFloat(document.querySelector('.old-pass').value) || 0;
export function newPass () {
  const newPass = oldPass * 100;
  document.querySelector('.new-pass').textContent = newPass;
  console.info(newPass + 'newPass');
}