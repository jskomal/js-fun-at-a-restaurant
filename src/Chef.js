class Chef {
  constructor(chefName, restaurant) {
    this.name = chefName;
    this.restaurant = restaurant;
  }
  greetCustomer(customerName, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${customerName}!`;
    } else {
      return `Hello, ${customerName}!`;
    }
  }
  checkForFood(foodObj) {
    if (
      this.restaurant.menus.breakfast.includes(foodObj) ||
      this.restaurant.menus.lunch.includes(foodObj) ||
      this.restaurant.menus.dinner.includes(foodObj)
    ) {
      return `Yes, we're serving ${foodObj.name} today!`;
    } else {
      return `Sorry, we aren\'t serving ${foodObj.name} today.`;
    }
  }
}
module.exports = Chef;
