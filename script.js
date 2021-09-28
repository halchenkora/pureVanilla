const container = document.getElementById('container');
const btn = document.getElementById('btn');

const hex = document.getElementById('hexValue');

const elements = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

function changeColor() {
  let number = [];
  for (let el of elements) {
    let n = Math.floor(Math.random() * elements.length);
    el = elements[n];
    if (number.length < 6) {
      number.push(el);
    }
  }
  const random = number.reduce((acc, cur) => acc + cur);
  container.style.backgroundColor = `#${random}`;
  hex.textContent = `The color is #${random}`;
}

btn.addEventListener('click', changeColor);
