function nameMenuItem(name) {
  return `Delicious ${name}`;
}
//returns an object with keys of name, price, type
function createMenuItem(name, price, type) {
  return {
  'name' : name,
  'price': price,
  'type' : type
  }
}

function addIngredients(item, ingredients) {
  //checks if the item waiting to be added exists in the ingredients array already
  if (ingredients.includes(item) === false) {
  ingredients.push(item);
  } 
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`; 
}
// PS, I think the menuItem should be Flan, not Fajitas, though a $6 dessert Fajita could be welcome!
function decreasePrice(itemToDec) {
  return (itemToDec * 0.9);
}

// returns an object with keys of title, ingredients, and type
function createRecipe(title, ingredients, menuItemType) {
  return {
    'title' : title,
    'ingredients' : ingredients,
    'type' : menuItemType
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


