import '../css/styles.css';
//J'ai importé dialog.js dans chaque page html à cause de l'ordre d'importation.
/* import './dialog.js'; */
// code inutile -0.5
import products from './products.js';
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

//Afficher les cartes produits et les cartes detail dans le container products de la page produits
if(productsContainerProduits) {
    products.forEach(product => {
        productsContainerProduits.appendChild(product.toCardHtml());
        productsContainerProduits.appendChild(product.toDetailHtml());
    })
};

//Afficher les 4 premières cartes produits et les cartes detail dans le container products de la page index
if(productsContainerIndex) {
    for(let i = 0; i < 4; i++) {
        productsContainerIndex.appendChild(products[i].toCardHtml());
        productsContainerIndex.appendChild(products[i].toDetailHtml());
    }
};

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


