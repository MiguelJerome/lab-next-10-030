import { getProduits } from '@/model/produits'

import styles from './page.module.css'
import Produit from '@/components/Produit';

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: 'Produits - Magasin fantastique',
    description: 'Regarder notre inventaire de produits.',
    openGraph: {
        title: 'Produits - Magasin fantastique',
        description: 'Regarder notre inventaire de produits.',
        images: '/img/logo.png'
    }
}

export default async function Produits() {
    let produits = await getProduits();

    return <ul className={styles.list}>
        {produits.map((produit) => <li key={produit.slug}>
            <Produit produit={produit} />
        </li>)}
    </ul>
}
