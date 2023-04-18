import Image from "next/image";
import Link from "next/link";

import styles from './Header.module.css'

import logo from '@/public/img/logo.png'

export default function Header() {
    return <header className={styles.header}>
        <Link href="/">
            <Image src={logo} alt="Logo" />
            <div>Magasin fantastique</div>
        </Link>
    </header>
}