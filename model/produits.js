import {readFile} from 'fs/promises'
import { join } from 'path';

/**
 * @typedef Produit
 * @type {object}
 * @property {string} slug
 * @property {string} nom
 * @property {string} description
 * @property {string} image
 */

/**
 * @type {Array<Produit>}
 */
let produits = null;

const loadProduits = async () => {
    let dataProduits = await readFile(join(process.cwd(), 'model/produits.json'));
    produits = JSON.parse(dataProduits);
}

export const getProduits = async () => {
    if(!produits) {
        await loadProduits();
    }

    return produits;
}

export const getProduit = async (slug) => {
    if(!produits) {
        await loadProduits();
    }

    for(let produit of produits) {
        if(produit.slug === slug) {
            return produit;
        }
    }

    return null;
}
