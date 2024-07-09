import '../css/styles.css';
//J'ai importé dialog.js dans chaque page html à cause de l'ordre d'importation.
/* import './dialog.js'; */
import Product from "./Product.js";
import products from './products.js';
import LineItem from "./LineItem.js";
import Cart from "./Cart.js";
import './search.js';
import './form.js';

const cart = new Cart();

const productsContainerIndex = document.querySelector('.products-container-index');
const productsContainerProduits = document.querySelector('.products-container-produits');


if(productsContainerIndex) {
    for(let i = 0; i < 4; i++) {
        productsContainerIndex.appendChild(products[i].toCardHtml());
    }
}

if(productsContainerProduits) {
        products.forEach(product => {
            productsContainerProduits.appendChild(product.toCardHtml());
            productsContainerProduits.appendChild(product.toDetailHtml());
    })
}

const btnsAddToCart = document.querySelectorAll('.btn-add-to-cart');

btnsAddToCart.forEach((btnAddToCart, index) => {
    btnAddToCart.addEventListener('click', () => {
        const product = products[index];
        cart.addOrUpdateLineItem(product);
    });
});


