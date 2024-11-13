'use client'
import { useEffect, useState } from 'react'
import styles from './FilterBlock.module.scss'
import { useHeroes } from '../HeroesApi/HeroesApi'
import { HeroesList } from './components/HeroesList/HeroesList'
import { Typography } from '@/UI/Typography/Typography'

export const FilterBlock = () => {
  const { Heroes, heroesRequest } = useHeroes()
  const [filteredHeroes, setFilteredHeroes] = useState([])
  const [selectedClass, setSelectedClass] = useState(null)

  console.log(Heroes)

  useEffect(() => {
    heroesRequest()
  }, [heroesRequest])

  useEffect(() => {
    if (selectedClass) {
      const filtered = Heroes.filter(
        // по скольку у нас фильтрация идёт по классу героя, то нужен соответствующий ключ
        // из базы данных у нас он назван class_description
        (hero) => hero.class_description === selectedClass,
      )
      setFilteredHeroes(filtered)
    } else {
      setFilteredHeroes(Heroes)
    }
  }, [Heroes, selectedClass])

  const handleClassClick = (class_description) => {
    setSelectedClass(class_description)
  }

  return (
    <section>
      <section className={styles.filterImage}>
        <Typography variant='h1' className={styles.pageTitle}>
          HEROES
        </Typography>
        <div className={styles.filterFrame}>
          <Typography
            variant='button'
            onClick={() => handleClassClick(null)}
            className={styles.allHeroesBtn}
          >
            ALL
          </Typography>
          <Typography
            variant='button'
            onClick={() => handleClassClick('Tank')}
            className={styles.tankClass}
          >
            Tank
          </Typography>
          <Typography
            variant='button'
            onClick={() => handleClassClick('Damage')}
            className={styles.damageClass}
          >
            Damage
          </Typography>
          <Typography
            variant='button'
            onClick={() => handleClassClick('Support')}
            className={styles.supportClass}
          >
            Support
          </Typography>
        </div>
        <Typography variant='p' className={styles.description}>
          In Overwatch, you find a variety of colorful heroes from different
          countries, each with their own story!
        </Typography>
      </section>
      <div className={styles.heroesSection}>
        <HeroesList heroes={filteredHeroes} />
      </div>
    </section>
  )
}
