import {cart} from '../scripts/cart.js'; // Import the cart array from cart.js

//This code dynamically generates HTML for a list of product cards by iterating over the products array and using template literals to populate product details like image, name, rating, price, and quantity options.

let productsHtml = "";

products.forEach((product) => {
   // Create a product card for each product
   // Use template literals to create the HTML structure for each product
   productsHtml += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container 
    
          js-product-quantity-selector-${product.id}">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart js-add-to-cart-${product.id}" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`

});

document.querySelector(".js-products-grid").innerHTML = productsHtml;



const addedMessageTimeouts = {}; // Object to store timeouts for each product ID
//button because we are using button tag


document.querySelectorAll(".js-add-to-cart").forEach((button)=>{
  button.addEventListener("click",()=>{
    const { productId } = button.dataset; // Destructure the product ID from the button's data attribute


    const quantity = Number(document.querySelector(`.js-product-quantity-selector-${productId} select`).value); // Get the selected quantity from the dropdown

    console.log(quantity); // Log the selected quantity to the console for debugging


    

    //if it has matching item in the cart, increase the quantity by 1
    let matchingItem;

    cart.forEach((item)=>{{
      if(productId == item.productId) { // Check if the product ID matches the item in the cart
        matchingItem = item; // If a matching item is found, assign it to matchingItem
      }    
    }});
    // Check if a matching item was found in the cart
    console.log(matchingItem); // Log the matching item to the console for debugging
    if(matchingItem) {
      matchingItem.quantity += quantity; // Increase the quantity of the matching item by 1
    }else{
      cart.push({ 
        productId, // Destructure productId directly
        quantity, // Default quantity to 1
      });
      // Find the product in the cart array
    }
    console.log(cart);

    let cartQuantity = 0; // Initialize cart quantity to 0
      
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });
    console.log(cartQuantity); // Log the total cart quantity to the console for debugging

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity; // Update the cart quantity displayed in the HTML

    const addedMessage  =  document.querySelector(`.js-added-to-cart-${productId}`);
          addedMessage.classList.add(`added-to-cart-visible`);

          const previousTimeout = addedMessageTimeouts[productId]; // Check if a timeout already exists for this product ID

          if (previousTimeout) {
            clearTimeout(previousTimeout); // Clear the previous timeout if it exists
          }
          
          const timeout = setTimeout(() => {
            addedMessage.classList.remove(`added-to-cart-visible`); // Remove the visible class after 2 seconds
          }, 2000);

          addedMessageTimeouts[productId] = timeout; // Store the new timeout in the object

       
      






  
 
  
   
  });

});


