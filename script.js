const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let color = '000';
ctx.fillStyle = '#' + color;
ctx.fillRect(0, 0, 150, 20);

const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const R_hex = document.getElementById('R_hex');
const G_hex = document.getElementById('G_hex');
const B_hex = document.getElementById('B_hex');

let r = '00';
let g = '00';
let b = '00';

//Ловим изменение 1 оттенка
c1.addEventListener('input', () => {
    const value = c1.value;
    const hexValue = value.toString(16);
    R_hex.value = hexValue;
    r = hexValue;

    color = r + g + b;
    ctx.fillStyle = '#' + color;
    ctx.fillRect(0, 0, 150, 20);
});

//Ловим изменение 2 оттенка
c2.addEventListener('input', () => {
  const value = c2.value;
  const hexValue = value.toString(16);
  G_hex.value = hexValue;
  g = hexValue;

  color = r + g + b;
  ctx.fillStyle = '#' + color;
  ctx.fillRect(0, 0, 150, 20);
});
// Иии 3 оттенка
c3.addEventListener('input', () => {
  const value = c3.value;
  const hexValue = value.toString(16);
  B_hex.value = hexValue;
  b = hexValue;

  color = r + g + b;
  ctx.fillStyle = '#' + color;
  ctx.fillRect(0, 0, 150, 20);
});
