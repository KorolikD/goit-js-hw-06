const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onloginFormSubmit);

function onloginFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    return alert('Поля форми повинні бути заповнені!');
  }

  const dataSet = {
    email: email.value,
    password: password.value,
  };

  console.log(`Email: ${dataSet.email}, Password: ${dataSet.password}`);
  event.currentTarget.reset();
}
