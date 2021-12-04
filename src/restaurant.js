function createRestaurant(name) {
  var restaurantObj = {};
  restaurantObj.name = name;
  restaurantObj.menus = {
    breakfast: [],
    lunch: [],
    dinner: [],
  };
  return restaurantObj;
}

function addMenuItem(restaurantName, itemToAdd) {
  if (
    restaurantName.menus.breakfast.includes(itemToAdd) ||
    restaurantName.menus.lunch.includes(itemToAdd) ||
    restaurantName.menus.dinner.includes(itemToAdd)
  ) {
    return;
  }

  if (itemToAdd.type === "breakfast") {
    restaurantName.menus.breakfast.push(itemToAdd);
  } else if (itemToAdd.type === "lunch") {
    restaurantName.menus.lunch.push(itemToAdd);
  } else if (itemToAdd.type === "dinner") {
    restaurantName.menus.dinner.push(itemToAdd);
  }
}

function removeMenuItem(restaurantObj, itemToRemove, menuType) {
  for (i = 0; i < restaurantObj.menus[menuType].length; i++) {
    var indexOfItemToRemove =
      restaurantObj.menus[menuType][i].name.indexOf(itemToRemove);
  }
  // expected output of undefined if restaurantObj.menus[menuType].name is undefined, or the index if the item does exist in said array

  if (indexOfItemToRemove === undefined) {
    return `Sorry, we don't sell ${itemToRemove}, try adding a new recipe!`;
  } else {
    var removedItem = restaurantObj.menus[menuType].splice(
      indexOfItemToRemove,
      1
    );
    return `No one is eating our ${removedItem[0].name} - it has been removed from the ${menuType} menu!`;
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
};
