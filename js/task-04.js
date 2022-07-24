const buttonDecrementRef = document.querySelector('button[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('button[data-action="increment"]');
const counterRef = document.querySelector('#value');

buttonDecrementRef.addEventListener('click', onDecrementButton);
buttonIncrementRef.addEventListener('click', onIncrementButton);

let total = 0;

function onDecrementButton() {
  total -= 1;
  counterRef.innerHTML = total;
}

function onIncrementButton() {
  total += 1;
  counterRef.innerHTML = total;
}
