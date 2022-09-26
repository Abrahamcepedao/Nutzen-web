import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
/* Images */
import Image from 'next/image'
import Waves1 from '../public/img/landing/wave1.svg'
import Logo from '../public/img/landing/nutzen_logo.png'
import Plate1 from '../public/img/landing/nutzen.png'
import Plate2 from '../public/img/landing/nutzen2.png'
import Plate3 from '../public/img/landing/nutzen3.png'


/* CSS */
import styles from '../styles/Home.module.css'

/* Components */
import Header from '../components/Header'
import Facts from '../components/Facts'
import Products from '../components/Products'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Plates */}
        <div className={styles.plate__container1}>
          <Image className={styles.plate1} src={Plate1} alt=""/>
        </div>

        <div className={styles.plate__container2}>
          <Image className={styles.plate2} src={Plate2} alt=""/>
        </div>

        <div className={styles.plate__container3}>
          <Image className={styles.plate3} src={Plate3} alt=""/>
        </div>
        
        {/* Header */}
        <Header />

        {/* landing */}
        {/* wave */}
        <div className={styles.waves__container1}>
          <Image className={styles.wave1} src={Waves1} alt=""/>
        </div>

        {/* background image */}
        <div className={styles.landing__container}>
          <div className={styles.landing__inner__container}>
            <Image className={styles.logo} src={Logo} alt=""/>
            <h1 className={styles.title}>Tu crema de cacahuate en Mérida</h1>
            <Link href="#tiendas">
              <button className={styles.action__btn}>¿Dónde comprar?</button>
            </Link>
          </div>
        </div>

        {/* wave */}
        <div className={styles.waves__container2}>
          <Image className={styles.wave2} src={Waves1} alt=""/>
        </div>

        

        {/* Facts */}
        <Facts />

        {/* Products */}
        <Products />

        
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}

export default Home
