const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', onValidationInputBlur);

function onValidationInputBlur(event) {
  if (Number(validationInput.dataset.length) === Number(event.currentTarget.value.length)) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
    return;
  }
  validationInput.classList.remove('valid');
  validationInput.classList.add('invalid');

  if (event.currentTarget.value === '') {
    validationInput.classList.remove('valid');
    validationInput.classList.remove('invalid');
  }
}
