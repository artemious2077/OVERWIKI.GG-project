'use client'
import { SpecificHero } from '@/modules/SpecificHero/SpecificHero'
import styles from './hero.module.scss'

export const Hero = () => {
  return (
    <main className={styles.heroPage}>
      <SpecificHero />
    </main>
  )
}

export default Hero
