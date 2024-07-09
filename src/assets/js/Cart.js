import LineItem from "./LineItem.js"

//Faire fonctionner le total
//Ne pas faire disparaitre le lineItem à chaque clic sur le - mais quand la quantité = 0

export default class Cart{
    /**
     * @param {LineItem[]} lineItems
     * @param {number} total
     */
    constructor(){
        this.lineItems = [];
        this.total = 0;
        this.htmlElement = document.getElementById('cart');
        this.lineItemsHtml = this.htmlElement.querySelector('.line-items-container');
        this.totalPriceHtml = this.htmlElement.querySelector('.total-price');

        if(!this.htmlElement || !this.lineItemsHtml || !this.totalPriceHtml){
            throw new Error ('Impossible de trouver l\'élément html de la class Cart')
        }
    }


    getTotal() {
        let total = 0;

        for(let lineItem of this.lineItems){
            total += lineItem.total;
        }
        return parseFloat(total.toFixed(2));
    }

    findLineItem(product) {
        for (let i = 0; i < this.lineItems.length; i++) {
            let lineItem = this.lineItems[i];
            if (lineItem.product.id === product.id) {
                return lineItem;
            }
        }
    }

    addOrUpdateLineItem(product) {
        let existingLineItem = this.findLineItem(product);
        if (existingLineItem) {
            existingLineItem.updateLineItemQuantity(existingLineItem.quantity + 1);
        } else {
            const lineItem = new LineItem(product, 1);
            this.lineItems.push(lineItem);
        }
    this.renderToHtml()
    }

    renderToHtml(){
        this.lineItemsHtml.innerHTML = '';

        this.lineItems.forEach( lineItem => {
            const lineItemHtml = lineItem.toCartHtml();
            this.lineItemsHtml.appendChild(lineItemHtml);

            lineItemHtml.querySelector('.btn-add').addEventListener('click', () => {
                lineItem.updateLineItemQuantity(lineItem.quantity + 1);
                this.renderToHtml()
            });

            lineItemHtml.querySelector('.btn-remove').addEventListener('click', () => {
                lineItem.updateLineItemQuantity(lineItem.quantity - 1);
                if(lineItem.quantity <= 0) {
                    this.removeLineItem(lineItem);
                }
                this.renderToHtml()
            });
        })
        if(this.getTotal() > 0) {
            this.htmlElement.querySelector('.commande').classList.remove('cursor-not-allowed');
            this.htmlElement.querySelector('.commande').classList.remove('opacity-70');
        } else {
            this.htmlElement.querySelector('.commande').classList.add('cursor-not-allowed');
            this.htmlElement.querySelector('.commande').classList.add('opacity-70');
        }
        this.totalPriceHtml.textContent = '$' + this.getTotal();
    }


    removeLineItem(lineItem) {
        const index = this.lineItems.indexOf(lineItem);
        if (lineItem.quantity === 0) {
            this.lineItems.splice(index, 1);
        }
    }
} 
