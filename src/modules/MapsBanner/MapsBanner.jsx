import { Typography } from '@/UI/Typography/Typography'
import styles from './MapsBanner.module.scss'
import Image from 'next/image'
import { useMapBanner } from './MapsBannerApi/MapsBannerApi'
import { useEffect } from 'react'
import { GameModsSlider } from './components/GameModsSlider/GameModsSlider'
import { MapsCategory } from './components/MapsCategory/MapsCategory'

export const MapsBanner = () => {
  const { bannerData, bannerRequest } = useMapBanner()

  useEffect(() => {
    bannerRequest()
  }, [bannerRequest])

  return (
    <main>
      {bannerData.map((item) => (
        <section className={styles.bannerSection} key={item.id}>
          <div className={styles.gradient} />
          <Image
            src={item.banner}
            alt='banner'
            width={905}
            height={515}
            className={styles.bannerImg}
          />
          <Typography variant='p' className={styles.bannerDescription}>
            {item.banner_description}
          </Typography>
        </section>
      ))}

      <GameModsSlider />
      <MapsCategory />
    </main>
  )
}
