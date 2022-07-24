const refs = {
  fontSizeControl: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

// Якщо потрібно можемо задати десфолтне значення
// refs.fontSizeControl.value = 16;
refs.text.style.fontSize = `${refs.fontSizeControl.value}px`;

refs.fontSizeControl.addEventListener('input', onFontSizeControlInput);

function onFontSizeControlInput(event) {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
}
