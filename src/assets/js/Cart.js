import LineItem from "./LineItem.js"

export default class Cart{
    constructor(){
        /**
         * @type {LineItem[]}
        */
        this.lineItems = [];
        /**
         * @type {number}
        */
        this.total = 0;
        /**
         * @type {HTMLElement}
        */
        this.htmlElement = document.getElementById('cart');
        /**
         * @type {HTMLElement}
        */
        this.lineItemsHtml = this.htmlElement.querySelector('.line-items-container');
        /**
         * @type {HTMLElement}
        */
        this.totalPriceHtml = this.htmlElement.querySelector('.total-price');

        //Si l'un des éléments HTML n'est pas bien sélectionné, on lance une erreur personnalisée dans la console
        if(!this.htmlElement || !this.lineItemsHtml || !this.totalPriceHtml){
            throw new Error ('Impossible de trouver l\'élément html de la class Cart')
        }
    }


    //Méthode pour calculer le total du panier. On définit le total à 0, pour tous les lineItems dans le cart, on incrémente le total et on retourne un nombre arrondi à deux chiffre après la virgule en s'assurant que c'est bien un nombre grâce à la méthode parseFloat.
    /**
     * @returns {number}
     */
    getTotal() {
        let total = 0;

        for(let lineItem of this.lineItems){
            total += lineItem.total;
        }
        return parseFloat(total.toFixed(2));
    }

    //Méthode qui boucle à travers le panier (tous les lineItems), définit une variable qui correspond au lineItem à l'index de i, et compare l'id du product du lineItem avec le id du product passé en paramètre.
    /**
     * @param {Product} product
     * @returns {LineItem | undefined}
     */
    findLineItem(product) {
        for (let i = 0; i < this.lineItems.length; i++) {
            let lineItem = this.lineItems[i];
            if (lineItem.product.id === product.id) {
                return lineItem;
            }
        }
    }


    // Méthode qui ajoute un produit au panier ou met à jour la quantité si le produit est déjà dans le panier. Si le produit existe déjà dans le panier, la quantité est augmentée de 1. Sinon, un nouveau lineItem est créé et ajouté au panier. La méthode appelle ensuite renderToHtml() pour gérer l'affichage du panier.
    /**
     * @param {Product} product
     * @returns {void}
     */
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

    //Méthode qui met à jour l'affichage du panier. D'abord, on le vide, puis pour chaque lineItem stocké dans le tableau, on l'affiche et on le fait apparaitre au bon endroit.
    //Dans cette méthode, on ajoute aussi les fonctionnalités aux boutons + et - de chaque lineItem. Si la quantité d'un produit atteint le 0 dans le cart, le lineItem est supprimé grâce à la méthode removeLineItem.
    //On change le style du bouton selon le contenu du panier. Si le panier est vide, on empêche le clic sur le bouton commander.
    //On affiche le bon total dans le HTMLElement p.
    /**
     * @returns {void}
     */
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

    //Méthode qui supprime le LineItem du Cart si sa quantité associée est de 0.
    /**
     * @param {LineItem} lineItem 
     * @returns {void}
     */
    removeLineItem(lineItem) {
        const index = this.lineItems.indexOf(lineItem);
        if (lineItem.quantity === 0) {
            this.lineItems.splice(index, 1);
        }
    }
} 
