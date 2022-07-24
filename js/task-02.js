const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsRef = document.querySelector('#ingredients');

const makeLiElement = element => {
  const liEl = document.createElement('li');

  liEl.classList.add('item');
  liEl.textContent = element;

  return liEl;
};

const liElements = ingredients.map(makeLiElement);

ingredientsRef.append(...liElements);
