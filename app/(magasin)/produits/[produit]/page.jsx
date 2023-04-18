import Image from "next/image";
import Link from "next/link";
import { getProduit, getProduits } from "@/model/produits"

export async function generateStaticParams() {
    let produits = await getProduits();
    return produits.map((produit) => ({ produit: produit.slug }));
}

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata({ params }) {
    let produit = await getProduit(params.produit);

    return {
        title: `${produit.nom} - Magasin fantastique`,
        description: produit.description,
        openGraph: {
            title: `${produit.nom} - Magasin fantastique`,
            description: produit.description,
            images: produit.image
        }
    }
}

export default async function Produit({ params }) {
    let produit = await getProduit(params.produit);

    return produit &&
        <>
            <h1>{produit.nom}</h1>
            <Image src={produit.image} alt={produit.nom} width={32} height={32} />
            <p>{produit.description}</p>
            <Link href="/produits">Retour</Link>
        </>
}