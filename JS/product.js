import {getProductDetails} from './data.js';


export async function showProducts(){

    const response=await  getProductDetails();
    const products=response.products;

  const productCat=document.getElementsByClassName("product-categories");
    if(Array.isArray(products)){
    products.forEach(product=>{
        console.log("product name"+product.id);
        console.log("product name"+product.name);
        console.log("product name"+product.description);

        const div=document.createElement("div");
        div.className = "product-item";
        div.innerHTML=  `<img src="${product.images}"/>
        <h4>${product.name}</h4>
                   <p>${product.price}</p>
                    <p>${product.category}</p>
                     <p>${product.brand}</p>
                     <button class="view-btn" data-id="${product.id}">View Details</button>`;

        productCat[0].appendChild(div);
    })
}
else {
    console.log("No products found.");
}

document.addEventListener("click",function(e){
    if(e.target.classList.contains("view-btn")){
        const productId=e.target.getAttribute("data-id");
        localStorage.setItem("selectedProductId",productId);
        window.location.href="product.html";
    }
})

}
