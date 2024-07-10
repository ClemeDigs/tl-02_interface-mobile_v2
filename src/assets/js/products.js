import Product from "./Product.js";

import imgBarre from '../img/barre-chocolatee.png';
import imgCookie from '../img/cookies.png';
import imgBiscottis from '../img/biscottis.png';
import imgBiscuits from '../img/biscuits-fourres.png';
import imgPalets from '../img/palets-bretons.png';
import imgMacarons from '../img/macarons.png';
import imgChocolats from '../img/chocolats.png';
import imgTarte from '../img/tarte-citron.png';
import imgCroissant from '../img/croissant.png';


//On définit un tableau de Product, on leur attribue toutes les valeurs des propriétés demandées.
/**
 * @type {Product[]}
*/
const products = [
    new Product(
        imgBarre,
        'Barre chocolatée',
        'Barre chocolatée garnie de nougat et caramel maison',
        4.99,
        'barre',
        'Une barre chocolatée gourmande et saine, idéale pour les amateurs de nature et de loisirs créatifs. Parfait mélange de saveurs et de nutriments pour une énergie durable tout au long de la journée.',
        'Chocolat noir, Amandes, Miel, Flocons d\'avoine, Baies de goji, Graines de chia, Beurre d\'amande',
        'barre-detail'
    ),
    new Product(
        imgCookie,
        'Cookies',
        'Boite de 6 délicieux cookies aux pépites de chocolat',
        17.99,
        'cookie',
        'Une boite de 6 cookies moelleux et généreux en pépites de chocolat, parfaits pour une pause gourmande. Leur texture fondante et leur goût intense de chocolat raviront les amateurs de douceurs.',
        'Farine, Beurre, Sucre brun, Sucre blanc, Œufs, Extrait de vanille, Pépites de chocolat, Bicarbonate de soude, Sel',
        'cookie-detail'
    ),
    new Product(
        imgBiscottis,
        'Biscottis',
        'Sachet de 12 biscottis aux noix et fruits confits',
        14.99,
        'biscottis',
        'Un sachet de 12 biscottis croquants, garnis de noix et de fruits confits, parfaits pour accompagner un café ou un thé. Ces biscuits italiens allient une texture croquante à des saveurs riches et variées.',
        'Farine, Sucre, Œufs, Amandes, Noisettes, Fruits confits (oranges, citrons), Levure chimique, Sel, Extrait de vanille',
        'biscottis-detail'
    ),
    new Product(
        imgBiscuits,
        'Biscuits fourrés',
        'Assortiment de biscuits fourrés au chocolat et caramel maison',
        19.99,
        'biscuits',
        'Un assortiment de biscuits fourrés au chocolat et caramel maison, combinant des saveurs riches et décadentes. Parfaits pour une touche de luxe dans vos moments de gourmandise.',
        'Farine, Beurre, Sucre, Œufs, Chocolat noir, Crème fraîche, Sucre pour le caramel, Sel',
        'biscuits-details'
    ),
    new Product(
        imgPalets,
        'Palets Bretons',
        'Boite de palets bretons pur beurre au sel de Guérande',
        12.99,
        'palets',
        'Une boite de palets bretons pur beurre, relevés d\'une pointe de sel de Guérande, pour une expérience gourmande et authentique. Ces biscuits bretons sont parfaits pour accompagner un café ou pour une pause gourmande.',
        'Farine, Beurre salé, Sucre, Œufs, Levure chimique, Sel de Guérande',
        'palets-detail'
    ),
    new Product(
        imgMacarons,
        'Macarons',
        'Boite de 6 macarons aux saveurs variées',
        19.99,
        'macarons',
        'Une boite de 6 macarons délicats et colorés, déclinés en différentes saveurs pour un plaisir raffiné. Leur coque croquante et leur garniture fondante raviront les amateurs de pâtisserie française.',
        'Poudre d\'amandes, Sucre glace, Blancs d\'œufs, Sucre en poudre, Colorants alimentaires, Crème fraîche pour les garnitures, Arômes variés (fruits, chocolat, café, etc.)',
        'macarons-detail'
    ),
    new Product(
        imgChocolats,
        'Chocolats',
        'Boite de 9 chocolats belges au praliné',
        23.99,
        'chocolats',
        'Une boite de 9 chocolats belges au praliné, alliant la finesse du chocolat belge à la douceur du praliné. Ces chocolats sont parfaits pour une dégustation gourmande ou pour offrir.',
        'Chocolat noir, Chocolat au lait, Noisettes, Sucre, Crème fraîche, Beurre, Extrait de vanille',
        'chocolats-detail'
    ),
    new Product(
        imgTarte,
        'Tarte au citron',
        'Délicieuse tarte au citron meringuée',
        5.99,
        'tarte',
        'Une délicieuse tarte au citron meringuée, alliant une pâte croustillante, une crème citronnée acidulée et une meringue fondante. Un dessert frais et léger, parfait pour conclure un repas en beauté.',
        'Farine, Beurre, Sucre, Œufs, Citrons, Sucre pour la meringue, Sel',
        'tarte-detail'
    ),
    new Product(
        imgCroissant,
        'Croissant',
        'Croissant pur beurre au beurre des charentes',
        2.99,
        'croissant',
        'Un croissant pur beurre, réalisé avec du beurre des Charentes, offrant une texture feuilletée et une saveur riche. Parfait pour un petit déjeuner gourmand ou une pause café.',
        'Farine, Beurre des Charentes, Sucre, Sel, Levure de boulanger, Lait, Œufs',
        'croissant-detail'
    ),
];

export default products;