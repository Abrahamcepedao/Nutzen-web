import type { NextPage } from 'next'
import Link from 'next/link'
/* CSS */
import styles from '../styles/components/Recetas.module.css'

/* Images */
import Image from 'next/image'
import Wave from '../public/img/landing/wave2.svg'

const Products: NextPage = () => {
    return (
        <div className={styles.recetas}>
            {/* wave */}
            <div className={styles.waves__container1}>
                <Image className={styles.wave1} src={Wave} alt=""/>
            </div>
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
            <div className={styles.waves__container2}>
                <Image className={styles.wave2} src={Wave} alt=""/>
            </div>
          
        </div>
    )
}

export default Products