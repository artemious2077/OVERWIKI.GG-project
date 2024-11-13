'use client'
import styles from './MapsSlider.module.scss'
import { Typography } from '@/UI/Typography/Typography'
import { CategorySlide } from './SliderComponent/CategorySlide'

export const MapsSlider = ({ mapSlides }) => {
  return (
    <section className={styles.slideSection}>
      {mapSlides.maps_category.map((item) => (
        <div key={item.id}>
          <Typography variant='p' className={styles.gameModeTitle}>
            {item.game_mode_title}
          </Typography>
          <CategorySlide categorySlides={item} />
        </div>
      ))}
    </section>
  )
}
