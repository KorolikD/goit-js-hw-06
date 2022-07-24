function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const buttonChangeColor = document.querySelector('.change-color');

buttonChangeColor.addEventListener('click', onButtonChangeColorClick);

function onButtonChangeColorClick() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}
