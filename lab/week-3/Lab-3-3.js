const shoppingCart = [];

// Set the free shipping threshold
const freeShippingThreshold = 35;

// Initialize a variable to store the total price
let totalPrice = 0;

// Loop until the free shipping threshold is met
while (true) {
  // Ask the user for the dollar value of each new item
  var newItem = prompt("Enter the dollar value of the new item:");

  // Convert the input to a number using parseInt
  var newItemPrice = parseInt(newItem);

  // Add the new item price to the shopping cart
  shoppingCart.push(newItemPrice);

  // Update the total price
  totalPrice += newItemPrice;

  // Display a message in the console with item prices
  console.log("Item prices: " + shoppingCart.join(" | "));

  // Check if the total price meets the free shipping threshold
  if (totalPrice >= freeShippingThreshold) {
	alert("Your shipping for this order will be free!");
		break; // Exit the loop when free shipping threshold is met
  }
}

alert("the total price in the cart is : " + totalPrice );