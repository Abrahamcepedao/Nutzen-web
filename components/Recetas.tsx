import type { NextPage } from 'next'

/* CSS */
import styles from '../styles/components/Products.module.css'

/* Images */
import Image from 'next/image'


const Products: NextPage = () => {
    
    
    return (
        <div className={styles.recetas}>
            <div className={styles.recetas__container}>
                <div>
                    <h2>Disfruta de nuestras recetas</h2>
                    <button>Explorar</button>
                </div>
            </div>
          
          
        </div>
    )
}

export default Products