import Link from 'next/link'
import Image from 'next/image'

import styles from './page.module.css'

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: 'Accueil - Magasin fantastique',
    description: 'Bienvenue sur notre magasin fantastique.',
    openGraph: {
        title: 'Accueil - Magasin fantastique',
        description: 'Bienvenue sur notre magasin fantastique.',
        images: '/img/logo.png'
    }
}

export default function Home() {
    return <div className={styles.annonce}>
        <h1>Magasin fantastique</h1>
        <p>
            Bienvenue dans notre magasin fantastique! Vous y trouverez de l&apos;équipements et des objets utilent pour toutes vos aventures.
        </p>
        <Link href="/produits">Voir nos produits</Link>
    </div>
}
