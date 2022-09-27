import type { NextPage } from 'next'
import Link from 'next/link'
/* CSS */
import styles from '../styles/components/Footer.module.css'

/* Images */
import Image from 'next/image'
import Logo from '../public/img/landing/nutzen_logo.png'
import Wave from '../public/img/landing/wave2.svg'

/* Material UI - icons */
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

/* Fontawesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Stores: NextPage = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.wave__container}>
                <Image src={Wave} className={styles.wave} alt=""/>
            </div>
            <div className={styles.footer__info}>
                <div className={styles.footer__logo}>
                    <Image src={Logo} alt="Nutzen"/>
                </div>
                <div className={styles.footer__contact}>
                    <div>
                        <LocalPhoneRoundedIcon className={styles.footer__icon}/>
                        <p>(999) 908 8092</p>
                    </div>
                    <div>
                        <EmailRoundedIcon className={styles.footer__icon}/>
                        <p>quieronutzen@nutzen.mx</p>
                    </div>
                </div>
                <div className={styles.footer__socials}>
                    <a href="https://www.instagram.com/nutzenmx/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className={styles.icon}/>
                    </a>
                    <a href="https://www.facebook.com/nutzenmx/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} className={styles.icon}/>
                    </a>
                    <br/>
                    <Link href={"/recetas"}>
                        <button className={styles.footer__btn}>Ver recetas</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Stores