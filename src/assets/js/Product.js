//On définit la class Product qui représente un produit.
export default class Product {
    /**
     * @param {string} img
     * @param {string} title
     * @param {string} desc
     * @param {number} price
     * @param {string} id
     * @param {string} longDesc
     * @param {string} ingredients
     * @param {string} idDetail
     */
    constructor(img, title, desc, price, id, longDesc, ingredients, idDetail) {
        /**
         * @type {string}
        */
        this.img = img;
        /**
         * @type {string}
        */
        this.title = title;
        /**
         * @type {string}
        */
        this.desc = desc;
        /**
         * @type {number}
        */
        this.price = price;
        /**
         * @type {string}
        */
        this.id = id;
        /**
         * @type {string}
        */
        this.longDesc = longDesc;
        /**
         * @type {string}
        */
        this.ingredients = ingredients;
        /**
         * @type {string}
        */
        this.idDetail = idDetail;
    }

    /**
     * 
     * @returns {HTMLDivElement}
     */
    //Cette méthode retourne la carte produit de base, qui sera affichée dans le product-container.
    toCardHtml(){
        const cardHtml = document.createElement ('div');
        cardHtml.setAttribute('data-search', this.title)

        const divCardHtml = document.createElement('div');
        const divImg = document.createElement('div');
        const imgHtml = document.createElement('img');
        const titleHtml = document.createElement('h2');
        const descHtml = document.createElement('p');
        const priceHtml = document.createElement('p');
        const divBtns = document.createElement('div');
        const btnAddToCart = document.createElement('button');
        const btnDetail = document.createElement('button');

        cardHtml.id = this.id;

        cardHtml.className = "carte w-full";
        divCardHtml.className = "card min-h-full bg-white rounded-lg p-4 shadow-lg items-center text-center border-2 border-lightOrange flex flex-col justify-end gap-2";
        divImg.className = "p-6 lg:p-10";
        imgHtml.className = "mx-auto mb-4 max-w-[200px] lg:max-w-[250px]";
        titleHtml.className = "text-xl font-bold";
        descHtml.className = 'italic text-sm';
        priceHtml.className = "font-bold text-lg";
        divBtns.className = 'flex flex-col lg:flex-row lg:justify-between w-full gap-3 p-3'
        btnAddToCart.className = 'btn-add-to-cart px-4 py-2 border rounded-full font-bold hover:shadow-lg transition-all duration-300 hover:bg-orange';
        btnDetail.className = 'btn-detail px-4 py-2 border rounded-full font-bold hover:shadow-lg transition-all duration-300 hover:bg-orange';

        imgHtml.setAttribute('src', this.img);
        imgHtml.setAttribute('alt', this.title);
        btnAddToCart.setAttribute('data-dialog', '#cart');
        btnDetail.setAttribute('data-dialog', ('#' + this.idDetail));

        titleHtml.textContent = this.title;
        descHtml.textContent = this.desc;
        priceHtml.textContent = '$' + this.price;
        btnAddToCart.textContent = 'Ajouter au panier';
        btnDetail.textContent = 'En savoir plus';

        cardHtml.appendChild(divCardHtml);
        divCardHtml.appendChild(divImg);
        divImg.appendChild(imgHtml);
        divCardHtml.appendChild(titleHtml);
        divCardHtml.appendChild(descHtml);
        divCardHtml.appendChild(priceHtml);
        divCardHtml.appendChild(divBtns)
        divBtns.appendChild(btnAddToCart);
        divBtns.appendChild(btnDetail);

        return cardHtml;
    }

    /**
     * 
     * @returns {HTMLDivElement}
     */
    //Cette méthode retourne la fiche produit qui s'affichera quand l'utilisateur cliquera sur le bouton en savoir plus. Elle est cachée de base. 
    toDetailHtml(){
        const modaleDetailHtml = document.createElement('div');
        const cardDetailHtml = document.createElement('section');
        const HeaderDetailHtml = document.createElement('header');
        const btnCloseDetail = document.createElement('button');
        const titleDetailHtml = document.createElement('h2');
        const mainDetailHtml = document.createElement('main');
        const imgDetailHtml = document.createElement('img');
        const longDescDetailHtml = document.createElement('p');
        const ingredientsDetailHtml = document.createElement('p');
        const footerDetailHtml = document.createElement('footer');
        const priceDetailHtml = document.createElement('p');

        modaleDetailHtml.id = this.idDetail;

        modaleDetailHtml.className = 'dialog items-center';
        cardDetailHtml.className = 'w-3/4 lg:w-1/2 h-3/4 max-h-3/4 bg-white justify-self-center rounded-lg flex flex-col justify-between';
        HeaderDetailHtml.className = 'flex bg-orange justify-between p-4 items-center rounded-lg';
        btnCloseDetail.className = 'btn-close border rounded-full font-bold text-xl py-2 px-4 transition-all duration-300 hover:shadow-lg hover:bg-darkOrange';
        titleDetailHtml.className = 'text-lg font-bold';
        mainDetailHtml.className = 'flex flex-col items-center gap-4 p-6';
        imgDetailHtml.className = 'w-[200px] lg:w-[250px]';
        ingredientsDetailHtml.className = 'italic';
        footerDetailHtml.className = 'flex bg-orange justify-between p-4 items-center rounded-lg';
        priceDetailHtml.className = 'font-bold text-lg';

        imgDetailHtml.setAttribute('src', this.img);
        imgDetailHtml.setAttribute('alt', this.title);

        btnCloseDetail.textContent = 'X';
        titleDetailHtml.textContent = this.title;
        longDescDetailHtml.textContent = this.longDesc;
        ingredientsDetailHtml.textContent = 'Ingrédients: ' + this.ingredients;
        priceDetailHtml.textContent = '$' + this.price;
        
        modaleDetailHtml.appendChild(cardDetailHtml);
        cardDetailHtml.appendChild(HeaderDetailHtml);
        HeaderDetailHtml.appendChild(titleDetailHtml);
        HeaderDetailHtml.appendChild(btnCloseDetail);
        cardDetailHtml.appendChild(mainDetailHtml);
        mainDetailHtml.appendChild(imgDetailHtml);
        mainDetailHtml.appendChild(longDescDetailHtml);
        mainDetailHtml.appendChild(ingredientsDetailHtml);
        cardDetailHtml.appendChild(footerDetailHtml);
        footerDetailHtml.appendChild(priceDetailHtml);

        return modaleDetailHtml;
    }
}