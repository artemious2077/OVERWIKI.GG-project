'use client'
import { SpecificHero } from '@/modules/SpecificHero/SpecificHero'
import styles from './hero.module.scss'
import { UnderBanner } from '@/UI/components/UnderBanner/UnderBanner'

export const Hero = () => {
  return (
    <main className={styles.heroPage}>
      <SpecificHero />
    </main>
  )
}

export default Hero
