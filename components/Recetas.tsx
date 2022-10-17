import type { NextPage } from 'next'
import Link from 'next/link'
/* CSS */
import styles from '../styles/components/Recetas.module.css'


const Products: NextPage = () => {
    return (
        <div className={styles.recetas}>
            <div className={styles.recetas__container}>
                <div className={styles.recetas__overlay}>
                    <div>
                        <h2>Disfruta de nuestras recetas</h2>
                        <Link href={"/recetas"}>
                            <button className={styles.recetas__btn}>Explorar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products