'use client'
import { SpecificHero } from '@/modules/SpecificHero/SpecificHero'
import styles from './hero.module.scss'
import { UnderBanner } from '@/UI/components/UnderBanner/UnderBanner'

export const Hero = () => {
  return (
    <section className={styles.heroPage}>
      <SpecificHero />
    </section>
  )
}

export default Hero
