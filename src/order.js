function takeOrder(orderNum, deliveryOrders) {
  if( deliveryOrders.length <=2) {  
  deliveryOrders.push(orderNum);
  }
}

function refundOrder(orderNum, deliveryOrders) { 
  for (i=0 ; i < deliveryOrders.length ; i++) {
    if (deliveryOrders[i].orderNumber === orderNum) {
      deliveryOrders.splice(i, 1);
    }
  }
}

function listItems(array) {
  var foodList = [];
  for ( i = 0 ; i < array.length ; i++) {
    foodList.push(array[i].item);
  }
  return foodList.join(', ')
}

function searchOrder(ordersArray, searchTerm) {
  var foodContainer = [];
  for (i=0 ; i < ordersArray.length; i++) {
    foodContainer.push(ordersArray[i].item);
  }
  if (foodContainer.includes(searchTerm)) {
    return true;
  } else {
    return false;
  }

}

var order1 = {
        orderNumber: 1234,
        item: "burger",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order2 = {
        orderNumber: 2342,
        item: "blt sandwich",
        price: "5.99",
        orderType: "delivery",
        status: "accepted"
      };

      var deliveryOrders = [order1, order2];
console.log(searchOrder(deliveryOrders, "burger"))

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}