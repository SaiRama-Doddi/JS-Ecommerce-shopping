
import { getProductDetails } from './data.js';


document.addEventListener("DOMContentLoaded", async function () {
    const val = localStorage.getItem("ItemSelectedId");
    console.log("Loaded from localStorage: ", val);

    if (!val) return;

    const response = await getProductDetails(); // Make sure this function returns a proper object
    const products = response.products;

    const cartItemValid = products.find(p => p.id === Number(val));
    console.log("Product found in cart page:", cartItemValid);

    if (cartItemValid) {
        const cartItems = document.getElementById("cart-items");
        const div = document.createElement("div");
        div.classList.add("cart-list");
        div.innerHTML = `
            <div class="cart-img">
                <img src="${cartItemValid.images[0]}" alt="${cartItemValid.name}" />
            </div>
            <div class="items-list">
                <h4><strong>Name:</strong> ${cartItemValid.name}</h4>
                <p><strong>Category:</strong> ${cartItemValid.category}</p>
                <p><strong>Brand:</strong> ${cartItemValid.brand}</p>
                <p><strong>Price:</strong> $${cartItemValid.price}</p>
                <button class="buy">Buy Now</button>
            </div>
        `;
        cartItems.appendChild(div);
    } else {
        console.log("No product matched in cart page.");
    }
});
