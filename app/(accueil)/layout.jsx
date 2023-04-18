import Footer from '@/components/Footer'

// npm i normalize.css
import 'normalize.css/normalize.css'
import '../globals.css'
import styles from './layout.module.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={styles.body}>
                <main className={styles.main}>
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    )
}
