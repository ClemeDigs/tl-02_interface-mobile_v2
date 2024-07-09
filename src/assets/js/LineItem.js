import Product from "./Product.js";

export default class LineItem {
    /**
     * @param {Product} product
     * @param {number} quantity
     * @param {number} total
     */
    constructor (product, quantity){
        this.product = product;
        this.quantity = quantity;
        this.total = 0;
        this.updateTotal();
    }

    /**
     * 
     * @returns {HTMLDivElement}
     */
    toCartHtml(){
        const divCart = document.createElement('div');
        const imgCartHtml = document.createElement('img');
        const divTextCartHtml = document.createElement('div');
        const nameCartHtml = document.createElement('p');
        const descCartHtml = document.createElement('p');
        const priceCartHtml = document.createElement('p');
        const playWithQuantity = document.createElement('div');
        const btnRemoveQuantity = document.createElement('button');
        const quantityHtml = document.createElement('p');
        const btnAddQuantity = document.createElement('button');
        const subTotalHtml = document.createElement('p');

        imgCartHtml.setAttribute('src', this.product.img);
        imgCartHtml.setAttribute('alt', this.product.title);
        nameCartHtml.textContent = this.product.title;
        descCartHtml.textContent = this.product.desc;
        priceCartHtml.textContent = '$' + this.product.price;
        btnRemoveQuantity.textContent = '-';
        quantityHtml.textContent = this.quantity;
        btnAddQuantity.textContent = '+';
        subTotalHtml.textContent = 'Sous-total: $' + this.total;

        divCart.className = 'flex gap-3 p-3 items-center border-b order-1';
        imgCartHtml.className = 'w-[80px]';
        divTextCartHtml.className = '';
        nameCartHtml.className = 'font-bold text-lg';
        descCartHtml.className = 'italic text-sm';
        priceCartHtml.className = 'font-bold';
        playWithQuantity.className = 'flex gap-6 mt-2 items-center'
        btnRemoveQuantity.className = 'btn-remove font-bold text-lg border px-2 rounded-full transition-all duration-300 hover:bg-orange';
        quantityHtml.className = 'quantity';
        btnAddQuantity.className = 'btn-add font-bold text-lg border px-2 rounded-full transition-all duration-300 hover:bg-orange';

        divCart.appendChild(imgCartHtml);
        divCart.appendChild(divTextCartHtml);
        divTextCartHtml.appendChild(nameCartHtml);
        divTextCartHtml.appendChild(descCartHtml);
        divTextCartHtml.appendChild(priceCartHtml);
        divTextCartHtml.appendChild(playWithQuantity);
        playWithQuantity.appendChild(btnRemoveQuantity);
        playWithQuantity.appendChild(quantityHtml);
        playWithQuantity.appendChild(btnAddQuantity);
        playWithQuantity.appendChild(subTotalHtml);

    this.element = divCart;

    return divCart;

    };

    /**
     * 
     * @returns {void}
     */
    updateTotal() {
        this.total = parseFloat((this.quantity * this.product.price).toFixed(2));
    }


    /**
     * 
     * @returns {void}
     */
    updateLineItemQuantity(quantity) {
        this.quantity = quantity;
        this.updateTotal();
    }
    
}



