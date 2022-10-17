import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

/* CSS */
import styles from '../styles/Recetas.module.css'

/* Components */
import Header from '../components/Header'
import Footer from '../components/Footer'

/* Framer Motion */
import { motion, AnimatePresence } from "framer-motion";

/* Data */
import { recipes } from '../data/recipes'

const Home: NextPage = () => {
    const [filter, setFilter] = useState('all')
    const [filteredRecipes, setFilteredRecipes] = useState(recipes)

    useEffect(() => {
        if (filter === 'all') {
            setFilteredRecipes(recipes)
        } else {
            setFilteredRecipes(recipes.filter(recipe => recipe.type === filter))
        }
    }, [filter])


    const handleFilterChange = (value: string) => {
        if (value === 'all') {
            setFilter('all')
            setFilteredRecipes(recipes);
        } else {
            let data = recipes.filter(recipe => recipe.type === value)
            setFilter(value)
            setFilteredRecipes(data)
        }
    }
    

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Header */}
        <Header />

        {/* landing */}

        {/* background image */}
        <div className={styles.title__container}>
            <h1 className={styles.title}>Prueba nuestras deliciosas recetas</h1>
        </div>

        {/* Filters */}
        <div className={styles.filters__container}>
            <div className={styles.filters__inner__container}>
                <div className={styles.filter__item} style={{background: filter === "all" ? "#C65E4D" : "#fffdf5", color: filter === "all" ? "#fffdf5" : "#383434"}} onClick={() => {handleFilterChange("all")}}>
                    <p>Todas</p>
                </div>
                <div className={styles.filter__item} style={{background: filter === "Desayunos" ? "#C65E4D" : "#fffdf5", color: filter === "Desayunos" ? "#fffdf5" : "#383434"}} onClick={() => {handleFilterChange("Desayunos")}}>
                    <p>Saladas</p>
                </div>
                <div className={styles.filter__item2} style={{background: filter === "Snacks" ? "#C65E4D" : "#fffdf5", color: filter === "Snacks" ? "#fffdf5" : "#383434"}} onClick={() => {handleFilterChange("Snacks")}}>
                    <p>Dulces</p>
                </div>
            </div>
        </div>

        <div className={styles.recetas__container}>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    key={filter ? filter : "empty"}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {filteredRecipes.length > 0 ? (
                        <div className={styles.recetas__inner__container}>
                            {filteredRecipes.map(recipe => (
                                <div key={recipe.id} className={styles.receta__container}>
                                    <div className={styles.receta__img} style={{backgroundImage: `url(/img/recipes/${recipe.img})`}}></div>
                                    <h4>{recipe.title}</h4>
                                    <Link href={`/receta/${recipe.id}`}>
                                        <button>Ver receta</button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>No hay recetas</>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>

        {/* Footer */}
        <Footer />

      </main>
    </div>
  )
}

export default Home
