import '../css/styles.css';
//J'ai importé dialog.js dans chaque page html à cause de l'ordre d'importation.
/* import './dialog.js'; */
import Product from "./Product.js";
import products from './products.js';
import LineItem from "./LineItem.js";
import Cart from "./Cart.js";
import './search.js';
import './form.js';

/**
 * @type {Cart}
*/
const cart = new Cart();

/**
 * @type {HTMLElement}
*/
const productsContainerIndex = document.querySelector('.products-container-index');

/**
 * @type {HTMLElement}
*/
const productsContainerProduits = document.querySelector('.products-container-produits');

// Fonction pour ajouter des produits et leurs détails au conteneur
function addProductsToContainer(container, productArray) {
    productArray.forEach(product => {
        container.appendChild(product.toCardHtml());
        container.appendChild(product.toDetailHtml());
    });
}

// Ajout des 4 premières cartes produits dans la div .products-container-index, dans index.html
if (productsContainerIndex) {
    addProductsToContainer(productsContainerIndex, products.slice(0, 4));
}

// Ajout de toutes les cartes produits dans la div .products-container-produits, dans produits.html
if (productsContainerProduits) {
    addProductsToContainer(productsContainerProduits, products);
}

/**
 * @param {HTMLElement} container
 */
// Fonction pour ajouter des écouteurs aux boutons 'Ajouter au panier'
function addEventListenersToCartButtons(container) {
    const btnsAddToCart = container.querySelectorAll('.btn-add-to-cart');
    btnsAddToCart.forEach((btnAddToCart, index) => {
        btnAddToCart.addEventListener('click', () => {
            const product = products[index];
            cart.addOrUpdateLineItem(product);
        });
    });
}

// Ajout des écouteurs aux boutons dans les conteneurs de produits
if (productsContainerIndex) {
    addEventListenersToCartButtons(productsContainerIndex);
}

if (productsContainerProduits) {
    addEventListenersToCartButtons(productsContainerProduits);
}


