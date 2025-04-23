import { getProductDetails } from './data.js';

document.addEventListener("DOMContentLoaded", async function () {
    const productId = localStorage.getItem("selectedProductId");
    console.log("Selected Product ID:", productId);

    const response = await getProductDetails();
    const products = response.products;

    const selectedProduct = products.find(p => p.id === Number(productId));

    if (selectedProduct) {
        const detail = document.getElementById("product-details");

        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
            <div class="product-image">
                <img src="${selectedProduct.images[0]}" alt="${selectedProduct.name}" />
            </div>
            <div class="product-info">
                <h2>${selectedProduct.name}</h2>
                <p><strong>Price:</strong> $${selectedProduct.price}</p>
                <p><strong>Category:</strong> ${selectedProduct.category} (${selectedProduct.subcategory})</p>
                <p><strong>Brand:</strong> ${selectedProduct.brand}</p>
                <p><strong>Sizes:</strong> ${selectedProduct.size.join(", ")}</p>
                <p><strong>Rating:</strong> ${selectedProduct.rating} ⭐</p>
                <p><strong>Color:</strong> ${selectedProduct.color}</p>
                <p><strong>Material:</strong> ${selectedProduct.material}</p>
                <p><strong>Tags:</strong> ${selectedProduct.tags.join(", ")}</p>
                <p><strong>Description:</strong> ${selectedProduct.description}</p>
                <button id="cart">Add to Cart</button>
            </div>
        `;
        detail.appendChild(div);
    } else {
        document.getElementById("product-details").innerHTML = "<p>Product not found.</p>";
    }
});
