import {getProductDetails} from './data.js';
import {slides} from './slide.js';
import {showProducts} from'./product.js';


document.addEventListener("DOMContentLoaded",async function(){


  await  getProductDetails();

  slides();
 await showProducts();

});