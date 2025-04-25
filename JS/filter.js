import { getProductDetails } from './data.js';

const checkboxes = document.querySelectorAll('.clothing');
const productContainer = document.querySelector(".product-categories");

let selectedCategories = [];

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', async function (e) {
    const category = e.target.getAttribute('data-category');

    if (e.target.checked) {
      selectedCategories.push(category);
    } else {
      selectedCategories = selectedCategories.filter(cat => cat !== category);
    }

    const response = await getProductDetails();
    const data = response.products;

    // Filter based on selected categories
    const filtered = data.filter(item => selectedCategories.includes(item.category));

    // Clear and repopulate products
    productContainer.innerHTML = "";

    filtered.forEach(product => {
      const div = document.createElement("div");
      div.className = "product-card";
      div.innerHTML = `
        <div class="product-image">
            <img src="${product.images[0]}" alt="${product.name}" />
        </div>
        <div class="product-info">
            <h2>${product.name}</h2>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Category:</strong> ${product.category} (${product.subcategory})</p>
            <p><strong>Brand:</strong> ${product.brand}</p>
            <p><strong>Sizes:</strong> ${product.size}</p>
            <p><strong>Rating:</strong> ${product.rating} ⭐</p>
            <p><strong>Color:</strong> ${product.color}</p>
            <p><strong>Material:</strong> ${product.material}</p>
            <p><strong>Tags:</strong> ${product.tags.join(", ")}</p>
            <p><strong>Description:</strong> ${product.description}</p>
            <button class="cart" data-id="${product.id}">Add to Cart</button>
        </div>
      `;
      productContainer.appendChild(div);
    });
  });
});
