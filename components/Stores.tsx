import type { NextPage } from 'next'
import Link from 'next/link'
/* CSS */
import styles from '../styles/components/Stores.module.css'

/* Images */
import Image from 'next/image'
import Tienda1 from '../public/img/landing/stores/yaaxtal.png'
import Tienda2 from '../public/img/landing/stores/super.png'
import Tienda3 from '../public/img/landing/stores/vps.svg'

const Stores: NextPage = () => {
    return (
        <div className={styles.stores} id="tiendas">
            <h5>Tiendas</h5>
            <h3>¿Dónde nos encontramos?</h3>
            <div className={styles.stores__container}>
                <Link href={"https://www.instagram.com/yaaxtal/"}>
                    <div className={styles.store__img__container}>
                        <Image className={styles.store__img} src={Tienda1} alt=""/>
                    </div>
                </Link>
                <Link href={"https://www.instagram.com/superatupuerta/?utm_medium=copy_link"}>
                    <div className={styles.store__img__container}>
                        <Image className={styles.store__img} src={Tienda2} alt=""/>
                    </div>
                </Link>
                <Link href={"https://www.instagram.com/vps.supp.store/?utm_medium=copy_link"}>
                    <div className={styles.store__img__container}>
                        <Image className={styles.store__img} src={Tienda3} alt=""/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Stores