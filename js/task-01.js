const liItemsEl = document.querySelectorAll('.item');
console.log('Number of categories:', liItemsEl.length);

// ?-----------------------------

liItemsEl.forEach(element => {
  const tytleText = element.firstElementChild.textContent;
  const totalListCount = element.lastElementChild.children.length;

  console.log('');
  console.log(`Category: ${tytleText}`);
  console.log(`Elements: ${totalListCount}`);
});
