'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Produit.module.css';

export default function Produit({produit}) {
    const [estVisible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!estVisible);
    }
    
    return <div className={styles.produit}>
        <div className={styles.header} onClick={handleClick}>
            <Image src={produit.image} alt={produit.nom} width={32} height={32} />
            <div>{produit.nom}</div>
        </div>

        {estVisible &&
            <p>{produit.description}</p>
        }
        
        <Link href={`/produits/${produit.slug}`}>Plus d&apos;info</Link>
    </div>
}