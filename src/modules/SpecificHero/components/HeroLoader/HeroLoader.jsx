import Image from 'next/image'
import styles from './HeroLoader.module.scss'
import { useHeroLoader } from './HeroesLoaderApi/HeroesLoaderApi'
import { useEffect } from 'react'

export const HeroLoader = () => {
  const { heroLoader, heroLoaderRequest } = useHeroLoader()

  useEffect(() => {
    heroLoaderRequest()
  }, [heroLoaderRequest])

  return (
    <section className={styles.loaderBg}>
      {heroLoader.map((item) => (
        <Image
          key={item.id}
          src={item.loader}
          alt='gif loader'
          width={item.width}
          height={item.height}
          loading='eager'
        />
      ))}
    </section>
  )
}
