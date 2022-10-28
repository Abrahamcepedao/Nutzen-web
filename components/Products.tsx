import type { NextPage } from 'next'
import React, { useState } from 'react'

/* CSS */
import styles from '../styles/components/Products.module.css'

/* Images */
import Image from 'next/image'
import PBNatural from '../public/img/landing/pb_natural.png'
import PBSinAzucar from '../public/img/landing/pb_sinazucar.png'
import Natural1 from '../public/img/landing/natural1.png'
import Natural2 from '../public/img/landing/natural2.png'
import SinAzucar1 from '../public/img/landing/sinazucar1.png'
import SinAzucar2 from '../public/img/landing/sinazucar2.png'

/* Material UI - icons */
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

const Products: NextPage = () => {
    const [originalSize, setOriginalSize] = useState("0");
    const [sinazucarSize, sinAzucarSize] = useState("1");
    
    return (
        <div className={styles.products__container} id="productos">
          <h2>Descubre nuestros productos</h2>
          <div className={styles.product__container1}>
            {/* top */}
            <div className={styles.product__top}>
                <div className={styles.product__img}>
                    <Image src={PBNatural} alt=""/>
                </div>
                <div className={styles.product__info1}>
                    <h3>ORIGINAL</h3>
                    <h5>Ingredientes</h5>
                    <p>CACAHUATE Y MIEL DE AGAVE</p>
                    <div className={styles.product__quote}>
                        <p>¡Crema de cacahuate natural perfecta para deportistas que buscan mantener una vida sana!</p>
                    </div>
                    <div className={styles.product__picker1}>
                        <h6>Tamaño:</h6>
                        <select name="" id="" value={originalSize} onChange={(e) => {setOriginalSize(e.target.value)}}>
                            <option value="0">200gr</option>
                            <option value="1">300gr</option>
                        </select>
                        <p>${originalSize == "0" ? "105" : "145"}</p>
                    </div>
                </div>
            </div>
            {/* bottom */}
            <div className={styles.product__bottom}>
                <div className={styles.product__fact}>
                    <div className={styles.product__fact__img}>
                        <Image src={Natural1} alt=""/>
                    </div>
                    <h4>Alto contenido en proteína</h4>
                </div>
                <div className={styles.product__fact}>
                    <div className={styles.product__fact__img}>
                        <Image src={Natural2} alt=""/>
                    </div>
                    <h4>Alto contenido en antioxidantes</h4>
                </div>
                <div className={styles.product__fact}>
                    <div className={styles.product__fact__img}>
                        <Image src={Natural1} alt=""/>
                    </div>
                    <h4>Alto contenido en proteína</h4>
                </div>
                <div className={styles.product__fact}>
                    <div className={styles.product__fact__img}>
                        <Image src={Natural2} alt=""/>
                    </div>
                    <h4>Alto contenido en antioxidantes</h4>
                </div>
                <div className={styles.product__fact}>
                    <div className={styles.product__fact__img}>
                        <Image src={Natural1} alt=""/>
                    </div>
                    <h4>Alto contenido en proteína</h4>
                </div>
                <div className={styles.product__fact}>
                    <div className={styles.product__fact__img}>
                        <Image src={Natural2} alt=""/>
                    </div>
                    <h4>Alto contenido en antioxidantes</h4>
                </div>
            </div>
          </div>

          <div className={styles.product__container2}>
            {/* top */}
            <div className={styles.product__top}>
                <div className={styles.product__img}>
                    <Image src={PBSinAzucar} alt=""/>
                </div>
                <div className={styles.product__info2}>
                    <h3>SIN AZUCAR</h3>
                    <h5>Ingredientes</h5>
                    <p>CACAHUATE</p>
                    <div className={styles.product__quote}>
                        <p>¡Crema de cacahuate natural perfecta para deportistas que buscan mantener una vida sana!</p>
                    </div>
                    <div className={styles.product__picker2}>
                        <h6>Tamaño:</h6>
                        <select name="" id="" value={originalSize} onChange={(e) => {setOriginalSize(e.target.value)}}>
                            <option value="0">200gr</option>
                            <option value="1">300gr</option>
                        </select>
                        <p>${originalSize == "0" ? "105" : "145"}</p>
                    </div>
                </div>
            </div>
            {/* bottom */}
            <div className={styles.product__bottom}>
                <div className={styles.product__fact2}>
                    <div className={styles.product__fact__img}>
                        <Image src={SinAzucar1} alt=""/>
                    </div>
                    <h4>Alto contenido en proteína</h4>
                </div>
                <div className={styles.product__fact2}>
                    <div className={styles.product__fact__img}>
                        <Image src={SinAzucar2} alt=""/>
                    </div>
                    <h4>Alto contenido en antioxidantes</h4>
                </div>
                <div className={styles.product__fact2}>
                    <div className={styles.product__fact__img}>
                        <Image src={SinAzucar1} alt=""/>
                    </div>
                    <h4>Alto contenido en proteína</h4>
                </div>
                <div className={styles.product__fact2}>
                    <div className={styles.product__fact__img}>
                        <Image src={SinAzucar2} alt=""/>
                    </div>
                    <h4>Alto contenido en antioxidantes</h4>
                </div>
                <div className={styles.product__fact2}>
                    <div className={styles.product__fact__img}>
                        <Image src={SinAzucar1} alt=""/>
                    </div>
                    <h4>Alto contenido en proteína</h4>
                </div>
                <div className={styles.product__fact2}>
                    <div className={styles.product__fact__img}>
                        <Image src={SinAzucar2} alt=""/>
                    </div>
                    <h4>Alto contenido en antioxidantes</h4>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Products