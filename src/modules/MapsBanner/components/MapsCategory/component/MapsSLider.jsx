'use client'
import Image from 'next/image'
import styles from './MapsSlider.module.scss'
import leftArrow from '@/app/assets/icons/sortLeft.svg'
import rightArrow from '@/app/assets/icons/sortRight.svg'
import { Typography } from '@/UI/Typography/Typography'

export const MapsSlider = ({ mapSlides }) => {
  return (
    <section>
      {mapSlides.maps_category.map((item) => (
        <div key={item.id} className={styles.sideSection}>
          <Typography variant='p'>{item.game_mode_title}</Typography>
          <div className={styles.leftSlideBtn} onClick={''}>
            <Image src={leftArrow} alt='arrow' width={30} height={30} />
          </div>
          <div className={styles.embla}>
            <div
              className={styles.embla__viewport}
              // ref={''}
            >
              <div className={styles.embla__container}>
                {item.maps.map((mapData, index) => (
                  <div
                    key={mapData.id}
                    className={`${styles.embla__slide} ${
                      index === mapSlides.maps_category.length - 1
                        ? styles.embla__slide__last
                        : ''
                    }`}
                  >
                    <div className={styles.embla__slide}>
                      <Image
                        src={mapData.img_url}
                        alt='map'
                        width={490}
                        height={265}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.rightSlideBtn} onClick={''}>
            <Image src={rightArrow} alt='arrow' width={30} height={30} />
          </div>
        </div>
      ))}
    </section>
  )
}
