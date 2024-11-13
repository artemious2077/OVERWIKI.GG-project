'use client'
import { useSearchParams } from 'next/navigation'
import styles from './SpecificHero.module.scss'
import { useEffect } from 'react'
import Image from 'next/image'
import { Characteristic } from './components/Characteristic/Characteristic'
import { AbilityVideo } from './components/AbilityVideo/AbilityVideo'
import { Plot } from './components/Plot/Plot'
import { ParallaxSection } from './components/ParallaxSection/ParallaxSection'
import { GradientContacts } from './components/GradientContacts/GradientContacts'
import { OtherHeroes } from './components/OtherHeroes/OtherHeroes'
import { useHeroes } from '../Heroes/components/HeroesApi/HeroesApi'
import { HeroLoader } from './components/HeroLoader/HeroLoader'
import { Typography } from '@/UI/Typography/Typography'

export const SpecificHero = () => {
  const searchId = useSearchParams()
  const id = searchId.get('id')
  const { Heroes, heroesRequest } = useHeroes()

  useEffect(() => {
    if (Heroes.length === 0) {
      // Запрос загрузки героев, если они еще не загружены
      heroesRequest().catch((error) => {
        // Вывод сообщение об ошибке на странице
        console.error(error)
      })
    } else {
      console.log(Heroes)
    }
  }, [Heroes, heroesRequest])

  const hero = Heroes.find((specificHero) => specificHero.id === Number(id))

  if (!hero) return <HeroLoader />

  return (
    <section className={styles.specificHeroPage}>
      <div className={styles.heroBg}>
        <Image
          src={hero.hero_bg}
          alt='hero background'
          width={1920}
          height={64}
          className={styles.heroBgImage}
          loading='eager'
        />
        <div className={styles.BgDescription}>
          <Typography variant='h1' className={styles.heroName}>
            {hero.name}
          </Typography>
          <Typography variant='p' className={styles.heroBiography}>
            {hero.short_description}
          </Typography>
          <Characteristic heroProp={hero} />
        </div>
      </div>
      <AbilityVideo video={hero} />
      <Plot plotProps={hero} />
      <OtherHeroes otherHeroesProp={hero} />
      <ParallaxSection />
      <GradientContacts />
    </section>
  )
}
