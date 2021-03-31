/* global Cart */
'use strict';


// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;


function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let elE1 = document.getElementById('cart');
  elE1.innerHTML='';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let tableE1 = document.getElementById('cart');
  // TODO: Find the table body
for (let i=0; cart.items.length;i++)
{
  let newPro = cart.items[i];

  let rowEl = document.createElement('tr');
  let linkCell = document.createElement('td') ;
  let quantityCell = document.createElement('td');
  let itemCell = document.createElement('td');
  let buttonEl = document.createElement('button');

  buttonEl.textContent = 'X';
  buttonEl.setAttribute('type', 'submit');
  buttonEl.setAttribute('name', i);
  linkCell.appendChild(buttonEl);
  rowEl.appendChild(linkCell);
  quantityCell.textContent = newPro.quantity;
  rowEl.appendChild(quantityCell);
  itemCell.textContent = newPro.product;
  rowEl.appendChild(itemCell);
  tableE1.appendChild(rowEl);
}
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  cart.removeItem(event.target.id);
  cart.saveToLocalStorage();
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
