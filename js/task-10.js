function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const boxesArr = [];
  const divSize = 30;

  for (let i = 0; i < amount; i += 1) {
    let growingSize = divSize + i * 10;
    const boxEl = `<div style="width: ${growingSize}px; height: ${growingSize}px; background-color: ${getRandomHexColor()};"></div>`;
    boxesArr.push(boxEl);
  }

  return boxesArr.join('');
}

const boxesRef = document.querySelector('#boxes');
const controlsInput = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

controlsInput.addEventListener('input', onControlsInput);
createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);
document.addEventListener('keydown', onPressKeydown);

function onControlsInput(event) {
  const { value, min, max } = event.currentTarget;

  if (Number(value) > max) {
    event.currentTarget.value = '100';
  }

  if (Number(value) < min || value === '') {
    event.currentTarget.value = '';
  }

  return event.currentTarget.value;
}

function onCreateBtnClick() {
  boxesRef.insertAdjacentHTML('afterbegin', createBoxes(controlsInput.value));
  controlsInput.value = '';
  controlsInput.focus();
}

function onDestroyBtnClick() {
  boxesRef.innerHTML = '';
  controlsInput.value = '';
  controlsInput.focus();
}

function onPressKeydown(event) {
  if (event.key === 'Enter') {
    onCreateBtnClick();
  }
  if (event.key === 'Delete') {
    onDestroyBtnClick();
  }
}
