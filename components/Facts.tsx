import type { NextPage } from 'next'

/* CSS */
import styles from '../styles/components/Facts.module.css'

/* Images */
import Image from 'next/image'
import Fact1 from '../public/img/landing/fact1.png'
import Fact2 from '../public/img/landing/fact2.png'
import Fact3 from '../public/img/landing/fact3.png'

const Facts: NextPage = () => {
    
    
    return (
        <div className={styles.facts__container}>
          <h2>Lo especial de nuestra crema de cacahuate</h2>
          <div className={styles.facts__inner__container}>
            <div className={styles.fact__item1}>
                {/* Image */}
                <div className={styles.fact__img__container}>
                  <Image className={styles.fact__img} src={Fact1} alt=""/>
                </div>
                {/* Text */}
                <h3>SIN ESTABILIZADORES NI CONSERVADORES</h3>
            </div>
            <div className={styles.fact__item2}>
                {/* Image */}
                <div className={styles.fact__img__container}>
                  <Image className={styles.fact__img} src={Fact2} alt=""/>
                </div>
                {/* Text */}
                <h3>INGREDIENTES NATURALES</h3>
            </div>
            <div className={styles.fact__item3}>
                {/* Image */}
                <div className={styles.fact__img__container}>
                  <Image className={styles.fact__img} src={Fact3} alt=""/>
                </div>
                {/* Text */}
                <h3>GRASA SALUDABLE</h3>
            </div>

          </div>
        </div>
    )
}

export default Facts